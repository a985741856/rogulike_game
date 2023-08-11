
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/commonUi/list.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '313fc+k+jdOLZ3Ltl2uf2kD', 'list');
// scripts/commonUi/list.js

"use strict";

/******************************************
 * @author kL <klk0@qq.com>
 * @date 2019/1/5
 * @doc 列表组件.
 * @end
 ******************************************/
var TemplateType = cc.Enum({
  'NODE': 1,
  'PREFAB': 2
});
var SlideType = cc.Enum({
  'NORMAL': 1,
  //普通
  'ADHERING': 2,
  //粘附模式，将强制关闭滚动惯性
  'PAGE': 3 //页面模式，将强制关闭滚动惯性

});
var SelectedType = cc.Enum({
  'NONE': 0,
  'SINGLE': 1,
  //单选
  'MULT': 2 //多选

});

var listItem = require('listItem');

cc.Class({
  "extends": cc.Component,
  editor: {
    disallowMultiple: false,
    menu: '自定义组件/list',
    requireComponent: cc.ScrollView,
    //脚本生命周期回调的执行优先级。小于 0 的脚本将优先执行，大于 0 的脚本将最后执行。该优先级只对 onLoad, onEnable, start, update 和 lateUpdate 有效，对 onDisable 和 onDestroy 无效。
    executionOrder: -5000
  },
  properties: {
    templateType: {
      "default": TemplateType.NODE,
      type: TemplateType
    },
    tmpNode: {
      "default": null,
      type: cc.Node,
      tooltip: CC_DEV && 'Item模版，type:cc.Node',
      visible: function visible() {
        var bool = this.templateType == TemplateType.NODE;
        if (!bool) this.tmpNode = null;
        return bool;
      }
    },
    tmpPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: CC_DEV && 'Item模版，type:cc.Prefab',
      visible: function visible() {
        var bool = this.templateType == TemplateType.PREFAB;
        if (!bool) this.tmpPrefab = null;
        return bool;
      }
    },
    _slideMode: 1,
    slideMode: {
      type: SlideType,
      tooltip: CC_DEV && '滑动模式',
      get: function get() {
        return this._slideMode;
      },
      set: function set(val) {
        if (val != null) this._slideMode = val;
      }
    },
    pageDistance: {
      "default": .3,
      type: cc.Float,
      range: [0, 1, .1],
      tooltip: CC_DEV && '翻页作用距离',
      slide: true,
      visible: function visible() {
        return this._slideMode == SlideType.PAGE;
      }
    },
    pageChangeEvent: {
      "default": null,
      type: cc.Component.EventHandler,
      tooltip: CC_DEV && '页面改变事件',
      visible: function visible() {
        var bool = this._slideMode == SlideType.PAGE;
        if (!bool) this.pageChangeEvent = null;
        return bool;
      }
    },
    _virtual: true,
    virtual: {
      tooltip: CC_DEV && '是否为虚拟列表（动态列表）',
      get: function get() {
        return this._virtual;
      },
      set: function set(val) {
        if (val != null) this._virtual = val;

        if (!CC_DEV && this._numItems != 0) {
          this._onScrolling();
        }
      }
    },
    cyclic: {
      "default": false,
      tooltip: CC_DEV && '是否为循环列表',
      visible: function visible() {
        var val =
        /*this.virtual &&*/
        this.slideMode == SlideType.NORMAL;
        if (!val) this.cyclic = false;
        return val;
      }
    },
    lackCenter: {
      "default": false,
      tooltip: CC_DEV && 'Item数量不足以填满Content时，是否居中显示Item（不支持Grid布局）',
      visible: function visible() {
        return this.virtual;
      }
    },
    lackSlide: {
      "default": false,
      tooltip: CC_DEV && 'Item数量不足以填满Content时，是否可滑动',
      visible: function visible() {
        var val = this.virtual && !this.lackCenter;
        if (!val) this.lackSlide = false;
        return val;
      }
    },
    _updateRate: 0,
    updateRate: {
      type: cc.Integer,
      range: [0, 6, 1],
      tooltip: CC_DEV && '刷新频率（值越大刷新频率越低、性能越高）',
      slide: true,
      get: function get() {
        return this._updateRate;
      },
      set: function set(val) {
        if (val >= 0 && val <= 6) {
          this._updateRate = val;
        }
      }
    },
    frameByFrameRenderNum: {
      "default": 0,
      type: cc.Integer,
      range: [0, 12, 1],
      tooltip: CC_DEV && '逐帧渲染时，每帧渲染的Item数量（<=0时关闭分帧渲染）',
      slide: true
    },
    renderEvent: {
      "default": null,
      type: Function,
      tooltip: CC_DEV && '渲染事件（渲染器）'
    },
    selectedMode: {
      "default": SelectedType.NONE,
      type: SelectedType,
      tooltip: CC_DEV && '选择模式'
    },
    repeatEventSingle: {
      "default": false,
      tooltip: CC_DEV && '是否重复响应单选事件',
      visible: function visible() {
        return this.selectedMode == SelectedType.SINGLE;
      }
    },
    selectedEvent: {
      "default": null,
      type: Function,
      tooltip: CC_DEV && '触发选择事件',
      visible: function visible() {
        var bool = this.selectedMode > 0;
        if (!bool) this.selectedEvent = null;
        return bool;
      }
    },
    _selectedId: -1,
    selectedId: {
      visible: false,
      get: function get() {
        return this._selectedId;
      },
      set: function set(val) {
        var t = this;
        var item;

        switch (t.selectedMode) {
          case SelectedType.SINGLE:
            {
              if (!t.repeatEventSingle && val == t._selectedId) return;
              item = t.getItemBylistId(val); // if (!item && val >= 0)
              //     return;

              if (t._selectedId >= 0) t._lastSelectedId = t._selectedId;else //如果＜0则取消选择，把_lastSelectedId也置空吧，如果以后有特殊需求再改吧。
                t._lastSelectedId = null;
              t._selectedId = val;
              if (item) item.listItem.selected = true;

              if (t._lastSelectedId >= 0 && t._lastSelectedId != t._selectedId) {
                var lastItem = t.getItemBylistId(t._lastSelectedId);

                if (lastItem) {
                  lastItem.listItem.selected = false;
                }
              }

              if (t.selectedEvent) {
                t.selectedEvent(item, val % this._actualNumItems, t._lastSelectedId == null ? null : t._lastSelectedId % this._actualNumItems); // cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems));
              }

              break;
            }

          case SelectedType.MULT:
            {
              item = t.getItemBylistId(val);
              if (!item) return;
              if (t._selectedId >= 0) t._lastSelectedId = t._selectedId;
              t._selectedId = val;
              var bool = !item.listItem.selected;
              item.listItem.selected = bool;
              var sub = t.multSelected.indexOf(val);

              if (bool && sub < 0) {
                t.multSelected.push(val);
              } else if (!bool && sub >= 0) {
                t.multSelected.splice(sub, 1);
              }

              if (t.selectedEvent) {
                t.selectedEvent(item, val % this._actualNumItems, t._lastSelectedId == null ? null : t._lastSelectedId % this._actualNumItems); // cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems), bool);
              }

              break;
            }
        }
      }
    },
    _numItems: {
      "default": 0,
      serializable: false
    },
    numItems: {
      visible: false,
      get: function get() {
        return this._actualNumItems;
      },
      set: function set(val) {
        var t = this;
        if (!t.checkInited()) return;

        if (val == null || val < 0) {
          cc.error('numItems set the wrong::', val);
          return;
        }

        t._actualNumItems = t._numItems = val;
        t._forceUpdate = true;

        if (t._virtual) {
          t._resizeContent();

          if (t.cyclic) {
            t._numItems = t._cyclicNum * t._numItems;
          }

          t._onScrolling();

          if (!t.frameByFrameRenderNum && t.slideMode == SlideType.PAGE) t.curPageNum = t.nearestlistId;
        } else {
          if (t.cyclic) {
            t._resizeContent();

            t._numItems = t._cyclicNum * t._numItems;
          }

          var layout = t.content.getComponent(cc.Layout);

          if (layout) {
            layout.enabled = true;
          }

          t._delRedundantItem();

          t.firstlistId = 0;

          if (t.frameByFrameRenderNum > 0) {
            //先渲染几个出来
            var len = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum;

            for (var n = 0; n < len; n++) {
              t._createOrUpdateItem2(n);
            }

            if (t.frameByFrameRenderNum < t._numItems) {
              t._updateCounter = t.frameByFrameRenderNum;
              t._updateDone = false;
            }
          } else {
            for (var _n = 0; _n < t._numItems; _n++) {
              t._createOrUpdateItem2(_n);
            }

            t.displayItemNum = t._numItems;
          }
        }
      }
    }
  },
  onLoad: function onLoad() {
    this._init();
  },
  onDestroy: function onDestroy() {
    var t = this;
    if (cc.isValid(t._itemTmp)) t._itemTmp.destroy();
    if (cc.isValid(t.tmpNode)) t.tmpNode.destroy();
    t._pool && t._pool.clear();
  },
  onEnable: function onEnable() {
    // if (!CC_EDITOR)
    this._registerEvent();

    this._init(); // 处理重新显示后，有可能上一次的动画移除还未播放完毕，导致动画卡住的问题


    if (this._aniDelRuning) {
      this._aniDelRuning = false;

      if (this._aniDelItem) {
        if (this._aniDelBeforePos) {
          this._aniDelItem.position = this._aniDelBeforePos;
          delete this._aniDelBeforePos;
        }

        if (this._aniDelBeforeScale) {
          this._aniDelItem.scale = this._aniDelBeforeScale;
          delete this._aniDelBeforeScale;
        }

        delete this._aniDelItem;
      }

      if (this._aniDelCB) {
        this._aniDelCB();

        delete this._aniDelCB;
      }
    }
  },
  onDisable: function onDisable() {
    // if (!CC_EDITOR)
    this._unregisterEvent();
  },
  //注册事件
  _registerEvent: function _registerEvent() {
    var t = this;
    t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
    t.node.on('touch-up', t._onTouchUp, t, true);
    t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
    t.node.on('scroll-began', t._onScrollBegan, t, true);
    t.node.on('scroll-ended', t._onScrollEnded, t, true);
    t.node.on('scrolling', t._onScrolling, t, true);
    t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
  },
  //卸载事件
  _unregisterEvent: function _unregisterEvent() {
    var t = this;
    t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
    t.node.off('touch-up', t._onTouchUp, t, true);
    t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
    t.node.off('scroll-began', t._onScrollBegan, t, true);
    t.node.off('scroll-ended', t._onScrollEnded, t, true);
    t.node.off('scrolling', t._onScrolling, t, true);
    t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
  },
  //初始化各种..
  _init: function _init() {
    var t = this;
    if (t._inited) return;
    t._scrollView = t.node.getComponent(cc.ScrollView);
    t.content = t._scrollView.content;

    if (!t.content) {
      cc.error(t.node.name + "'s cc.ScrollView unset content!");
      return;
    }

    t._layout = t.content.getComponent(cc.Layout);
    t._align = t._layout.type; //排列模式

    t._resizeMode = t._layout.resizeMode; //自适应模式

    t._startAxis = t._layout.startAxis;
    t._topGap = t._layout.paddingTop; //顶边距

    t._rightGap = t._layout.paddingRight; //右边距

    t._bottomGap = t._layout.paddingBottom; //底边距

    t._leftGap = t._layout.paddingLeft; //左边距

    t._columnGap = t._layout.spacingX; //列距

    t._lineGap = t._layout.spacingY; //行距

    t._colLineNum; //列数或行数（非GRID模式则=1，表示单列或单行）;

    t._verticalDir = t._layout.verticalDirection; //垂直排列子节点的方向

    t._horizontalDir = t._layout.horizontalDirection; //水平排列子节点的方向

    t.setTemplateItem(cc.instantiate(t.templateType == TemplateType.PREFAB ? t.tmpPrefab : t.tmpNode)); // 特定的滑动模式处理

    if (t._slideMode == SlideType.ADHERING || t._slideMode == SlideType.PAGE) {
      t._scrollView.inertia = false;

      t._scrollView._onMouseWheel = function () {
        return;
      };
    }

    if (!t.virtual) // lackCenter 仅支持 Virtual 模式
      t.lackCenter = false;
    t._lastDisplayData = []; //最后一次刷新的数据

    t.displayData = []; //当前数据

    t._pool = new cc.NodePool(); //这是个池子..

    t._forceUpdate = false; //是否强制更新

    t._updateCounter = 0; //当前分帧渲染帧数

    t._updateDone = true; //分帧渲染是否完成

    t.curPageNum = 0; //当前页数

    if (t.cyclic) {
      // 如果是循环列表，覆写一些cc.ScrollView的函数
      t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);

      t._scrollView._startBounceBackIfNeeded = function () {
        return false;
      };
    }

    switch (t._align) {
      case cc.Layout.Type.HORIZONTAL:
        {
          switch (t._horizontalDir) {
            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
              t._alignCalcType = 1;
              break;

            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
              t._alignCalcType = 2;
              break;
          }

          break;
        }

      case cc.Layout.Type.VERTICAL:
        {
          switch (t._verticalDir) {
            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
              t._alignCalcType = 3;
              break;

            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
              t._alignCalcType = 4;
              break;
          }

          break;
        }

      case cc.Layout.Type.GRID:
        {
          switch (t._startAxis) {
            case cc.Layout.AxisDirection.HORIZONTAL:
              switch (t._verticalDir) {
                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                  t._alignCalcType = 3;
                  break;

                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                  t._alignCalcType = 4;
                  break;
              }

              break;

            case cc.Layout.AxisDirection.VERTICAL:
              switch (t._horizontalDir) {
                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                  t._alignCalcType = 1;
                  break;

                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                  t._alignCalcType = 2;
                  break;
              }

              break;
          }

          break;
        }
    } // 清空 content
    // t.content.children.forEach(child => {
    //     child.removeFromParent();
    //     if (child.isValid)
    //         child.destroy();
    // });


    t.content.removeAllChildren();
    t._inited = true;
  },

  /**
   * 为了实现循环列表，必须覆写cc.ScrollView的某些函数
   * @param {Number} dt
   */
  _processAutoScrolling: function _processAutoScrolling(dt) {
    // let isAutoScrollBrake = this._scrollView._isNecessaryAutoScrollBrake();
    var brakingFactor = 1;
    this._scrollView._autoScrollAccumulatedTime += dt * (1 / brakingFactor);
    var percentage = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);

    if (this._scrollView._autoScrollAttenuate) {
      var time = percentage - 1;
      percentage = time * time * time * time * time + 1;
    }

    var newPosition = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(percentage));

    var EPSILON = this._scrollView.getScrollEndedEventTiming();

    var reachedEnd = Math.abs(percentage - 1) <= EPSILON; // cc.log(reachedEnd, Math.abs(percentage - 1), EPSILON)

    var fireEvent = Math.abs(percentage - 1) <= this._scrollView.getScrollEndedEventTiming();

    if (fireEvent && !this._scrollView._isScrollEndedWithThresholdEventFired) {
      this._scrollView._dispatchEvent('scroll-ended-with-threshold');

      this._scrollView._isScrollEndedWithThresholdEventFired = true;
    } // if (this._scrollView.elastic && !reachedEnd) {
    //     let brakeOffsetPosition = newPosition.sub(this._scrollView._autoScrollBrakingStartPosition);
    //     if (isAutoScrollBrake) {
    //         brakeOffsetPosition = brakeOffsetPosition.mul(brakingFactor);
    //     }
    //     newPosition = this._scrollView._autoScrollBrakingStartPosition.add(brakeOffsetPosition);
    // } else {
    //     let moveDelta = newPosition.sub(this._scrollView.getContentPosition());
    //     let outOfBoundary = this._scrollView._getHowMuchOutOfBoundary(moveDelta);
    //     if (!outOfBoundary.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
    //         newPosition = newPosition.add(outOfBoundary);
    //         reachedEnd = true;
    //     }
    // }


    if (reachedEnd) {
      this._scrollView._autoScrolling = false;
    }

    var deltaMove = newPosition.sub(this._scrollView.getContentPosition()); // cc.log(deltaMove)

    this._scrollView._moveContent(this._scrollView._clampDelta(deltaMove), reachedEnd);

    this._scrollView._dispatchEvent('scrolling'); // scollTo API controll move


    if (!this._scrollView._autoScrolling) {
      this._scrollView._isBouncing = false;
      this._scrollView._scrolling = false;

      this._scrollView._dispatchEvent('scroll-ended');
    }
  },
  //设置模板Item
  setTemplateItem: function setTemplateItem(item) {
    if (!item) return;
    var t = this;
    t._itemTmp = item;
    if (t._resizeMode == cc.Layout.ResizeMode.CHILDREN) t._itemSize = t._layout.cellSize;else t._itemSize = new cc.size(item.width, item.height); //获取listItem，如果没有就取消选择模式

    var com = item.getComponent('listItem');
    var remove = false;
    if (!com) remove = true; // if (com) {
    //     if (!com._btnCom && !item.getComponent(cc.Button)) {
    //         remove = true;
    //     }
    // }

    if (remove) {
      t.selectedMode = SelectedType.NONE;
    }

    com = item.getComponent(cc.Widget);

    if (com && com.enabled) {
      t._needUpdateWidget = true;
    }

    if (t.selectedMode == SelectedType.MULT) t.multSelected = [];

    switch (t._align) {
      case cc.Layout.Type.HORIZONTAL:
        t._colLineNum = 1;
        t._sizeType = false;
        break;

      case cc.Layout.Type.VERTICAL:
        t._colLineNum = 1;
        t._sizeType = true;
        break;

      case cc.Layout.Type.GRID:
        switch (t._startAxis) {
          case cc.Layout.AxisDirection.HORIZONTAL:
            //计算列数
            var trimW = t.content.width - t._leftGap - t._rightGap;
            t._colLineNum = Math.floor((trimW + t._columnGap) / (t._itemSize.width + t._columnGap));
            t._sizeType = true;
            break;

          case cc.Layout.AxisDirection.VERTICAL:
            //计算行数
            var trimH = t.content.height - t._topGap - t._bottomGap;
            t._colLineNum = Math.floor((trimH + t._lineGap) / (t._itemSize.height + t._lineGap));
            t._sizeType = false;
            break;
        }

        break;
    }
  },

  /**
   * 检查是否初始化
   * @param {Boolean} printLog 是否打印错误信息
   * @returns
   */
  checkInited: function checkInited(printLog) {
    printLog = printLog == null ? true : printLog;

    if (!this._inited) {
      if (printLog) {
        cc.error('list initialization not completed!');
      }

      return false;
    }

    return true;
  },
  //禁用 Layout 组件，自行计算 Content Size
  _resizeContent: function _resizeContent() {
    var t = this;
    var result;

    switch (t._align) {
      case cc.Layout.Type.HORIZONTAL:
        {
          if (t._customSize) {
            var fixed = t._getFixedSize();

            result = t._leftGap + fixed.val + t._itemSize.width * (t._numItems - fixed.count) + t._columnGap * (t._numItems - 1) + t._rightGap;
          } else {
            result = t._leftGap + t._itemSize.width * t._numItems + t._columnGap * (t._numItems - 1) + t._rightGap;
          }

          break;
        }

      case cc.Layout.Type.VERTICAL:
        {
          if (t._customSize) {
            var _fixed = t._getFixedSize();

            result = t._topGap + _fixed.val + t._itemSize.height * (t._numItems - _fixed.count) + t._lineGap * (t._numItems - 1) + t._bottomGap;
          } else {
            result = t._topGap + t._itemSize.height * t._numItems + t._lineGap * (t._numItems - 1) + t._bottomGap;
          }

          break;
        }

      case cc.Layout.Type.GRID:
        {
          //网格模式不支持居中
          if (t.lackCenter) t.lackCenter = false;

          switch (t._startAxis) {
            case cc.Layout.AxisDirection.HORIZONTAL:
              var lineNum = Math.ceil(t._numItems / t._colLineNum);
              result = t._topGap + t._itemSize.height * lineNum + t._lineGap * (lineNum - 1) + t._bottomGap;
              break;

            case cc.Layout.AxisDirection.VERTICAL:
              var colNum = Math.ceil(t._numItems / t._colLineNum);
              result = t._leftGap + t._itemSize.width * colNum + t._columnGap * (colNum - 1) + t._rightGap;
              break;
          }

          break;
        }
    }

    var layout = t.content.getComponent(cc.Layout);
    if (layout) layout.enabled = false;
    t._allItemSize = result;
    t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? t._topGap + t._bottomGap : t._leftGap + t._rightGap);

    if (t.cyclic) {
      var totalSize = t._sizeType ? t.node.height : t.node.width;
      t._cyclicPos1 = 0;
      totalSize -= t._cyclicPos1;
      t._cyclicNum = Math.ceil(totalSize / t._allItemSizeNoEdge) + 1;
      var spacing = t._sizeType ? t._lineGap : t._columnGap;
      t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + spacing;
      t._cyclicAllItemSize = t._allItemSize + t._allItemSizeNoEdge * (t._cyclicNum - 1) + spacing * (t._cyclicNum - 1);
      t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
      t._cycilcAllItemSizeNoEdge += spacing * (t._cyclicNum - 1); // cc.log('_cyclicNum ->', t._cyclicNum, t._allItemSizeNoEdge, t._allItemSize, t._cyclicPos1, t._cyclicPos2);
    }

    t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
    var slideOffset = (!t._lack || !t.lackCenter) && t.lackSlide ? 0 : .1;
    var targetWH = t._lack ? (t._sizeType ? t.node.height : t.node.width) - slideOffset : t.cyclic ? t._cyclicAllItemSize : t._allItemSize;
    if (targetWH < 0) targetWH = 0;

    if (t._sizeType) {
      t.content.height = targetWH;
    } else {
      t.content.width = targetWH;
    } // cc.log('_resizeContent()  numItems =', t._numItems, '，content =', t.content);

  },
  //滚动进行时...
  _onScrolling: function _onScrolling(ev) {
    if (this.frameCount == null) this.frameCount = this._updateRate;

    if (!this._forceUpdate && ev && ev.type != 'scroll-ended' && this.frameCount > 0) {
      this.frameCount--;
      return;
    } else this.frameCount = this._updateRate;

    if (this._aniDelRuning) return; //循环列表处理

    if (this.cyclic) {
      var scrollPos = this.content.getPosition();
      scrollPos = this._sizeType ? scrollPos.y : scrollPos.x;
      var addVal = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
      var add = this._sizeType ? cc.v2(0, addVal) : cc.v2(addVal, 0);

      switch (this._alignCalcType) {
        case 1:
          //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
          if (scrollPos > -this._cyclicPos1) {
            this.content.x = -this._cyclicPos2;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add);
            } // if (this._beganPos) {
            //     this._beganPos += add;
            // }

          } else if (scrollPos < -this._cyclicPos2) {
            this.content.x = -this._cyclicPos1;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add);
            } // if (this._beganPos) {
            //     this._beganPos -= add;
            // }

          }

          break;

        case 2:
          //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
          if (scrollPos < this._cyclicPos1) {
            this.content.x = this._cyclicPos2;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add);
            }
          } else if (scrollPos > this._cyclicPos2) {
            this.content.x = this._cyclicPos1;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add);
            }
          }

          break;

        case 3:
          //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
          if (scrollPos < this._cyclicPos1) {
            this.content.y = this._cyclicPos2;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add);
            }
          } else if (scrollPos > this._cyclicPos2) {
            this.content.y = this._cyclicPos1;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add);
            }
          }

          break;

        case 4:
          //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
          if (scrollPos > -this._cyclicPos1) {
            this.content.y = -this._cyclicPos2;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add);
            }
          } else if (scrollPos < -this._cyclicPos2) {
            this.content.y = -this._cyclicPos1;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add);
            }
          }

          break;
      }
    }

    this._calcViewPos();

    var vTop, vRight, vBottom, vLeft;

    if (this._sizeType) {
      vTop = this.viewTop;
      vBottom = this.viewBottom;
    } else {
      vRight = this.viewRight;
      vLeft = this.viewLeft;
    }

    if (this._virtual) {
      this.displayData = [];
      var itemPos;
      var curId = 0;
      var endId = this._numItems - 1;

      if (this._customSize) {
        var breakFor = false; //如果该item的位置在可视区域内，就推入displayData

        for (; curId <= endId && !breakFor; curId++) {
          itemPos = this._calcItemPos(curId);

          switch (this._align) {
            case cc.Layout.Type.HORIZONTAL:
              if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                this.displayData.push(itemPos);
              } else if (curId != 0 && this.displayData.length > 0) {
                breakFor = true;
              }

              break;

            case cc.Layout.Type.VERTICAL:
              if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                this.displayData.push(itemPos);
              } else if (curId != 0 && this.displayData.length > 0) {
                breakFor = true;
              }

              break;

            case cc.Layout.Type.GRID:
              switch (this._startAxis) {
                case cc.Layout.AxisDirection.HORIZONTAL:
                  if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                    this.displayData.push(itemPos);
                  } else if (curId != 0 && this.displayData.length > 0) {
                    breakFor = true;
                  }

                  break;

                case cc.Layout.AxisDirection.VERTICAL:
                  if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                    this.displayData.push(itemPos);
                  } else if (curId != 0 && this.displayData.length > 0) {
                    breakFor = true;
                  }

                  break;
              }

              break;
          }
        }
      } else {
        var ww = this._itemSize.width + this._columnGap;
        var hh = this._itemSize.height + this._lineGap;

        switch (this._alignCalcType) {
          case 1:
            //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
            curId = (vLeft - this._leftGap) / ww;
            endId = (vRight - this._leftGap) / ww;
            break;

          case 2:
            //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
            curId = (-vRight - this._rightGap) / ww;
            endId = (-vLeft - this._rightGap) / ww;
            break;

          case 3:
            //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
            curId = (-vTop - this._topGap) / hh;
            endId = (-vBottom - this._topGap) / hh;
            break;

          case 4:
            //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
            curId = (vBottom - this._bottomGap) / hh;
            endId = (vTop - this._bottomGap) / hh;
            break;
        }

        curId = Math.floor(curId) * this._colLineNum;
        endId = Math.ceil(endId) * this._colLineNum;
        endId--;
        if (curId < 0) curId = 0;
        if (endId >= this._numItems) endId = this._numItems - 1;

        for (; curId <= endId; curId++) {
          this.displayData.push(this._calcItemPos(curId));
        }
      }

      this._delRedundantItem();

      if (this.displayData.length <= 0 || !this._numItems) {
        //if none, delete all.
        this._lastDisplayData = [];
        return;
      }

      this.firstlistId = this.displayData[0].id;
      this.displayItemNum = this.displayData.length;
      var len = this._lastDisplayData.length;
      var haveDataChange = this.displayItemNum != len;

      if (haveDataChange) {
        // 如果是逐帧渲染，需要排序
        if (this.frameByFrameRenderNum > 0) {
          this._lastDisplayData.sort(function (a, b) {
            return a - b;
          });
        } // 因list的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。


        haveDataChange = this.firstlistId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
      }

      if (this._forceUpdate || haveDataChange) {
        //如果是强制更新
        if (this.frameByFrameRenderNum > 0) {
          // if (this._updateDone) {
          // this._lastDisplayData = [];
          //逐帧渲染
          if (this._numItems > 0) {
            if (!this._updateDone) {
              this._doneAfterUpdate = true;
            } else {
              this._updateCounter = 0;
            }

            this._updateDone = false;
          } else {
            this._updateCounter = 0;
            this._updateDone = true;
          } // }

        } else {
          //直接渲染
          this._lastDisplayData = []; // cc.log('list Display Data II::', this.displayData);

          for (var c = 0; c < this.displayItemNum; c++) {
            this._createOrUpdateItem(this.displayData[c]);
          }

          this._forceUpdate = false;
        }
      }

      this._calcNearestItem();
    }
  },
  //计算View位置
  _calcViewPos: function _calcViewPos() {
    var scrollPos = this.content.getPosition();

    switch (this._alignCalcType) {
      case 1:
        //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
        this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
        this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
        this.viewRight = this.viewLeft + this.node.width;
        this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
        this.viewRight += this.elasticRight; // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);

        break;

      case 2:
        //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
        this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
        this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
        this.viewLeft = this.viewRight - this.node.width;
        this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
        this.viewLeft -= this.elasticLeft; // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);

        break;

      case 3:
        //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
        this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
        this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
        this.viewBottom = this.viewTop - this.node.height;
        this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
        this.viewBottom += this.elasticBottom; // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);

        break;

      case 4:
        //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
        this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
        this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
        this.viewTop = this.viewBottom + this.node.height;
        this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
        this.viewTop -= this.elasticTop; // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);

        break;
    }
  },
  //计算位置 根据id
  _calcItemPos: function _calcItemPos(id) {
    var width, height, top, bottom, left, right, itemX, itemY;

    switch (this._align) {
      case cc.Layout.Type.HORIZONTAL:
        switch (this._horizontalDir) {
          case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
            {
              if (this._customSize) {
                var fixed = this._getFixedSize(id);

                left = this._leftGap + (this._itemSize.width + this._columnGap) * (id - fixed.count) + (fixed.val + this._columnGap * fixed.count);
                var cs = this._customSize[id];
                width = cs > 0 ? cs : this._itemSize.width;
              } else {
                left = this._leftGap + (this._itemSize.width + this._columnGap) * id;
                width = this._itemSize.width;
              }

              if (this.lackCenter) {
                left -= this._leftGap;
                var offset = this.content.width / 2 - this._allItemSizeNoEdge / 2;
                left += offset;
              }

              right = left + width;
              return {
                id: id,
                left: left,
                right: right,
                x: left + this._itemTmp.anchorX * width,
                y: this._itemTmp.y
              };
            }

          case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
            {
              if (this._customSize) {
                var _fixed2 = this._getFixedSize(id);

                right = -this._rightGap - (this._itemSize.width + this._columnGap) * (id - _fixed2.count) - (_fixed2.val + this._columnGap * _fixed2.count);
                var _cs = this._customSize[id];
                width = _cs > 0 ? _cs : this._itemSize.width;
              } else {
                right = -this._rightGap - (this._itemSize.width + this._columnGap) * id;
                width = this._itemSize.width;
              }

              if (this.lackCenter) {
                right += this._rightGap;

                var _offset = this.content.width / 2 - this._allItemSizeNoEdge / 2;

                right -= _offset;
              }

              left = right - width;
              return {
                id: id,
                right: right,
                left: left,
                x: left + this._itemTmp.anchorX * width,
                y: this._itemTmp.y
              };
            }
        }

        break;

      case cc.Layout.Type.VERTICAL:
        {
          switch (this._verticalDir) {
            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
              {
                if (this._customSize) {
                  var _fixed3 = this._getFixedSize(id);

                  top = -this._topGap - (this._itemSize.height + this._lineGap) * (id - _fixed3.count) - (_fixed3.val + this._lineGap * _fixed3.count);
                  var _cs2 = this._customSize[id];
                  height = _cs2 > 0 ? _cs2 : this._itemSize.height;
                  bottom = top - height;
                } else {
                  top = -this._topGap - (this._itemSize.height + this._lineGap) * id;
                  height = this._itemSize.height;
                }

                if (this.lackCenter) {
                  top += this._topGap;

                  var _offset2 = this.content.height / 2 - this._allItemSizeNoEdge / 2;

                  top -= _offset2;
                }

                bottom = top - height;
                return {
                  id: id,
                  top: top,
                  bottom: bottom,
                  x: this._itemTmp.x,
                  y: bottom + this._itemTmp.anchorY * height
                };
              }

            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
              {
                if (this._customSize) {
                  var _fixed4 = this._getFixedSize(id);

                  bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * (id - _fixed4.count) + (_fixed4.val + this._lineGap * _fixed4.count);
                  var _cs3 = this._customSize[id];
                  height = _cs3 > 0 ? _cs3 : this._itemSize.height;
                } else {
                  bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * id;
                  height = this._itemSize.height;
                }

                if (this.lackCenter) {
                  bottom -= this._bottomGap;

                  var _offset3 = this.content.height / 2 - this._allItemSizeNoEdge / 2;

                  bottom += _offset3;
                }

                top = bottom + height;
                return {
                  id: id,
                  top: top,
                  bottom: bottom,
                  x: this._itemTmp.x,
                  y: bottom + this._itemTmp.anchorY * height
                };
                break;
              }
          }
        }

      case cc.Layout.Type.GRID:
        {
          var colLine = Math.floor(id / this._colLineNum);

          switch (this._startAxis) {
            case cc.Layout.AxisDirection.HORIZONTAL:
              {
                switch (this._verticalDir) {
                  case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                    {
                      top = -this._topGap - (this._itemSize.height + this._lineGap) * colLine;
                      bottom = top - this._itemSize.height;
                      itemY = bottom + this._itemTmp.anchorY * this._itemSize.height;
                      break;
                    }

                  case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                    {
                      bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * colLine;
                      top = bottom + this._itemSize.height;
                      itemY = bottom + this._itemTmp.anchorY * this._itemSize.height;
                      break;
                    }
                }

                itemX = this._leftGap + id % this._colLineNum * (this._itemSize.width + this._columnGap);

                switch (this._horizontalDir) {
                  case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                    {
                      itemX += this._itemTmp.anchorX * this._itemSize.width;
                      itemX -= this.content.anchorX * this.content.width;
                      break;
                    }

                  case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                    {
                      itemX += (1 - this._itemTmp.anchorX) * this._itemSize.width;
                      itemX -= (1 - this.content.anchorX) * this.content.width;
                      itemX *= -1;
                      break;
                    }
                }

                return {
                  id: id,
                  top: top,
                  bottom: bottom,
                  x: itemX,
                  y: itemY
                };
              }

            case cc.Layout.AxisDirection.VERTICAL:
              {
                switch (this._horizontalDir) {
                  case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                    {
                      left = this._leftGap + (this._itemSize.width + this._columnGap) * colLine;
                      right = left + this._itemSize.width;
                      itemX = left + this._itemTmp.anchorX * this._itemSize.width;
                      itemX -= this.content.anchorX * this.content.width;
                      break;
                    }

                  case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                    {
                      right = -this._rightGap - (this._itemSize.width + this._columnGap) * colLine;
                      left = right - this._itemSize.width;
                      itemX = left + this._itemTmp.anchorX * this._itemSize.width;
                      itemX += (1 - this.content.anchorX) * this.content.width;
                      break;
                    }
                }

                itemY = -this._topGap - id % this._colLineNum * (this._itemSize.height + this._lineGap);

                switch (this._verticalDir) {
                  case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                    {
                      itemY -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
                      itemY += (1 - this.content.anchorY) * this.content.height;
                      break;
                    }

                  case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                    {
                      itemY -= this._itemTmp.anchorY * this._itemSize.height;
                      itemY += this.content.anchorY * this.content.height;
                      itemY *= -1;
                      break;
                    }
                }

                return {
                  id: id,
                  left: left,
                  right: right,
                  x: itemX,
                  y: itemY
                };
              }
          }

          break;
        }
    }
  },
  //计算已存在的Item的位置
  _calcExistItemPos: function _calcExistItemPos(id) {
    var item = this.getItemBylistId(id);
    if (!item) return null;
    var data = {
      id: id,
      x: item.x,
      y: item.y
    };

    if (this._sizeType) {
      data.top = item.y + item.height * (1 - item.anchorY);
      data.bottom = item.y - item.height * item.anchorY;
    } else {
      data.left = item.x - item.width * item.anchorX;
      data.right = item.x + item.width * (1 - item.anchorX);
    }

    return data;
  },
  //获取Item位置
  getItemPos: function getItemPos(id) {
    if (this._virtual) return this._calcItemPos(id);else {
      if (this.frameByFrameRenderNum) return this._calcItemPos(id);else return this._calcExistItemPos(id);
    }
  },
  //获取固定尺寸
  _getFixedSize: function _getFixedSize(listId) {
    if (!this._customSize) return null;
    if (listId == null) listId = this._numItems;
    var fixed = 0;
    var count = 0;

    for (var id in this._customSize) {
      if (parseInt(id) < listId) {
        fixed += this._customSize[id];
        count++;
      }
    }

    return {
      val: fixed,
      count: count
    };
  },
  //滚动开始时..
  _onScrollBegan: function _onScrollBegan() {
    this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
  },
  //滚动结束时..
  _onScrollEnded: function _onScrollEnded() {
    var t = this;
    t.curScrollistouch = false;

    if (t.scrollTolistId != null) {
      var item = t.getItemBylistId(t.scrollTolistId);
      t.scrollTolistId = null;

      if (item) {
        cc.tween(item).to(.1, {
          scale: 1.06
        }).to(.1, {
          scale: 1
        }).start();
      }
    }

    t._onScrolling();

    if (t._slideMode == SlideType.ADHERING && !t.adhering) {
      //cc.log(t.adhering, t._scrollView.isAutoScrolling(), t._scrollView.isScrolling());
      t.adhere();
    } else if (t._slideMode == SlideType.PAGE) {
      if (t._beganPos != null && t.curScrollistouch) {
        this._pageAdhere();
      } else {
        t.adhere();
      }
    }
  },
  // 触摸时
  _onTouchStart: function _onTouchStart(ev, capturelisteners) {
    if (this._scrollView._hasNestedViewGroup(ev, capturelisteners)) return;
    this.curScrollistouch = true;
    var isMe = ev.eventPhase === cc.Event.AT_TARGET && ev.target === this.node;

    if (!isMe) {
      var itemNode = ev.target;

      while (itemNode._listId == null && itemNode.parent) {
        itemNode = itemNode.parent;
      }

      this._scrollItem = itemNode._listId != null ? itemNode : ev.target;
    }
  },
  //触摸抬起时..
  _onTouchUp: function _onTouchUp() {
    var t = this;
    t._scrollPos = null;

    if (t._slideMode == SlideType.ADHERING) {
      if (t.adhering) t._adheringBarrier = true;
      t.adhere();
    } else if (t._slideMode == SlideType.PAGE) {
      if (t._beganPos != null) {
        t._pageAdhere();
      } else {
        t.adhere();
      }
    }

    this._scrollItem = null;
  },
  _onTouchCancelled: function _onTouchCancelled(ev, capturelisteners) {
    var t = this;
    if (t._scrollView._hasNestedViewGroup(ev, capturelisteners) || ev.simulate) return;
    t._scrollPos = null;

    if (t._slideMode == SlideType.ADHERING) {
      if (t.adhering) t._adheringBarrier = true;
      t.adhere();
    } else if (t._slideMode == SlideType.PAGE) {
      if (t._beganPos != null) {
        t._pageAdhere();
      } else {
        t.adhere();
      }
    }

    this._scrollItem = null;
  },
  //当尺寸改变
  _onSizeChanged: function _onSizeChanged() {
    if (this.checkInited(false)) this._onScrolling();
  },
  //当Item自适应
  _onItemAdaptive: function _onItemAdaptive(item) {
    if (!this._sizeType && item.width != this._itemSize.width || this._sizeType && item.height != this._itemSize.height) {
      if (!this._customSize) this._customSize = {};
      var val = this._sizeType ? item.height : item.width;

      if (this._customSize[item._listId] != val) {
        this._customSize[item._listId] = val;

        this._resizeContent(); // this.content.children.forEach(child => {
        //     this._updateItemPos(child);
        // });


        this.updateAll(); // 如果当前正在运行 scrollTo，肯定会不准确，在这里做修正

        if (this._scrollTolistId != null) {
          this._scrollPos = null;
          this.unschedule(this._scrollToSo);
          this.scrollTo(this._scrollTolistId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1000));
        }
      }
    } // else {
    //     if (this._customSize) {
    //         delete this._customSize[item._listId];
    //     }
    //     this.updateAll();
    //     this._delRedundantItem();
    // }

  },
  //PAGE粘附
  _pageAdhere: function _pageAdhere() {
    var t = this;
    if (!t.cyclic && (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) return;
    var curPos = t._sizeType ? t.viewTop : t.viewLeft;
    var dis = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
    var canSkip = Math.abs(t._beganPos - curPos) > dis;

    if (canSkip) {
      var timeInSecond = .5;

      switch (t._alignCalcType) {
        case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）

        case 4:
          //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
          if (t._beganPos > curPos) {
            t.prePage(timeInSecond); // cc.log('_pageAdhere   PPPPPPPPPPPPPPP');
          } else {
            t.nextPage(timeInSecond); // cc.log('_pageAdhere   NNNNNNNNNNNNNNN')
          }

          break;

        case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）

        case 3:
          //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
          if (t._beganPos < curPos) {
            t.prePage(timeInSecond);
          } else {
            t.nextPage(timeInSecond);
          }

          break;
      }
    } else if (t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0) {
      t.adhere();
    }

    t._beganPos = null;
  },
  //粘附
  adhere: function adhere() {
    var t = this;
    if (!t.checkInited()) return;
    if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0) return;
    t.adhering = true; // if (!t._virtual)

    t._calcNearestItem();

    var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
    var timeInSecond = .7;
    t.scrollTo(t.nearestlistId, timeInSecond, offset);
  },
  //Update..
  update: function update() {
    if (this.frameByFrameRenderNum <= 0 || this._updateDone) return; // cc.log(this.displayData.length, this._updateCounter, this.displayData[this._updateCounter]);

    if (this._virtual) {
      // let len = Math.min(this._updateCounter + this.frameByFrameRenderNum,this.displayItemNum)
      var len = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum;

      for (var n = this._updateCounter; n < len; n++) {
        var data = this.displayData[n];

        if (data) {
          // cc.log(data.id);
          this._createOrUpdateItem(data);
        }
      }

      if (this._updateCounter >= this.displayItemNum - 1) {
        //最后一个
        // this._updateDone = true;
        // this._delRedundantItem();
        // this._forceUpdate = false;
        // this._calcNearestItem();
        // if (this.slideMode == SlideType.PAGE)
        //     this.curPageNum = this.nearestlistId;
        if (this._doneAfterUpdate) {
          this._updateCounter = 0;
          this._updateDone = false; // if (!this._scrollView.isScrolling())  

          this._doneAfterUpdate = false;
        } else {
          this._updateDone = true;

          this._delRedundantItem();

          this._forceUpdate = false;

          this._calcNearestItem();

          if (this.slideMode == SlideType.PAGE) this.curPageNum = this.nearestlistId;
        }
      } else {
        this._updateCounter += this.frameByFrameRenderNum;
      }
    } else {
      if (this._updateCounter < this._numItems) {
        var _len = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum;

        for (var _n2 = this._updateCounter; _n2 < _len; _n2++) {
          this._createOrUpdateItem2(_n2);
        }

        this._updateCounter += this.frameByFrameRenderNum;
      } else {
        this._updateDone = true;

        this._calcNearestItem();

        if (this.slideMode == SlideType.PAGE) this.curPageNum = this.nearestlistId;
      }
    }
  },

  /**
   * 创建或更新Item（虚拟列表用）
   * @param {Object} data 数据
   */
  _createOrUpdateItem: function _createOrUpdateItem(data) {
    var item = this.getItemBylistId(data.id);

    if (!item) {
      //如果不存在
      var canGet = this._pool.size() > 0;

      if (canGet) {
        item = this._pool.get(); // cc.log('从池中取出::   旧id =', item._listId, '，新id =', data.id, item);
      } else {
        item = cc.instantiate(this._itemTmp); // cc.log('新建::', data.id, item);
      }

      if (!canGet || !cc.isValid(item)) {
        item = cc.instantiate(this._itemTmp);
        canGet = false;
      }

      if (item._listId != data.id) {
        item._listId = data.id;
        item.setContentSize(this._itemSize);
      }

      item.setPosition(new cc.v2(data.x, data.y));

      this._resetItemSize(item);

      this.content.addChild(item);

      if (canGet && this._needUpdateWidget) {
        var widget = item.getComponent(cc.Widget);
        if (widget) widget.updateAlignment();
      }

      item.setSiblingIndex(this.content.childrenCount - 1); // console.log(item);

      var _listItem = item.getComponent('listItem');

      item.listItem = _listItem;

      if (_listItem) {
        _listItem._list = this;

        _listItem._registerEvent();
      }

      if (this.renderEvent) {
        this.renderEvent(item, data.id % this._actualNumItems); // cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
      }
    } else if (this._forceUpdate && this.renderEvent) {
      //强制更新
      item.setPosition(new cc.v2(data.x, data.y));

      this._resetItemSize(item); // cc.log('ADD::', data.id);


      if (this.renderEvent) {
        this.renderEvent(item, data.id % this._actualNumItems); // cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
      }
    }

    this._resetItemSize(item);

    this._updatelistItem(item.listItem);

    if (this._lastDisplayData.indexOf(data.id) < 0) {
      this._lastDisplayData.push(data.id);
    }
  },
  //创建或更新Item（非虚拟列表用）
  _createOrUpdateItem2: function _createOrUpdateItem2(listId) {
    var item = this.content.children[listId];

    if (!item) {
      //如果不存在
      item = cc.instantiate(this._itemTmp);
      item._listId = listId;
      this.content.addChild(item);

      var _listItem2 = item.getComponent('listItem');

      item.listItem = _listItem2;

      if (_listItem2) {
        _listItem2._list = this;

        _listItem2._registerEvent();
      }

      if (this.renderEvent) {
        this.renderEvent(item, listId % this._actualNumItems); // cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
      }
    } else if (this._forceUpdate && this.renderEvent) {
      //强制更新
      item._listId = listId;

      if (this.renderEvent) {
        this.renderEvent(item, listId % this._actualNumItems); // cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
      }
    }

    this._updatelistItem(item.listItem);

    if (this._lastDisplayData.indexOf(listId) < 0) {
      this._lastDisplayData.push(listId);
    }
  },
  _updatelistItem: function _updatelistItem(listItem) {
    if (!listItem) return;

    if (this.selectedMode > SelectedType.NONE) {
      switch (this.selectedMode) {
        case SelectedType.SINGLE:
          listItem.selected = this.selectedId == listItem.node._listId;
          break;

        case SelectedType.MULT:
          listItem.selected = this.multSelected.indexOf(listItem.node._listId) >= 0;
          break;
      }
    }
  },
  //仅虚拟列表用
  _resetItemSize: function _resetItemSize(item) {
    return;
    var size;

    if (this._customSize && this._customSize[item._listId]) {
      size = this._customSize[item._listId];
    } else {
      if (this._colLineNum > 1) item.setContentSize(this._itemSize);else size = this._sizeType ? this._itemSize.height : this._itemSize.width;
    }

    if (size) {
      if (this._sizeType) item.height = size;else item.width = size;
    }
  },

  /**
   * 更新Item位置
   * @param {Number||Node} listIdOrItem
   */
  _updateItemPos: function _updateItemPos(listIdOrItem) {
    var item = isNaN(listIdOrItem) ? listIdOrItem : this.getItemBylistId(listIdOrItem);
    var pos = this.getItemPos(item._listId);
    item.setPosition(pos.x, pos.y);
  },

  /**
   * 设置多选
   * @param {Array} args 可以是单个listId，也可是个listId数组
   * @param {Boolean} bool 值，如果为null的话，则直接用args覆盖
   */
  setMultSelected: function setMultSelected(args, bool) {
    var t = this;
    if (!t.checkInited()) return;

    if (!Array.isArray(args)) {
      args = [args];
    }

    if (bool == null) {
      t.multSelected = args;
    } else {
      var listId, sub;

      if (bool) {
        for (var n = args.length - 1; n >= 0; n--) {
          listId = args[n];
          sub = t.multSelected.indexOf(listId);

          if (sub < 0) {
            t.multSelected.push(listId);
          }
        }
      } else {
        for (var _n3 = args.length - 1; _n3 >= 0; _n3--) {
          listId = args[_n3];
          sub = t.multSelected.indexOf(listId);

          if (sub >= 0) {
            t.multSelected.splice(sub, 1);
          }
        }
      }
    }

    t._forceUpdate = true;

    t._onScrolling();
  },

  /**
   * 获取多选数据
   * @returns
   */
  getMultSelected: function getMultSelected() {
    return this.multSelected;
  },

  /**
   * 多选是否有选择
   * @param {number} listId 索引
   * @returns
   */
  hasMultSelected: function hasMultSelected(listId) {
    return this.multSelected && this.multSelected.indexOf(listId) >= 0;
  },

  /**
   * 更新指定的Item
   * @param {Array} args 单个listId，或者数组
   * @returns
   */
  updateItem: function updateItem(args) {
    if (!this.checkInited()) return;

    if (!Array.isArray(args)) {
      args = [args];
    }

    for (var n = 0, len = args.length; n < len; n++) {
      var listId = args[n];
      var item = this.getItemBylistId(listId);

      if (item) {
        if (this.renderEvent) {
          this.renderEvent(item, listId % this._actualNumItems);
        } // cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);

      }
    }
  },

  /**
   * 更新全部
   */
  updateAll: function updateAll() {
    if (!this.checkInited()) return;
    this.numItems = this.numItems;
  },

  /**
   * 根据listID获取Item
   * @param {Number} listId
   * @returns
   */
  getItemBylistId: function getItemBylistId(listId) {
    if (this.content) {
      for (var n = this.content.childrenCount - 1; n >= 0; n--) {
        if (this.content.children[n]._listId == listId) return this.content.children[n];
      }
    }
  },

  /**
   * 获取在显示区域外的Item
   * @returns
   */
  _getOutsideItem: function _getOutsideItem() {
    var item;
    var result = [];

    for (var n = this.content.childrenCount - 1; n >= 0; n--) {
      item = this.content.children[n];

      if (!this.displayData.find(function (d) {
        return d.id == item._listId;
      })) {
        result.push(item);
      }
    }

    return result;
  },
  //删除显示区域以外的Item
  _delRedundantItem: function _delRedundantItem() {
    if (this._virtual) {
      var arr = this._getOutsideItem();

      for (var n = arr.length - 1; n >= 0; n--) {
        var item = arr[n]; // 加这一句是为了防止拖动时被卡住...

        if (this._scrollItem && item._listId == this._scrollItem._listId) continue;
        item.isCached = true;

        this._pool.put(item);

        for (var m = this._lastDisplayData.length - 1; m >= 0; m--) {
          if (this._lastDisplayData[m] == item._listId) {
            this._lastDisplayData.splice(m, 1);

            break;
          }
        }
      } // cc.log('存入::', str, '    pool.length =', this._pool.length);

    } else {
      while (this.content.childrenCount > this._numItems) {
        this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
      }
    }
  },
  //删除单个Item
  _delSingleItem: function _delSingleItem(item) {
    // cc.log('DEL::', item._listId, item);
    item.removeFromParent();
    if (item.destroy) item.destroy();
    item = null;
  },

  /**
   * 动效删除Item（此方法只适用于虚拟列表，即_virtual=true）
   * 一定要在回调函数里重新设置新的numItems进行刷新，毕竟本list是靠数据驱动的。
   */
  aniDelItem: function aniDelItem(listId, callFunc, aniType) {
    var t = this;
    if (!t.checkInited() || t.cyclic || !t._virtual) return cc.error('This function is not allowed to be called!');
    if (!callFunc) return cc.error('CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!');
    if (t._aniDelRuning) return cc.warn('Please wait for the current deletion to finish!');
    var item = t.getItemBylistId(listId);

    if (!item) {
      callFunc(listId);
      return;
    }

    t._aniDelRuning = true;
    t._aniDelCB = callFunc;
    t._aniDelItem = item;
    t._aniDelBeforePos = item.position;
    t._aniDelBeforeScale = item.scale;
    var curLastId = t.displayData[t.displayData.length - 1].id;
    var resetSelectedId = item.listItem.selected;
    item.listItem.showAni(aniType, function () {
      //判断有没有下一个，如果有的话，创建粗来
      var newId;

      if (curLastId < t._numItems - 2) {
        newId = curLastId + 1;
      }

      if (newId != null) {
        var newData = t._calcItemPos(newId);

        t.displayData.push(newData);
        if (t._virtual) t._createOrUpdateItem(newData);else t._createOrUpdateItem2(newId);
      } else t._numItems--;

      if (t.selectedMode == SelectedType.SINGLE) {
        if (resetSelectedId) {
          t._selectedId = -1;
        } else if (t._selectedId - 1 >= 0) {
          t._selectedId--;
        }
      } else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
        var sub = t.multSelected.indexOf(listId); // let tmp;

        if (sub >= 0) {
          t.multSelected.splice(sub, 1);
        } //多选的数据，在其后的全部减一


        for (var n = t.multSelected.length - 1; n >= 0; n--) {
          var id = t.multSelected[n];
          if (id >= listId) t.multSelected[n]--;
        }
      }

      if (t._customSize) {
        if (t._customSize[listId]) delete t._customSize[listId];
        var newCustomSize = {};
        var size;

        for (var _id in t._customSize) {
          size = t._customSize[_id];
          _id = parseInt(_id);
          newCustomSize[_id - (_id >= listId ? 1 : 0)] = size;
        }

        t._customSize = newCustomSize;
      } //后面的Item向前怼的动效


      var sec = .2333;
      var tween, haveCB;

      for (var _n4 = newId != null ? newId : curLastId; _n4 >= listId + 1; _n4--) {
        item = t.getItemBylistId(_n4);

        if (item) {
          var posData = t._calcItemPos(_n4 - 1);

          tween = cc.tween(item).to(sec, {
            position: cc.v2(posData.x, posData.y)
          });

          if (_n4 <= listId + 1) {
            haveCB = true;
            tween.call(function () {
              t._aniDelRuning = false;
              callFunc(listId);
              delete t._aniDelCB;
            });
          }

          tween.start();
        }
      }

      if (!haveCB) {
        t._aniDelRuning = false;
        callFunc(listId);
        delete t._aniDelCB;
      }
    }, true);
  },

  /**
   * 滚动到..
   * @param {Number} listId 索引（如果<0，则滚到首个Item位置，如果>=_numItems，则滚到最末Item位置）
   * @param {Number} timeInSecond 时间
   * @param {Number} offset 索引目标位置偏移，0-1
   * @param {Boolean} overStress 滚动后是否强调该Item（这只是个实验功能）
   */
  scrollTo: function scrollTo(listId, timeInSecond, offset, overStress) {
    var t = this;
    if (!t.checkInited()) return; // t._scrollView.stopAutoScroll();

    if (timeInSecond == null) //默认0.5
      timeInSecond = .5;else if (timeInSecond < 0) timeInSecond = 0;
    if (listId < 0) listId = 0;else if (listId >= t._numItems) listId = t._numItems - 1; // 以防设置了numItems之后layout的尺寸还未更新

    if (!t._virtual && t._layout && t._layout.enabled) t._layout.updateLayout();
    var pos = t.getItemPos(listId);

    if (!pos) {
      return CC_DEV && cc.error('pos is null', listId);
    }

    var targetX, targetY;

    switch (t._alignCalcType) {
      case 1:
        //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
        targetX = pos.left;
        if (offset != null) targetX -= t.node.width * offset;else targetX -= t._leftGap;
        pos = new cc.v2(targetX, 0);
        break;

      case 2:
        //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
        targetX = pos.right - t.node.width;
        if (offset != null) targetX += t.node.width * offset;else targetX += t._rightGap;
        pos = new cc.v2(targetX + t.content.width, 0);
        break;

      case 3:
        //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
        targetY = pos.top;
        if (offset != null) targetY += t.node.height * offset;else targetY += t._topGap;
        pos = new cc.v2(0, -targetY);
        break;

      case 4:
        //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
        targetY = pos.bottom + t.node.height;
        if (offset != null) targetY -= t.node.height * offset;else targetY -= t._bottomGap;
        pos = new cc.v2(0, -targetY + t.content.height);
        break;
    }

    var viewPos = t.content.getPosition();
    viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
    var comparePos = t._sizeType ? pos.y : pos.x;
    var runScroll = Math.abs((t._scrollPos != null ? t._scrollPos : viewPos) - comparePos) > .5; // cc.log(runScroll, t._scrollPos, viewPos, comparePos)
    // t._scrollView.stopAutoScroll();

    if (runScroll) {
      t._scrollPos = comparePos;
      t._scrollTolistId = listId;
      t._scrollToEndTime = new Date().getTime() / 1000 + timeInSecond;

      t._scrollView.scrollToOffset(pos, timeInSecond); // cc.log(listId, t.content.height, t.content.getPosition().y, pos.y);


      t._scrollToSo = t.scheduleOnce(function () {
        if (!t._adheringBarrier) {
          t.adhering = t._adheringBarrier = false;
        }

        t._scrollPos = t._scrollTolistId = t._scrollToEndTime = t._scrollToSo = null; //cc.log('2222222222', t._adheringBarrier)

        if (overStress) {
          // t.scrollTolistId = listId;
          var item = t.getItemBylistId(listId);

          if (item) {
            cc.tween(item).to(.1, {
              scale: 1.05
            }).to(.1, {
              scale: 1
            }).start();
          }
        }
      }, timeInSecond + .1);

      if (timeInSecond <= 0) {
        t._onScrolling();
      }
    }
  },

  /**
   * 计算当前滚动窗最近的Item
   */
  _calcNearestItem: function _calcNearestItem() {
    var t = this;
    t.nearestlistId = null;
    var data, center;
    if (t._virtual) t._calcViewPos();
    var vTop, vRight, vBottom, vLeft;
    vTop = t.viewTop;
    vRight = t.viewRight;
    vBottom = t.viewBottom;
    vLeft = t.viewLeft;
    var breakFor = false;

    for (var n = 0; n < t.content.childrenCount && !breakFor; n += t._colLineNum) {
      data = this._virtual ? this.displayData[n] : this._calcExistItemPos(n);

      if (data) {
        center = this._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;

        switch (this._alignCalcType) {
          case 1:
            //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
            if (data.right >= vLeft) {
              this.nearestlistId = data.id;
              if (vLeft > center) this.nearestlistId += this._colLineNum;
              breakFor = true;
            }

            break;

          case 2:
            //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
            if (data.left <= vRight) {
              this.nearestlistId = data.id;
              if (vRight < center) this.nearestlistId += this._colLineNum;
              breakFor = true;
            }

            break;

          case 3:
            //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
            if (data.bottom <= vTop) {
              this.nearestlistId = data.id;
              if (vTop < center) this.nearestlistId += this._colLineNum;
              breakFor = true;
            }

            break;

          case 4:
            //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
            if (data.top >= vBottom) {
              this.nearestlistId = data.id;
              if (vBottom > center) this.nearestlistId += this._colLineNum;
              breakFor = true;
            }

            break;
        }
      }
    } //判断最后一个Item。。。（哎，这些判断真心恶心，判断了前面的还要判断最后一个。。。一开始呢，就只有一个布局（单列布局），那时候代码才三百行，后来就想着完善啊，艹..这坑真深，现在这行数都一千五了= =||）


    data = this._virtual ? this.displayData[this.displayItemNum - 1] : this._calcExistItemPos(this._numItems - 1);

    if (data && data.id == t._numItems - 1) {
      center = t._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;

      switch (t._alignCalcType) {
        case 1:
          //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
          if (vRight > center) t.nearestlistId = data.id;
          break;

        case 2:
          //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
          if (vLeft < center) t.nearestlistId = data.id;
          break;

        case 3:
          //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
          if (vBottom < center) t.nearestlistId = data.id;
          break;

        case 4:
          //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
          if (vTop > center) t.nearestlistId = data.id;
          break;
      }
    } // cc.log('t.nearestlistId =', t.nearestlistId);

  },
  //上一页
  prePage: function prePage(timeInSecond) {
    // cc.log('👈');
    if (!this.checkInited()) return;
    if (timeInSecond == null) timeInSecond = .5;
    this.skipPage(this.curPageNum - 1, timeInSecond);
  },
  //下一页
  nextPage: function nextPage(timeInSecond) {
    // cc.log('👉');
    if (!this.checkInited()) return;
    if (timeInSecond == null) timeInSecond = .5;
    this.skipPage(this.curPageNum + 1, timeInSecond);
  },
  //跳转到第几页
  skipPage: function skipPage(pageNum, timeInSecond) {
    var t = this;
    if (!t.checkInited()) return;
    if (t._slideMode != SlideType.PAGE) return cc.error('This function is not allowed to be called, Must SlideMode = PAGE!');
    if (pageNum < 0 || pageNum >= t._numItems) return;
    if (t.curPageNum == pageNum) return; // cc.log(pageNum);

    t.curPageNum = pageNum;

    if (t.pageChangeEvent) {
      cc.Component.EventHandler.emitEvents([t.pageChangeEvent], pageNum);
    }

    t.scrollTo(pageNum, timeInSecond);
  },
  //计算 CustomSize（这个函数还是保留吧，某些罕见的情况的确还是需要手动计算customSize的）
  calcCustomSize: function calcCustomSize(numItems) {
    var t = this;
    if (!t.checkInited()) return;
    if (!t._itemTmp) return cc.error('Unset template item!');
    if (!t.renderEvent) return cc.error('Unset Render-Event!');
    t._customSize = {};
    var temp = cc.instantiate(t._itemTmp);
    t.content.addChild(temp);

    for (var n = 0; n < numItems; n++) {
      t.renderEvent(temp, n); // cc.Component.EventHandler.emitEvents([t.renderEvent], temp, n);

      if (temp.height != t._itemSize.height || temp.width != t._itemSize.width) {
        t._customSize[n] = t._sizeType ? temp.height : temp.width;
      }
    }

    if (!Object.keys(t._customSize).length) t._customSize = null;
    temp.removeFromParent();
    if (temp.destroy) temp.destroy();
    return t._customSize;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uVWlcXGxpc3QuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUeXBlIiwiY2MiLCJFbnVtIiwiU2xpZGVUeXBlIiwiU2VsZWN0ZWRUeXBlIiwibGlzdEl0ZW0iLCJyZXF1aXJlIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJlZGl0b3IiLCJkaXNhbGxvd011bHRpcGxlIiwibWVudSIsInJlcXVpcmVDb21wb25lbnQiLCJTY3JvbGxWaWV3IiwiZXhlY3V0aW9uT3JkZXIiLCJwcm9wZXJ0aWVzIiwidGVtcGxhdGVUeXBlIiwiTk9ERSIsInR5cGUiLCJ0bXBOb2RlIiwiTm9kZSIsInRvb2x0aXAiLCJDQ19ERVYiLCJ2aXNpYmxlIiwiYm9vbCIsInRtcFByZWZhYiIsIlByZWZhYiIsIlBSRUZBQiIsIl9zbGlkZU1vZGUiLCJzbGlkZU1vZGUiLCJnZXQiLCJzZXQiLCJ2YWwiLCJwYWdlRGlzdGFuY2UiLCJGbG9hdCIsInJhbmdlIiwic2xpZGUiLCJQQUdFIiwicGFnZUNoYW5nZUV2ZW50IiwiRXZlbnRIYW5kbGVyIiwiX3ZpcnR1YWwiLCJ2aXJ0dWFsIiwiX251bUl0ZW1zIiwiX29uU2Nyb2xsaW5nIiwiY3ljbGljIiwiTk9STUFMIiwibGFja0NlbnRlciIsImxhY2tTbGlkZSIsIl91cGRhdGVSYXRlIiwidXBkYXRlUmF0ZSIsIkludGVnZXIiLCJmcmFtZUJ5RnJhbWVSZW5kZXJOdW0iLCJyZW5kZXJFdmVudCIsIkZ1bmN0aW9uIiwic2VsZWN0ZWRNb2RlIiwiTk9ORSIsInJlcGVhdEV2ZW50U2luZ2xlIiwiU0lOR0xFIiwic2VsZWN0ZWRFdmVudCIsIl9zZWxlY3RlZElkIiwic2VsZWN0ZWRJZCIsInQiLCJpdGVtIiwiZ2V0SXRlbUJ5bGlzdElkIiwiX2xhc3RTZWxlY3RlZElkIiwic2VsZWN0ZWQiLCJsYXN0SXRlbSIsIl9hY3R1YWxOdW1JdGVtcyIsIk1VTFQiLCJzdWIiLCJtdWx0U2VsZWN0ZWQiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsInNlcmlhbGl6YWJsZSIsIm51bUl0ZW1zIiwiY2hlY2tJbml0ZWQiLCJlcnJvciIsIl9mb3JjZVVwZGF0ZSIsIl9yZXNpemVDb250ZW50IiwiX2N5Y2xpY051bSIsImN1clBhZ2VOdW0iLCJuZWFyZXN0bGlzdElkIiwibGF5b3V0IiwiY29udGVudCIsImdldENvbXBvbmVudCIsIkxheW91dCIsImVuYWJsZWQiLCJfZGVsUmVkdW5kYW50SXRlbSIsImZpcnN0bGlzdElkIiwibGVuIiwibiIsIl9jcmVhdGVPclVwZGF0ZUl0ZW0yIiwiX3VwZGF0ZUNvdW50ZXIiLCJfdXBkYXRlRG9uZSIsImRpc3BsYXlJdGVtTnVtIiwib25Mb2FkIiwiX2luaXQiLCJvbkRlc3Ryb3kiLCJpc1ZhbGlkIiwiX2l0ZW1UbXAiLCJkZXN0cm95IiwiX3Bvb2wiLCJjbGVhciIsIm9uRW5hYmxlIiwiX3JlZ2lzdGVyRXZlbnQiLCJfYW5pRGVsUnVuaW5nIiwiX2FuaURlbEl0ZW0iLCJfYW5pRGVsQmVmb3JlUG9zIiwicG9zaXRpb24iLCJfYW5pRGVsQmVmb3JlU2NhbGUiLCJzY2FsZSIsIl9hbmlEZWxDQiIsIm9uRGlzYWJsZSIsIl91bnJlZ2lzdGVyRXZlbnQiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIl9vblRvdWNoU3RhcnQiLCJfb25Ub3VjaFVwIiwiVE9VQ0hfQ0FOQ0VMIiwiX29uVG91Y2hDYW5jZWxsZWQiLCJfb25TY3JvbGxCZWdhbiIsIl9vblNjcm9sbEVuZGVkIiwiU0laRV9DSEFOR0VEIiwiX29uU2l6ZUNoYW5nZWQiLCJvZmYiLCJfaW5pdGVkIiwiX3Njcm9sbFZpZXciLCJuYW1lIiwiX2xheW91dCIsIl9hbGlnbiIsIl9yZXNpemVNb2RlIiwicmVzaXplTW9kZSIsIl9zdGFydEF4aXMiLCJzdGFydEF4aXMiLCJfdG9wR2FwIiwicGFkZGluZ1RvcCIsIl9yaWdodEdhcCIsInBhZGRpbmdSaWdodCIsIl9ib3R0b21HYXAiLCJwYWRkaW5nQm90dG9tIiwiX2xlZnRHYXAiLCJwYWRkaW5nTGVmdCIsIl9jb2x1bW5HYXAiLCJzcGFjaW5nWCIsIl9saW5lR2FwIiwic3BhY2luZ1kiLCJfY29sTGluZU51bSIsIl92ZXJ0aWNhbERpciIsInZlcnRpY2FsRGlyZWN0aW9uIiwiX2hvcml6b250YWxEaXIiLCJob3Jpem9udGFsRGlyZWN0aW9uIiwic2V0VGVtcGxhdGVJdGVtIiwiaW5zdGFudGlhdGUiLCJBREhFUklORyIsImluZXJ0aWEiLCJfb25Nb3VzZVdoZWVsIiwiX2xhc3REaXNwbGF5RGF0YSIsImRpc3BsYXlEYXRhIiwiTm9kZVBvb2wiLCJfcHJvY2Vzc0F1dG9TY3JvbGxpbmciLCJiaW5kIiwiX3N0YXJ0Qm91bmNlQmFja0lmTmVlZGVkIiwiVHlwZSIsIkhPUklaT05UQUwiLCJIb3Jpem9udGFsRGlyZWN0aW9uIiwiTEVGVF9UT19SSUdIVCIsIl9hbGlnbkNhbGNUeXBlIiwiUklHSFRfVE9fTEVGVCIsIlZFUlRJQ0FMIiwiVmVydGljYWxEaXJlY3Rpb24iLCJUT1BfVE9fQk9UVE9NIiwiQk9UVE9NX1RPX1RPUCIsIkdSSUQiLCJBeGlzRGlyZWN0aW9uIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJkdCIsImJyYWtpbmdGYWN0b3IiLCJfYXV0b1Njcm9sbEFjY3VtdWxhdGVkVGltZSIsInBlcmNlbnRhZ2UiLCJNYXRoIiwibWluIiwiX2F1dG9TY3JvbGxUb3RhbFRpbWUiLCJfYXV0b1Njcm9sbEF0dGVudWF0ZSIsInRpbWUiLCJuZXdQb3NpdGlvbiIsIl9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiIsImFkZCIsIl9hdXRvU2Nyb2xsVGFyZ2V0RGVsdGEiLCJtdWwiLCJFUFNJTE9OIiwiZ2V0U2Nyb2xsRW5kZWRFdmVudFRpbWluZyIsInJlYWNoZWRFbmQiLCJhYnMiLCJmaXJlRXZlbnQiLCJfaXNTY3JvbGxFbmRlZFdpdGhUaHJlc2hvbGRFdmVudEZpcmVkIiwiX2Rpc3BhdGNoRXZlbnQiLCJfYXV0b1Njcm9sbGluZyIsImRlbHRhTW92ZSIsImdldENvbnRlbnRQb3NpdGlvbiIsIl9tb3ZlQ29udGVudCIsIl9jbGFtcERlbHRhIiwiX2lzQm91bmNpbmciLCJfc2Nyb2xsaW5nIiwiUmVzaXplTW9kZSIsIkNISUxEUkVOIiwiX2l0ZW1TaXplIiwiY2VsbFNpemUiLCJzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJjb20iLCJyZW1vdmUiLCJXaWRnZXQiLCJfbmVlZFVwZGF0ZVdpZGdldCIsIl9zaXplVHlwZSIsInRyaW1XIiwiZmxvb3IiLCJ0cmltSCIsInByaW50TG9nIiwicmVzdWx0IiwiX2N1c3RvbVNpemUiLCJmaXhlZCIsIl9nZXRGaXhlZFNpemUiLCJjb3VudCIsImxpbmVOdW0iLCJjZWlsIiwiY29sTnVtIiwiX2FsbEl0ZW1TaXplIiwiX2FsbEl0ZW1TaXplTm9FZGdlIiwidG90YWxTaXplIiwiX2N5Y2xpY1BvczEiLCJzcGFjaW5nIiwiX2N5Y2xpY1BvczIiLCJfY3ljbGljQWxsSXRlbVNpemUiLCJfY3ljaWxjQWxsSXRlbVNpemVOb0VkZ2UiLCJfbGFjayIsInNsaWRlT2Zmc2V0IiwidGFyZ2V0V0giLCJldiIsImZyYW1lQ291bnQiLCJzY3JvbGxQb3MiLCJnZXRQb3NpdGlvbiIsInkiLCJ4IiwiYWRkVmFsIiwidjIiLCJpc0F1dG9TY3JvbGxpbmciLCJfY2FsY1ZpZXdQb3MiLCJ2VG9wIiwidlJpZ2h0IiwidkJvdHRvbSIsInZMZWZ0Iiwidmlld1RvcCIsInZpZXdCb3R0b20iLCJ2aWV3UmlnaHQiLCJ2aWV3TGVmdCIsIml0ZW1Qb3MiLCJjdXJJZCIsImVuZElkIiwiYnJlYWtGb3IiLCJfY2FsY0l0ZW1Qb3MiLCJyaWdodCIsImxlZnQiLCJsZW5ndGgiLCJib3R0b20iLCJ0b3AiLCJ3dyIsImhoIiwiaWQiLCJoYXZlRGF0YUNoYW5nZSIsInNvcnQiLCJhIiwiYiIsIl9kb25lQWZ0ZXJVcGRhdGUiLCJjIiwiX2NyZWF0ZU9yVXBkYXRlSXRlbSIsIl9jYWxjTmVhcmVzdEl0ZW0iLCJlbGFzdGljTGVmdCIsImVsYXN0aWNSaWdodCIsImVsYXN0aWNUb3AiLCJlbGFzdGljQm90dG9tIiwiaXRlbVgiLCJpdGVtWSIsImNzIiwib2Zmc2V0IiwiYW5jaG9yWCIsImFuY2hvclkiLCJjb2xMaW5lIiwiX2NhbGNFeGlzdEl0ZW1Qb3MiLCJkYXRhIiwiZ2V0SXRlbVBvcyIsImxpc3RJZCIsInBhcnNlSW50IiwiX2JlZ2FuUG9zIiwiY3VyU2Nyb2xsaXN0b3VjaCIsInNjcm9sbFRvbGlzdElkIiwidHdlZW4iLCJ0byIsInN0YXJ0IiwiYWRoZXJpbmciLCJhZGhlcmUiLCJfcGFnZUFkaGVyZSIsImNhcHR1cmVsaXN0ZW5lcnMiLCJfaGFzTmVzdGVkVmlld0dyb3VwIiwiaXNNZSIsImV2ZW50UGhhc2UiLCJFdmVudCIsIkFUX1RBUkdFVCIsInRhcmdldCIsIml0ZW1Ob2RlIiwiX2xpc3RJZCIsInBhcmVudCIsIl9zY3JvbGxJdGVtIiwiX3Njcm9sbFBvcyIsIl9hZGhlcmluZ0JhcnJpZXIiLCJzaW11bGF0ZSIsIl9vbkl0ZW1BZGFwdGl2ZSIsInVwZGF0ZUFsbCIsIl9zY3JvbGxUb2xpc3RJZCIsInVuc2NoZWR1bGUiLCJfc2Nyb2xsVG9TbyIsInNjcm9sbFRvIiwibWF4IiwiX3Njcm9sbFRvRW5kVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiY3VyUG9zIiwiZGlzIiwiY2FuU2tpcCIsInRpbWVJblNlY29uZCIsInByZVBhZ2UiLCJuZXh0UGFnZSIsInVwZGF0ZSIsImNhbkdldCIsInNldENvbnRlbnRTaXplIiwic2V0UG9zaXRpb24iLCJfcmVzZXRJdGVtU2l6ZSIsImFkZENoaWxkIiwid2lkZ2V0IiwidXBkYXRlQWxpZ25tZW50Iiwic2V0U2libGluZ0luZGV4IiwiY2hpbGRyZW5Db3VudCIsIl9saXN0IiwiX3VwZGF0ZWxpc3RJdGVtIiwiY2hpbGRyZW4iLCJfdXBkYXRlSXRlbVBvcyIsImxpc3RJZE9ySXRlbSIsImlzTmFOIiwicG9zIiwic2V0TXVsdFNlbGVjdGVkIiwiYXJncyIsIkFycmF5IiwiaXNBcnJheSIsImdldE11bHRTZWxlY3RlZCIsImhhc011bHRTZWxlY3RlZCIsInVwZGF0ZUl0ZW0iLCJfZ2V0T3V0c2lkZUl0ZW0iLCJmaW5kIiwiZCIsImFyciIsImlzQ2FjaGVkIiwicHV0IiwibSIsIl9kZWxTaW5nbGVJdGVtIiwicmVtb3ZlRnJvbVBhcmVudCIsImFuaURlbEl0ZW0iLCJjYWxsRnVuYyIsImFuaVR5cGUiLCJ3YXJuIiwiY3VyTGFzdElkIiwicmVzZXRTZWxlY3RlZElkIiwic2hvd0FuaSIsIm5ld0lkIiwibmV3RGF0YSIsIm5ld0N1c3RvbVNpemUiLCJzZWMiLCJoYXZlQ0IiLCJwb3NEYXRhIiwiY2FsbCIsIm92ZXJTdHJlc3MiLCJ1cGRhdGVMYXlvdXQiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsInZpZXdQb3MiLCJjb21wYXJlUG9zIiwicnVuU2Nyb2xsIiwic2Nyb2xsVG9PZmZzZXQiLCJzY2hlZHVsZU9uY2UiLCJjZW50ZXIiLCJza2lwUGFnZSIsInBhZ2VOdW0iLCJlbWl0RXZlbnRzIiwiY2FsY0N1c3RvbVNpemUiLCJ0ZW1wIiwiT2JqZWN0Iiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBTUEsSUFBTUEsWUFBWSxHQUFHQyxFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUN6QixVQUFRLENBRGlCO0FBRXpCLFlBQVU7QUFGZSxDQUFSLENBQXJCO0FBSUEsSUFBTUMsU0FBUyxHQUFHRixFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUN0QixZQUFVLENBRFk7QUFDVDtBQUNiLGNBQVksQ0FGVTtBQUVQO0FBQ2YsVUFBUSxDQUhjLENBR1Q7O0FBSFMsQ0FBUixDQUFsQjtBQUtBLElBQU1FLFlBQVksR0FBR0gsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDekIsVUFBUSxDQURpQjtBQUV6QixZQUFVLENBRmU7QUFFWjtBQUNiLFVBQVEsQ0FIaUIsQ0FHZDs7QUFIYyxDQUFSLENBQXJCOztBQU1BLElBQU1HLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBRUFMLEVBQUUsQ0FBQ00sS0FBSCxDQUFTO0FBQ0wsYUFBU04sRUFBRSxD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V0FBT3hDLENBQUMsQ0FBQ2tLLFdBQVQ7QUFDSDtBQTMrREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAYXV0aG9yIGtMIDxrbGswQHFxLmNvbT5cclxuICogQGRhdGUgMjAxOS8xLzVcclxuICogQGRvYyDliJfooajnu4Tku7YuXHJcbiAqIEBlbmRcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuY29uc3QgVGVtcGxhdGVUeXBlID0gY2MuRW51bSh7XHJcbiAgICAnTk9ERSc6IDEsXHJcbiAgICAnUFJFRkFCJzogMixcclxufSk7XHJcbmNvbnN0IFNsaWRlVHlwZSA9IGNjLkVudW0oe1xyXG4gICAgJ05PUk1BTCc6IDEsIC8v5pmu6YCaXHJcbiAgICAnQURIRVJJTkcnOiAyLCAvL+eymOmZhOaooeW8j++8jOWwhuW8uuWItuWFs+mXrea7muWKqOaDr+aAp1xyXG4gICAgJ1BBR0UnOiAzLCAgIC8v6aG16Z2i5qih5byP77yM5bCG5by65Yi25YWz6Zet5rua5Yqo5oOv5oCnXHJcbn0pO1xyXG5jb25zdCBTZWxlY3RlZFR5cGUgPSBjYy5FbnVtKHtcclxuICAgICdOT05FJzogMCxcclxuICAgICdTSU5HTEUnOiAxLCAvL+WNlemAiVxyXG4gICAgJ01VTFQnOiAyLCAvL+WkmumAiVxyXG59KTtcclxuXHJcbmNvbnN0IGxpc3RJdGVtID0gcmVxdWlyZSgnbGlzdEl0ZW0nKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBlZGl0b3I6IHtcclxuICAgICAgICBkaXNhbGxvd011bHRpcGxlOiBmYWxzZSxcclxuICAgICAgICBtZW51OiAn6Ieq5a6a5LmJ57uE5Lu2L2xpc3QnLFxyXG4gICAgICAgIHJlcXVpcmVDb21wb25lbnQ6IGNjLlNjcm9sbFZpZXcsXHJcbiAgICAgICAgLy/ohJrmnKznlJ/lkb3lkajmnJ/lm57osIPnmoTmiafooYzkvJjlhYjnuqfjgILlsI/kuo4gMCDnmoTohJrmnKzlsIbkvJjlhYjmiafooYzvvIzlpKfkuo4gMCDnmoTohJrmnKzlsIbmnIDlkI7miafooYzjgILor6XkvJjlhYjnuqflj6rlr7kgb25Mb2FkLCBvbkVuYWJsZSwgc3RhcnQsIHVwZGF0ZSDlkowgbGF0ZVVwZGF0ZSDmnInmlYjvvIzlr7kgb25EaXNhYmxlIOWSjCBvbkRlc3Ryb3kg5peg5pWI44CCXHJcbiAgICAgICAgZXhlY3V0aW9uT3JkZXI6IC01MDAwLFxyXG4gICAgfSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGVtcGxhdGVUeXBlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFRlbXBsYXRlVHlwZS5OT0RFLFxyXG4gICAgICAgICAgICB0eXBlOiBUZW1wbGF0ZVR5cGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0bXBOb2RlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnSXRlbeaooeeJiO+8jHR5cGU6Y2MuTm9kZScsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBib29sID0gdGhpcy50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLk5PREU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJvb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50bXBOb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0bXBQcmVmYWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ0l0ZW3mqKHniYjvvIx0eXBlOmNjLlByZWZhYicsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBib29sID0gdGhpcy50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLlBSRUZBQjtcclxuICAgICAgICAgICAgICAgIGlmICghYm9vbClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRtcFByZWZhYiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3NsaWRlTW9kZTogMSxcclxuICAgICAgICBzbGlkZU1vZGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU2xpZGVUeXBlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+a7keWKqOaooeW8jycsXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2xpZGVNb2RlID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdlRGlzdGFuY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogLjMsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgICAgICByYW5nZTogWzAsIDEsIC4xXSxcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfnv7vpobXkvZznlKjot53nprsnLFxyXG4gICAgICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2VDaGFuZ2VFdmVudDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+mhtemdouaUueWPmOS6i+S7ticsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBib29sID0gdGhpcy5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFib29sKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUNoYW5nZUV2ZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3ZpcnR1YWw6IHRydWUsXHJcbiAgICAgICAgdmlydHVhbDoge1xyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aYr+WQpuS4uuiZmuaLn+WIl+ihqO+8iOWKqOaAgeWIl+ihqO+8iScsXHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmlydHVhbCA9IHZhbDtcclxuICAgICAgICAgICAgICAgIGlmICghQ0NfREVWICYmIHRoaXMuX251bUl0ZW1zICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblNjcm9sbGluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjeWNsaWM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5piv5ZCm5Li65b6q546v5YiX6KGoJyxcclxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IC8qdGhpcy52aXJ0dWFsICYmKi8gdGhpcy5zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLk5PUk1BTDtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3ljbGljID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFja0NlbnRlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdJdGVt5pWw6YeP5LiN6Laz5Lul5aGr5ruhQ29udGVudOaXtu+8jOaYr+WQpuWxheS4reaYvuekukl0ZW3vvIjkuI3mlK/mjIFHcmlk5biD5bGA77yJJyxcclxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlydHVhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFja1NsaWRlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ0l0ZW3mlbDph4/kuI3otrPku6Xloavmu6FDb250ZW505pe277yM5piv5ZCm5Y+v5ruR5YqoJyxcclxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMudmlydHVhbCAmJiAhdGhpcy5sYWNrQ2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWNrU2xpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIF91cGRhdGVSYXRlOiAwLFxyXG4gICAgICAgIHVwZGF0ZVJhdGU6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcclxuICAgICAgICAgICAgcmFuZ2U6IFswLCA2LCAxXSxcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfliLfmlrDpopHnjofvvIjlgLzotorlpKfliLfmlrDpopHnjofotorkvY7jgIHmgKfog73otorpq5jvvIknLFxyXG4gICAgICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVJhdGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWwgPj0gMCAmJiB2YWwgPD0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJhdGUgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyYW1lQnlGcmFtZVJlbmRlck51bToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxyXG4gICAgICAgICAgICByYW5nZTogWzAsIDEyLCAxXSxcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfpgJDluKfmuLLmn5Pml7bvvIzmr4/luKfmuLLmn5PnmoRJdGVt5pWw6YeP77yIPD0w5pe25YWz6Zet5YiG5bin5riy5p+T77yJJyxcclxuICAgICAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW5kZXJFdmVudDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmuLLmn5Pkuovku7bvvIjmuLLmn5PlmajvvIknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0ZWRNb2RlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFNlbGVjdGVkVHlwZS5OT05FLFxyXG4gICAgICAgICAgICB0eXBlOiBTZWxlY3RlZFR5cGUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn6YCJ5oup5qih5byPJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlcGVhdEV2ZW50U2luZ2xlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aYr+WQpumHjeWkjeWTjeW6lOWNlemAieS6i+S7ticsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU0lOR0xFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RlZEV2ZW50OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+inpuWPkemAieaLqeS6i+S7ticsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBib29sID0gdGhpcy5zZWxlY3RlZE1vZGUgPiAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFib29sKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFdmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9zZWxlY3RlZElkOiAtMSxcclxuICAgICAgICBzZWxlY3RlZElkOiB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZElkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0LnNlbGVjdGVkTW9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLlNJTkdMRToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXQucmVwZWF0RXZlbnRTaW5nbGUgJiYgdmFsID09IHQuX3NlbGVjdGVkSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0LmdldEl0ZW1CeWxpc3RJZCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIWl0ZW0gJiYgdmFsID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Ll9zZWxlY3RlZElkID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9sYXN0U2VsZWN0ZWRJZCA9IHQuX3NlbGVjdGVkSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgLy/lpoLmnpzvvJww5YiZ5Y+W5raI6YCJ5oup77yM5oqKX2xhc3RTZWxlY3RlZElk5Lmf572u56m65ZCn77yM5aaC5p6c5Lul5ZCO5pyJ54m55q6K6ZyA5rGC5YaN5pS55ZCn44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9sYXN0U2VsZWN0ZWRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX3NlbGVjdGVkSWQgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5saXN0SXRlbS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Ll9sYXN0U2VsZWN0ZWRJZCA+PSAwICYmIHQuX2xhc3RTZWxlY3RlZElkICE9IHQuX3NlbGVjdGVkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0SXRlbSA9IHQuZ2V0SXRlbUJ5bGlzdElkKHQuX2xhc3RTZWxlY3RlZElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJdGVtLmxpc3RJdGVtLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5zZWxlY3RlZEV2ZW50KGl0ZW0sIHZhbCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zLCB0Ll9sYXN0U2VsZWN0ZWRJZCA9PSBudWxsID8gbnVsbCA6ICh0Ll9sYXN0U2VsZWN0ZWRJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3Quc2VsZWN0ZWRFdmVudF0sIGl0ZW0sIHZhbCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zLCB0Ll9sYXN0U2VsZWN0ZWRJZCA9PSBudWxsID8gbnVsbCA6ICh0Ll9sYXN0U2VsZWN0ZWRJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLk1VTFQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5bGlzdElkKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuX3NlbGVjdGVkSWQgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2xhc3RTZWxlY3RlZElkID0gdC5fc2VsZWN0ZWRJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZCA9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2wgPSAhaXRlbS5saXN0SXRlbS5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5saXN0SXRlbS5zZWxlY3RlZCA9IGJvb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdWIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib29sICYmIHN1YiA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnB1c2godmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghYm9vbCAmJiBzdWIgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5zZWxlY3RlZEV2ZW50KGl0ZW0sIHZhbCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zLCB0Ll9sYXN0U2VsZWN0ZWRJZCA9PSBudWxsID8gbnVsbCA6ICh0Ll9sYXN0U2VsZWN0ZWRJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3Quc2VsZWN0ZWRFdmVudF0sIGl0ZW0sIHZhbCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zLCB0Ll9sYXN0U2VsZWN0ZWRJZCA9PSBudWxsID8gbnVsbCA6ICh0Ll9sYXN0U2VsZWN0ZWRJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKSwgYm9vbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX251bUl0ZW1zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBudW1JdGVtczoge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjdHVhbE51bUl0ZW1zO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsID09IG51bGwgfHwgdmFsIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKCdudW1JdGVtcyBzZXQgdGhlIHdyb25nOjonLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHQuX2FjdHVhbE51bUl0ZW1zID0gdC5fbnVtSXRlbXMgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB0Ll9mb3JjZVVwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHQuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9yZXNpemVDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuY3ljbGljKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX251bUl0ZW1zID0gdC5fY3ljbGljTnVtICogdC5fbnVtSXRlbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0LmZyYW1lQnlGcmFtZVJlbmRlck51bSAmJiB0LnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5jdXJQYWdlTnVtID0gdC5uZWFyZXN0bGlzdElkO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5jeWNsaWMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fcmVzaXplQ29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9udW1JdGVtcyA9IHQuX2N5Y2xpY051bSAqIHQuX251bUl0ZW1zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGF5b3V0ID0gdC5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0Ll9kZWxSZWR1bmRhbnRJdGVtKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHQuZmlyc3RsaXN0SWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0LmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lhYjmuLLmn5Plh6DkuKrlh7rmnaVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxlbiA9IHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gdC5fbnVtSXRlbXMgPyB0Ll9udW1JdGVtcyA6IHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGxlbjsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmZyYW1lQnlGcmFtZVJlbmRlck51bSA8IHQuX251bUl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll91cGRhdGVDb3VudGVyID0gdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll91cGRhdGVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHQuX251bUl0ZW1zOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5kaXNwbGF5SXRlbU51bSA9IHQuX251bUl0ZW1zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodC5faXRlbVRtcCkpXHJcbiAgICAgICAgICAgIHQuX2l0ZW1UbXAuZGVzdHJveSgpO1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHQudG1wTm9kZSkpXHJcbiAgICAgICAgICAgIHQudG1wTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdC5fcG9vbCAmJiB0Ll9wb29sLmNsZWFyKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIC8vIGlmICghQ0NfRURJVE9SKVxyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICAgICAgLy8g5aSE55CG6YeN5paw5pi+56S65ZCO77yM5pyJ5Y+v6IO95LiK5LiA5qyh55qE5Yqo55S756e76Zmk6L+Y5pyq5pKt5pS+5a6M5q+V77yM5a+86Ie05Yqo55S75Y2h5L2P55qE6Zeu6aKYXHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaURlbFJ1bmluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmlEZWxSdW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FuaURlbEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmlEZWxCZWZvcmVQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmlEZWxJdGVtLnBvc2l0aW9uID0gdGhpcy5fYW5pRGVsQmVmb3JlUG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hbmlEZWxCZWZvcmVQb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYW5pRGVsQmVmb3JlU2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbmlEZWxJdGVtLnNjYWxlID0gdGhpcy5fYW5pRGVsQmVmb3JlU2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FuaURlbEJlZm9yZVNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FuaURlbEl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FuaURlbENCKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmlEZWxDQigpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2FuaURlbENCO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgLy8gaWYgKCFDQ19FRElUT1IpXHJcbiAgICAgICAgdGhpcy5fdW5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICB9LFxyXG4gICAgLy/ms6jlhozkuovku7ZcclxuICAgIF9yZWdpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHQuX29uVG91Y2hTdGFydCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKCd0b3VjaC11cCcsIHQuX29uVG91Y2hVcCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdC5fb25Ub3VjaENhbmNlbGxlZCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGwtYmVnYW4nLCB0Ll9vblNjcm9sbEJlZ2FuLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub24oJ3Njcm9sbC1lbmRlZCcsIHQuX29uU2Nyb2xsRW5kZWQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbignc2Nyb2xsaW5nJywgdC5fb25TY3JvbGxpbmcsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHQuX29uU2l6ZUNoYW5nZWQsIHQpO1xyXG4gICAgfSxcclxuICAgIC8v5Y246L295LqL5Lu2XHJcbiAgICBfdW5yZWdpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0Ll9vblRvdWNoU3RhcnQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoJ3RvdWNoLXVwJywgdC5fb25Ub3VjaFVwLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdC5fb25Ub3VjaENhbmNlbGxlZCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZignc2Nyb2xsLWJlZ2FuJywgdC5fb25TY3JvbGxCZWdhbiwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZignc2Nyb2xsLWVuZGVkJywgdC5fb25TY3JvbGxFbmRlZCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZignc2Nyb2xsaW5nJywgdC5fb25TY3JvbGxpbmcsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0Ll9vblNpemVDaGFuZ2VkLCB0KTtcclxuICAgIH0sXHJcbiAgICAvL+WIneWni+WMluWQhOenjS4uXHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuX2luaXRlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0Ll9zY3JvbGxWaWV3ID0gdC5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcclxuXHJcbiAgICAgICAgdC5jb250ZW50ID0gdC5fc2Nyb2xsVmlldy5jb250ZW50O1xyXG4gICAgICAgIGlmICghdC5jb250ZW50KSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKHQubm9kZS5uYW1lICsgXCIncyBjYy5TY3JvbGxWaWV3IHVuc2V0IGNvbnRlbnQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0Ll9sYXlvdXQgPSB0LmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcblxyXG4gICAgICAgIHQuX2FsaWduID0gdC5fbGF5b3V0LnR5cGU7IC8v5o6S5YiX5qih5byPXHJcbiAgICAgICAgdC5fcmVzaXplTW9kZSA9IHQuX2xheW91dC5yZXNpemVNb2RlOyAvL+iHqumAguW6lOaooeW8j1xyXG4gICAgICAgIHQuX3N0YXJ0QXhpcyA9IHQuX2xheW91dC5zdGFydEF4aXM7XHJcblxyXG4gICAgICAgIHQuX3RvcEdhcCA9IHQuX2xheW91dC5wYWRkaW5nVG9wOyAgICAgICAvL+mhtui+uei3nVxyXG4gICAgICAgIHQuX3JpZ2h0R2FwID0gdC5fbGF5b3V0LnBhZGRpbmdSaWdodDsgICAvL+WPs+i+uei3nVxyXG4gICAgICAgIHQuX2JvdHRvbUdhcCA9IHQuX2xheW91dC5wYWRkaW5nQm90dG9tOyAvL+W6lei+uei3nVxyXG4gICAgICAgIHQuX2xlZnRHYXAgPSB0Ll9sYXlvdXQucGFkZGluZ0xlZnQ7ICAgICAvL+W3pui+uei3nVxyXG5cclxuICAgICAgICB0Ll9jb2x1bW5HYXAgPSB0Ll9sYXlvdXQuc3BhY2luZ1g7ICAgICAgLy/liJfot51cclxuICAgICAgICB0Ll9saW5lR2FwID0gdC5fbGF5b3V0LnNwYWNpbmdZOyAgICAgICAgLy/ooYzot51cclxuXHJcbiAgICAgICAgdC5fY29sTGluZU51bTsgLy/liJfmlbDmiJbooYzmlbDvvIjpnZ5HUklE5qih5byP5YiZPTHvvIzooajnpLrljZXliJfmiJbljZXooYzvvIk7XHJcblxyXG4gICAgICAgIHQuX3ZlcnRpY2FsRGlyID0gdC5fbGF5b3V0LnZlcnRpY2FsRGlyZWN0aW9uOyAvL+WeguebtOaOkuWIl+WtkOiKgueCueeahOaWueWQkVxyXG4gICAgICAgIHQuX2hvcml6b250YWxEaXIgPSB0Ll9sYXlvdXQuaG9yaXpvbnRhbERpcmVjdGlvbjsgLy/msLTlubPmjpLliJflrZDoioLngrnnmoTmlrnlkJFcclxuXHJcbiAgICAgICAgdC5zZXRUZW1wbGF0ZUl0ZW0oY2MuaW5zdGFudGlhdGUodC50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLlBSRUZBQiA/IHQudG1wUHJlZmFiIDogdC50bXBOb2RlKSk7XHJcblxyXG4gICAgICAgIC8vIOeJueWumueahOa7keWKqOaooeW8j+WkhOeQhlxyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HIHx8IHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3LmluZXJ0aWEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXQudmlydHVhbCkgICAgICAgICAvLyBsYWNrQ2VudGVyIOS7heaUr+aMgSBWaXJ0dWFsIOaooeW8j1xyXG4gICAgICAgICAgICB0LmxhY2tDZW50ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdC5fbGFzdERpc3BsYXlEYXRhID0gW107Ly/mnIDlkI7kuIDmrKHliLfmlrDnmoTmlbDmja5cclxuICAgICAgICB0LmRpc3BsYXlEYXRhID0gW107ICAgICAvL+W9k+WJjeaVsOaNrlxyXG4gICAgICAgIHQuX3Bvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTsgICAgLy/ov5nmmK/kuKrmsaDlrZAuLlxyXG4gICAgICAgIHQuX2ZvcmNlVXBkYXRlID0gZmFsc2U7IC8v5piv5ZCm5by65Yi25pu05pawXHJcbiAgICAgICAgdC5fdXBkYXRlQ291bnRlciA9IDA7ICAgLy/lvZPliY3liIbluKfmuLLmn5PluKfmlbBcclxuICAgICAgICB0Ll91cGRhdGVEb25lID0gdHJ1ZTsgICAvL+WIhuW4p+a4suafk+aYr+WQpuWujOaIkFxyXG5cclxuICAgICAgICB0LmN1clBhZ2VOdW0gPSAwOyAgIC8v5b2T5YmN6aG15pWwXHJcblxyXG4gICAgICAgIGlmICh0LmN5Y2xpYykgeyAvLyDlpoLmnpzmmK/lvqrnjq/liJfooajvvIzopoblhpnkuIDkuptjYy5TY3JvbGxWaWV355qE5Ye95pWwXHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcuX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nID0gdGhpcy5fcHJvY2Vzc0F1dG9TY3JvbGxpbmcuYmluZCh0KTtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5fc3RhcnRCb3VuY2VCYWNrSWZOZWVkZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX2hvcml6b250YWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0Ll92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmuIXnqbogY29udGVudFxyXG4gICAgICAgIC8vIHQuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAvLyAgICAgY2hpbGQucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIC8vICAgICBpZiAoY2hpbGQuaXNWYWxpZClcclxuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0LmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0Ll9pbml0ZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5Li65LqG5a6e546w5b6q546v5YiX6KGo77yM5b+F6aG76KaG5YaZY2MuU2Nyb2xsVmlld+eahOafkOS6m+WHveaVsFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGR0XHJcbiAgICAgKi9cclxuICAgIF9wcm9jZXNzQXV0b1Njcm9sbGluZyhkdCkge1xyXG4gICAgICAgIC8vIGxldCBpc0F1dG9TY3JvbGxCcmFrZSA9IHRoaXMuX3Njcm9sbFZpZXcuX2lzTmVjZXNzYXJ5QXV0b1Njcm9sbEJyYWtlKCk7XHJcbiAgICAgICAgbGV0IGJyYWtpbmdGYWN0b3IgPSAxO1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxBY2N1bXVsYXRlZFRpbWUgKz0gZHQgKiAoMSAvIGJyYWtpbmdGYWN0b3IpO1xyXG5cclxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IE1hdGgubWluKDEsIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxBY2N1bXVsYXRlZFRpbWUgLyB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsVG90YWxUaW1lKTtcclxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbEF0dGVudWF0ZSkge1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IHBlcmNlbnRhZ2UgLSAxO1xyXG4gICAgICAgICAgICBwZXJjZW50YWdlID0gdGltZSAqIHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWUgKyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uYWRkKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxUYXJnZXREZWx0YS5tdWwocGVyY2VudGFnZSkpO1xyXG4gICAgICAgIGxldCBFUFNJTE9OID0gdGhpcy5fc2Nyb2xsVmlldy5nZXRTY3JvbGxFbmRlZEV2ZW50VGltaW5nKCk7XHJcbiAgICAgICAgbGV0IHJlYWNoZWRFbmQgPSBNYXRoLmFicyhwZXJjZW50YWdlIC0gMSkgPD0gRVBTSUxPTjtcclxuICAgICAgICAvLyBjYy5sb2cocmVhY2hlZEVuZCwgTWF0aC5hYnMocGVyY2VudGFnZSAtIDEpLCBFUFNJTE9OKVxyXG5cclxuICAgICAgICBsZXQgZmlyZUV2ZW50ID0gTWF0aC5hYnMocGVyY2VudGFnZSAtIDEpIDw9IHRoaXMuX3Njcm9sbFZpZXcuZ2V0U2Nyb2xsRW5kZWRFdmVudFRpbWluZygpO1xyXG4gICAgICAgIGlmIChmaXJlRXZlbnQgJiYgIXRoaXMuX3Njcm9sbFZpZXcuX2lzU2Nyb2xsRW5kZWRXaXRoVGhyZXNob2xkRXZlbnRGaXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9kaXNwYXRjaEV2ZW50KCdzY3JvbGwtZW5kZWQtd2l0aC10aHJlc2hvbGQnKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5faXNTY3JvbGxFbmRlZFdpdGhUaHJlc2hvbGRFdmVudEZpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLl9zY3JvbGxWaWV3LmVsYXN0aWMgJiYgIXJlYWNoZWRFbmQpIHtcclxuICAgICAgICAvLyAgICAgbGV0IGJyYWtlT2Zmc2V0UG9zaXRpb24gPSBuZXdQb3NpdGlvbi5zdWIodGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbEJyYWtpbmdTdGFydFBvc2l0aW9uKTtcclxuICAgICAgICAvLyAgICAgaWYgKGlzQXV0b1Njcm9sbEJyYWtlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBicmFrZU9mZnNldFBvc2l0aW9uID0gYnJha2VPZmZzZXRQb3NpdGlvbi5tdWwoYnJha2luZ0ZhY3Rvcik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgbmV3UG9zaXRpb24gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsQnJha2luZ1N0YXJ0UG9zaXRpb24uYWRkKGJyYWtlT2Zmc2V0UG9zaXRpb24pO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBtb3ZlRGVsdGEgPSBuZXdQb3NpdGlvbi5zdWIodGhpcy5fc2Nyb2xsVmlldy5nZXRDb250ZW50UG9zaXRpb24oKSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBvdXRPZkJvdW5kYXJ5ID0gdGhpcy5fc2Nyb2xsVmlldy5fZ2V0SG93TXVjaE91dE9mQm91bmRhcnkobW92ZURlbHRhKTtcclxuICAgICAgICAvLyAgICAgaWYgKCFvdXRPZkJvdW5kYXJ5LmZ1enp5RXF1YWxzKGNjLnYyKDAsIDApLCBFUFNJTE9OKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgbmV3UG9zaXRpb24gPSBuZXdQb3NpdGlvbi5hZGQob3V0T2ZCb3VuZGFyeSk7XHJcbiAgICAgICAgLy8gICAgICAgICByZWFjaGVkRW5kID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKHJlYWNoZWRFbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRlbHRhTW92ZSA9IG5ld1Bvc2l0aW9uLnN1Yih0aGlzLl9zY3JvbGxWaWV3LmdldENvbnRlbnRQb3NpdGlvbigpKTtcclxuICAgICAgICAvLyBjYy5sb2coZGVsdGFNb3ZlKVxyXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX21vdmVDb250ZW50KHRoaXMuX3Njcm9sbFZpZXcuX2NsYW1wRGVsdGEoZGVsdGFNb3ZlKSwgcmVhY2hlZEVuZCk7XHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fZGlzcGF0Y2hFdmVudCgnc2Nyb2xsaW5nJyk7XHJcblxyXG4gICAgICAgIC8vIHNjb2xsVG8gQVBJIGNvbnRyb2xsIG1vdmVcclxuICAgICAgICBpZiAoIXRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5faXNCb3VuY2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9zY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fZGlzcGF0Y2hFdmVudCgnc2Nyb2xsLWVuZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v6K6+572u5qih5p2/SXRlbVxyXG4gICAgc2V0VGVtcGxhdGVJdGVtKGl0ZW0pIHtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgdC5faXRlbVRtcCA9IGl0ZW07XHJcblxyXG4gICAgICAgIGlmICh0Ll9yZXNpemVNb2RlID09IGNjLkxheW91dC5SZXNpemVNb2RlLkNISUxEUkVOKVxyXG4gICAgICAgICAgICB0Ll9pdGVtU2l6ZSA9IHQuX2xheW91dC5jZWxsU2l6ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHQuX2l0ZW1TaXplID0gbmV3IGNjLnNpemUoaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvL+iOt+WPlmxpc3RJdGVt77yM5aaC5p6c5rKh5pyJ5bCx5Y+W5raI6YCJ5oup5qih5byPXHJcbiAgICAgICAgbGV0IGNvbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KCdsaXN0SXRlbScpO1xyXG4gICAgICAgIGxldCByZW1vdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIWNvbSlcclxuICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcclxuICAgICAgICAvLyBpZiAoY29tKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICghY29tLl9idG5Db20gJiYgIWl0ZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHJlbW92ZSkge1xyXG4gICAgICAgICAgICB0LnNlbGVjdGVkTW9kZSA9IFNlbGVjdGVkVHlwZS5OT05FO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb20gPSBpdGVtLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIGlmIChjb20gJiYgY29tLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdC5fbmVlZFVwZGF0ZVdpZGdldCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0LnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuTVVMVClcclxuICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gMTtcclxuICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+WIl+aVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpbVcgPSB0LmNvbnRlbnQud2lkdGggLSB0Ll9sZWZ0R2FwIC0gdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSBNYXRoLmZsb29yKCh0cmltVyArIHQuX2NvbHVtbkdhcCkgLyAodC5faXRlbVNpemUud2lkdGggKyB0Ll9jb2x1bW5HYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+ihjOaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpbUggPSB0LmNvbnRlbnQuaGVpZ2h0IC0gdC5fdG9wR2FwIC0gdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gTWF0aC5mbG9vcigodHJpbUggKyB0Ll9saW5lR2FwKSAvICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKyB0Ll9saW5lR2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l5piv5ZCm5Yid5aeL5YyWXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByaW50TG9nIOaYr+WQpuaJk+WNsOmUmeivr+S/oeaBr1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgY2hlY2tJbml0ZWQocHJpbnRMb2cpIHtcclxuICAgICAgICBwcmludExvZyA9IHByaW50TG9nID09IG51bGwgPyB0cnVlIDogcHJpbnRMb2c7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHByaW50TG9nKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcignbGlzdCBpbml0aWFsaXphdGlvbiBub3QgY29tcGxldGVkIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgLy/npoHnlKggTGF5b3V0IOe7hOS7tu+8jOiHquihjOiuoeeulyBDb250ZW50IFNpemVcclxuICAgIF9yZXNpemVDb250ZW50KCkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZCA9IHQuX2dldEZpeGVkU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX2xlZnRHYXAgKyBmaXhlZC52YWwgKyAodC5faXRlbVNpemUud2lkdGggKiAodC5fbnVtSXRlbXMgLSBmaXhlZC5jb3VudCkpICsgKHQuX2NvbHVtbkdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll9sZWZ0R2FwICsgKHQuX2l0ZW1TaXplLndpZHRoICogdC5fbnVtSXRlbXMpICsgKHQuX2NvbHVtbkdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDoge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQgPSB0Ll9nZXRGaXhlZFNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll90b3BHYXAgKyBmaXhlZC52YWwgKyAodC5faXRlbVNpemUuaGVpZ2h0ICogKHQuX251bUl0ZW1zIC0gZml4ZWQuY291bnQpKSArICh0Ll9saW5lR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll90b3BHYXAgKyAodC5faXRlbVNpemUuaGVpZ2h0ICogdC5fbnVtSXRlbXMpICsgKHQuX2xpbmVHYXAgKiAodC5fbnVtSXRlbXMgLSAxKSkgKyB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6IHtcclxuICAgICAgICAgICAgICAgIC8v572R5qC85qih5byP5LiN5pSv5oyB5bGF5LitXHJcbiAgICAgICAgICAgICAgICBpZiAodC5sYWNrQ2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHQubGFja0NlbnRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lTnVtID0gTWF0aC5jZWlsKHQuX251bUl0ZW1zIC8gdC5fY29sTGluZU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX3RvcEdhcCArICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKiBsaW5lTnVtKSArICh0Ll9saW5lR2FwICogKGxpbmVOdW0gLSAxKSkgKyB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xOdW0gPSBNYXRoLmNlaWwodC5fbnVtSXRlbXMgLyB0Ll9jb2xMaW5lTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fbGVmdEdhcCArICh0Ll9pdGVtU2l6ZS53aWR0aCAqIGNvbE51bSkgKyAodC5fY29sdW1uR2FwICogKGNvbE51bSAtIDEpKSArIHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGF5b3V0ID0gdC5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIGlmIChsYXlvdXQpXHJcbiAgICAgICAgICAgIGxheW91dC5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHQuX2FsbEl0ZW1TaXplID0gcmVzdWx0O1xyXG4gICAgICAgIHQuX2FsbEl0ZW1TaXplTm9FZGdlID0gdC5fYWxsSXRlbVNpemUgLSAodC5fc2l6ZVR5cGUgPyAodC5fdG9wR2FwICsgdC5fYm90dG9tR2FwKSA6ICh0Ll9sZWZ0R2FwICsgdC5fcmlnaHRHYXApKTtcclxuXHJcbiAgICAgICAgaWYgKHQuY3ljbGljKSB7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbFNpemUgPSAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcclxuXHJcbiAgICAgICAgICAgIHQuX2N5Y2xpY1BvczEgPSAwO1xyXG4gICAgICAgICAgICB0b3RhbFNpemUgLT0gdC5fY3ljbGljUG9zMTtcclxuICAgICAgICAgICAgdC5fY3ljbGljTnVtID0gTWF0aC5jZWlsKHRvdGFsU2l6ZSAvIHQuX2FsbEl0ZW1TaXplTm9FZGdlKSArIDE7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nID0gdC5fc2l6ZVR5cGUgPyB0Ll9saW5lR2FwIDogdC5fY29sdW1uR2FwO1xyXG4gICAgICAgICAgICB0Ll9jeWNsaWNQb3MyID0gdC5fY3ljbGljUG9zMSArIHQuX2FsbEl0ZW1TaXplTm9FZGdlICsgc3BhY2luZztcclxuICAgICAgICAgICAgdC5fY3ljbGljQWxsSXRlbVNpemUgPSB0Ll9hbGxJdGVtU2l6ZSArICh0Ll9hbGxJdGVtU2l6ZU5vRWRnZSAqICh0Ll9jeWNsaWNOdW0gLSAxKSkgKyAoc3BhY2luZyAqICh0Ll9jeWNsaWNOdW0gLSAxKSk7XHJcbiAgICAgICAgICAgIHQuX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlID0gdC5fYWxsSXRlbVNpemVOb0VkZ2UgKiB0Ll9jeWNsaWNOdW07XHJcbiAgICAgICAgICAgIHQuX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlICs9IHNwYWNpbmcgKiAodC5fY3ljbGljTnVtIC0gMSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZygnX2N5Y2xpY051bSAtPicsIHQuX2N5Y2xpY051bSwgdC5fYWxsSXRlbVNpemVOb0VkZ2UsIHQuX2FsbEl0ZW1TaXplLCB0Ll9jeWNsaWNQb3MxLCB0Ll9jeWNsaWNQb3MyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHQuX2xhY2sgPSAhdC5jeWNsaWMgJiYgdC5fYWxsSXRlbVNpemUgPCAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcclxuICAgICAgICBsZXQgc2xpZGVPZmZzZXQgPSAoKCF0Ll9sYWNrIHx8ICF0LmxhY2tDZW50ZXIpICYmIHQubGFja1NsaWRlKSA/IDAgOiAuMTtcclxuXHJcbiAgICAgICAgbGV0IHRhcmdldFdIID0gdC5fbGFjayA/ICgodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKSAtIHNsaWRlT2Zmc2V0KSA6ICh0LmN5Y2xpYyA/IHQuX2N5Y2xpY0FsbEl0ZW1TaXplIDogdC5fYWxsSXRlbVNpemUpO1xyXG4gICAgICAgIGlmICh0YXJnZXRXSCA8IDApXHJcbiAgICAgICAgICAgIHRhcmdldFdIID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHQuX3NpemVUeXBlKSB7XHJcbiAgICAgICAgICAgIHQuY29udGVudC5oZWlnaHQgPSB0YXJnZXRXSDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0LmNvbnRlbnQud2lkdGggPSB0YXJnZXRXSDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MubG9nKCdfcmVzaXplQ29udGVudCgpICBudW1JdGVtcyA9JywgdC5fbnVtSXRlbXMsICfvvIxjb250ZW50ID0nLCB0LmNvbnRlbnQpO1xyXG4gICAgfSxcclxuICAgIC8v5rua5Yqo6L+b6KGM5pe2Li4uXHJcbiAgICBfb25TY3JvbGxpbmcoZXYpIHtcclxuICAgICAgICBpZiAodGhpcy5mcmFtZUNvdW50ID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IHRoaXMuX3VwZGF0ZVJhdGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9mb3JjZVVwZGF0ZSAmJiAoZXYgJiYgZXYudHlwZSAhPSAnc2Nyb2xsLWVuZGVkJykgJiYgdGhpcy5mcmFtZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQtLTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl91cGRhdGVSYXRlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYW5pRGVsUnVuaW5nKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8v5b6q546v5YiX6KGo5aSE55CGXHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGljKSB7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxQb3MgPSB0aGlzLmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgc2Nyb2xsUG9zID0gdGhpcy5fc2l6ZVR5cGUgPyBzY3JvbGxQb3MueSA6IHNjcm9sbFBvcy54O1xyXG5cclxuICAgICAgICAgICAgbGV0IGFkZFZhbCA9IHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlICsgKHRoaXMuX3NpemVUeXBlID8gdGhpcy5fbGluZUdhcCA6IHRoaXMuX2NvbHVtbkdhcCk7XHJcbiAgICAgICAgICAgIGxldCBhZGQgPSB0aGlzLl9zaXplVHlwZSA/IGNjLnYyKDAsIGFkZFZhbCkgOiBjYy52MihhZGRWYWwsIDApO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQb3MgPiAtdGhpcy5fY3ljbGljUG9zMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IC10aGlzLl9jeWNsaWNQb3MyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5zdWIoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5fYmVnYW5Qb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuX2JlZ2FuUG9zICs9IGFkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsUG9zIDwgLXRoaXMuX2N5Y2xpY1BvczIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnggPSAtdGhpcy5fY3ljbGljUG9zMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uYWRkKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX2JlZ2FuUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLl9iZWdhblBvcyAtPSBhZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQb3MgPCB0aGlzLl9jeWNsaWNQb3MxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC54ID0gdGhpcy5fY3ljbGljUG9zMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uYWRkKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA+IHRoaXMuX2N5Y2xpY1BvczIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnggPSB0aGlzLl9jeWNsaWNQb3MxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5zdWIoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFBvcyA8IHRoaXMuX2N5Y2xpY1BvczEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSB0aGlzLl9jeWNsaWNQb3MyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5hZGQoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsUG9zID4gdGhpcy5fY3ljbGljUG9zMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueSA9IHRoaXMuX2N5Y2xpY1BvczE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLnN1YihhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zID4gLXRoaXMuX2N5Y2xpY1BvczEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSAtdGhpcy5fY3ljbGljUG9zMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uc3ViKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA8IC10aGlzLl9jeWNsaWNQb3MyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gLXRoaXMuX2N5Y2xpY1BvczE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLmFkZChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jYWxjVmlld1BvcygpO1xyXG5cclxuICAgICAgICBsZXQgdlRvcCwgdlJpZ2h0LCB2Qm90dG9tLCB2TGVmdDtcclxuICAgICAgICBpZiAodGhpcy5fc2l6ZVR5cGUpIHtcclxuICAgICAgICAgICAgdlRvcCA9IHRoaXMudmlld1RvcDtcclxuICAgICAgICAgICAgdkJvdHRvbSA9IHRoaXMudmlld0JvdHRvbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2UmlnaHQgPSB0aGlzLnZpZXdSaWdodDtcclxuICAgICAgICAgICAgdkxlZnQgPSB0aGlzLnZpZXdMZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgaXRlbVBvcztcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJJZCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBlbmRJZCA9IHRoaXMuX251bUl0ZW1zIC0gMTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnJlYWtGb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c6K+laXRlbeeahOS9jee9ruWcqOWPr+inhuWMuuWfn+WGhe+8jOWwseaOqOWFpWRpc3BsYXlEYXRhXHJcbiAgICAgICAgICAgICAgICBmb3IgKDsgY3VySWQgPD0gZW5kSWQgJiYgIWJyZWFrRm9yOyBjdXJJZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBvcyA9IHRoaXMuX2NhbGNJdGVtUG9zKGN1cklkKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLnJpZ2h0ID49IHZMZWZ0ICYmIGl0ZW1Qb3MubGVmdCA8PSB2UmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2goaXRlbVBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBvcy5ib3R0b20gPD0gdlRvcCAmJiBpdGVtUG9zLnRvcCA+PSB2Qm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MuYm90dG9tIDw9IHZUb3AgJiYgaXRlbVBvcy50b3AgPj0gdkJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MucmlnaHQgPj0gdkxlZnQgJiYgaXRlbVBvcy5sZWZ0IDw9IHZSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3cgPSB0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcDtcclxuICAgICAgICAgICAgICAgIGxldCBoaCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXA7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICh2TGVmdCAtIHRoaXMuX2xlZnRHYXApIC8gd3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZElkID0gKHZSaWdodCAtIHRoaXMuX2xlZnRHYXApIC8gd3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cklkID0gKC12UmlnaHQgLSB0aGlzLl9yaWdodEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAoLXZMZWZ0IC0gdGhpcy5fcmlnaHRHYXApIC8gd3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cklkID0gKC12VG9wIC0gdGhpcy5fdG9wR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICgtdkJvdHRvbSAtIHRoaXMuX3RvcEdhcCkgLyBoaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAodkJvdHRvbSAtIHRoaXMuX2JvdHRvbUdhcCkgLyBoaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAodlRvcCAtIHRoaXMuX2JvdHRvbUdhcCkgLyBoaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJJZCA9IE1hdGguZmxvb3IoY3VySWQpICogdGhpcy5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgIGVuZElkID0gTWF0aC5jZWlsKGVuZElkKSAqIHRoaXMuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICBlbmRJZC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cklkIDwgMClcclxuICAgICAgICAgICAgICAgICAgICBjdXJJZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kSWQgPj0gdGhpcy5fbnVtSXRlbXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSB0aGlzLl9udW1JdGVtcyAtIDE7XHJcbiAgICAgICAgICAgICAgICBmb3IgKDsgY3VySWQgPD0gZW5kSWQ7IGN1cklkKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2godGhpcy5fY2FsY0l0ZW1Qb3MoY3VySWQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9kZWxSZWR1bmRhbnRJdGVtKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA8PSAwIHx8ICF0aGlzLl9udW1JdGVtcykgeyAvL2lmIG5vbmUsIGRlbGV0ZSBhbGwuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpcnN0bGlzdElkID0gdGhpcy5kaXNwbGF5RGF0YVswXS5pZDtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5SXRlbU51bSA9IHRoaXMuZGlzcGxheURhdGEubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxlbiA9IHRoaXMuX2xhc3REaXNwbGF5RGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBoYXZlRGF0YUNoYW5nZSA9IHRoaXMuZGlzcGxheUl0ZW1OdW0gIT0gbGVuO1xyXG4gICAgICAgICAgICBpZiAoaGF2ZURhdGFDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+mAkOW4p+a4suafk++8jOmcgOimgeaOkuW6j1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5zb3J0KChhLCBiKSA9PiB7IHJldHVybiBhIC0gYiB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOWboGxpc3TnmoTmmL7npLrmlbDmja7mmK/mnInluo/nmoTvvIzmiYDku6Xlj6rpnIDopoHliKTmlq3mlbDnu4Tplb/luqbmmK/lkKbnm7jnrYnvvIzku6Xlj4rlpLTjgIHlsL7kuKTkuKrlhYPntKDmmK/lkKbnm7jnrYnljbPlj6/jgIJcclxuICAgICAgICAgICAgICAgIGhhdmVEYXRhQ2hhbmdlID0gdGhpcy5maXJzdGxpc3RJZCAhPSB0aGlzLl9sYXN0RGlzcGxheURhdGFbMF0gfHwgdGhpcy5kaXNwbGF5RGF0YVt0aGlzLmRpc3BsYXlJdGVtTnVtIC0gMV0uaWQgIT0gdGhpcy5fbGFzdERpc3BsYXlEYXRhW2xlbiAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZm9yY2VVcGRhdGUgfHwgaGF2ZURhdGFDaGFuZ2UpIHsgICAgLy/lpoLmnpzmmK/lvLrliLbmm7TmlrBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5fdXBkYXRlRG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX2xhc3REaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6YCQ5bin5riy5p+TXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX251bUl0ZW1zID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3VwZGF0ZURvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvbmVBZnRlclVwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ebtOaOpea4suafk1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygnbGlzdCBEaXNwbGF5IERhdGEgSUk6OicsIHRoaXMuZGlzcGxheURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5kaXNwbGF5SXRlbU51bTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yVXBkYXRlSXRlbSh0aGlzLmRpc3BsYXlEYXRhW2NdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yY2VVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/orqHnrpdWaWV35L2N572uXHJcbiAgICBfY2FsY1ZpZXdQb3MoKSB7XHJcbiAgICAgICAgbGV0IHNjcm9sbFBvcyA9IHRoaXMuY29udGVudC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljTGVmdCA9IHNjcm9sbFBvcy54ID4gMCA/IHNjcm9sbFBvcy54IDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgPSAoc2Nyb2xsUG9zLnggPCAwID8gLXNjcm9sbFBvcy54IDogMCkgLSB0aGlzLmVsYXN0aWNMZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgPSB0aGlzLnZpZXdMZWZ0ICsgdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljUmlnaHQgPSB0aGlzLnZpZXdSaWdodCA+IHRoaXMuY29udGVudC53aWR0aCA/IE1hdGguYWJzKHRoaXMudmlld1JpZ2h0IC0gdGhpcy5jb250ZW50LndpZHRoKSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCArPSB0aGlzLmVsYXN0aWNSaWdodDtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNMZWZ0LCB0aGlzLmVsYXN0aWNSaWdodCwgdGhpcy52aWV3TGVmdCwgdGhpcy52aWV3UmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNSaWdodCA9IHNjcm9sbFBvcy54IDwgMCA/IC1zY3JvbGxQb3MueCA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCA9IChzY3JvbGxQb3MueCA+IDAgPyAtc2Nyb2xsUG9zLnggOiAwKSArIHRoaXMuZWxhc3RpY1JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGVmdCA9IHRoaXMudmlld1JpZ2h0IC0gdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljTGVmdCA9IHRoaXMudmlld0xlZnQgPCAtdGhpcy5jb250ZW50LndpZHRoID8gTWF0aC5hYnModGhpcy52aWV3TGVmdCArIHRoaXMuY29udGVudC53aWR0aCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGVmdCAtPSB0aGlzLmVsYXN0aWNMZWZ0O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY0xlZnQsIHRoaXMuZWxhc3RpY1JpZ2h0LCB0aGlzLnZpZXdMZWZ0LCB0aGlzLnZpZXdSaWdodCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY1RvcCA9IHNjcm9sbFBvcy55IDwgMCA/IE1hdGguYWJzKHNjcm9sbFBvcy55KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgPSAoc2Nyb2xsUG9zLnkgPiAwID8gLXNjcm9sbFBvcy55IDogMCkgKyB0aGlzLmVsYXN0aWNUb3A7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gPSB0aGlzLnZpZXdUb3AgLSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljQm90dG9tID0gdGhpcy52aWV3Qm90dG9tIDwgLXRoaXMuY29udGVudC5oZWlnaHQgPyBNYXRoLmFicyh0aGlzLnZpZXdCb3R0b20gKyB0aGlzLmNvbnRlbnQuaGVpZ2h0KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gKz0gdGhpcy5lbGFzdGljQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY1RvcCwgdGhpcy5lbGFzdGljQm90dG9tLCB0aGlzLnZpZXdUb3AsIHRoaXMudmlld0JvdHRvbSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0JvdHRvbSA9IHNjcm9sbFBvcy55ID4gMCA/IE1hdGguYWJzKHNjcm9sbFBvcy55KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gPSAoc2Nyb2xsUG9zLnkgPCAwID8gLXNjcm9sbFBvcy55IDogMCkgLSB0aGlzLmVsYXN0aWNCb3R0b207XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgPSB0aGlzLnZpZXdCb3R0b20gKyB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljVG9wID0gdGhpcy52aWV3VG9wID4gdGhpcy5jb250ZW50LmhlaWdodCA/IE1hdGguYWJzKHRoaXMudmlld1RvcCAtIHRoaXMuY29udGVudC5oZWlnaHQpIDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1RvcCAtPSB0aGlzLmVsYXN0aWNUb3A7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5lbGFzdGljVG9wLCB0aGlzLmVsYXN0aWNCb3R0b20sIHRoaXMudmlld1RvcCwgdGhpcy52aWV3Qm90dG9tKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+iuoeeul+S9jee9riDmoLnmja5pZFxyXG4gICAgX2NhbGNJdGVtUG9zKGlkKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoLCBoZWlnaHQsIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgaXRlbVgsIGl0ZW1ZO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgKyAoZml4ZWQudmFsICsgKHRoaXMuX2NvbHVtbkdhcCAqIGZpeGVkLmNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3MgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gKGNzID4gMCA/IGNzIDogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCAtPSB0aGlzLl9sZWZ0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLmNvbnRlbnQud2lkdGggLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGVmdCArICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB3aWR0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9pdGVtVG1wLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiAoaWQgLSBmaXhlZC5jb3VudCkpIC0gKGZpeGVkLnZhbCArICh0aGlzLl9jb2x1bW5HYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ICs9IHRoaXMuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLmNvbnRlbnQud2lkdGggLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodCAtIHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faXRlbVRtcC55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3ZlcnRpY2FsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IC10aGlzLl90b3BHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogKGlkIC0gZml4ZWQuY291bnQpKSAtIChmaXhlZC52YWwgKyAodGhpcy5fbGluZUdhcCAqIGZpeGVkLmNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3MgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0b3AgLSBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAtdGhpcy5fdG9wR2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgKz0gdGhpcy5fdG9wR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLmNvbnRlbnQuaGVpZ2h0IC8gMikgLSAodGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdG9wIC0gaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2l0ZW1UbXAueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiBoZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5fYm90dG9tR2FwICsgKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgKyAoZml4ZWQudmFsICsgKHRoaXMuX2xpbmVHYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSAoY3MgPiAwID8gY3MgOiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5fYm90dG9tR2FwICsgKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gLT0gdGhpcy5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLmNvbnRlbnQuaGVpZ2h0IC8gMikgLSAodGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gYm90dG9tICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2l0ZW1UbXAueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiBoZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sTGluZSA9IE1hdGguZmxvb3IoaWQgLyB0aGlzLl9jb2xMaW5lTnVtKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAtdGhpcy5fdG9wR2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGNvbExpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCAtIHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSA9IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuX2JvdHRvbUdhcCArICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBib3R0b20gKyB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IHRoaXMuX2xlZnRHYXAgKyAoKGlkICUgdGhpcy5fY29sTGluZU51bSkgKiAodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YIC09ICh0aGlzLmNvbnRlbnQuYW5jaG9yWCAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAoKDEgLSB0aGlzLl9pdGVtVG1wLmFuY2hvclgpICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YIC09ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBpdGVtWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGl0ZW1ZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGNvbExpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YID0gbGVmdCArICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggLT0gKHRoaXMuY29udGVudC5hbmNob3JYICogdGhpcy5jb250ZW50LndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQgLSB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YICs9ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSAtdGhpcy5fdG9wR2FwIC0gKChpZCAlIHRoaXMuX2NvbExpbmVOdW0pICogKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZIC09ICgoMSAtIHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZICs9ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JZKSAqIHRoaXMuY29udGVudC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZIC09ICgodGhpcy5faXRlbVRtcC5hbmNob3JZKSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgKz0gKHRoaXMuY29udGVudC5hbmNob3JZICogdGhpcy5jb250ZW50LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgKj0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBpdGVtWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGl0ZW1ZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v6K6h566X5bey5a2Y5Zyo55qESXRlbeeahOS9jee9rlxyXG4gICAgX2NhbGNFeGlzdEl0ZW1Qb3MoaWQpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5bGlzdElkKGlkKTtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHg6IGl0ZW0ueCxcclxuICAgICAgICAgICAgeTogaXRlbS55LFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2l6ZVR5cGUpIHtcclxuICAgICAgICAgICAgZGF0YS50b3AgPSBpdGVtLnkgKyAoaXRlbS5oZWlnaHQgKiAoMSAtIGl0ZW0uYW5jaG9yWSkpO1xyXG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IGl0ZW0ueSAtIChpdGVtLmhlaWdodCAqIGl0ZW0uYW5jaG9yWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gaXRlbS54IC0gKGl0ZW0ud2lkdGggKiBpdGVtLmFuY2hvclgpO1xyXG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gaXRlbS54ICsgKGl0ZW0ud2lkdGggKiAoMSAtIGl0ZW0uYW5jaG9yWCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcbiAgICAvL+iOt+WPlkl0ZW3kvY3nva5cclxuICAgIGdldEl0ZW1Qb3MoaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fdmlydHVhbClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNJdGVtUG9zKGlkKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNJdGVtUG9zKGlkKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNFeGlzdEl0ZW1Qb3MoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+iOt+WPluWbuuWumuWwuuWvuFxyXG4gICAgX2dldEZpeGVkU2l6ZShsaXN0SWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2N1c3RvbVNpemUpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmIChsaXN0SWQgPT0gbnVsbClcclxuICAgICAgICAgICAgbGlzdElkID0gdGhpcy5fbnVtSXRlbXM7XHJcbiAgICAgICAgbGV0IGZpeGVkID0gMDtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlkKSA8IGxpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgZml4ZWQgKz0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbDogZml4ZWQsXHJcbiAgICAgICAgICAgIGNvdW50OiBjb3VudCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/mu5rliqjlvIDlp4vml7YuLlxyXG4gICAgX29uU2Nyb2xsQmVnYW4oKSB7XHJcbiAgICAgICAgdGhpcy5fYmVnYW5Qb3MgPSB0aGlzLl9zaXplVHlwZSA/IHRoaXMudmlld1RvcCA6IHRoaXMudmlld0xlZnQ7XHJcbiAgICB9LFxyXG4gICAgLy/mu5rliqjnu5PmnZ/ml7YuLlxyXG4gICAgX29uU2Nyb2xsRW5kZWQoKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIHQuY3VyU2Nyb2xsaXN0b3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0LnNjcm9sbFRvbGlzdElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0LmdldEl0ZW1CeWxpc3RJZCh0LnNjcm9sbFRvbGlzdElkKTtcclxuICAgICAgICAgICAgdC5zY3JvbGxUb2xpc3RJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byguMSwgeyBzY2FsZTogMS4wNiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50byguMSwgeyBzY2FsZTogMSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XHJcblxyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HICYmXHJcbiAgICAgICAgICAgICF0LmFkaGVyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKHQuYWRoZXJpbmcsIHQuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCksIHQuX3Njcm9sbFZpZXcuaXNTY3JvbGxpbmcoKSk7XHJcbiAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpIHtcclxuICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zICE9IG51bGwgJiYgdC5jdXJTY3JvbGxpc3RvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlQWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOinpuaRuOaXtlxyXG4gICAgX29uVG91Y2hTdGFydChldiwgY2FwdHVyZWxpc3RlbmVycykge1xyXG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3Ll9oYXNOZXN0ZWRWaWV3R3JvdXAoZXYsIGNhcHR1cmVsaXN0ZW5lcnMpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJTY3JvbGxpc3RvdWNoID0gdHJ1ZTtcclxuICAgICAgICBsZXQgaXNNZSA9IGV2LmV2ZW50UGhhc2UgPT09IGNjLkV2ZW50LkFUX1RBUkdFVCAmJiBldi50YXJnZXQgPT09IHRoaXMubm9kZTtcclxuICAgICAgICBpZiAoIWlzTWUpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlID0gZXYudGFyZ2V0O1xyXG4gICAgICAgICAgICB3aGlsZSAoaXRlbU5vZGUuX2xpc3RJZCA9PSBudWxsICYmIGl0ZW1Ob2RlLnBhcmVudClcclxuICAgICAgICAgICAgICAgIGl0ZW1Ob2RlID0gaXRlbU5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxJdGVtID0gaXRlbU5vZGUuX2xpc3RJZCAhPSBudWxsID8gaXRlbU5vZGUgOiBldi50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v6Kem5pG45oqs6LW35pe2Li5cclxuICAgIF9vblRvdWNoVXAoKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIHQuX3Njcm9sbFBvcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuQURIRVJJTkcpIHtcclxuICAgICAgICAgICAgaWYgKHQuYWRoZXJpbmcpXHJcbiAgICAgICAgICAgICAgICB0Ll9hZGhlcmluZ0JhcnJpZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKSB7XHJcbiAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9wYWdlQWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Njcm9sbEl0ZW0gPSBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICBfb25Ub3VjaENhbmNlbGxlZChldiwgY2FwdHVyZWxpc3RlbmVycykge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBpZiAodC5fc2Nyb2xsVmlldy5faGFzTmVzdGVkVmlld0dyb3VwKGV2LCBjYXB0dXJlbGlzdGVuZXJzKSB8fCBldi5zaW11bGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0Ll9zY3JvbGxQb3MgPSBudWxsO1xyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HKSB7XHJcbiAgICAgICAgICAgIGlmICh0LmFkaGVyaW5nKVxyXG4gICAgICAgICAgICAgICAgdC5fYWRoZXJpbmdCYXJyaWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xyXG4gICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdC5fcGFnZUFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zY3JvbGxJdGVtID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICAvL+W9k+WwuuWvuOaUueWPmFxyXG4gICAgX29uU2l6ZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tJbml0ZWQoZmFsc2UpKVxyXG4gICAgICAgICAgICB0aGlzLl9vblNjcm9sbGluZygpO1xyXG4gICAgfSxcclxuICAgIC8v5b2TSXRlbeiHqumAguW6lFxyXG4gICAgX29uSXRlbUFkYXB0aXZlKGl0ZW0pIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICghdGhpcy5fc2l6ZVR5cGUgJiYgaXRlbS53aWR0aCAhPSB0aGlzLl9pdGVtU2l6ZS53aWR0aClcclxuICAgICAgICAgICAgfHwgKHRoaXMuX3NpemVUeXBlICYmIGl0ZW0uaGVpZ2h0ICE9IHRoaXMuX2l0ZW1TaXplLmhlaWdodClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXN0b21TaXplKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gdGhpcy5fc2l6ZVR5cGUgPyBpdGVtLmhlaWdodCA6IGl0ZW0ud2lkdGg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0gIT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5fdXBkYXRlSXRlbVBvcyhjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3mraPlnKjov5DooYwgc2Nyb2xsVG/vvIzogq/lrprkvJrkuI3lh4bnoa7vvIzlnKjov5nph4zlgZrkv67mraNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxUb2xpc3RJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsUG9zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fc2Nyb2xsVG9Tbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLl9zY3JvbGxUb2xpc3RJZCwgTWF0aC5tYXgoMCwgdGhpcy5fc2Nyb2xsVG9FbmRUaW1lIC0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgZGVsZXRlIHRoaXMuX2N1c3RvbVNpemVbaXRlbS5fbGlzdElkXTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZUFsbCgpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9kZWxSZWR1bmRhbnRJdGVtKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSxcclxuICAgIC8vUEFHReeymOmZhFxyXG4gICAgX3BhZ2VBZGhlcmUoKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jeWNsaWMgJiYgKHQuZWxhc3RpY1RvcCA+IDAgfHwgdC5lbGFzdGljUmlnaHQgPiAwIHx8IHQuZWxhc3RpY0JvdHRvbSA+IDAgfHwgdC5lbGFzdGljTGVmdCA+IDApKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGN1clBvcyA9IHQuX3NpemVUeXBlID8gdC52aWV3VG9wIDogdC52aWV3TGVmdDtcclxuICAgICAgICBsZXQgZGlzID0gKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCkgKiB0LnBhZ2VEaXN0YW5jZTtcclxuICAgICAgICBsZXQgY2FuU2tpcCA9IE1hdGguYWJzKHQuX2JlZ2FuUG9zIC0gY3VyUG9zKSA+IGRpcztcclxuICAgICAgICBpZiAoY2FuU2tpcCkge1xyXG4gICAgICAgICAgICBsZXQgdGltZUluU2Vjb25kID0gLjU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zID4gY3VyUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucHJlUGFnZSh0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ19wYWdlQWRoZXJlICAgUFBQUFBQUFBQUFBQUFBQJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZXh0UGFnZSh0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ19wYWdlQWRoZXJlICAgTk5OTk5OTk5OTk5OTk5OJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPCBjdXJQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmVQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZXh0UGFnZSh0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodC5lbGFzdGljVG9wIDw9IDAgJiYgdC5lbGFzdGljUmlnaHQgPD0gMCAmJiB0LmVsYXN0aWNCb3R0b20gPD0gMCAmJiB0LmVsYXN0aWNMZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fYmVnYW5Qb3MgPSBudWxsO1xyXG4gICAgfSxcclxuICAgIC8v57KY6ZmEXHJcbiAgICBhZGhlcmUoKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHQuZWxhc3RpY1RvcCA+IDAgfHwgdC5lbGFzdGljUmlnaHQgPiAwIHx8IHQuZWxhc3RpY0JvdHRvbSA+IDAgfHwgdC5lbGFzdGljTGVmdCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0LmFkaGVyaW5nID0gdHJ1ZTtcclxuICAgICAgICAvLyBpZiAoIXQuX3ZpcnR1YWwpXHJcbiAgICAgICAgdC5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9ICh0Ll9zaXplVHlwZSA/IHQuX3RvcEdhcCA6IHQuX2xlZnRHYXApIC8gKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCk7XHJcbiAgICAgICAgbGV0IHRpbWVJblNlY29uZCA9IC43O1xyXG4gICAgICAgIHQuc2Nyb2xsVG8odC5uZWFyZXN0bGlzdElkLCB0aW1lSW5TZWNvbmQsIG9mZnNldCk7XHJcbiAgICB9LFxyXG4gICAgLy9VcGRhdGUuLlxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA8PSAwIHx8IHRoaXMuX3VwZGF0ZURvbmUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyBjYy5sb2codGhpcy5kaXNwbGF5RGF0YS5sZW5ndGgsIHRoaXMuX3VwZGF0ZUNvdW50ZXIsIHRoaXMuZGlzcGxheURhdGFbdGhpcy5fdXBkYXRlQ291bnRlcl0pO1xyXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBsZW4gPSBNYXRoLm1pbih0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0sdGhpcy5kaXNwbGF5SXRlbU51bSlcclxuICAgICAgICAgICAgbGV0IGxlbiA9ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pID4gdGhpcy5kaXNwbGF5SXRlbU51bSA/IHRoaXMuZGlzcGxheUl0ZW1OdW0gOiAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IHRoaXMuX3VwZGF0ZUNvdW50ZXI7IG4gPCBsZW47IG4rKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRpc3BsYXlEYXRhW25dO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlT3JVcGRhdGVJdGVtKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl91cGRhdGVDb3VudGVyID49IHRoaXMuZGlzcGxheUl0ZW1OdW0gLSAxKSB7IC8v5pyA5ZCO5LiA5LiqXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX2RlbFJlZHVuZGFudEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSlcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmN1clBhZ2VOdW0gPSB0aGlzLm5lYXJlc3RsaXN0SWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZG9uZUFmdGVyVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICghdGhpcy5fc2Nyb2xsVmlldy5pc1Njcm9sbGluZygpKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9uZUFmdGVyVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RlbFJlZHVuZGFudEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JjZVVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNOZWFyZXN0SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJQYWdlTnVtID0gdGhpcy5uZWFyZXN0bGlzdElkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciArPSB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlQ291bnRlciA8IHRoaXMuX251bUl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGVuID0gKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSkgPiB0aGlzLl9udW1JdGVtcyA/IHRoaXMuX251bUl0ZW1zIDogKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gdGhpcy5fdXBkYXRlQ291bnRlcjsgbiA8IGxlbjsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlT3JVcGRhdGVJdGVtMihuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgKz0gdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNOZWFyZXN0SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyUGFnZU51bSA9IHRoaXMubmVhcmVzdGxpc3RJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaIluabtOaWsEl0ZW3vvIjomZrmi5/liJfooajnlKjvvIlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIOaVsOaNrlxyXG4gICAgICovXHJcbiAgICBfY3JlYXRlT3JVcGRhdGVJdGVtKGRhdGEpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5bGlzdElkKGRhdGEuaWQpO1xyXG4gICAgICAgIGlmICghaXRlbSkgeyAvL+WmguaenOS4jeWtmOWcqFxyXG4gICAgICAgICAgICBsZXQgY2FuR2V0ID0gdGhpcy5fcG9vbC5zaXplKCkgPiAwO1xyXG4gICAgICAgICAgICBpZiAoY2FuR2V0KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5fcG9vbC5nZXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZygn5LuO5rGg5Lit5Y+W5Ye6OjogICDml6dpZCA9JywgaXRlbS5fbGlzdElkLCAn77yM5pawaWQgPScsIGRhdGEuaWQsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX2l0ZW1UbXApO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCfmlrDlu7o6OicsIGRhdGEuaWQsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghY2FuR2V0IHx8ICFjYy5pc1ZhbGlkKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5faXRlbVRtcCk7XHJcbiAgICAgICAgICAgICAgICBjYW5HZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5fbGlzdElkICE9IGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uX2xpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnNldENvbnRlbnRTaXplKHRoaXMuX2l0ZW1TaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKG5ldyBjYy52MihkYXRhLngsIGRhdGEueSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChjYW5HZXQgJiYgdGhpcy5fbmVlZFVwZGF0ZVdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldCA9IGl0ZW0uZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAod2lkZ2V0KVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldC51cGRhdGVBbGlnbm1lbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLnNldFNpYmxpbmdJbmRleCh0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDEpO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KCdsaXN0SXRlbScpO1xyXG4gICAgICAgICAgICBpdGVtLmxpc3RJdGVtID0gbGlzdEl0ZW07XHJcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uX2xpc3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uX3JlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFdmVudChpdGVtLCBkYXRhLmlkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgZGF0YS5pZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZm9yY2VVcGRhdGUgJiYgdGhpcy5yZW5kZXJFdmVudCkgeyAvL+W8uuWItuabtOaWsFxyXG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKG5ldyBjYy52MihkYXRhLngsIGRhdGEueSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGl0ZW0pO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coJ0FERDo6JywgZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckV2ZW50KGl0ZW0sIGRhdGEuaWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBkYXRhLmlkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jlc2V0SXRlbVNpemUoaXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZWxpc3RJdGVtKGl0ZW0ubGlzdEl0ZW0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9sYXN0RGlzcGxheURhdGEuaW5kZXhPZihkYXRhLmlkKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnB1c2goZGF0YS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5Yib5bu65oiW5pu05pawSXRlbe+8iOmdnuiZmuaLn+WIl+ihqOeUqO+8iVxyXG4gICAgX2NyZWF0ZU9yVXBkYXRlSXRlbTIobGlzdElkKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbGlzdElkXTtcclxuICAgICAgICBpZiAoIWl0ZW0pIHsgLy/lpoLmnpzkuI3lrZjlnKhcclxuICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX2l0ZW1UbXApO1xyXG4gICAgICAgICAgICBpdGVtLl9saXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoJ2xpc3RJdGVtJyk7XHJcbiAgICAgICAgICAgIGl0ZW0ubGlzdEl0ZW0gPSBsaXN0SXRlbTtcclxuICAgICAgICAgICAgaWYgKGxpc3RJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5fbGlzdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5fcmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckV2ZW50KGl0ZW0sIGxpc3RJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGxpc3RJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZm9yY2VVcGRhdGUgJiYgdGhpcy5yZW5kZXJFdmVudCkgeyAvL+W8uuWItuabtOaWsFxyXG4gICAgICAgICAgICBpdGVtLl9saXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckV2ZW50KGl0ZW0sIGxpc3RJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGxpc3RJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91cGRhdGVsaXN0SXRlbShpdGVtLmxpc3RJdGVtKTtcclxuICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhLmluZGV4T2YobGlzdElkKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnB1c2gobGlzdElkKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIF91cGRhdGVsaXN0SXRlbShsaXN0SXRlbSkge1xyXG4gICAgICAgIGlmICghbGlzdEl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1vZGUgPiBTZWxlY3RlZFR5cGUuTk9ORSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5TSU5HTEU6XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkSWQgPT0gbGlzdEl0ZW0ubm9kZS5fbGlzdElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuTVVMVDpcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IHRoaXMubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdEl0ZW0ubm9kZS5fbGlzdElkKSA+PSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5LuF6Jma5ouf5YiX6KGo55SoXHJcbiAgICBfcmVzZXRJdGVtU2l6ZShpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzaXplO1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplICYmIHRoaXMuX2N1c3RvbVNpemVbaXRlbS5fbGlzdElkXSkge1xyXG4gICAgICAgICAgICBzaXplID0gdGhpcy5fY3VzdG9tU2l6ZVtpdGVtLl9saXN0SWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb2xMaW5lTnVtID4gMSlcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0Q29udGVudFNpemUodGhpcy5faXRlbVNpemUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzaXplID0gdGhpcy5fc2l6ZVR5cGUgPyB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgOiB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NpemVUeXBlKVxyXG4gICAgICAgICAgICAgICAgaXRlbS5oZWlnaHQgPSBzaXplO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpdGVtLndpZHRoID0gc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrBJdGVt5L2N572uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcnx8Tm9kZX0gbGlzdElkT3JJdGVtXHJcbiAgICAgKi9cclxuICAgIF91cGRhdGVJdGVtUG9zKGxpc3RJZE9ySXRlbSkge1xyXG4gICAgICAgIGxldCBpdGVtID0gaXNOYU4obGlzdElkT3JJdGVtKSA/IGxpc3RJZE9ySXRlbSA6IHRoaXMuZ2V0SXRlbUJ5bGlzdElkKGxpc3RJZE9ySXRlbSk7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0SXRlbVBvcyhpdGVtLl9saXN0SWQpO1xyXG4gICAgICAgIGl0ZW0uc2V0UG9zaXRpb24ocG9zLngsIHBvcy55KTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWkmumAiVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJncyDlj6/ku6XmmK/ljZXkuKpsaXN0SWTvvIzkuZ/lj6/mmK/kuKpsaXN0SWTmlbDnu4RcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gYm9vbCDlgLzvvIzlpoLmnpzkuLpudWxs55qE6K+d77yM5YiZ55u05o6l55SoYXJnc+imhuebllxyXG4gICAgICovXHJcbiAgICBzZXRNdWx0U2VsZWN0ZWQoYXJncywgYm9vbCkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xyXG4gICAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9vbCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkID0gYXJncztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbGlzdElkLCBzdWI7XHJcbiAgICAgICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gYXJncy5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJZCA9IGFyZ3Nbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnB1c2gobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gYXJncy5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJZCA9IGFyZ3Nbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5zcGxpY2Uoc3ViLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fZm9yY2VVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blpJrpgInmlbDmja5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldE11bHRTZWxlY3RlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWx0U2VsZWN0ZWQ7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDlpJrpgInmmK/lkKbmnInpgInmi6lcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsaXN0SWQg57Si5byVXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBoYXNNdWx0U2VsZWN0ZWQobGlzdElkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdFNlbGVjdGVkICYmIHRoaXMubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdElkKSA+PSAwO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5oyH5a6a55qESXRlbVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJncyDljZXkuKpsaXN0SWTvvIzmiJbogIXmlbDnu4RcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUl0ZW0oYXJncykge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZ3MpKSB7XHJcbiAgICAgICAgICAgIGFyZ3MgPSBbYXJnc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IG4gPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgbiA8IGxlbjsgbisrKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0SWQgPSBhcmdzW25dO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5bGlzdElkKGxpc3RJZCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnJlbmRlckV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckV2ZW50KGl0ZW0sIGxpc3RJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGxpc3RJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOWFqOmDqFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVBbGwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLm51bUl0ZW1zID0gdGhpcy5udW1JdGVtcztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOagueaNrmxpc3RJROiOt+WPlkl0ZW1cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsaXN0SWRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldEl0ZW1CeWxpc3RJZChsaXN0SWQpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZW50LmNoaWxkcmVuW25dLl9saXN0SWQgPT0gbGlzdElkKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blnKjmmL7npLrljLrln5/lpJbnmoRJdGVtXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBfZ2V0T3V0c2lkZUl0ZW0oKSB7XHJcbiAgICAgICAgbGV0IGl0ZW07XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG4gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbl07XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kaXNwbGF5RGF0YS5maW5kKGQgPT4gZC5pZCA9PSBpdGVtLl9saXN0SWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICAgIC8v5Yig6Zmk5pi+56S65Yy65Z+f5Lul5aSW55qESXRlbVxyXG4gICAgX2RlbFJlZHVuZGFudEl0ZW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMuX2dldE91dHNpZGVJdGVtKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSBhcnIubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gYXJyW25dO1xyXG4gICAgICAgICAgICAgICAgLy8g5Yqg6L+Z5LiA5Y+l5piv5Li65LqG6Ziy5q2i5ouW5Yqo5pe26KKr5Y2h5L2PLi4uXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsSXRlbSAmJiBpdGVtLl9saXN0SWQgPT0gdGhpcy5fc2Nyb2xsSXRlbS5fbGlzdElkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5pc0NhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb29sLnB1dChpdGVtKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG0gPSB0aGlzLl9sYXN0RGlzcGxheURhdGEubGVuZ3RoIC0gMTsgbSA+PSAwOyBtLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhW21dID09IGl0ZW0uX2xpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEuc3BsaWNlKG0sIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2MubG9nKCflrZjlhaU6OicsIHN0ciwgJyAgICBwb29sLmxlbmd0aCA9JywgdGhpcy5fcG9vbC5sZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCA+IHRoaXMuX251bUl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxTaW5nbGVJdGVtKHRoaXMuY29udGVudC5jaGlsZHJlblt0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+WIoOmZpOWNleS4qkl0ZW1cclxuICAgIF9kZWxTaW5nbGVJdGVtKGl0ZW0pIHtcclxuICAgICAgICAvLyBjYy5sb2coJ0RFTDo6JywgaXRlbS5fbGlzdElkLCBpdGVtKTtcclxuICAgICAgICBpdGVtLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICBpZiAoaXRlbS5kZXN0cm95KVxyXG4gICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgICAgICBpdGVtID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOWKqOaViOWIoOmZpEl0ZW3vvIjmraTmlrnms5Xlj6rpgILnlKjkuo7omZrmi5/liJfooajvvIzljbNfdmlydHVhbD10cnVl77yJXHJcbiAgICAgKiDkuIDlrpropoHlnKjlm57osIPlh73mlbDph4zph43mlrDorr7nva7mlrDnmoRudW1JdGVtc+i/m+ihjOWIt+aWsO+8jOavleern+acrGxpc3TmmK/pnaDmlbDmja7pqbHliqjnmoTjgIJcclxuICAgICAqL1xyXG4gICAgYW5pRGVsSXRlbShsaXN0SWQsIGNhbGxGdW5jLCBhbmlUeXBlKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSB8fCB0LmN5Y2xpYyB8fCAhdC5fdmlydHVhbClcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdUaGlzIGZ1bmN0aW9uIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNhbGxlZCEnKTtcclxuXHJcbiAgICAgICAgaWYgKCFjYWxsRnVuYylcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdDYWxsRnVuYyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgTlVMTCwgWW91IG5lZWQgdG8gZGVsZXRlIHRoZSBjb3JyZXNwb25kaW5nIGluZGV4IGluIHRoZSBkYXRhIGFycmF5IGluIHRoZSBDYWxsRnVuYyEnKTtcclxuXHJcbiAgICAgICAgaWYgKHQuX2FuaURlbFJ1bmluZylcclxuICAgICAgICAgICAgcmV0dXJuIGNjLndhcm4oJ1BsZWFzZSB3YWl0IGZvciB0aGUgY3VycmVudCBkZWxldGlvbiB0byBmaW5pc2ghJyk7XHJcblxyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IHQuZ2V0SXRlbUJ5bGlzdElkKGxpc3RJZCk7XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fYW5pRGVsUnVuaW5nID0gdHJ1ZTtcclxuICAgICAgICB0Ll9hbmlEZWxDQiA9IGNhbGxGdW5jO1xyXG4gICAgICAgIHQuX2FuaURlbEl0ZW0gPSBpdGVtO1xyXG4gICAgICAgIHQuX2FuaURlbEJlZm9yZVBvcyA9IGl0ZW0ucG9zaXRpb247XHJcbiAgICAgICAgdC5fYW5pRGVsQmVmb3JlU2NhbGUgPSBpdGVtLnNjYWxlO1xyXG4gICAgICAgIGxldCBjdXJMYXN0SWQgPSB0LmRpc3BsYXlEYXRhW3QuZGlzcGxheURhdGEubGVuZ3RoIC0gMV0uaWQ7XHJcbiAgICAgICAgbGV0IHJlc2V0U2VsZWN0ZWRJZCA9IGl0ZW0ubGlzdEl0ZW0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgaXRlbS5saXN0SXRlbS5zaG93QW5pKGFuaVR5cGUsICgpID0+IHtcclxuICAgICAgICAgICAgLy/liKTmlq3mnInmsqHmnInkuIvkuIDkuKrvvIzlpoLmnpzmnInnmoTor53vvIzliJvlu7rnspfmnaVcclxuICAgICAgICAgICAgbGV0IG5ld0lkO1xyXG4gICAgICAgICAgICBpZiAoY3VyTGFzdElkIDwgdC5fbnVtSXRlbXMgLSAyKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdJZCA9IGN1ckxhc3RJZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld0lkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0gdC5fY2FsY0l0ZW1Qb3MobmV3SWQpO1xyXG4gICAgICAgICAgICAgICAgdC5kaXNwbGF5RGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX3ZpcnR1YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobmV3SWQpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHQuX251bUl0ZW1zLS07XHJcbiAgICAgICAgICAgIGlmICh0LnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU0lOR0xFKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzZXRTZWxlY3RlZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0Ll9zZWxlY3RlZElkIC0gMSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHQuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5NVUxUICYmIHQubXVsdFNlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1YiA9IHQubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdElkKTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCB0bXA7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5zcGxpY2Uoc3ViLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5aSa6YCJ55qE5pWw5o2u77yM5Zyo5YW25ZCO55qE5YWo6YOo5YeP5LiAXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gdC5tdWx0U2VsZWN0ZWQubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSB0Lm11bHRTZWxlY3RlZFtuXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPj0gbGlzdElkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZFtuXS0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0Ll9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fY3VzdG9tU2l6ZVtsaXN0SWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0Ll9jdXN0b21TaXplW2xpc3RJZF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpemU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZCBpbiB0Ll9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHQuX2N1c3RvbVNpemVbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkID0gcGFyc2VJbnQoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0N1c3RvbVNpemVbaWQgLSAoaWQgPj0gbGlzdElkID8gMSA6IDApXSA9IHNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0Ll9jdXN0b21TaXplID0gbmV3Q3VzdG9tU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WQjumdoueahEl0ZW3lkJHliY3mgLznmoTliqjmlYhcclxuICAgICAgICAgICAgbGV0IHNlYyA9IC4yMzMzO1xyXG4gICAgICAgICAgICBsZXQgdHdlZW4sIGhhdmVDQjtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IG5ld0lkICE9IG51bGwgPyBuZXdJZCA6IGN1ckxhc3RJZDsgbiA+PSBsaXN0SWQgKyAxOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0LmdldEl0ZW1CeWxpc3RJZChuKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0RhdGEgPSB0Ll9jYWxjSXRlbVBvcyhuIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4gPSBjYy50d2VlbihpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oc2VjLCB7IHBvc2l0aW9uOiBjYy52Mihwb3NEYXRhLngsIHBvc0RhdGEueSkgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuIDw9IGxpc3RJZCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZUNCID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHdlZW4uY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbmlEZWxSdW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdC5fYW5pRGVsQ0I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0d2Vlbi5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaGF2ZUNCKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9hbmlEZWxSdW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdC5fYW5pRGVsQ0I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOa7muWKqOWIsC4uXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGlzdElkIOe0ouW8le+8iOWmguaenDww77yM5YiZ5rua5Yiw6aaW5LiqSXRlbeS9jee9ru+8jOWmguaenD49X251bUl0ZW1z77yM5YiZ5rua5Yiw5pyA5pyrSXRlbeS9jee9ru+8iVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVJblNlY29uZCDml7bpl7RcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQg57Si5byV55uu5qCH5L2N572u5YGP56e777yMMC0xXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG92ZXJTdHJlc3Mg5rua5Yqo5ZCO5piv5ZCm5by66LCD6K+lSXRlbe+8iOi/meWPquaYr+S4quWunumqjOWKn+iDve+8iVxyXG4gICAgICovXHJcbiAgICBzY3JvbGxUbyhsaXN0SWQsIHRpbWVJblNlY29uZCwgb2Zmc2V0LCBvdmVyU3RyZXNzKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gdC5fc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xyXG4gICAgICAgIGlmICh0aW1lSW5TZWNvbmQgPT0gbnVsbCkgICAvL+m7mOiupDAuNVxyXG4gICAgICAgICAgICB0aW1lSW5TZWNvbmQgPSAuNTtcclxuICAgICAgICBlbHNlIGlmICh0aW1lSW5TZWNvbmQgPCAwKVxyXG4gICAgICAgICAgICB0aW1lSW5TZWNvbmQgPSAwO1xyXG4gICAgICAgIGlmIChsaXN0SWQgPCAwKVxyXG4gICAgICAgICAgICBsaXN0SWQgPSAwO1xyXG4gICAgICAgIGVsc2UgaWYgKGxpc3RJZCA+PSB0Ll9udW1JdGVtcylcclxuICAgICAgICAgICAgbGlzdElkID0gdC5fbnVtSXRlbXMgLSAxO1xyXG4gICAgICAgIC8vIOS7pemYsuiuvue9ruS6hm51bUl0ZW1z5LmL5ZCObGF5b3V055qE5bC65a+46L+Y5pyq5pu05pawXHJcbiAgICAgICAgaWYgKCF0Ll92aXJ0dWFsICYmIHQuX2xheW91dCAmJiB0Ll9sYXlvdXQuZW5hYmxlZClcclxuICAgICAgICAgICAgdC5fbGF5b3V0LnVwZGF0ZUxheW91dCgpO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gdC5nZXRJdGVtUG9zKGxpc3RJZCk7XHJcbiAgICAgICAgaWYgKCFwb3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENDX0RFViAmJiBjYy5lcnJvcigncG9zIGlzIG51bGwnLCBsaXN0SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGFyZ2V0WCwgdGFyZ2V0WTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gcG9zLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCAtPSB0Lm5vZGUud2lkdGggKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCAtPSB0Ll9sZWZ0R2FwO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gbmV3IGNjLnYyKHRhcmdldFgsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gcG9zLnJpZ2h0IC0gdC5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggKz0gdC5ub2RlLndpZHRoICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggKz0gdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBuZXcgY2MudjIodGFyZ2V0WCArIHQuY29udGVudC53aWR0aCwgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSBwb3MudG9wO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgKz0gdC5ub2RlLmhlaWdodCAqIG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZICs9IHQuX3RvcEdhcDtcclxuICAgICAgICAgICAgICAgIHBvcyA9IG5ldyBjYy52MigwLCAtdGFyZ2V0WSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSBwb3MuYm90dG9tICsgdC5ub2RlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZIC09IHQubm9kZS5oZWlnaHQgKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSAtPSB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBuZXcgY2MudjIoMCwgLXRhcmdldFkgKyB0LmNvbnRlbnQuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlld1BvcyA9IHQuY29udGVudC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZpZXdQb3MgPSBNYXRoLmFicyh0Ll9zaXplVHlwZSA/IHZpZXdQb3MueSA6IHZpZXdQb3MueCk7XHJcblxyXG4gICAgICAgIGxldCBjb21wYXJlUG9zID0gdC5fc2l6ZVR5cGUgPyBwb3MueSA6IHBvcy54O1xyXG4gICAgICAgIGxldCBydW5TY3JvbGwgPSBNYXRoLmFicygodC5fc2Nyb2xsUG9zICE9IG51bGwgPyB0Ll9zY3JvbGxQb3MgOiB2aWV3UG9zKSAtIGNvbXBhcmVQb3MpID4gLjU7XHJcbiAgICAgICAgLy8gY2MubG9nKHJ1blNjcm9sbCwgdC5fc2Nyb2xsUG9zLCB2aWV3UG9zLCBjb21wYXJlUG9zKVxyXG5cclxuICAgICAgICAvLyB0Ll9zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKCk7XHJcblxyXG4gICAgICAgIGlmIChydW5TY3JvbGwpIHtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsUG9zID0gY29tcGFyZVBvcztcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVG9saXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFRvRW5kVGltZSA9ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgKyB0aW1lSW5TZWNvbmQ7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQocG9zLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2cobGlzdElkLCB0LmNvbnRlbnQuaGVpZ2h0LCB0LmNvbnRlbnQuZ2V0UG9zaXRpb24oKS55LCBwb3MueSk7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFRvU28gPSB0LnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXQuX2FkaGVyaW5nQmFycmllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuYWRoZXJpbmcgPSB0Ll9hZGhlcmluZ0JhcnJpZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHQuX3Njcm9sbFBvcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2Nyb2xsVG9saXN0SWQgPVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX3Njcm9sbFRvRW5kVGltZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2Nyb2xsVG9TbyA9XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKCcyMjIyMjIyMjIyJywgdC5fYWRoZXJpbmdCYXJyaWVyKVxyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJTdHJlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0LnNjcm9sbFRvbGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdC5nZXRJdGVtQnlsaXN0SWQobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKC4xLCB7IHNjYWxlOiAxLjA1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oLjEsIHsgc2NhbGU6IDEgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdGltZUluU2Vjb25kICsgLjEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRpbWVJblNlY29uZCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog6K6h566X5b2T5YmN5rua5Yqo56qX5pyA6L+R55qESXRlbVxyXG4gICAgICovXHJcbiAgICBfY2FsY05lYXJlc3RJdGVtKCkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICB0Lm5lYXJlc3RsaXN0SWQgPSBudWxsO1xyXG4gICAgICAgIGxldCBkYXRhLCBjZW50ZXI7XHJcblxyXG4gICAgICAgIGlmICh0Ll92aXJ0dWFsKVxyXG4gICAgICAgICAgICB0Ll9jYWxjVmlld1BvcygpO1xyXG5cclxuICAgICAgICBsZXQgdlRvcCwgdlJpZ2h0LCB2Qm90dG9tLCB2TGVmdDtcclxuICAgICAgICB2VG9wID0gdC52aWV3VG9wO1xyXG4gICAgICAgIHZSaWdodCA9IHQudmlld1JpZ2h0O1xyXG4gICAgICAgIHZCb3R0b20gPSB0LnZpZXdCb3R0b207XHJcbiAgICAgICAgdkxlZnQgPSB0LnZpZXdMZWZ0O1xyXG5cclxuICAgICAgICBsZXQgYnJlYWtGb3IgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHQuY29udGVudC5jaGlsZHJlbkNvdW50ICYmICFicmVha0ZvcjsgbiArPSB0Ll9jb2xMaW5lTnVtKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLl92aXJ0dWFsID8gdGhpcy5kaXNwbGF5RGF0YVtuXSA6IHRoaXMuX2NhbGNFeGlzdEl0ZW1Qb3Mobik7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSB0aGlzLl9zaXplVHlwZSA/ICgoZGF0YS50b3AgKyBkYXRhLmJvdHRvbSkgLyAyKSA6IChjZW50ZXIgPSAoZGF0YS5sZWZ0ICsgZGF0YS5yaWdodCkgLyAyKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJpZ2h0ID49IHZMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RsaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZMZWZ0ID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdGxpc3RJZCArPSB0aGlzLl9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlZnQgPD0gdlJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RsaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZSaWdodCA8IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RsaXN0SWQgKz0gdGhpcy5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ib3R0b20gPD0gdlRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0bGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2VG9wIDwgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdGxpc3RJZCArPSB0aGlzLl9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRvcCA+PSB2Qm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RsaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZCb3R0b20gPiBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0bGlzdElkICs9IHRoaXMuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mnIDlkI7kuIDkuKpJdGVt44CC44CC44CC77yI5ZOO77yM6L+Z5Lqb5Yik5pat55yf5b+D5oG25b+D77yM5Yik5pat5LqG5YmN6Z2i55qE6L+Y6KaB5Yik5pat5pyA5ZCO5LiA5Liq44CC44CC44CC5LiA5byA5aeL5ZGi77yM5bCx5Y+q5pyJ5LiA5Liq5biD5bGA77yI5Y2V5YiX5biD5bGA77yJ77yM6YKj5pe25YCZ5Luj56CB5omN5LiJ55m+6KGM77yM5ZCO5p2l5bCx5oOz552A5a6M5ZaE5ZWK77yM6Im5Li7ov5nlnZHnnJ/mt7HvvIznjrDlnKjov5nooYzmlbDpg73kuIDljYPkupTkuoY9ID18fO+8iVxyXG4gICAgICAgIGRhdGEgPSB0aGlzLl92aXJ0dWFsID8gdGhpcy5kaXNwbGF5RGF0YVt0aGlzLmRpc3BsYXlJdGVtTnVtIC0gMV0gOiB0aGlzLl9jYWxjRXhpc3RJdGVtUG9zKHRoaXMuX251bUl0ZW1zIC0gMSk7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pZCA9PSB0Ll9udW1JdGVtcyAtIDEpIHtcclxuICAgICAgICAgICAgY2VudGVyID0gdC5fc2l6ZVR5cGUgPyAoKGRhdGEudG9wICsgZGF0YS5ib3R0b20pIC8gMikgOiAoY2VudGVyID0gKGRhdGEubGVmdCArIGRhdGEucmlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlJpZ2h0ID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RsaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodkxlZnQgPCBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdGxpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2Qm90dG9tIDwgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RsaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlRvcCA+IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0bGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy5sb2coJ3QubmVhcmVzdGxpc3RJZCA9JywgdC5uZWFyZXN0bGlzdElkKTtcclxuICAgIH0sXHJcbiAgICAvL+S4iuS4gOmhtVxyXG4gICAgcHJlUGFnZSh0aW1lSW5TZWNvbmQpIHtcclxuICAgICAgICAvLyBjYy5sb2coJ/CfkYgnKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aW1lSW5TZWNvbmQgPT0gbnVsbClcclxuICAgICAgICAgICAgdGltZUluU2Vjb25kID0gLjU7XHJcbiAgICAgICAgdGhpcy5za2lwUGFnZSh0aGlzLmN1clBhZ2VOdW0gLSAxLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgfSxcclxuICAgIC8v5LiL5LiA6aG1XHJcbiAgICBuZXh0UGFnZSh0aW1lSW5TZWNvbmQpIHtcclxuICAgICAgICAvLyBjYy5sb2coJ/CfkYknKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aW1lSW5TZWNvbmQgPT0gbnVsbClcclxuICAgICAgICAgICAgdGltZUluU2Vjb25kID0gLjU7XHJcbiAgICAgICAgdGhpcy5za2lwUGFnZSh0aGlzLmN1clBhZ2VOdW0gKyAxLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgfSxcclxuICAgIC8v6Lez6L2s5Yiw56ys5Yeg6aG1XHJcbiAgICBza2lwUGFnZShwYWdlTnVtLCB0aW1lSW5TZWNvbmQpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodC5fc2xpZGVNb2RlICE9IFNsaWRlVHlwZS5QQUdFKVxyXG4gICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoJ1RoaXMgZnVuY3Rpb24gaXMgbm90IGFsbG93ZWQgdG8gYmUgY2FsbGVkLCBNdXN0IFNsaWRlTW9kZSA9IFBBR0UhJyk7XHJcbiAgICAgICAgaWYgKHBhZ2VOdW0gPCAwIHx8IHBhZ2VOdW0gPj0gdC5fbnVtSXRlbXMpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodC5jdXJQYWdlTnVtID09IHBhZ2VOdW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyBjYy5sb2cocGFnZU51bSk7XHJcbiAgICAgICAgdC5jdXJQYWdlTnVtID0gcGFnZU51bTtcclxuICAgICAgICBpZiAodC5wYWdlQ2hhbmdlRXZlbnQpIHtcclxuICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnBhZ2VDaGFuZ2VFdmVudF0sIHBhZ2VOdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0LnNjcm9sbFRvKHBhZ2VOdW0sIHRpbWVJblNlY29uZCk7XHJcbiAgICB9LFxyXG4gICAgLy/orqHnrpcgQ3VzdG9tU2l6Ze+8iOi/meS4quWHveaVsOi/mOaYr+S/neeVmeWQp++8jOafkOS6m+e9leingeeahOaDheWGteeahOehrui/mOaYr+mcgOimgeaJi+WKqOiuoeeul2N1c3RvbVNpemXnmoTvvIlcclxuICAgIGNhbGNDdXN0b21TaXplKG51bUl0ZW1zKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0Ll9pdGVtVG1wKVxyXG4gICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoJ1Vuc2V0IHRlbXBsYXRlIGl0ZW0hJyk7XHJcbiAgICAgICAgaWYgKCF0LnJlbmRlckV2ZW50KVxyXG4gICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoJ1Vuc2V0IFJlbmRlci1FdmVudCEnKTtcclxuICAgICAgICB0Ll9jdXN0b21TaXplID0ge307XHJcbiAgICAgICAgbGV0IHRlbXAgPSBjYy5pbnN0YW50aWF0ZSh0Ll9pdGVtVG1wKTtcclxuICAgICAgICB0LmNvbnRlbnQuYWRkQ2hpbGQodGVtcCk7XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBudW1JdGVtczsgbisrKSB7XHJcbiAgICAgICAgICAgIHQucmVuZGVyRXZlbnQodGVtcCwgbik7XHJcbiAgICAgICAgICAgIC8vIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdC5yZW5kZXJFdmVudF0sIHRlbXAsIG4pO1xyXG4gICAgICAgICAgICBpZiAodGVtcC5oZWlnaHQgIT0gdC5faXRlbVNpemUuaGVpZ2h0IHx8IHRlbXAud2lkdGggIT0gdC5faXRlbVNpemUud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHQuX2N1c3RvbVNpemVbbl0gPSB0Ll9zaXplVHlwZSA/IHRlbXAuaGVpZ2h0IDogdGVtcC53aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHQuX2N1c3RvbVNpemUpLmxlbmd0aClcclxuICAgICAgICAgICAgdC5fY3VzdG9tU2l6ZSA9IG51bGw7XHJcbiAgICAgICAgdGVtcC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgaWYgKHRlbXAuZGVzdHJveSlcclxuICAgICAgICAgICAgdGVtcC5kZXN0cm95KCk7XHJcbiAgICAgICAgcmV0dXJuIHQuX2N1c3RvbVNpemU7XHJcbiAgICB9LFxyXG5cclxufSk7Il19