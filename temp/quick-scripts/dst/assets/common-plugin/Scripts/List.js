
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/common-plugin/Scripts/List.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '987bdrXWC5Lz6Y5yNsCVEwF', 'List');
// common-plugin/Scripts/List.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/******************************************
 * @author kL <klk0@qq.com>
 * @date 2019/6/6
 * @doc 列表组件.
 * @end
 ******************************************/
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu, executionOrder = _a.executionOrder, requireComponent = _a.requireComponent;
var ListItem_1 = require("./ListItem");
var CompatibleTool_1 = require("./CompatibleTool");
var TemplateType;
(function (TemplateType) {
    TemplateType[TemplateType["NODE"] = 1] = "NODE";
    TemplateType[TemplateType["PREFAB"] = 2] = "PREFAB";
})(TemplateType || (TemplateType = {}));
var SlideType;
(function (SlideType) {
    SlideType[SlideType["NORMAL"] = 1] = "NORMAL";
    SlideType[SlideType["ADHERING"] = 2] = "ADHERING";
    SlideType[SlideType["PAGE"] = 3] = "PAGE";
})(SlideType || (SlideType = {}));
var SelectedType;
(function (SelectedType) {
    SelectedType[SelectedType["NONE"] = 0] = "NONE";
    SelectedType[SelectedType["SINGLE"] = 1] = "SINGLE";
    SelectedType[SelectedType["MULT"] = 2] = "MULT";
})(SelectedType || (SelectedType = {}));
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //模板类型
        _this.templateType = TemplateType.NODE;
        //模板Item（Node）
        _this.tmpNode = null;
        //模板Item（Prefab）
        _this.tmpPrefab = null;
        //滑动模式
        _this._slideMode = SlideType.NORMAL;
        //翻页作用距离
        _this.pageDistance = .3;
        //页面改变事件
        _this.pageChangeEvent = new cc.Component.EventHandler();
        //是否为虚拟列表（动态列表）
        _this._virtual = true;
        //是否为循环列表
        _this.cyclic = false;
        //缺省居中
        _this.lackCenter = false;
        //缺省可滑动
        _this.lackSlide = false;
        //刷新频率
        _this._updateRate = 0;
        //分帧渲染（每帧渲染的Item数量（<=0时关闭分帧渲染））
        _this.frameByFrameRenderNum = 0;
        //渲染事件（渲染器）
        _this.renderEvent = new cc.Component.EventHandler();
        //选择模式
        _this.selectedMode = SelectedType.NONE;
        _this.repeatEventSingle = false;
        //触发选择事件
        _this.selectedEvent = null; //new cc.Component.EventHandler();
        //当前选择id
        _this._selectedId = -1;
        _this._forceUpdate = false;
        _this._updateDone = true;
        //列表数量
        _this._numItems = 0;
        _this._inited = false;
        _this._needUpdateWidget = false;
        _this._aniDelRuning = false;
        _this._doneAfterUpdate = false;
        _this.adhering = false;
        _this._adheringBarrier = false;
        _this.curPageNum = 0;
        return _this;
    }
    Object.defineProperty(List.prototype, "slideMode", {
        get: function () {
            return this._slideMode;
        },
        set: function (val) {
            this._slideMode = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "virtual", {
        get: function () {
            return this._virtual;
        },
        set: function (val) {
            if (val != null)
                this._virtual = val;
            if (!CC_DEV && this._numItems != 0) {
                this._onScrolling();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "updateRate", {
        get: function () {
            return this._updateRate;
        },
        set: function (val) {
            if (val >= 0 && val <= 6) {
                this._updateRate = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "selectedId", {
        get: function () {
            return this._selectedId;
        },
        set: function (val) {
            var t = this;
            var item;
            switch (t.selectedMode) {
                case SelectedType.SINGLE: {
                    if (!t.repeatEventSingle && val == t._selectedId)
                        return;
                    item = t.getItemByListId(val);
                    // if (!item && val >= 0)
                    //     return;
                    var listItem = void 0;
                    if (t._selectedId >= 0)
                        t._lastSelectedId = t._selectedId;
                    else //如果＜0则取消选择，把_lastSelectedId也置空吧，如果以后有特殊需求再改吧。
                        t._lastSelectedId = null;
                    t._selectedId = val;
                    if (item) {
                        listItem = item.getComponent(ListItem_1.default);
                        listItem.selected = true;
                    }
                    if (t._lastSelectedId >= 0 && t._lastSelectedId != t._selectedId) {
                        var lastItem = t.getItemByListId(t._lastSelectedId);
                        if (lastItem) {
                            lastItem.getComponent(ListItem_1.default).selected = false;
                        }
                    }
                    if (t.selectedEvent) {
                        cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems));
                    }
                    break;
                }
                case SelectedType.MULT: {
                    item = t.getItemByListId(val);
                    if (!item)
                        return;
                    var listItem = item.getComponent(ListItem_1.default);
                    if (t._selectedId >= 0)
                        t._lastSelectedId = t._selectedId;
                    t._selectedId = val;
                    var bool = !listItem.selected;
                    listItem.selected = bool;
                    var sub = t.multSelected.indexOf(val);
                    if (bool && sub < 0) {
                        t.multSelected.push(val);
                    }
                    else if (!bool && sub >= 0) {
                        t.multSelected.splice(sub, 1);
                    }
                    if (t.selectedEvent) {
                        cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems), bool);
                    }
                    break;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "numItems", {
        get: function () {
            return this._actualNumItems;
        },
        set: function (val) {
            var t = this;
            if (!t.checkInited(false))
                return;
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
                if (!t.frameByFrameRenderNum && t.slideMode == SlideType.PAGE)
                    t.curPageNum = t.nearestListId;
            }
            else {
                t._resizeContent();
                if (t.cyclic) {
                    t._numItems = t._cyclicNum * t._numItems;
                }
                var layout = t.content.getComponent(cc.Layout);
                if (layout) {
                    layout.enabled = true;
                }
                t._delRedundantItem();
                t.firstListId = 0;
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
                }
                else {
                    for (var n = 0; n < t._numItems; n++) {
                        t._createOrUpdateItem2(n);
                    }
                    t.displayItemNum = t._numItems;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "scrollView", {
        get: function () {
            return this._scrollView;
        },
        enumerable: false,
        configurable: true
    });
    //----------------------------------------------------------------------------
    List.prototype.onLoad = function () {
        this._init();
    };
    List.prototype.onDestroy = function () {
        var t = this;
        if (t._itemTmp && t._itemTmp.isValid)
            t._itemTmp.destroy();
        if (t.tmpNode && t.tmpNode.isValid)
            t.tmpNode.destroy();
        // let total = t._pool.size();
        while (t._pool.size()) {
            var node = t._pool.get();
            node.destroy();
        }
        // if (total)
        //     cc.log('-----------------' + t.node.name + '<List> destroy node total num. =>', total);
    };
    List.prototype.onEnable = function () {
        // if (!CC_EDITOR) 
        console.log(" >>>list enable");
        this._registerEvent();
        this._init();
    };
    List.prototype.onDisable = function () {
        console.log(" >>>list onDisable");
        // if (!CC_EDITOR) 
        this._unregisterEvent();
    };
    //注册事件
    List.prototype._registerEvent = function () {
        var t = this;
        t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.on('touch-up', t._onTouchUp, t);
        t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.on('scroll-began', t._onScrollBegan, t, true);
        t.node.on('scroll-ended', t._onScrollEnded, t, true);
        t.node.on('scrolling', t._onScrolling, t, true);
        t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
    };
    //卸载事件
    List.prototype._unregisterEvent = function () {
        var t = this;
        t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.off('touch-up', t._onTouchUp, t);
        t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.off('scroll-began', t._onScrollBegan, t, true);
        t.node.off('scroll-ended', t._onScrollEnded, t, true);
        t.node.off('scrolling', t._onScrolling, t, true);
        t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
    };
    //初始化各种..
    List.prototype._init = function () {
        var t = this;
        if (t._inited)
            return;
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
        t.setTemplateItem(cc.instantiate(t.templateType == TemplateType.PREFAB ? t.tmpPrefab : t.tmpNode));
        // 特定的滑动模式处理
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
        if (t.cyclic || 0) {
            t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
            t._scrollView._startBounceBackIfNeeded = function () {
                return false;
            };
            // t._scrollView._scrollChildren = function () {
            //     return false;
            // }
        }
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL: {
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
            case cc.Layout.Type.VERTICAL: {
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
            case cc.Layout.Type.GRID: {
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
        }
        // 清空 content
        // t.content.children.forEach((child: cc.Node) => {
        //     child.removeFromParent();
        //     if (child != t.tmpNode && child.isValid)
        //         child.destroy();
        // });
        t.content.removeAllChildren();
        t._inited = true;
    };
    /**
     * 为了实现循环列表，必须覆写cc.ScrollView的某些函数
     * @param {Number} dt
     */
    List.prototype._processAutoScrolling = function (dt) {
        // let isAutoScrollBrake = this._scrollView._isNecessaryAutoScrollBrake();
        var brakingFactor = 1;
        this._scrollView['_autoScrollAccumulatedTime'] += dt * (1 / brakingFactor);
        var percentage = Math.min(1, this._scrollView['_autoScrollAccumulatedTime'] / this._scrollView['_autoScrollTotalTime']);
        if (this._scrollView['_autoScrollAttenuate']) {
            var time = percentage - 1;
            percentage = time * time * time * time * time + 1;
        }
        var newPosition = this._scrollView['_autoScrollStartPosition'].add(this._scrollView['_autoScrollTargetDelta'].mul(percentage));
        var EPSILON = this._scrollView['getScrollEndedEventTiming']();
        var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
        // cc.log(reachedEnd, Math.abs(percentage - 1), EPSILON)
        var fireEvent = Math.abs(percentage - 1) <= this._scrollView['getScrollEndedEventTiming']();
        if (fireEvent && !this._scrollView['_isScrollEndedWithThresholdEventFired']) {
            this._scrollView['_dispatchEvent']('scroll-ended-with-threshold');
            this._scrollView['_isScrollEndedWithThresholdEventFired'] = true;
        }
        // if (this._scrollView.elastic && !reachedEnd) {
        //     let brakeOffsetPosition = newPosition.sub(this._scrollView._autoScrollBrakingStartPosition);
        //     if (isAutoScrollBrake) {
        //         brakeOffsetPosition = brakeOffsetPosition.mul(brakingFactor);
        //     }
        //     newPosition = this._scrollView._autoScrollBrakingStartPosition.add(brakeOffsetPosition);
        // } else {
        //     let moveDelta = newPosition.sub(this._scrollView.getContentPosition());
        //     let outOfBoundary = this._scrollView._getHowMuchOutOfBoundary(moveDelta);
        //     if (!outOfBoundary.fuzzyEquals(CompatibleTool.position(0, 0), EPSILON)) {
        //         newPosition = newPosition.add(outOfBoundary);
        //         reachedEnd = true;
        //     }
        // }
        if (reachedEnd) {
            this._scrollView['_autoScrolling'] = false;
        }
        var deltaMove = newPosition.sub(this._scrollView.getContentPosition());
        // cc.log(deltaMove)
        this._scrollView['_moveContent'](this._scrollView['_clampDelta'](deltaMove), reachedEnd);
        this._scrollView['_dispatchEvent']('scrolling');
        // scollTo API controll move
        if (!this._scrollView['_autoScrolling']) {
            this._scrollView['_isBouncing'] = false;
            this._scrollView['_scrolling'] = false;
            this._scrollView['_dispatchEvent']('scroll-ended');
        }
    };
    //设置模板Item
    List.prototype.setTemplateItem = function (item) {
        if (!item)
            return;
        var t = this;
        t._itemTmp = item;
        if (t._resizeMode == cc.Layout.ResizeMode.CHILDREN)
            t._itemSize = t._layout.cellSize;
        else
            t._itemSize = cc.size(item.width, item.height);
        //获取ListItem，如果没有就取消选择模式
        var com = item.getComponent(ListItem_1.default);
        var remove = false;
        if (!com)
            remove = true;
        // if (com) {
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
        if (t.selectedMode == SelectedType.MULT)
            t.multSelected = [];
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
    };
    /**
     * 检查是否初始化
     * @param {Boolean} printLog 是否打印错误信息
     * @returns
     */
    List.prototype.checkInited = function (printLog) {
        if (printLog === void 0) { printLog = true; }
        if (!this._inited) {
            if (printLog)
                cc.error('List initialization not completed!');
            return false;
        }
        return true;
    };
    //禁用 Layout 组件，自行计算 Content Size
    List.prototype._resizeContent = function () {
        var t = this;
        var result;
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL: {
                if (t._customSize) {
                    var fixed = t._getFixedSize(null);
                    result = t._leftGap + fixed.val + (t._itemSize.width * (t._numItems - fixed.count)) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                }
                else {
                    result = t._leftGap + (t._itemSize.width * t._numItems) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                }
                break;
            }
            case cc.Layout.Type.VERTICAL: {
                if (t._customSize) {
                    var fixed = t._getFixedSize(null);
                    result = t._topGap + fixed.val + (t._itemSize.height * (t._numItems - fixed.count)) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                }
                else {
                    result = t._topGap + (t._itemSize.height * t._numItems) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                }
                break;
            }
            case cc.Layout.Type.GRID: {
                //网格模式不支持居中
                if (t.lackCenter)
                    t.lackCenter = false;
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        var lineNum = Math.ceil(t._numItems / t._colLineNum);
                        result = t._topGap + (t._itemSize.height * lineNum) + (t._lineGap * (lineNum - 1)) + t._bottomGap;
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        var colNum = Math.ceil(t._numItems / t._colLineNum);
                        result = t._leftGap + (t._itemSize.width * colNum) + (t._columnGap * (colNum - 1)) + t._rightGap;
                        break;
                }
                break;
            }
        }
        var layout = t.content.getComponent(cc.Layout);
        if (layout)
            layout.enabled = false;
        t._allItemSize = result;
        t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? (t._topGap + t._bottomGap) : (t._leftGap + t._rightGap));
        if (t.cyclic) {
            var totalSize = (t._sizeType ? t.node.height : t.node.width);
            t._cyclicPos1 = 0;
            totalSize -= t._cyclicPos1;
            t._cyclicNum = Math.ceil(totalSize / t._allItemSizeNoEdge) + 1;
            var spacing = t._sizeType ? t._lineGap : t._columnGap;
            t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + spacing;
            t._cyclicAllItemSize = t._allItemSize + (t._allItemSizeNoEdge * (t._cyclicNum - 1)) + (spacing * (t._cyclicNum - 1));
            t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
            t._cycilcAllItemSizeNoEdge += spacing * (t._cyclicNum - 1);
            // cc.log('_cyclicNum ->', t._cyclicNum, t._allItemSizeNoEdge, t._allItemSize, t._cyclicPos1, t._cyclicPos2);
        }
        t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
        var slideOffset = ((!t._lack || !t.lackCenter) && t.lackSlide) ? 0 : .1;
        var targetWH = t._lack ? ((t._sizeType ? t.node.height : t.node.width) - slideOffset) : (t.cyclic ? t._cyclicAllItemSize : t._allItemSize);
        if (targetWH < 0)
            targetWH = 0;
        if (t._sizeType) {
            t.content.height = targetWH;
        }
        else {
            t.content.width = targetWH;
        }
        // cc.log('_resizeContent()  numItems =', t._numItems, '，content =', t.content);
    };
    //滚动进行时...
    List.prototype._onScrolling = function (ev) {
        if (ev === void 0) { ev = null; }
        if (this.frameCount == null)
            this.frameCount = this._updateRate;
        if (!this._forceUpdate && (ev && ev.type != 'scroll-ended') && this.frameCount > 0) {
            this.frameCount--;
            return;
        }
        else
            this.frameCount = this._updateRate;
        if (this._aniDelRuning)
            return;
        //循环列表处理
        if (this.cyclic) {
            var scrollPos = this.content.getPosition();
            scrollPos = this._sizeType ? scrollPos.y : scrollPos.x;
            var addVal = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
            var add = this._sizeType ? CompatibleTool_1.default.position(0, addVal) : CompatibleTool_1.default.position(addVal, 0);
            switch (this._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    if (scrollPos > -this._cyclicPos1) {
                        this.content.x = -this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                        // if (this._beganPos) {
                        //     this._beganPos += add;
                        // }
                    }
                    else if (scrollPos < -this._cyclicPos2) {
                        this.content.x = -this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                        // if (this._beganPos) {
                        //     this._beganPos -= add;
                        // }
                    }
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    if (scrollPos < this._cyclicPos1) {
                        this.content.x = this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                    }
                    else if (scrollPos > this._cyclicPos2) {
                        this.content.x = this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                    }
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (scrollPos < this._cyclicPos1 + 700) {
                        this.content.y = this._cyclicPos2 + 700;
                        cc.log("xxxxxxx");
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                    }
                    else if (scrollPos > (this._cyclicPos2 + 700)) {
                        cc.log("ddddddddddd");
                        this.content.y = this._cyclicPos1 + 700;
                        // if (this._scrollView.isAutoScrolling()) {
                        //     this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        // }
                    }
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (scrollPos > -this._cyclicPos1) {
                        this.content.y = -this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                    }
                    else if (scrollPos < -this._cyclicPos2) {
                        this.content.y = -this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
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
        }
        else {
            vRight = this.viewRight;
            vLeft = this.viewLeft;
        }
        if (this._virtual) {
            this.displayData = [];
            var itemPos = void 0;
            var curId = 0;
            var endId = this._numItems - 1;
            if (this._customSize) {
                var breakFor = false;
                //如果该item的位置在可视区域内，就推入displayData
                for (; curId <= endId && !breakFor; curId++) {
                    itemPos = this._calcItemPos(curId);
                    switch (this._align) {
                        case cc.Layout.Type.HORIZONTAL:
                            if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                this.displayData.push(itemPos);
                            }
                            else if (curId != 0 && this.displayData.length > 0) {
                                breakFor = true;
                            }
                            break;
                        case cc.Layout.Type.VERTICAL:
                            if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                this.displayData.push(itemPos);
                            }
                            else if (curId != 0 && this.displayData.length > 0) {
                                breakFor = true;
                            }
                            break;
                        case cc.Layout.Type.GRID:
                            switch (this._startAxis) {
                                case cc.Layout.AxisDirection.HORIZONTAL:
                                    if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                        this.displayData.push(itemPos);
                                    }
                                    else if (curId != 0 && this.displayData.length > 0) {
                                        breakFor = true;
                                    }
                                    break;
                                case cc.Layout.AxisDirection.VERTICAL:
                                    if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                        this.displayData.push(itemPos);
                                    }
                                    else if (curId != 0 && this.displayData.length > 0) {
                                        breakFor = true;
                                    }
                                    break;
                            }
                            break;
                    }
                }
            }
            else {
                var ww = this._itemSize.width + this._columnGap;
                var hh = this._itemSize.height + this._lineGap;
                switch (this._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                        curId = (vLeft + this._leftGap) / ww;
                        endId = (vRight + this._rightGap) / ww;
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                        curId = (-vRight - this._rightGap) / ww;
                        endId = (-vLeft - this._leftGap) / ww;
                        break;
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        curId = (-vTop - this._topGap) / hh;
                        endId = (-vBottom - this._bottomGap) / hh;
                        break;
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        curId = (vBottom + this._bottomGap) / hh;
                        endId = (vTop + this._topGap) / hh;
                        break;
                }
                curId = Math.floor(curId) * this._colLineNum;
                endId = Math.ceil(endId) * this._colLineNum;
                endId--;
                if (curId < 0)
                    curId = 0;
                if (endId >= this._numItems)
                    endId = this._numItems - 1;
                for (; curId <= endId; curId++) {
                    this.displayData.push(this._calcItemPos(curId));
                }
            }
            this._delRedundantItem();
            if (this.displayData.length <= 0 || !this._numItems) { //if none, delete all.
                this._lastDisplayData = [];
                return;
            }
            this.firstListId = this.displayData[0].id;
            this.displayItemNum = this.displayData.length;
            var len = this._lastDisplayData.length;
            var haveDataChange = this.displayItemNum != len;
            if (haveDataChange) {
                // 如果是逐帧渲染，需要排序
                if (this.frameByFrameRenderNum > 0) {
                    this._lastDisplayData.sort(function (a, b) { return a - b; });
                }
                // 因List的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。
                haveDataChange = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
            }
            if (this._forceUpdate || haveDataChange) { //如果是强制更新
                if (this.frameByFrameRenderNum > 0) {
                    // if (this._updateDone) {
                    // this._lastDisplayData = [];
                    //逐帧渲染
                    if (this._numItems > 0) {
                        if (!this._updateDone) {
                            this._doneAfterUpdate = true;
                        }
                        else {
                            this._updateCounter = 0;
                        }
                        this._updateDone = false;
                    }
                    else {
                        this._updateCounter = 0;
                        this._updateDone = true;
                    }
                    // }
                }
                else {
                    //直接渲染
                    this._lastDisplayData = [];
                    // cc.log('List Display Data II::', this.displayData);
                    for (var c = 0; c < this.displayItemNum; c++) {
                        this._createOrUpdateItem(this.displayData[c]);
                    }
                    this._forceUpdate = false;
                }
            }
            this._calcNearestItem();
        }
    };
    //计算可视范围
    List.prototype._calcViewPos = function () {
        var scrollPos = this.content.getPosition();
        switch (this._alignCalcType) {
            case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
                this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
                this.viewRight = this.viewLeft + this.node.width;
                this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
                this.viewRight += this.elasticRight;
                // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                break;
            case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
                this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
                this.viewLeft = this.viewRight - this.node.width;
                this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
                this.viewLeft -= this.elasticLeft;
                // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                break;
            case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
                this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
                this.viewBottom = this.viewTop - this.node.height;
                this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
                this.viewBottom += this.elasticBottom;
                break;
            case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
                this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
                this.viewTop = this.viewBottom + this.node.height;
                this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
                this.viewTop -= this.elasticTop;
                // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                break;
        }
    };
    //计算位置 根据id
    List.prototype._calcItemPos = function (id) {
        var width, height, top, bottom, left, right, itemX, itemY;
        switch (this._align) {
            case cc.Layout.Type.HORIZONTAL:
                switch (this._horizontalDir) {
                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            left = this._leftGap + ((this._itemSize.width + this._columnGap) * (id - fixed.count)) + (fixed.val + (this._columnGap * fixed.count));
                            var cs = this._customSize[id];
                            width = (cs > 0 ? cs : this._itemSize.width);
                        }
                        else {
                            left = this._leftGap + ((this._itemSize.width + this._columnGap) * id);
                            width = this._itemSize.width;
                        }
                        right = left + width;
                        if (this.lackCenter) {
                            var offset = (this.content.width / 2) - (this._allItemSizeNoEdge / 2);
                            left += offset;
                            right += offset;
                        }
                        return {
                            id: id,
                            left: left,
                            right: right,
                            x: left + (this._itemTmp.anchorX * width),
                            y: this._itemTmp.y,
                        };
                    }
                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            right = -this._rightGap - ((this._itemSize.width + this._columnGap) * (id - fixed.count)) - (fixed.val + (this._columnGap * fixed.count));
                            var cs = this._customSize[id];
                            width = (cs > 0 ? cs : this._itemSize.width);
                        }
                        else {
                            right = -this._rightGap - ((this._itemSize.width + this._columnGap) * id);
                            width = this._itemSize.width;
                        }
                        left = right - width;
                        if (this.lackCenter) {
                            var offset = (this.content.width / 2) - (this._allItemSizeNoEdge / 2);
                            left -= offset;
                            right -= offset;
                        }
                        return {
                            id: id,
                            right: right,
                            left: left,
                            x: left + (this._itemTmp.anchorX * width),
                            y: this._itemTmp.y,
                        };
                    }
                }
                break;
            case cc.Layout.Type.VERTICAL: {
                switch (this._verticalDir) {
                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            top = -this._topGap - ((this._itemSize.height + this._lineGap) * (id - fixed.count)) - (fixed.val + (this._lineGap * fixed.count));
                            var cs = this._customSize[id];
                            height = (cs > 0 ? cs : this._itemSize.height);
                        }
                        else {
                            top = -this._topGap - ((this._itemSize.height + this._lineGap) * id);
                            height = this._itemSize.height;
                        }
                        bottom = top - height;
                        if (this.lackCenter) {
                            var offset = (this.content.height / 2) - (this._allItemSizeNoEdge / 2);
                            top -= offset;
                            bottom -= offset;
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: this._itemTmp.x,
                            y: bottom + (this._itemTmp.anchorY * height),
                        };
                    }
                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * (id - fixed.count)) + (fixed.val + (this._lineGap * fixed.count));
                            var cs = this._customSize[id];
                            height = (cs > 0 ? cs : this._itemSize.height);
                        }
                        else {
                            bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * id);
                            height = this._itemSize.height;
                        }
                        top = bottom + height;
                        if (this.lackCenter) {
                            var offset = (this.content.height / 2) - (this._allItemSizeNoEdge / 2);
                            top += offset;
                            bottom += offset;
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: this._itemTmp.x,
                            y: bottom + (this._itemTmp.anchorY * height),
                        };
                        break;
                    }
                }
            }
            case cc.Layout.Type.GRID: {
                var colLine = Math.floor(id / this._colLineNum);
                switch (this._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL: {
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                top = -this._topGap - ((this._itemSize.height + this._lineGap) * colLine);
                                bottom = top - this._itemSize.height;
                                itemY = bottom + (this._itemTmp.anchorY * this._itemSize.height);
                                break;
                            }
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * colLine);
                                top = bottom + this._itemSize.height;
                                itemY = bottom + (this._itemTmp.anchorY * this._itemSize.height);
                                break;
                            }
                        }
                        itemX = this._leftGap + ((id % this._colLineNum) * (this._itemSize.width + this._columnGap));
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                itemX += (this._itemTmp.anchorX * this._itemSize.width);
                                itemX -= (this.content.anchorX * this.content.width);
                                break;
                            }
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                itemX += ((1 - this._itemTmp.anchorX) * this._itemSize.width);
                                itemX -= ((1 - this.content.anchorX) * this.content.width);
                                itemX *= -1;
                                break;
                            }
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: itemX,
                            y: itemY,
                        };
                    }
                    case cc.Layout.AxisDirection.VERTICAL: {
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                left = this._leftGap + ((this._itemSize.width + this._columnGap) * colLine);
                                right = left + this._itemSize.width;
                                itemX = left + (this._itemTmp.anchorX * this._itemSize.width);
                                itemX -= (this.content.anchorX * this.content.width);
                                break;
                            }
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                right = -this._rightGap - ((this._itemSize.width + this._columnGap) * colLine);
                                left = right - this._itemSize.width;
                                itemX = left + (this._itemTmp.anchorX * this._itemSize.width);
                                itemX += ((1 - this.content.anchorX) * this.content.width);
                                break;
                            }
                        }
                        itemY = -this._topGap - ((id % this._colLineNum) * (this._itemSize.height + this._lineGap));
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                itemY -= ((1 - this._itemTmp.anchorY) * this._itemSize.height);
                                itemY += ((1 - this.content.anchorY) * this.content.height);
                                break;
                            }
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                itemY -= ((this._itemTmp.anchorY) * this._itemSize.height);
                                itemY += (this.content.anchorY * this.content.height);
                                itemY *= -1;
                                break;
                            }
                        }
                        return {
                            id: id,
                            left: left,
                            right: right,
                            x: itemX,
                            y: itemY,
                        };
                    }
                }
                break;
            }
        }
    };
    //计算已存在的Item的位置
    List.prototype._calcExistItemPos = function (id) {
        var item = this.getItemByListId(id);
        if (!item)
            return null;
        var data = {
            id: id,
            x: item.x,
            y: item.y,
        };
        if (this._sizeType) {
            data.top = item.y + (item.height * (1 - item.anchorY));
            data.bottom = item.y - (item.height * item.anchorY);
        }
        else {
            data.left = item.x - (item.width * item.anchorX);
            data.right = item.x + (item.width * (1 - item.anchorX));
        }
        return data;
    };
    //获取Item位置
    List.prototype.getItemPos = function (id) {
        if (this._virtual)
            return this._calcItemPos(id);
        else {
            if (this.frameByFrameRenderNum)
                return this._calcItemPos(id);
            else
                return this._calcExistItemPos(id);
        }
    };
    //获取固定尺寸
    List.prototype._getFixedSize = function (listId) {
        if (!this._customSize)
            return null;
        if (listId == null)
            listId = this._numItems;
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
            count: count,
        };
    };
    //滚动结束时..
    List.prototype._onScrollBegan = function () {
        this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
    };
    //滚动结束时..
    List.prototype._onScrollEnded = function () {
        var t = this;
        if (t.scrollToListId != null) {
            var item = t.getItemByListId(t.scrollToListId);
            t.scrollToListId = null;
            if (item) {
                item.runAction(cc.sequence(cc.scaleTo(.1, 1.06), cc.scaleTo(.1, 1)));
            }
        }
        t._onScrolling();
        if (t._slideMode == SlideType.ADHERING &&
            !t.adhering) {
            //cc.log(t.adhering, t._scrollView.isAutoScrolling(), t._scrollView.isScrolling());
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                this._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
    };
    // 触摸时
    List.prototype._onTouchStart = function (ev, captureListeners) {
        if (this._scrollView['_hasNestedViewGroup'](ev, captureListeners))
            return;
        var isMe = ev.eventPhase === cc.Event.AT_TARGET && ev.target === this.node;
        if (!isMe) {
            var itemNode = ev.target;
            while (itemNode._listId == null && itemNode.parent)
                itemNode = itemNode.parent;
            this._scrollItem = itemNode._listId != null ? itemNode : ev.target;
        }
    };
    //触摸抬起时..
    List.prototype._onTouchUp = function () {
        var t = this;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
            if (this.adhering)
                this._adheringBarrier = true;
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                this._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
        this._scrollItem = null;
    };
    List.prototype._onTouchCancelled = function (ev, captureListeners) {
        var t = this;
        if (t._scrollView['_hasNestedViewGroup'](ev, captureListeners) || ev.simulate)
            return;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
            if (t.adhering)
                t._adheringBarrier = true;
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                t._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
        this._scrollItem = null;
    };
    //当尺寸改变
    List.prototype._onSizeChanged = function () {
        if (this.checkInited(false))
            this._onScrolling();
    };
    //当Item自适应
    List.prototype._onItemAdaptive = function (item) {
        // if (this.checkInited(false)) {
        if ((!this._sizeType && item.width != this._itemSize.width)
            || (this._sizeType && item.height != this._itemSize.height)) {
            if (!this._customSize)
                this._customSize = {};
            var val = this._sizeType ? item.height : item.width;
            if (this._customSize[item._listId] != val) {
                this._customSize[item._listId] = val;
                this._resizeContent();
                // this.content.children.forEach((child: cc.Node) => {
                //     this._updateItemPos(child);
                // });
                this.updateAll();
                // 如果当前正在运行 scrollTo，肯定会不准确，在这里做修正
                if (this._scrollToListId != null) {
                    this._scrollPos = null;
                    this.unschedule(this._scrollToSo);
                    this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - ((new Date()).getTime() / 1000)));
                }
            }
        }
        // }
    };
    //PAGE粘附
    List.prototype._pageAdhere = function () {
        var t = this;
        if (!t.cyclic && (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0))
            return;
        var curPos = t._sizeType ? t.viewTop : t.viewLeft;
        var dis = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
        var canSkip = Math.abs(t._beganPos - curPos) > dis;
        if (canSkip) {
            var timeInSecond = .5;
            switch (t._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (t._beganPos > curPos) {
                        t.prePage(timeInSecond);
                        // cc.log('_pageAdhere   PPPPPPPPPPPPPPP');
                    }
                    else {
                        t.nextPage(timeInSecond);
                        // cc.log('_pageAdhere   NNNNNNNNNNNNNNN');
                    }
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (t._beganPos < curPos) {
                        t.prePage(timeInSecond);
                    }
                    else {
                        t.nextPage(timeInSecond);
                    }
                    break;
            }
        }
        else if (t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0) {
            t.adhere();
        }
        t._beganPos = null;
    };
    //粘附
    List.prototype.adhere = function () {
        var t = this;
        if (!t.checkInited())
            return;
        if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)
            return;
        t.adhering = true;
        t._calcNearestItem();
        var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
        var timeInSecond = .7;
        t.scrollTo(t.nearestListId, timeInSecond, offset);
    };
    //Update..
    List.prototype.update = function () {
        if (this.frameByFrameRenderNum <= 0 || this._updateDone)
            return;
        // cc.log(this.displayData.length, this._updateCounter, this.displayData[this._updateCounter]);
        if (this._virtual) {
            var len = (this._updateCounter + this.frameByFrameRenderNum) > this.displayItemNum ? this.displayItemNum : (this._updateCounter + this.frameByFrameRenderNum);
            for (var n = this._updateCounter; n < len; n++) {
                var data = this.displayData[n];
                if (data) {
                    this._createOrUpdateItem(data);
                }
            }
            if (this._updateCounter >= this.displayItemNum - 1) { //最后一个
                if (this._doneAfterUpdate) {
                    this._updateCounter = 0;
                    this._updateDone = false;
                    // if (!this._scrollView.isScrolling())
                    this._doneAfterUpdate = false;
                }
                else {
                    this._updateDone = true;
                    this._delRedundantItem();
                    this._forceUpdate = false;
                    this._calcNearestItem();
                    if (this.slideMode == SlideType.PAGE)
                        this.curPageNum = this.nearestListId;
                }
            }
            else {
                this._updateCounter += this.frameByFrameRenderNum;
            }
        }
        else {
            if (this._updateCounter < this._numItems) {
                var len = (this._updateCounter + this.frameByFrameRenderNum) > this._numItems ? this._numItems : (this._updateCounter + this.frameByFrameRenderNum);
                for (var n = this._updateCounter; n < len; n++) {
                    this._createOrUpdateItem2(n);
                }
                this._updateCounter += this.frameByFrameRenderNum;
            }
            else {
                this._updateDone = true;
                this._calcNearestItem();
                if (this.slideMode == SlideType.PAGE)
                    this.curPageNum = this.nearestListId;
            }
        }
    };
    /**
     * 创建或更新Item（虚拟列表用）
     * @param {Object} data 数据
     */
    List.prototype._createOrUpdateItem = function (data) {
        var item = this.getItemByListId(data.id);
        if (!item) { //如果不存在
            var canGet = this._pool.size() > 0;
            if (canGet) {
                item = this._pool.get();
                // cc.log('从池中取出::   旧id =', item['_listId'], '，新id =', data.id, item);
            }
            else {
                item = cc.instantiate(this._itemTmp);
                // cc.log('新建::', data.id, item);
            }
            if (item._listId != data.id) {
                item._listId = data.id;
                item.setContentSize(this._itemSize);
            }
            item.setPosition(CompatibleTool_1.default.position(data.x, data.y));
            this._resetItemSize(item);
            this.content.addChild(item);
            if (canGet && this._needUpdateWidget) {
                var widget = item.getComponent(cc.Widget);
                if (widget)
                    widget.updateAlignment();
            }
            item.setSiblingIndex(this.content.childrenCount - 1);
            var listItem = item.getComponent(ListItem_1.default);
            item['listItem'] = listItem;
            if (listItem) {
                listItem.listId = data.id;
                listItem.list = this;
                listItem._registerEvent();
            }
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
            }
        }
        else if (this._forceUpdate && this.renderEvent) { //强制更新
            item.setPosition(CompatibleTool_1.default.position(data.x, data.y));
            this._resetItemSize(item);
            // cc.log('ADD::', data.id, item);
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
            }
        }
        this._resetItemSize(item);
        this._updateListItem(item['listItem']);
        if (this._lastDisplayData.indexOf(data.id) < 0) {
            this._lastDisplayData.push(data.id);
        }
    };
    //创建或更新Item（非虚拟列表用）
    List.prototype._createOrUpdateItem2 = function (listId) {
        var item = this.content.children[listId];
        var listItem;
        if (!item) { //如果不存在
            item = cc.instantiate(this._itemTmp);
            item._listId = listId;
            this.content.addChild(item);
            listItem = item.getComponent(ListItem_1.default);
            item['listItem'] = listItem;
            if (listItem) {
                listItem.listId = listId;
                listItem.list = this;
                listItem._registerEvent();
            }
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
            }
        }
        else if (this._forceUpdate && this.renderEvent) { //强制更新
            item._listId = listId;
            if (listItem)
                listItem.listId = listId;
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
            }
        }
        this._updateListItem(listItem);
        if (this._lastDisplayData.indexOf(listId) < 0) {
            this._lastDisplayData.push(listId);
        }
    };
    List.prototype._updateListItem = function (listItem) {
        if (!listItem)
            return;
        if (this.selectedMode > SelectedType.NONE) {
            var item = listItem.node;
            switch (this.selectedMode) {
                case SelectedType.SINGLE:
                    listItem.selected = this.selectedId == item._listId;
                    break;
                case SelectedType.MULT:
                    listItem.selected = this.multSelected.indexOf(item._listId) >= 0;
                    break;
            }
        }
    };
    //仅虚拟列表用
    List.prototype._resetItemSize = function (item) {
        return;
        var size;
        if (this._customSize && this._customSize[item._listId]) {
            size = this._customSize[item._listId];
        }
        else {
            if (this._colLineNum > 1)
                item.setContentSize(this._itemSize);
            else
                size = this._sizeType ? this._itemSize.height : this._itemSize.width;
        }
        if (size) {
            if (this._sizeType)
                item.height = size;
            else
                item.width = size;
        }
    };
    /**
     * 更新Item位置
     * @param {Number||Node} listIdOrItem
     */
    List.prototype._updateItemPos = function (listIdOrItem) {
        var item = isNaN(listIdOrItem) ? listIdOrItem : this.getItemByListId(listIdOrItem);
        var pos = this.getItemPos(item._listId);
        item.setPosition(pos.x, pos.y);
    };
    /**
     * 设置多选
     * @param {Array} args 可以是单个listId，也可是个listId数组
     * @param {Boolean} bool 值，如果为null的话，则直接用args覆盖
     */
    List.prototype.setMultSelected = function (args, bool) {
        var t = this;
        if (!t.checkInited())
            return;
        if (!Array.isArray(args)) {
            args = [args];
        }
        if (bool == null) {
            t.multSelected = args;
        }
        else {
            var listId = void 0, sub = void 0;
            if (bool) {
                for (var n = args.length - 1; n >= 0; n--) {
                    listId = args[n];
                    sub = t.multSelected.indexOf(listId);
                    if (sub < 0) {
                        t.multSelected.push(listId);
                    }
                }
            }
            else {
                for (var n = args.length - 1; n >= 0; n--) {
                    listId = args[n];
                    sub = t.multSelected.indexOf(listId);
                    if (sub >= 0) {
                        t.multSelected.splice(sub, 1);
                    }
                }
            }
        }
        t._forceUpdate = true;
        t._onScrolling();
    };
    /**
     * 更新指定的Item
     * @param {Array} args 单个listId，或者数组
     * @returns
     */
    List.prototype.updateItem = function (args) {
        if (!this.checkInited())
            return;
        if (!Array.isArray(args)) {
            args = [args];
        }
        for (var n = 0, len = args.length; n < len; n++) {
            var listId = args[n];
            var item = this.getItemByListId(listId);
            if (item)
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
        }
    };
    /**
     * 更新全部
     */
    List.prototype.updateAll = function () {
        if (!this.checkInited())
            return;
        this.numItems = this.numItems;
    };
    /**
     * 根据ListID获取Item
     * @param {Number} listId
     * @returns
     */
    List.prototype.getItemByListId = function (listId) {
        if (this.content) {
            for (var n = this.content.childrenCount - 1; n >= 0; n--) {
                var item = this.content.children[n];
                if (item._listId == listId)
                    return item;
            }
        }
    };
    /**
     * 获取在显示区域外的Item
     * @returns
     */
    List.prototype._getOutsideItem = function () {
        var item;
        var result = [];
        for (var n = this.content.childrenCount - 1; n >= 0; n--) {
            item = this.content.children[n];
            //@ts-ignore
            if (!this.displayData.find(function (d) { return d.id == item._listId; })) {
                result.push(item);
            }
        }
        return result;
    };
    //删除显示区域以外的Item
    List.prototype._delRedundantItem = function () {
        if (this._virtual) {
            var arr = this._getOutsideItem();
            for (var n = arr.length - 1; n >= 0; n--) {
                var item = arr[n];
                if (this._scrollItem && item._listId == this._scrollItem._listId)
                    continue;
                this._pool.put(item);
                for (var m = this._lastDisplayData.length - 1; m >= 0; m--) {
                    if (this._lastDisplayData[m] == item._listId) {
                        this._lastDisplayData.splice(m, 1);
                        break;
                    }
                }
            }
            // cc.log('存入::', str, '    pool.length =', this._pool.length);
        }
        else {
            while (this.content.childrenCount > this._numItems) {
                this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
            }
        }
    };
    //删除单个Item
    List.prototype._delSingleItem = function (item) {
        cc.log('DEL::', item['_listId'], item);
        item.removeFromParent();
        if (item.destroy)
            item.destroy();
        item = null;
    };
    /**
     * 动效删除Item（此方法只适用于虚拟列表，即_virtual=true）
     * 一定要在回调函数里重新设置新的numItems进行刷新，毕竟本List是靠数据驱动的。
     */
    List.prototype.aniDelItem = function (listId, callFunc, aniType) {
        var t = this;
        if (!t.checkInited() || t.cyclic || !t._virtual)
            return cc.error('This function is not allowed to be called!');
        if (t._aniDelRuning)
            return cc.warn('Please wait for the current deletion to finish!');
        var item = t.getItemByListId(listId);
        var listItem;
        if (!item) {
            callFunc(listId);
            return;
        }
        else {
            listItem = item.getComponent(ListItem_1.default);
        }
        t._aniDelRuning = true;
        var curLastId = t.displayData[t.displayData.length - 1].id;
        var resetSelectedId = listItem.selected;
        listItem.showAni(aniType, function () {
            //判断有没有下一个，如果有的话，创建粗来
            var newId;
            if (curLastId < t._numItems - 2) {
                newId = curLastId + 1;
            }
            if (newId != null) {
                var newData = t._calcItemPos(newId);
                t.displayData.push(newData);
                if (t._virtual)
                    t._createOrUpdateItem(newData);
                else
                    t._createOrUpdateItem2(newId);
            }
            else
                t._numItems--;
            if (t.selectedMode == SelectedType.SINGLE) {
                if (resetSelectedId) {
                    t._selectedId = -1;
                }
                else if (t._selectedId - 1 >= 0) {
                    t._selectedId--;
                }
            }
            else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
                var sub = t.multSelected.indexOf(listId);
                if (sub >= 0) {
                    t.multSelected.splice(sub, 1);
                }
                //多选的数据，在其后的全部减一
                for (var n = t.multSelected.length - 1; n >= 0; n--) {
                    var id = t.multSelected[n];
                    if (id >= listId)
                        t.multSelected[n]--;
                }
            }
            if (t._customSize) {
                if (t._customSize[listId])
                    delete t._customSize[listId];
                var newCustomSize = {};
                var size = void 0;
                for (var id in t._customSize) {
                    size = t._customSize[id];
                    var idNumber = parseInt(id);
                    newCustomSize[idNumber - (idNumber >= listId ? 1 : 0)] = size;
                }
                t._customSize = newCustomSize;
            }
            //后面的Item向前怼的动效
            var sec = .2333;
            var acts, haveCB;
            for (var n = newId != null ? newId : curLastId; n >= listId + 1; n--) {
                item = t.getItemByListId(n);
                if (item) {
                    var posData = t._calcItemPos(n - 1);
                    acts = [
                        cc.moveTo(sec, CompatibleTool_1.default.position(posData.x, posData.y)),
                    ];
                    if (n <= listId + 1) {
                        haveCB = true;
                        acts.push(cc.callFunc(function () {
                            t._aniDelRuning = false;
                            callFunc(listId);
                        }));
                    }
                    if (acts.length > 1)
                        item.runAction(cc.sequence(acts));
                    else
                        item.runAction(acts[0]);
                }
            }
            if (!haveCB) {
                t._aniDelRuning = false;
                callFunc(listId);
            }
        }, true);
    };
    /**
     * 滚动到..
     * @param {Number} listId 索引（如果<0，则滚到首个Item位置，如果>=_numItems，则滚到最末Item位置）
     * @param {Number} timeInSecond 时间
     * @param {Number} offset 索引目标位置偏移，0-1
     * @param {Boolean} overStress 滚动后是否强调该Item（这只是个实验功能）
     */
    List.prototype.scrollTo = function (listId, timeInSecond, offset, overStress) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        if (offset === void 0) { offset = null; }
        if (overStress === void 0) { overStress = false; }
        var t = this;
        if (!t.checkInited(false))
            return;
        // t._scrollView.stopAutoScroll();
        if (timeInSecond == null) //默认0.5
            timeInSecond = .5;
        else if (timeInSecond < 0)
            timeInSecond = 0;
        if (listId < 0)
            listId = 0;
        else if (listId >= t._numItems)
            listId = t._numItems - 1;
        // 以防设置了numItems之后layout的尺寸还未更新
        if (!t._virtual && t._layout && t._layout.enabled)
            t._layout.updateLayout();
        var pos = t.getItemPos(listId);
        var targetX, targetY;
        switch (t._alignCalcType) {
            case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                targetX = pos.left;
                if (offset != null)
                    targetX -= t.node.width * offset;
                else
                    targetX -= t._leftGap;
                pos = CompatibleTool_1.default.position(targetX, 0);
                break;
            case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                targetX = pos.right - t.node.width;
                if (offset != null)
                    targetX += t.node.width * offset;
                else
                    targetX += t._rightGap;
                pos = CompatibleTool_1.default.position(targetX + t.content.width, 0);
                break;
            case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                targetY = pos.top;
                if (offset != null)
                    targetY += t.node.height * offset;
                else
                    targetY += t._topGap;
                pos = CompatibleTool_1.default.position(0, -targetY);
                break;
            case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                targetY = pos.bottom + t.node.height;
                if (offset != null)
                    targetY -= t.node.height * offset;
                else
                    targetY -= t._bottomGap;
                pos = CompatibleTool_1.default.position(0, -targetY + t.content.height);
                break;
        }
        var viewPos = t.content.getPosition();
        viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
        var comparePos = t._sizeType ? pos.y : pos.x;
        var runScroll = Math.abs((t._scrollPos != null ? t._scrollPos : viewPos) - comparePos) > .5;
        // cc.log(runScroll, t._scrollPos, viewPos, comparePos)
        // t._scrollView.stopAutoScroll();
        if (runScroll) {
            t._scrollView.scrollToOffset(pos, timeInSecond);
            t._scrollToListId = listId;
            t._scrollToEndTime = ((new Date()).getTime() / 1000) + timeInSecond;
            // cc.log(listId, t.content.width, t.content.getPosition(), pos);
            t._scrollToSo = t.scheduleOnce(function () {
                if (!t._adheringBarrier) {
                    t.adhering = t._adheringBarrier = false;
                }
                t._scrollPos =
                    t._scrollToListId =
                        t._scrollToEndTime =
                            t._scrollToSo =
                                null;
                //cc.log('2222222222', t._adheringBarrier)
                if (overStress) {
                    // t.scrollToListId = listId;
                    var item = t.getItemByListId(listId);
                    if (item) {
                        item.runAction(cc.sequence(cc.scaleTo(.1, 1.05), cc.scaleTo(.1, 1)));
                    }
                }
            }, timeInSecond + .1);
            if (timeInSecond <= 0) {
                t._onScrolling();
            }
        }
    };
    /**
     * 计算当前滚动窗最近的Item
     */
    List.prototype._calcNearestItem = function () {
        cc.log("_calcNearestItem");
        var t = this;
        t.nearestListId = null;
        var data, center;
        if (t._virtual)
            t._calcViewPos();
        var vTop, vRight, vBottom, vLeft;
        vTop = t.viewTop;
        vRight = t.viewRight;
        vBottom = t.viewBottom;
        vLeft = t.viewLeft;
        var breakFor = false;
        for (var n = 0; n < t.content.childrenCount && !breakFor; n += t._colLineNum) {
            data = t._virtual ? t.displayData[n] : t._calcExistItemPos(n);
            if (data) {
                center = t._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
                switch (t._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                        if (data.right >= vLeft) {
                            t.nearestListId = data.id;
                            if (vLeft > center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                        if (data.left <= vRight) {
                            t.nearestListId = data.id;
                            if (vRight < center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        if (data.bottom <= vTop) {
                            t.nearestListId = data.id;
                            if (vTop < center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        if (data.top >= vBottom) {
                            t.nearestListId = data.id;
                            if (vBottom > center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                }
            }
        }
        //判断最后一个Item。。。（哎，这些判断真心恶心，判断了前面的还要判断最后一个。。。一开始呢，就只有一个布局（单列布局），那时候代码才三百行，后来就想着完善啊，艹..这坑真深，现在这行数都一千五了= =||）
        data = t._virtual ? t.displayData[t.displayItemNum - 1] : t._calcExistItemPos(t._numItems - 1);
        if (data && data.id == t._numItems - 1) {
            center = t._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
            switch (t._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    if (vRight > center)
                        t.nearestListId = data.id;
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    if (vLeft < center)
                        t.nearestListId = data.id;
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (vBottom < center)
                        t.nearestListId = data.id;
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (vTop > center)
                        t.nearestListId = data.id;
                    break;
            }
        }
        // cc.log('t.nearestListId =', t.nearestListId);
    };
    //上一页
    List.prototype.prePage = function (timeInSecond) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        // cc.log('👈');
        if (!this.checkInited())
            return;
        this.skipPage(this.curPageNum - 1, timeInSecond);
    };
    //下一页
    List.prototype.nextPage = function (timeInSecond) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        // cc.log('👉');
        if (!this.checkInited())
            return;
        this.skipPage(this.curPageNum + 1, timeInSecond);
    };
    //跳转到第几页
    List.prototype.skipPage = function (pageNum, timeInSecond) {
        var t = this;
        if (!t.checkInited())
            return;
        if (t._slideMode != SlideType.PAGE)
            return cc.error('This function is not allowed to be called, Must SlideMode = PAGE!');
        if (pageNum < 0 || pageNum >= t._numItems)
            return;
        if (t.curPageNum == pageNum)
            return;
        // cc.log(pageNum);
        t.curPageNum = pageNum;
        if (t.pageChangeEvent) {
            cc.Component.EventHandler.emitEvents([t.pageChangeEvent], pageNum);
        }
        t.scrollTo(pageNum, timeInSecond);
    };
    //计算 CustomSize（这个函数还是保留吧，某些罕见的情况的确还是需要手动计算customSize的）
    List.prototype.calcCustomSize = function (numItems) {
        var t = this;
        if (!t.checkInited())
            return;
        if (!t._itemTmp)
            return cc.error('Unset template item!');
        if (!t.renderEvent)
            return cc.error('Unset Render-Event!');
        t._customSize = {};
        var temp = cc.instantiate(t._itemTmp);
        t.content.addChild(temp);
        for (var n = 0; n < numItems; n++) {
            cc.Component.EventHandler.emitEvents([t.renderEvent], temp, n);
            if (temp.height != t._itemSize.height || temp.width != t._itemSize.width) {
                t._customSize[n] = t._sizeType ? temp.height : temp.width;
            }
        }
        if (!Object.keys(t._customSize).length)
            t._customSize = null;
        temp.removeFromParent();
        if (temp.destroy)
            temp.destroy();
        return t._customSize;
    };
    __decorate([
        property({ type: cc.Enum(TemplateType), tooltip: CC_DEV && '模板类型', })
    ], List.prototype, "templateType", void 0);
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && '模板Item',
            visible: function () { return this.templateType == TemplateType.NODE; }
        })
    ], List.prototype, "tmpNode", void 0);
    __decorate([
        property({
            type: cc.Prefab,
            tooltip: CC_DEV && '模板Item',
            visible: function () { return this.templateType == TemplateType.PREFAB; }
        })
    ], List.prototype, "tmpPrefab", void 0);
    __decorate([
        property()
    ], List.prototype, "_slideMode", void 0);
    __decorate([
        property({
            type: cc.Enum(SlideType),
            tooltip: CC_DEV && '滑动模式'
        })
    ], List.prototype, "slideMode", null);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 1, .1],
            tooltip: CC_DEV && '翻页作用距离',
            slide: true,
            visible: function () { return this._slideMode == SlideType.PAGE; }
        })
    ], List.prototype, "pageDistance", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '页面改变事件',
            visible: function () { return this._slideMode == SlideType.PAGE; }
        })
    ], List.prototype, "pageChangeEvent", void 0);
    __decorate([
        property()
    ], List.prototype, "_virtual", void 0);
    __decorate([
        property({
            type: cc.Boolean,
            tooltip: CC_DEV && '是否为虚拟列表（动态列表）'
        })
    ], List.prototype, "virtual", null);
    __decorate([
        property({
            tooltip: CC_DEV && '是否为循环列表',
            visible: function () {
                var val = this.slideMode == SlideType.NORMAL;
                if (!val)
                    this.cyclic = false;
                return val;
            }
        })
    ], List.prototype, "cyclic", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && 'Item数量不足以填满Content时，是否居中显示Item（不支持Grid布局）',
            visible: function () { return this.virtual; }
        })
    ], List.prototype, "lackCenter", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && 'Item数量不足以填满Content时，是否可滑动',
            visible: function () {
                var val = this.virtual && !this.lackCenter;
                if (!val)
                    this.lackSlide = false;
                return val;
            }
        })
    ], List.prototype, "lackSlide", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], List.prototype, "_updateRate", void 0);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 6, 1],
            tooltip: CC_DEV && '刷新频率（值越大刷新频率越低、性能越高）',
            slide: true,
        })
    ], List.prototype, "updateRate", null);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 12, 1],
            tooltip: CC_DEV && '逐帧渲染时，每帧渲染的Item数量（<=0时关闭分帧渲染）',
            slide: true,
        })
    ], List.prototype, "frameByFrameRenderNum", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '渲染事件（渲染器）',
        })
    ], List.prototype, "renderEvent", void 0);
    __decorate([
        property({
            type: cc.Enum(SelectedType),
            tooltip: CC_DEV && '选择模式'
        })
    ], List.prototype, "selectedMode", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && '是否重复响应单选事件',
            visible: function () { return this.selectedMode == SelectedType.SINGLE; }
        })
    ], List.prototype, "repeatEventSingle", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '触发选择事件',
            visible: function () { return this.selectedMode > SelectedType.NONE; }
        })
    ], List.prototype, "selectedEvent", void 0);
    __decorate([
        property({
            serializable: false
        })
    ], List.prototype, "_numItems", void 0);
    List = __decorate([
        ccclass,
        disallowMultiple(),
        menu('自定义组件/List'),
        requireComponent(cc.ScrollView)
        //脚本生命周期回调的执行优先级。小于 0 的脚本将优先执行，大于 0 的脚本将最后执行。该优先级只对 onLoad, onEnable, start, update 和 lateUpdate 有效，对 onDisable 和 onDestroy 无效。
        ,
        executionOrder(-5000)
    ], List);
    return List;
}(cc.Component));
exports.default = List;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY29tbW9uLXBsdWdpblxcU2NyaXB0c1xcTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7NENBSzRDO0FBQ3RDLElBQUEsS0FBa0YsRUFBRSxDQUFDLFVBQVUsRUFBN0YsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsY0FBYyxvQkFBQSxFQUFFLGdCQUFnQixzQkFBa0IsQ0FBQztBQUV0Ryx1Q0FBa0M7QUFDbEMsbURBQThDO0FBRTlDLElBQUssWUFHSjtBQUhELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUhJLFlBQVksS0FBWixZQUFZLFFBR2hCO0FBRUQsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ1YsNkNBQVUsQ0FBQTtJQUNWLGlEQUFZLENBQUE7SUFDWix5Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFFRCxJQUFLLFlBSUo7QUFKRCxXQUFLLFlBQVk7SUFDYiwrQ0FBUSxDQUFBO0lBQ1IsbURBQVUsQ0FBQTtJQUNWLCtDQUFRLENBQUE7QUFDWixDQUFDLEVBSkksWUFBWSxLQUFaLFlBQVksUUFJaEI7QUFRRDtJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQW0vREM7UUFsL0RHLE1BQU07UUFFRSxrQkFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3ZELGNBQWM7UUFNZCxhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGdCQUFnQjtRQU1oQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLE1BQU07UUFFRSxnQkFBVSxHQUFjLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFXakQsUUFBUTtRQVFELGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLFFBQVE7UUFNQSxxQkFBZSxHQUE4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QjtJQTlOYixJQUFJO1FBTnhCLE9BQU87UUFDUCxnQkFBZ0IsRUFBRTtRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2xCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDaEMsK0hBQStIOztRQUM5SCxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUM7T0FDRCxJQUFJLENBbS9EeEI7SUFBRCxXQUFDO0NBbi9ERCxBQW0vREMsQ0FuL0RpQyxFQUFFLENBQUMsU0FBUyxHQW0vRDdDO2tCQW4vRG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBhdXRob3Iga0wgPGtsazBAcXEuY29tPlxyXG4gKiBAZGF0ZSAyMDE5LzYvNlxyXG4gKiBAZG9jIOWIl+ihqOe7hOS7ti5cclxuICogQGVuZFxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBkaXNhbGxvd011bHRpcGxlLCBtZW51LCBleGVjdXRpb25PcmRlciwgcmVxdWlyZUNvbXBvbmVudCB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuL0xpc3RJdGVtJztcclxuaW1wb3J0IENvbXBhdGlibGVUb29sIGZyb20gXCIuL0NvbXBhdGlibGVUb29sXCI7XHJcblxyXG5lbnVtIFRlbXBsYXRlVHlwZSB7XHJcbiAgICBOT0RFID0gMSxcclxuICAgIFBSRUZBQiA9IDIsXHJcbn1cclxuXHJcbmVudW0gU2xpZGVUeXBlIHtcclxuICAgIE5PUk1BTCA9IDEsLy/mma7pgJpcclxuICAgIEFESEVSSU5HID0gMiwvL+eymOmZhOaooeW8j++8jOWwhuW8uuWItuWFs+mXrea7muWKqOaDr+aAp1xyXG4gICAgUEFHRSA9IDMsLy/pobXpnaLmqKHlvI/vvIzlsIblvLrliLblhbPpl63mu5rliqjmg6/mgKdcclxufVxyXG5cclxuZW51bSBTZWxlY3RlZFR5cGUge1xyXG4gICAgTk9ORSA9IDAsXHJcbiAgICBTSU5HTEUgPSAxLC8v5Y2V6YCJXHJcbiAgICBNVUxUID0gMiwvL+WkmumAiVxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5AZGlzYWxsb3dNdWx0aXBsZSgpXHJcbkBtZW51KCfoh6rlrprkuYnnu4Tku7YvTGlzdCcpXHJcbkByZXF1aXJlQ29tcG9uZW50KGNjLlNjcm9sbFZpZXcpXHJcbi8v6ISa5pys55Sf5ZG95ZGo5pyf5Zue6LCD55qE5omn6KGM5LyY5YWI57qn44CC5bCP5LqOIDAg55qE6ISa5pys5bCG5LyY5YWI5omn6KGM77yM5aSn5LqOIDAg55qE6ISa5pys5bCG5pyA5ZCO5omn6KGM44CC6K+l5LyY5YWI57qn5Y+q5a+5IG9uTG9hZCwgb25FbmFibGUsIHN0YXJ0LCB1cGRhdGUg5ZKMIGxhdGVVcGRhdGUg5pyJ5pWI77yM5a+5IG9uRGlzYWJsZSDlkowgb25EZXN0cm95IOaXoOaViOOAglxyXG5AZXhlY3V0aW9uT3JkZXIoLTUwMDApXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy/mqKHmnb/nsbvlnotcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oVGVtcGxhdGVUeXBlKSwgdG9vbHRpcDogQ0NfREVWICYmICfmqKHmnb/nsbvlnosnLCB9KVxyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZSA9IFRlbXBsYXRlVHlwZS5OT0RFO1xyXG4gICAgLy/mqKHmnb9JdGVt77yITm9kZe+8iVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5qih5p2/SXRlbScsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudGVtcGxhdGVUeXBlID09IFRlbXBsYXRlVHlwZS5OT0RFOyB9XHJcbiAgICB9KVxyXG4gICAgdG1wTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL+aooeadv0l0ZW3vvIhQcmVmYWLvvIlcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5qih5p2/SXRlbScsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudGVtcGxhdGVUeXBlID09IFRlbXBsYXRlVHlwZS5QUkVGQUI7IH1cclxuICAgIH0pXHJcbiAgICB0bXBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICAvL+a7keWKqOaooeW8j1xyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHByaXZhdGUgX3NsaWRlTW9kZTogU2xpZGVUeXBlID0gU2xpZGVUeXBlLk5PUk1BTDtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuRW51bShTbGlkZVR5cGUpLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5ruR5Yqo5qih5byPJ1xyXG4gICAgfSlcclxuICAgIHNldCBzbGlkZU1vZGUodmFsOiBTbGlkZVR5cGUpIHtcclxuICAgICAgICB0aGlzLl9zbGlkZU1vZGUgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgc2xpZGVNb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zbGlkZU1vZGU7XHJcbiAgICB9XHJcbiAgICAvL+e/u+mhteS9nOeUqOi3neemu1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5GbG9hdCxcclxuICAgICAgICByYW5nZTogWzAsIDEsIC4xXSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+e/u+mhteS9nOeUqOi3neemuycsXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRTsgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBwYWdlRGlzdGFuY2U6IG51bWJlciA9IC4zO1xyXG4gICAgLy/pobXpnaLmlLnlj5jkuovku7ZcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+mhtemdouaUueWPmOS6i+S7ticsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRTsgfVxyXG4gICAgfSlcclxuICAgIHByaXZhdGUgcGFnZUNoYW5nZUV2ZW50OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgIC8v5piv5ZCm5Li66Jma5ouf5YiX6KGo77yI5Yqo5oCB5YiX6KGo77yJXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHJpdmF0ZSBfdmlydHVhbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkJvb2xlYW4sXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmmK/lkKbkuLromZrmi5/liJfooajvvIjliqjmgIHliJfooajvvIknXHJcbiAgICB9KVxyXG4gICAgc2V0IHZpcnR1YWwodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHZhbCAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLl92aXJ0dWFsID0gdmFsO1xyXG4gICAgICAgIGlmICghQ0NfREVWICYmIHRoaXMuX251bUl0ZW1zICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fb25TY3JvbGxpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgdmlydHVhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlydHVhbDtcclxuICAgIH1cclxuICAgIC8v5piv5ZCm5Li65b6q546v5YiX6KGoXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5piv5ZCm5Li65b6q546v5YiX6KGoJyxcclxuICAgICAgICB2aXNpYmxlKCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsOiBib29sZWFuID0gLyp0aGlzLnZpcnR1YWwgJiYgKi90aGlzLnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuTk9STUFMO1xyXG4gICAgICAgICAgICBpZiAoIXZhbClcclxuICAgICAgICAgICAgICAgIHRoaXMuY3ljbGljID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBjeWNsaWM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v57y655yB5bGF5LitXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnSXRlbeaVsOmHj+S4jei2s+S7peWhq+a7oUNvbnRlbnTml7bvvIzmmK/lkKblsYXkuK3mmL7npLpJdGVt77yI5LiN5pSv5oyBR3JpZOW4g+WxgO+8iScsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMudmlydHVhbDsgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBsYWNrQ2VudGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL+e8uuecgeWPr+a7keWKqFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ0l0ZW3mlbDph4/kuI3otrPku6Xloavmu6FDb250ZW505pe277yM5piv5ZCm5Y+v5ruR5YqoJyxcclxuICAgICAgICB2aXNpYmxlKCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsOiBib29sZWFuID0gdGhpcy52aXJ0dWFsICYmICF0aGlzLmxhY2tDZW50ZXI7XHJcbiAgICAgICAgICAgIGlmICghdmFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWNrU2xpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIGxhY2tTbGlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy/liLfmlrDpopHnjodcclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcclxuICAgIHByaXZhdGUgX3VwZGF0ZVJhdGU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkludGVnZXIsXHJcbiAgICAgICAgcmFuZ2U6IFswLCA2LCAxXSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+WIt+aWsOmikeeOh++8iOWAvOi2iuWkp+WIt+aWsOmikeeOh+i2iuS9juOAgeaAp+iDvei2iumrmO+8iScsXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgc2V0IHVwZGF0ZVJhdGUodmFsOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsID49IDAgJiYgdmFsIDw9IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmF0ZSA9IHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgdXBkYXRlUmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlUmF0ZTtcclxuICAgIH1cclxuICAgIC8v5YiG5bin5riy5p+T77yI5q+P5bin5riy5p+T55qESXRlbeaVsOmHj++8iDw9MOaXtuWFs+mXreWIhuW4p+a4suafk++8ie+8iVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMTIsIDFdLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn6YCQ5bin5riy5p+T5pe277yM5q+P5bin5riy5p+T55qESXRlbeaVsOmHj++8iDw9MOaXtuWFs+mXreWIhuW4p+a4suafk++8iScsXHJcbiAgICAgICAgc2xpZGU6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgcHVibGljIGZyYW1lQnlGcmFtZVJlbmRlck51bTogbnVtYmVyID0gMDtcclxuICAgIC8v5riy5p+T5LqL5Lu277yI5riy5p+T5Zmo77yJXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmuLLmn5Pkuovku7bvvIjmuLLmn5PlmajvvIknLFxyXG4gICAgfSlcclxuICAgIHByaXZhdGUgcmVuZGVyRXZlbnQ6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG5cclxuICAgIC8v6YCJ5oup5qih5byPXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkVudW0oU2VsZWN0ZWRUeXBlKSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+mAieaLqeaooeW8jydcclxuICAgIH0pXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRNb2RlOiBTZWxlY3RlZFR5cGUgPSBTZWxlY3RlZFR5cGUuTk9ORTtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmmK/lkKbph43lpI3lk43lupTljZXpgInkuovku7YnLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU0lOR0xFOyB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIHJlcGVhdEV2ZW50U2luZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL+inpuWPkemAieaLqeS6i+S7tlxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn6Kem5Y+R6YCJ5oup5LqL5Lu2JyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPiBTZWxlY3RlZFR5cGUuTk9ORTsgfVxyXG4gICAgfSlcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRFdmVudDogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciA9IG51bGwvL25ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAvL+W9k+WJjemAieaLqWlkXHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZElkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgX2xhc3RTZWxlY3RlZElkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIG11bHRTZWxlY3RlZDogbnVtYmVyW107XHJcbiAgICBzZXQgc2VsZWN0ZWRJZCh2YWw6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGxldCBpdGVtOiBhbnk7XHJcbiAgICAgICAgc3dpdGNoICh0LnNlbGVjdGVkTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5TSU5HTEU6IHtcclxuICAgICAgICAgICAgICAgIGlmICghdC5yZXBlYXRFdmVudFNpbmdsZSAmJiB2YWwgPT0gdC5fc2VsZWN0ZWRJZClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdC5nZXRJdGVtQnlMaXN0SWQodmFsKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICghaXRlbSAmJiB2YWwgPj0gMClcclxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdEl0ZW06IExpc3RJdGVtO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX3NlbGVjdGVkSWQgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICB0Ll9sYXN0U2VsZWN0ZWRJZCA9IHQuX3NlbGVjdGVkSWQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlIC8v5aaC5p6c77ycMOWImeWPlua2iOmAieaLqe+8jOaKil9sYXN0U2VsZWN0ZWRJZOS5n+e9ruepuuWQp++8jOWmguaenOS7peWQjuacieeJueauiumcgOaxguWGjeaUueWQp+OAglxyXG4gICAgICAgICAgICAgICAgICAgIHQuX2xhc3RTZWxlY3RlZElkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHQuX3NlbGVjdGVkSWQgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0Ll9sYXN0U2VsZWN0ZWRJZCA+PSAwICYmIHQuX2xhc3RTZWxlY3RlZElkICE9IHQuX3NlbGVjdGVkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdEl0ZW06IGFueSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHQuX2xhc3RTZWxlY3RlZElkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0LnNlbGVjdGVkRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3Quc2VsZWN0ZWRFdmVudF0sIGl0ZW0sIHZhbCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zLCB0Ll9sYXN0U2VsZWN0ZWRJZCA9PSBudWxsID8gbnVsbCA6ICh0Ll9sYXN0U2VsZWN0ZWRJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5NVUxUOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdC5nZXRJdGVtQnlMaXN0SWQodmFsKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fc2VsZWN0ZWRJZCA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX2xhc3RTZWxlY3RlZElkID0gdC5fc2VsZWN0ZWRJZDtcclxuICAgICAgICAgICAgICAgIHQuX3NlbGVjdGVkSWQgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9vbDogYm9vbGVhbiA9ICFsaXN0SXRlbS5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIGxpc3RJdGVtLnNlbGVjdGVkID0gYm9vbDtcclxuICAgICAgICAgICAgICAgIGxldCBzdWI6IG51bWJlciA9IHQubXVsdFNlbGVjdGVkLmluZGV4T2YodmFsKTtcclxuICAgICAgICAgICAgICAgIGlmIChib29sICYmIHN1YiA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFib29sICYmIHN1YiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodC5zZWxlY3RlZEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnNlbGVjdGVkRXZlbnRdLCBpdGVtLCB2YWwgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcywgdC5fbGFzdFNlbGVjdGVkSWQgPT0gbnVsbCA/IG51bGwgOiAodC5fbGFzdFNlbGVjdGVkSWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyksIGJvb2wpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgc2VsZWN0ZWRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJZDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2ZvcmNlVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9hbGlnbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaG9yaXpvbnRhbERpcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdmVydGljYWxEaXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3N0YXJ0QXhpczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYWxpZ25DYWxjVHlwZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIGZpcnN0TGlzdElkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZGlzcGxheUl0ZW1OdW06IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3VwZGF0ZURvbmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ291bnRlcjogbnVtYmVyO1xyXG4gICAgcHVibGljIF9hY3R1YWxOdW1JdGVtczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY3ljbGljTnVtOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jeWNsaWNQb3MxOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jeWNsaWNQb3MyOiBudW1iZXI7XHJcbiAgICAvL+WIl+ihqOaVsOmHj1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBzZXJpYWxpemFibGU6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgcHJpdmF0ZSBfbnVtSXRlbXM6IG51bWJlciA9IDA7XHJcbiAgICBzZXQgbnVtSXRlbXModmFsOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKGZhbHNlKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPCAwKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKCdudW1JdGVtcyBzZXQgdGhlIHdyb25nOjonLCB2YWwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuX2FjdHVhbE51bUl0ZW1zID0gdC5fbnVtSXRlbXMgPSB2YWw7XHJcbiAgICAgICAgdC5fZm9yY2VVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodC5fdmlydHVhbCkge1xyXG4gICAgICAgICAgICB0Ll9yZXNpemVDb250ZW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0LmN5Y2xpYykge1xyXG4gICAgICAgICAgICAgICAgdC5fbnVtSXRlbXMgPSB0Ll9jeWNsaWNOdW0gKiB0Ll9udW1JdGVtcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xyXG4gICAgICAgICAgICBpZiAoIXQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtICYmIHQuc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKVxyXG4gICAgICAgICAgICAgICAgdC5jdXJQYWdlTnVtID0gdC5uZWFyZXN0TGlzdElkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHQuX3Jlc2l6ZUNvbnRlbnQoKTtcclxuICAgICAgICAgICAgaWYgKHQuY3ljbGljKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9udW1JdGVtcyA9IHQuX2N5Y2xpY051bSAqIHQuX251bUl0ZW1zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsYXlvdXQ6IGNjLkxheW91dCA9IHQuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICAgICAgaWYgKGxheW91dCkge1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0LmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHQuX2RlbFJlZHVuZGFudEl0ZW0oKTtcclxuXHJcbiAgICAgICAgICAgIHQuZmlyc3RMaXN0SWQgPSAwO1xyXG4gICAgICAgICAgICBpZiAodC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WFiOa4suafk+WHoOS4quWHuuadpVxyXG4gICAgICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiB0Ll9udW1JdGVtcyA/IHQuX251bUl0ZW1zIDogdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSAwOyBuIDwgbGVuOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtIDwgdC5fbnVtSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll91cGRhdGVDb3VudGVyID0gdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fdXBkYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gMDsgbiA8IHQuX251bUl0ZW1zOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdC5kaXNwbGF5SXRlbU51bSA9IHQuX251bUl0ZW1zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IG51bUl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3R1YWxOdW1JdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3Njcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXc7XHJcbiAgICBnZXQgc2Nyb2xsVmlldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsVmlldztcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2xheW91dDogY2MuTGF5b3V0O1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplTW9kZTogY2MuTGF5b3V0LlJlc2l6ZU1vZGU7XHJcbiAgICBwcml2YXRlIF90b3BHYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3JpZ2h0R2FwOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9ib3R0b21HYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2xlZnRHYXA6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9jb2x1bW5HYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2xpbmVHYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NvbExpbmVOdW06IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9sYXN0RGlzcGxheURhdGE6IG51bWJlcltdO1xyXG4gICAgcHVibGljIGRpc3BsYXlEYXRhOiBhbnlbXTtcclxuICAgIHByaXZhdGUgX3Bvb2w6IGNjLk5vZGVQb29sO1xyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1UbXA6IGFueTtcclxuICAgIHByaXZhdGUgX25lZWRVcGRhdGVXaWRnZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2l0ZW1TaXplOiBjYy5TaXplO1xyXG4gICAgcHJpdmF0ZSBfc2l6ZVR5cGU6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIF9jdXN0b21TaXplOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBmcmFtZUNvdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9hbmlEZWxSdW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdmlld1RvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB2aWV3UmlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdmlld0JvdHRvbTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB2aWV3TGVmdDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2RvbmVBZnRlclVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgZWxhc3RpY1RvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGFzdGljUmlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZWxhc3RpY0JvdHRvbTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGFzdGljTGVmdDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgc2Nyb2xsVG9MaXN0SWQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGFkaGVyaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRoZXJpbmdCYXJyaWVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG5lYXJlc3RMaXN0SWQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY3VyUGFnZU51bTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2JlZ2FuUG9zOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY3JvbGxQb3M6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb0xpc3RJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9FbmRUaW1lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb1NvOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFjazogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2FsbEl0ZW1TaXplOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9hbGxJdGVtU2l6ZU5vRWRnZTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX3Njcm9sbEl0ZW06IGFueTsvL+W9k+WJjeaOp+WItiBTY3JvbGxWaWV3IOa7muWKqOeahCBJdGVtXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuX2l0ZW1UbXAgJiYgdC5faXRlbVRtcC5pc1ZhbGlkKVxyXG4gICAgICAgICAgICB0Ll9pdGVtVG1wLmRlc3Ryb3koKTtcclxuICAgICAgICBpZiAodC50bXBOb2RlICYmIHQudG1wTm9kZS5pc1ZhbGlkKVxyXG4gICAgICAgICAgICB0LnRtcE5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIGxldCB0b3RhbCA9IHQuX3Bvb2wuc2l6ZSgpO1xyXG4gICAgICAgIHdoaWxlICh0Ll9wb29sLnNpemUoKSkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHQuX3Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodG90YWwpXHJcbiAgICAgICAgLy8gICAgIGNjLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0nICsgdC5ub2RlLm5hbWUgKyAnPExpc3Q+IGRlc3Ryb3kgbm9kZSB0b3RhbCBudW0uID0+JywgdG90YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIC8vIGlmICghQ0NfRURJVE9SKSBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgPj4+bGlzdCBlbmFibGVcIik7XHJcblxyXG5cclxuICAgICAgICB0aGlzLl9yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgPj4+bGlzdCBvbkRpc2FibGVcIik7XHJcbiAgICAgICAgLy8gaWYgKCFDQ19FRElUT1IpIFxyXG4gICAgICAgIHRoaXMuX3VucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfVxyXG4gICAgLy/ms6jlhozkuovku7ZcclxuICAgIF9yZWdpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIHQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdC5fb25Ub3VjaFN0YXJ0LCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub24oJ3RvdWNoLXVwJywgdC5fb25Ub3VjaFVwLCB0KTtcclxuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0Ll9vblRvdWNoQ2FuY2VsbGVkLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub24oJ3Njcm9sbC1iZWdhbicsIHQuX29uU2Nyb2xsQmVnYW4sIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbignc2Nyb2xsLWVuZGVkJywgdC5fb25TY3JvbGxFbmRlZCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGxpbmcnLCB0Ll9vblNjcm9sbGluZywgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdC5fb25TaXplQ2hhbmdlZCwgdCk7XHJcbiAgICB9XHJcbiAgICAvL+WNuOi9veS6i+S7tlxyXG4gICAgX3VucmVnaXN0ZXJFdmVudCgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0Ll9vblRvdWNoU3RhcnQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoJ3RvdWNoLXVwJywgdC5fb25Ub3VjaFVwLCB0KTtcclxuICAgICAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdC5fb25Ub3VjaENhbmNlbGxlZCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZignc2Nyb2xsLWJlZ2FuJywgdC5fb25TY3JvbGxCZWdhbiwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZignc2Nyb2xsLWVuZGVkJywgdC5fb25TY3JvbGxFbmRlZCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZignc2Nyb2xsaW5nJywgdC5fb25TY3JvbGxpbmcsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0Ll9vblNpemVDaGFuZ2VkLCB0KTtcclxuICAgIH1cclxuICAgIC8v5Yid5aeL5YyW5ZCE56eNLi5cclxuICAgIF9pbml0KCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0Ll9pbml0ZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdC5fc2Nyb2xsVmlldyA9IHQubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcblxyXG4gICAgICAgIHQuY29udGVudCA9IHQuX3Njcm9sbFZpZXcuY29udGVudDtcclxuICAgICAgICBpZiAoIXQuY29udGVudCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcih0Lm5vZGUubmFtZSArIFwiJ3MgY2MuU2Nyb2xsVmlldyB1bnNldCBjb250ZW50IVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdC5fbGF5b3V0ID0gdC5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG5cclxuICAgICAgICB0Ll9hbGlnbiA9IHQuX2xheW91dC50eXBlOyAvL+aOkuWIl+aooeW8j1xyXG4gICAgICAgIHQuX3Jlc2l6ZU1vZGUgPSB0Ll9sYXlvdXQucmVzaXplTW9kZTsgLy/oh6rpgILlupTmqKHlvI9cclxuICAgICAgICB0Ll9zdGFydEF4aXMgPSB0Ll9sYXlvdXQuc3RhcnRBeGlzO1xyXG5cclxuICAgICAgICB0Ll90b3BHYXAgPSB0Ll9sYXlvdXQucGFkZGluZ1RvcDsgLy/pobbovrnot51cclxuICAgICAgICB0Ll9yaWdodEdhcCA9IHQuX2xheW91dC5wYWRkaW5nUmlnaHQ7IC8v5Y+z6L656LedXHJcbiAgICAgICAgdC5fYm90dG9tR2FwID0gdC5fbGF5b3V0LnBhZGRpbmdCb3R0b207IC8v5bqV6L656LedXHJcbiAgICAgICAgdC5fbGVmdEdhcCA9IHQuX2xheW91dC5wYWRkaW5nTGVmdDsgLy/lt6bovrnot51cclxuXHJcbiAgICAgICAgdC5fY29sdW1uR2FwID0gdC5fbGF5b3V0LnNwYWNpbmdYOyAvL+WIl+i3nVxyXG4gICAgICAgIHQuX2xpbmVHYXAgPSB0Ll9sYXlvdXQuc3BhY2luZ1k7IC8v6KGM6LedXHJcblxyXG4gICAgICAgIHQuX2NvbExpbmVOdW07IC8v5YiX5pWw5oiW6KGM5pWw77yI6Z2eR1JJROaooeW8j+WImT0x77yM6KGo56S65Y2V5YiX5oiW5Y2V6KGM77yJO1xyXG5cclxuICAgICAgICB0Ll92ZXJ0aWNhbERpciA9IHQuX2xheW91dC52ZXJ0aWNhbERpcmVjdGlvbjsgLy/lnoLnm7TmjpLliJflrZDoioLngrnnmoTmlrnlkJFcclxuICAgICAgICB0Ll9ob3Jpem9udGFsRGlyID0gdC5fbGF5b3V0Lmhvcml6b250YWxEaXJlY3Rpb247IC8v5rC05bmz5o6S5YiX5a2Q6IqC54K555qE5pa55ZCRXHJcblxyXG4gICAgICAgIHQuc2V0VGVtcGxhdGVJdGVtKGNjLmluc3RhbnRpYXRlKHQudGVtcGxhdGVUeXBlID09IFRlbXBsYXRlVHlwZS5QUkVGQUIgPyB0LnRtcFByZWZhYiA6IHQudG1wTm9kZSkpO1xyXG5cclxuICAgICAgICAvLyDnibnlrprnmoTmu5HliqjmqKHlvI/lpITnkIZcclxuICAgICAgICBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5BREhFUklORyB8fCB0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpIHtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5pbmVydGlhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcuX29uTW91c2VXaGVlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0LnZpcnR1YWwpICAgICAgICAgLy8gbGFja0NlbnRlciDku4XmlK/mjIEgVmlydHVhbCDmqKHlvI9cclxuICAgICAgICAgICAgdC5sYWNrQ2VudGVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHQuX2xhc3REaXNwbGF5RGF0YSA9IFtdOyAvL+acgOWQjuS4gOasoeWIt+aWsOeahOaVsOaNrlxyXG4gICAgICAgIHQuZGlzcGxheURhdGEgPSBbXTsgLy/lvZPliY3mlbDmja5cclxuICAgICAgICB0Ll9wb29sID0gbmV3IGNjLk5vZGVQb29sKCk7ICAgIC8v6L+Z5piv5Liq5rGg5a2QLi5cclxuICAgICAgICB0Ll9mb3JjZVVwZGF0ZSA9IGZhbHNlOyAgICAgICAgIC8v5piv5ZCm5by65Yi25pu05pawXHJcbiAgICAgICAgdC5fdXBkYXRlQ291bnRlciA9IDA7ICAgICAgICAgICAvL+W9k+WJjeWIhuW4p+a4suafk+W4p+aVsFxyXG4gICAgICAgIHQuX3VwZGF0ZURvbmUgPSB0cnVlOyAgICAgICAgICAgLy/liIbluKfmuLLmn5PmmK/lkKblrozmiJBcclxuXHJcbiAgICAgICAgdC5jdXJQYWdlTnVtID0gMDsgICAgICAgICAgICAgICAvL+W9k+WJjemhteaVsFxyXG5cclxuICAgICAgICBpZiAodC5jeWNsaWMgfHwgMCkge1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9wcm9jZXNzQXV0b1Njcm9sbGluZyA9IHRoaXMuX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nLmJpbmQodCk7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcuX3N0YXJ0Qm91bmNlQmFja0lmTmVlZGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHQuX3Njcm9sbFZpZXcuX3Njcm9sbENoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHQuX2FsaWduKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDoge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3ZlcnRpY2FsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDoge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodC5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5riF56m6IGNvbnRlbnRcclxuICAgICAgICAvLyB0LmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAvLyAgICAgY2hpbGQucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIC8vICAgICBpZiAoY2hpbGQgIT0gdC50bXBOb2RlICYmIGNoaWxkLmlzVmFsaWQpXHJcbiAgICAgICAgLy8gICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgdC5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdC5faW5pdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Li65LqG5a6e546w5b6q546v5YiX6KGo77yM5b+F6aG76KaG5YaZY2MuU2Nyb2xsVmlld+eahOafkOS6m+WHveaVsFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGR0XHJcbiAgICAgKi9cclxuICAgIF9wcm9jZXNzQXV0b1Njcm9sbGluZyhkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gbGV0IGlzQXV0b1Njcm9sbEJyYWtlID0gdGhpcy5fc2Nyb2xsVmlldy5faXNOZWNlc3NhcnlBdXRvU2Nyb2xsQnJha2UoKTtcclxuICAgICAgICBsZXQgYnJha2luZ0ZhY3RvcjogbnVtYmVyID0gMTtcclxuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbEFjY3VtdWxhdGVkVGltZSddICs9IGR0ICogKDEgLyBicmFraW5nRmFjdG9yKTtcclxuXHJcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2U6IG51bWJlciA9IE1hdGgubWluKDEsIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lJ10gLyB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFRvdGFsVGltZSddKTtcclxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxBdHRlbnVhdGUnXSkge1xyXG4gICAgICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gcGVyY2VudGFnZSAtIDE7XHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2UgPSB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lICogdGltZSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3UG9zaXRpb246IGFueSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLmFkZCh0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFRhcmdldERlbHRhJ10ubXVsKHBlcmNlbnRhZ2UpKTtcclxuICAgICAgICBsZXQgRVBTSUxPTjogbnVtYmVyID0gdGhpcy5fc2Nyb2xsVmlld1snZ2V0U2Nyb2xsRW5kZWRFdmVudFRpbWluZyddKCk7XHJcbiAgICAgICAgbGV0IHJlYWNoZWRFbmQ6IGJvb2xlYW4gPSBNYXRoLmFicyhwZXJjZW50YWdlIC0gMSkgPD0gRVBTSUxPTjtcclxuICAgICAgICAvLyBjYy5sb2cocmVhY2hlZEVuZCwgTWF0aC5hYnMocGVyY2VudGFnZSAtIDEpLCBFUFNJTE9OKVxyXG5cclxuICAgICAgICBsZXQgZmlyZUV2ZW50OiBib29sZWFuID0gTWF0aC5hYnMocGVyY2VudGFnZSAtIDEpIDw9IHRoaXMuX3Njcm9sbFZpZXdbJ2dldFNjcm9sbEVuZGVkRXZlbnRUaW1pbmcnXSgpO1xyXG4gICAgICAgIGlmIChmaXJlRXZlbnQgJiYgIXRoaXMuX3Njcm9sbFZpZXdbJ19pc1Njcm9sbEVuZGVkV2l0aFRocmVzaG9sZEV2ZW50RmlyZWQnXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfZGlzcGF0Y2hFdmVudCddKCdzY3JvbGwtZW5kZWQtd2l0aC10aHJlc2hvbGQnKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2lzU2Nyb2xsRW5kZWRXaXRoVGhyZXNob2xkRXZlbnRGaXJlZCddID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLl9zY3JvbGxWaWV3LmVsYXN0aWMgJiYgIXJlYWNoZWRFbmQpIHtcclxuICAgICAgICAvLyAgICAgbGV0IGJyYWtlT2Zmc2V0UG9zaXRpb24gPSBuZXdQb3NpdGlvbi5zdWIodGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbEJyYWtpbmdTdGFydFBvc2l0aW9uKTtcclxuICAgICAgICAvLyAgICAgaWYgKGlzQXV0b1Njcm9sbEJyYWtlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBicmFrZU9mZnNldFBvc2l0aW9uID0gYnJha2VPZmZzZXRQb3NpdGlvbi5tdWwoYnJha2luZ0ZhY3Rvcik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgbmV3UG9zaXRpb24gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsQnJha2luZ1N0YXJ0UG9zaXRpb24uYWRkKGJyYWtlT2Zmc2V0UG9zaXRpb24pO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBtb3ZlRGVsdGEgPSBuZXdQb3NpdGlvbi5zdWIodGhpcy5fc2Nyb2xsVmlldy5nZXRDb250ZW50UG9zaXRpb24oKSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBvdXRPZkJvdW5kYXJ5ID0gdGhpcy5fc2Nyb2xsVmlldy5fZ2V0SG93TXVjaE91dE9mQm91bmRhcnkobW92ZURlbHRhKTtcclxuICAgICAgICAvLyAgICAgaWYgKCFvdXRPZkJvdW5kYXJ5LmZ1enp5RXF1YWxzKENvbXBhdGlibGVUb29sLnBvc2l0aW9uKDAsIDApLCBFUFNJTE9OKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgbmV3UG9zaXRpb24gPSBuZXdQb3NpdGlvbi5hZGQob3V0T2ZCb3VuZGFyeSk7XHJcbiAgICAgICAgLy8gICAgICAgICByZWFjaGVkRW5kID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKHJlYWNoZWRFbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxpbmcnXSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRlbHRhTW92ZTogYW55ID0gbmV3UG9zaXRpb24uc3ViKHRoaXMuX3Njcm9sbFZpZXcuZ2V0Q29udGVudFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIC8vIGNjLmxvZyhkZWx0YU1vdmUpXHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX21vdmVDb250ZW50J10odGhpcy5fc2Nyb2xsVmlld1snX2NsYW1wRGVsdGEnXShkZWx0YU1vdmUpLCByZWFjaGVkRW5kKTtcclxuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfZGlzcGF0Y2hFdmVudCddKCdzY3JvbGxpbmcnKTtcclxuXHJcbiAgICAgICAgLy8gc2NvbGxUbyBBUEkgY29udHJvbGwgbW92ZVxyXG4gICAgICAgIGlmICghdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxpbmcnXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfaXNCb3VuY2luZyddID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19zY3JvbGxpbmcnXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfZGlzcGF0Y2hFdmVudCddKCdzY3JvbGwtZW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+iuvue9ruaooeadv0l0ZW1cclxuICAgIHNldFRlbXBsYXRlSXRlbShpdGVtOiBhbnkpIHtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0Ll9pdGVtVG1wID0gaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKHQuX3Jlc2l6ZU1vZGUgPT0gY2MuTGF5b3V0LlJlc2l6ZU1vZGUuQ0hJTERSRU4pXHJcbiAgICAgICAgICAgIHQuX2l0ZW1TaXplID0gdC5fbGF5b3V0LmNlbGxTaXplO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdC5faXRlbVNpemUgPSBjYy5zaXplKGl0ZW0ud2lkdGgsIGl0ZW0uaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy/ojrflj5ZMaXN0SXRlbe+8jOWmguaenOayoeacieWwseWPlua2iOmAieaLqeaooeW8j1xyXG4gICAgICAgIGxldCBjb20gPSBpdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSk7XHJcbiAgICAgICAgbGV0IHJlbW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghY29tKVxyXG4gICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIGlmIChjb20pIHtcclxuICAgICAgICAvLyAgICAgaWYgKCFjb20uX2J0bkNvbSAmJiAhaXRlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAocmVtb3ZlKSB7XHJcbiAgICAgICAgICAgIHQuc2VsZWN0ZWRNb2RlID0gU2VsZWN0ZWRUeXBlLk5PTkU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICAgICAgaWYgKGNvbSAmJiBjb20uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0Ll9uZWVkVXBkYXRlV2lkZ2V0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5NVUxUKVxyXG4gICAgICAgICAgICB0Lm11bHRTZWxlY3RlZCA9IFtdO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHQuX2FsaWduKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgdC5fY29sTGluZU51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0Ll9zaXplVHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6K6h566X5YiX5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmltVzogbnVtYmVyID0gdC5jb250ZW50LndpZHRoIC0gdC5fbGVmdEdhcCAtIHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gTWF0aC5mbG9vcigodHJpbVcgKyB0Ll9jb2x1bW5HYXApIC8gKHQuX2l0ZW1TaXplLndpZHRoICsgdC5fY29sdW1uR2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfooYzmlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyaW1IOiBudW1iZXIgPSB0LmNvbnRlbnQuaGVpZ2h0IC0gdC5fdG9wR2FwIC0gdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gTWF0aC5mbG9vcigodHJpbUggKyB0Ll9saW5lR2FwKSAvICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKyB0Ll9saW5lR2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmo4Dmn6XmmK/lkKbliJ3lp4vljJZcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJpbnRMb2cg5piv5ZCm5omT5Y2w6ZSZ6K+v5L+h5oGvXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBjaGVja0luaXRlZChwcmludExvZzogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luaXRlZCkge1xyXG4gICAgICAgICAgICBpZiAocHJpbnRMb2cpXHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcignTGlzdCBpbml0aWFsaXphdGlvbiBub3QgY29tcGxldGVkIScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy/npoHnlKggTGF5b3V0IOe7hOS7tu+8jOiHquihjOiuoeeulyBDb250ZW50IFNpemVcclxuICAgIF9yZXNpemVDb250ZW50KCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGxldCByZXN1bHQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6IHtcclxuICAgICAgICAgICAgICAgIGlmICh0Ll9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0Ll9nZXRGaXhlZFNpemUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fbGVmdEdhcCArIGZpeGVkLnZhbCArICh0Ll9pdGVtU2l6ZS53aWR0aCAqICh0Ll9udW1JdGVtcyAtIGZpeGVkLmNvdW50KSkgKyAodC5fY29sdW1uR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX2xlZnRHYXAgKyAodC5faXRlbVNpemUud2lkdGggKiB0Ll9udW1JdGVtcykgKyAodC5fY29sdW1uR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZDogYW55ID0gdC5fZ2V0Rml4ZWRTaXplKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX3RvcEdhcCArIGZpeGVkLnZhbCArICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKiAodC5fbnVtSXRlbXMgLSBmaXhlZC5jb3VudCkpICsgKHQuX2xpbmVHYXAgKiAodC5fbnVtSXRlbXMgLSAxKSkgKyB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX3RvcEdhcCArICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKiB0Ll9udW1JdGVtcykgKyAodC5fbGluZUdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX2JvdHRvbUdhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDoge1xyXG4gICAgICAgICAgICAgICAgLy/nvZHmoLzmqKHlvI/kuI3mlK/mjIHlsYXkuK1cclxuICAgICAgICAgICAgICAgIGlmICh0LmxhY2tDZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgdC5sYWNrQ2VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmVOdW06IG51bWJlciA9IE1hdGguY2VpbCh0Ll9udW1JdGVtcyAvIHQuX2NvbExpbmVOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll90b3BHYXAgKyAodC5faXRlbVNpemUuaGVpZ2h0ICogbGluZU51bSkgKyAodC5fbGluZUdhcCAqIChsaW5lTnVtIC0gMSkpICsgdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sTnVtOiBudW1iZXIgPSBNYXRoLmNlaWwodC5fbnVtSXRlbXMgLyB0Ll9jb2xMaW5lTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fbGVmdEdhcCArICh0Ll9pdGVtU2l6ZS53aWR0aCAqIGNvbE51bSkgKyAodC5fY29sdW1uR2FwICogKGNvbE51bSAtIDEpKSArIHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGF5b3V0OiBjYy5MYXlvdXQgPSB0LmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgaWYgKGxheW91dClcclxuICAgICAgICAgICAgbGF5b3V0LmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdC5fYWxsSXRlbVNpemUgPSByZXN1bHQ7XHJcbiAgICAgICAgdC5fYWxsSXRlbVNpemVOb0VkZ2UgPSB0Ll9hbGxJdGVtU2l6ZSAtICh0Ll9zaXplVHlwZSA/ICh0Ll90b3BHYXAgKyB0Ll9ib3R0b21HYXApIDogKHQuX2xlZnRHYXAgKyB0Ll9yaWdodEdhcCkpO1xyXG5cclxuICAgICAgICBpZiAodC5jeWNsaWMpIHtcclxuICAgICAgICAgICAgbGV0IHRvdGFsU2l6ZTogbnVtYmVyID0gKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCk7XHJcblxyXG4gICAgICAgICAgICB0Ll9jeWNsaWNQb3MxID0gMDtcclxuICAgICAgICAgICAgdG90YWxTaXplIC09IHQuX2N5Y2xpY1BvczE7XHJcbiAgICAgICAgICAgIHQuX2N5Y2xpY051bSA9IE1hdGguY2VpbCh0b3RhbFNpemUgLyB0Ll9hbGxJdGVtU2l6ZU5vRWRnZSkgKyAxO1xyXG4gICAgICAgICAgICBsZXQgc3BhY2luZzogbnVtYmVyID0gdC5fc2l6ZVR5cGUgPyB0Ll9saW5lR2FwIDogdC5fY29sdW1uR2FwO1xyXG4gICAgICAgICAgICB0Ll9jeWNsaWNQb3MyID0gdC5fY3ljbGljUG9zMSArIHQuX2FsbEl0ZW1TaXplTm9FZGdlICsgc3BhY2luZztcclxuICAgICAgICAgICAgdC5fY3ljbGljQWxsSXRlbVNpemUgPSB0Ll9hbGxJdGVtU2l6ZSArICh0Ll9hbGxJdGVtU2l6ZU5vRWRnZSAqICh0Ll9jeWNsaWNOdW0gLSAxKSkgKyAoc3BhY2luZyAqICh0Ll9jeWNsaWNOdW0gLSAxKSk7XHJcbiAgICAgICAgICAgIHQuX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlID0gdC5fYWxsSXRlbVNpemVOb0VkZ2UgKiB0Ll9jeWNsaWNOdW07XHJcbiAgICAgICAgICAgIHQuX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlICs9IHNwYWNpbmcgKiAodC5fY3ljbGljTnVtIC0gMSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZygnX2N5Y2xpY051bSAtPicsIHQuX2N5Y2xpY051bSwgdC5fYWxsSXRlbVNpemVOb0VkZ2UsIHQuX2FsbEl0ZW1TaXplLCB0Ll9jeWNsaWNQb3MxLCB0Ll9jeWNsaWNQb3MyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHQuX2xhY2sgPSAhdC5jeWNsaWMgJiYgdC5fYWxsSXRlbVNpemUgPCAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcclxuICAgICAgICBsZXQgc2xpZGVPZmZzZXQ6IG51bWJlciA9ICgoIXQuX2xhY2sgfHwgIXQubGFja0NlbnRlcikgJiYgdC5sYWNrU2xpZGUpID8gMCA6IC4xO1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0V0g6IG51bWJlciA9IHQuX2xhY2sgPyAoKHQuX3NpemVUeXBlID8gdC5ub2RlLmhlaWdodCA6IHQubm9kZS53aWR0aCkgLSBzbGlkZU9mZnNldCkgOiAodC5jeWNsaWMgPyB0Ll9jeWNsaWNBbGxJdGVtU2l6ZSA6IHQuX2FsbEl0ZW1TaXplKTtcclxuICAgICAgICBpZiAodGFyZ2V0V0ggPCAwKVxyXG4gICAgICAgICAgICB0YXJnZXRXSCA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0Ll9zaXplVHlwZSkge1xyXG4gICAgICAgICAgICB0LmNvbnRlbnQuaGVpZ2h0ID0gdGFyZ2V0V0g7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdC5jb250ZW50LndpZHRoID0gdGFyZ2V0V0g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYy5sb2coJ19yZXNpemVDb250ZW50KCkgIG51bUl0ZW1zID0nLCB0Ll9udW1JdGVtcywgJ++8jGNvbnRlbnQgPScsIHQuY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mu5rliqjov5vooYzml7YuLi5cclxuICAgIF9vblNjcm9sbGluZyhldjogY2MuRXZlbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudCA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl91cGRhdGVSYXRlO1xyXG4gICAgICAgIGlmICghdGhpcy5fZm9yY2VVcGRhdGUgJiYgKGV2ICYmIGV2LnR5cGUgIT0gJ3Njcm9sbC1lbmRlZCcpICYmIHRoaXMuZnJhbWVDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50LS07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50ID0gdGhpcy5fdXBkYXRlUmF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaURlbFJ1bmluZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvL+W+queOr+WIl+ihqOWkhOeQhlxyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xpYykge1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsUG9zOiBhbnkgPSB0aGlzLmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgc2Nyb2xsUG9zID0gdGhpcy5fc2l6ZVR5cGUgPyBzY3JvbGxQb3MueSA6IHNjcm9sbFBvcy54O1xyXG5cclxuICAgICAgICAgICAgbGV0IGFkZFZhbCA9IHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlICsgKHRoaXMuX3NpemVUeXBlID8gdGhpcy5fbGluZUdhcCA6IHRoaXMuX2NvbHVtbkdhcCk7XHJcbiAgICAgICAgICAgIGxldCBhZGQ6IGFueSA9IHRoaXMuX3NpemVUeXBlID8gQ29tcGF0aWJsZVRvb2wucG9zaXRpb24oMCwgYWRkVmFsKSA6IENvbXBhdGlibGVUb29sLnBvc2l0aW9uKGFkZFZhbCwgMCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFBvcyA+IC10aGlzLl9jeWNsaWNQb3MxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC54ID0gLXRoaXMuX2N5Y2xpY1BvczI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLnN1YihhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLl9iZWdhblBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5fYmVnYW5Qb3MgKz0gYWRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPCAtdGhpcy5fY3ljbGljUG9zMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IC10aGlzLl9jeWNsaWNQb3MxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5hZGQoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5fYmVnYW5Qb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuX2JlZ2FuUG9zIC09IGFkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFBvcyA8IHRoaXMuX2N5Y2xpY1BvczEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnggPSB0aGlzLl9jeWNsaWNQb3MyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5hZGQoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsUG9zID4gdGhpcy5fY3ljbGljUG9zMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IHRoaXMuX2N5Y2xpY1BvczE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLnN1YihhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFBvcyA8IHRoaXMuX2N5Y2xpY1BvczEgKyA3MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSB0aGlzLl9jeWNsaWNQb3MyICsgNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJ4eHh4eHh4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5hZGQoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsUG9zID4gKHRoaXMuX2N5Y2xpY1BvczIgKyA3MDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcImRkZGRkZGRkZGRkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueSA9IHRoaXMuX2N5Y2xpY1BvczEgKyA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLnN1YihhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zID4gLXRoaXMuX2N5Y2xpY1BvczEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSAtdGhpcy5fY3ljbGljUG9zMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uc3ViKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA8IC10aGlzLl9jeWNsaWNQb3MyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gLXRoaXMuX2N5Y2xpY1BvczE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLmFkZChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jYWxjVmlld1BvcygpO1xyXG5cclxuICAgICAgICBsZXQgdlRvcDogbnVtYmVyLCB2UmlnaHQ6IG51bWJlciwgdkJvdHRvbTogbnVtYmVyLCB2TGVmdDogbnVtYmVyO1xyXG4gICAgICAgIGlmICh0aGlzLl9zaXplVHlwZSkge1xyXG4gICAgICAgICAgICB2VG9wID0gdGhpcy52aWV3VG9wO1xyXG4gICAgICAgICAgICB2Qm90dG9tID0gdGhpcy52aWV3Qm90dG9tO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZSaWdodCA9IHRoaXMudmlld1JpZ2h0O1xyXG4gICAgICAgICAgICB2TGVmdCA9IHRoaXMudmlld0xlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Qb3M6IGFueTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJJZDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgbGV0IGVuZElkOiBudW1iZXIgPSB0aGlzLl9udW1JdGVtcyAtIDE7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJyZWFrRm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOivpWl0ZW3nmoTkvY3nva7lnKjlj6/op4bljLrln5/lhoXvvIzlsLHmjqjlhaVkaXNwbGF5RGF0YVxyXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cklkIDw9IGVuZElkICYmICFicmVha0ZvcjsgY3VySWQrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Qb3MgPSB0aGlzLl9jYWxjSXRlbVBvcyhjdXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBvcy5yaWdodCA+PSB2TGVmdCAmJiBpdGVtUG9zLmxlZnQgPD0gdlJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MuYm90dG9tIDw9IHZUb3AgJiYgaXRlbVBvcy50b3AgPj0gdkJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChpdGVtUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VySWQgIT0gMCAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLmJvdHRvbSA8PSB2VG9wICYmIGl0ZW1Qb3MudG9wID49IHZCb3R0b20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChpdGVtUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLnJpZ2h0ID49IHZMZWZ0ICYmIGl0ZW1Qb3MubGVmdCA8PSB2UmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChpdGVtUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHd3OiBudW1iZXIgPSB0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcDtcclxuICAgICAgICAgICAgICAgIGxldCBoaDogbnVtYmVyID0gdGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcDtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cklkID0gKHZMZWZ0ICsgdGhpcy5fbGVmdEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAodlJpZ2h0ICsgdGhpcy5fcmlnaHRHYXApIC8gd3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cklkID0gKC12UmlnaHQgLSB0aGlzLl9yaWdodEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAoLXZMZWZ0IC0gdGhpcy5fbGVmdEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAoLXZUb3AgLSB0aGlzLl90b3BHYXApIC8gaGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZElkID0gKC12Qm90dG9tIC0gdGhpcy5fYm90dG9tR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICh2Qm90dG9tICsgdGhpcy5fYm90dG9tR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICh2VG9wICsgdGhpcy5fdG9wR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cklkID0gTWF0aC5mbG9vcihjdXJJZCkgKiB0aGlzLl9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgZW5kSWQgPSBNYXRoLmNlaWwoZW5kSWQpICogdGhpcy5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgIGVuZElkLS07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VySWQgPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cklkID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChlbmRJZCA+PSB0aGlzLl9udW1JdGVtcylcclxuICAgICAgICAgICAgICAgICAgICBlbmRJZCA9IHRoaXMuX251bUl0ZW1zIC0gMTtcclxuICAgICAgICAgICAgICAgIGZvciAoOyBjdXJJZCA8PSBlbmRJZDsgY3VySWQrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaCh0aGlzLl9jYWxjSXRlbVBvcyhjdXJJZCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2RlbFJlZHVuZGFudEl0ZW0oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheURhdGEubGVuZ3RoIDw9IDAgfHwgIXRoaXMuX251bUl0ZW1zKSB7IC8vaWYgbm9uZSwgZGVsZXRlIGFsbC5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RMaXN0SWQgPSB0aGlzLmRpc3BsYXlEYXRhWzBdLmlkO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlJdGVtTnVtID0gdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGVuOiBudW1iZXIgPSB0aGlzLl9sYXN0RGlzcGxheURhdGEubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhhdmVEYXRhQ2hhbmdlOiBib29sZWFuID0gdGhpcy5kaXNwbGF5SXRlbU51bSAhPSBsZW47XHJcbiAgICAgICAgICAgIGlmIChoYXZlRGF0YUNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv6YCQ5bin5riy5p+T77yM6ZyA6KaB5o6S5bqPXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGEgLSBiIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5ZugTGlzdOeahOaYvuekuuaVsOaNruaYr+acieW6j+eahO+8jOaJgOS7peWPqumcgOimgeWIpOaWreaVsOe7hOmVv+W6puaYr+WQpuebuOetie+8jOS7peWPiuWktOOAgeWwvuS4pOS4quWFg+e0oOaYr+WQpuebuOetieWNs+WPr+OAglxyXG4gICAgICAgICAgICAgICAgaGF2ZURhdGFDaGFuZ2UgPSB0aGlzLmZpcnN0TGlzdElkICE9IHRoaXMuX2xhc3REaXNwbGF5RGF0YVswXSB8fCB0aGlzLmRpc3BsYXlEYXRhW3RoaXMuZGlzcGxheUl0ZW1OdW0gLSAxXS5pZCAhPSB0aGlzLl9sYXN0RGlzcGxheURhdGFbbGVuIC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mb3JjZVVwZGF0ZSB8fCBoYXZlRGF0YUNoYW5nZSkgeyAgICAvL+WmguaenOaYr+W8uuWItuabtOaWsFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLl91cGRhdGVEb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fbGFzdERpc3BsYXlEYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgLy/pgJDluKfmuLLmn5NcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbnVtSXRlbXMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdXBkYXRlRG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9uZUFmdGVyVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/nm7TmjqXmuLLmn5NcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ0xpc3QgRGlzcGxheSBEYXRhIElJOjonLCB0aGlzLmRpc3BsYXlEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuZGlzcGxheUl0ZW1OdW07IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0odGhpcy5kaXNwbGF5RGF0YVtjXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/orqHnrpflj6/op4bojIPlm7RcclxuICAgIF9jYWxjVmlld1BvcygpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsUG9zOiBhbnkgPSB0aGlzLmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0xlZnQgPSBzY3JvbGxQb3MueCA+IDAgPyBzY3JvbGxQb3MueCA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdMZWZ0ID0gKHNjcm9sbFBvcy54IDwgMCA/IC1zY3JvbGxQb3MueCA6IDApIC0gdGhpcy5lbGFzdGljTGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1JpZ2h0ID0gdGhpcy52aWV3TGVmdCArIHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY1JpZ2h0ID0gdGhpcy52aWV3UmlnaHQgPiB0aGlzLmNvbnRlbnQud2lkdGggPyBNYXRoLmFicyh0aGlzLnZpZXdSaWdodCAtIHRoaXMuY29udGVudC53aWR0aCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgKz0gdGhpcy5lbGFzdGljUmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5lbGFzdGljTGVmdCwgdGhpcy5lbGFzdGljUmlnaHQsIHRoaXMudmlld0xlZnQsIHRoaXMudmlld1JpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljUmlnaHQgPSBzY3JvbGxQb3MueCA8IDAgPyAtc2Nyb2xsUG9zLnggOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgPSAoc2Nyb2xsUG9zLnggPiAwID8gLXNjcm9sbFBvcy54IDogMCkgKyB0aGlzLmVsYXN0aWNSaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgPSB0aGlzLnZpZXdSaWdodCAtIHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0xlZnQgPSB0aGlzLnZpZXdMZWZ0IDwgLXRoaXMuY29udGVudC53aWR0aCA/IE1hdGguYWJzKHRoaXMudmlld0xlZnQgKyB0aGlzLmNvbnRlbnQud2lkdGgpIDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgLT0gdGhpcy5lbGFzdGljTGVmdDtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNMZWZ0LCB0aGlzLmVsYXN0aWNSaWdodCwgdGhpcy52aWV3TGVmdCwgdGhpcy52aWV3UmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNUb3AgPSBzY3JvbGxQb3MueSA8IDAgPyBNYXRoLmFicyhzY3JvbGxQb3MueSkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3VG9wID0gKHNjcm9sbFBvcy55ID4gMCA/IC1zY3JvbGxQb3MueSA6IDApICsgdGhpcy5lbGFzdGljVG9wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Qm90dG9tID0gdGhpcy52aWV3VG9wIC0gdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0JvdHRvbSA9IHRoaXMudmlld0JvdHRvbSA8IC10aGlzLmNvbnRlbnQuaGVpZ2h0ID8gTWF0aC5hYnModGhpcy52aWV3Qm90dG9tICsgdGhpcy5jb250ZW50LmhlaWdodCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Qm90dG9tICs9IHRoaXMuZWxhc3RpY0JvdHRvbTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljQm90dG9tID0gc2Nyb2xsUG9zLnkgPiAwID8gTWF0aC5hYnMoc2Nyb2xsUG9zLnkpIDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0JvdHRvbSA9IChzY3JvbGxQb3MueSA8IDAgPyAtc2Nyb2xsUG9zLnkgOiAwKSAtIHRoaXMuZWxhc3RpY0JvdHRvbTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1RvcCA9IHRoaXMudmlld0JvdHRvbSArIHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNUb3AgPSB0aGlzLnZpZXdUb3AgPiB0aGlzLmNvbnRlbnQuaGVpZ2h0ID8gTWF0aC5hYnModGhpcy52aWV3VG9wIC0gdGhpcy5jb250ZW50LmhlaWdodCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3VG9wIC09IHRoaXMuZWxhc3RpY1RvcDtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNUb3AsIHRoaXMuZWxhc3RpY0JvdHRvbSwgdGhpcy52aWV3VG9wLCB0aGlzLnZpZXdCb3R0b20pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/orqHnrpfkvY3nva4g5qC55o2uaWRcclxuICAgIF9jYWxjSXRlbVBvcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgaXRlbVg6IG51bWJlciwgaXRlbVk6IG51bWJlcjtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uTEVGVF9UT19SSUdIVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgKyAoZml4ZWQudmFsICsgKHRoaXMuX2NvbHVtbkdhcCAqIGZpeGVkLmNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3M6IG51bWJlciA9IHRoaXMuX2N1c3RvbVNpemVbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSAoY3MgPiAwID8gY3MgOiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGhpcy5fbGVmdEdhcCArICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gKHRoaXMuY29udGVudC53aWR0aCAvIDIpIC0gKHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faXRlbVRtcC55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZDogYW55ID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiAoaWQgLSBmaXhlZC5jb3VudCkpIC0gKGZpeGVkLnZhbCArICh0aGlzLl9jb2x1bW5HYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzOiBudW1iZXIgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gKGNzID4gMCA/IGNzIDogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSAtdGhpcy5fcmlnaHRHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0IC0gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQud2lkdGggLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0ICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHdpZHRoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2l0ZW1UbXAueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDoge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZDogYW55ID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IC10aGlzLl90b3BHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogKGlkIC0gZml4ZWQuY291bnQpKSAtIChmaXhlZC52YWwgKyAodGhpcy5fbGluZUdhcCAqIGZpeGVkLmNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3M6IG51bWJlciA9IHRoaXMuX2N1c3RvbVNpemVbaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gKGNzID4gMCA/IGNzIDogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IC10aGlzLl90b3BHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCAtIGhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gKHRoaXMuY29udGVudC5oZWlnaHQgLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wIC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9pdGVtVG1wLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5fYm90dG9tR2FwICsgKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgKyAoZml4ZWQudmFsICsgKHRoaXMuX2xpbmVHYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzOiBudW1iZXIgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0aGlzLl9ib3R0b21HYXAgKyAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IGJvdHRvbSArIGhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gKHRoaXMuY29udGVudC5oZWlnaHQgLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9pdGVtVG1wLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDoge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbExpbmU6IG51bWJlciA9IE1hdGguZmxvb3IoaWQgLyB0aGlzLl9jb2xMaW5lTnVtKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAtdGhpcy5fdG9wR2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGNvbExpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCAtIHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSA9IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuX2JvdHRvbUdhcCArICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBib3R0b20gKyB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IHRoaXMuX2xlZnRHYXAgKyAoKGlkICUgdGhpcy5fY29sTGluZU51bSkgKiAodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YIC09ICh0aGlzLmNvbnRlbnQuYW5jaG9yWCAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAoKDEgLSB0aGlzLl9pdGVtVG1wLmFuY2hvclgpICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YIC09ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBpdGVtWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGl0ZW1ZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGNvbExpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YID0gbGVmdCArICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggLT0gKHRoaXMuY29udGVudC5hbmNob3JYICogdGhpcy5jb250ZW50LndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQgLSB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YICs9ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSAtdGhpcy5fdG9wR2FwIC0gKChpZCAlIHRoaXMuX2NvbExpbmVOdW0pICogKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZIC09ICgoMSAtIHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZICs9ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JZKSAqIHRoaXMuY29udGVudC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZIC09ICgodGhpcy5faXRlbVRtcC5hbmNob3JZKSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgKz0gKHRoaXMuY29udGVudC5hbmNob3JZICogdGhpcy5jb250ZW50LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgKj0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBpdGVtWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGl0ZW1ZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/orqHnrpflt7LlrZjlnKjnmoRJdGVt55qE5L2N572uXHJcbiAgICBfY2FsY0V4aXN0SXRlbVBvcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKGlkKTtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBkYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgeDogaXRlbS54LFxyXG4gICAgICAgICAgICB5OiBpdGVtLnksXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9zaXplVHlwZSkge1xyXG4gICAgICAgICAgICBkYXRhLnRvcCA9IGl0ZW0ueSArIChpdGVtLmhlaWdodCAqICgxIC0gaXRlbS5hbmNob3JZKSk7XHJcbiAgICAgICAgICAgIGRhdGEuYm90dG9tID0gaXRlbS55IC0gKGl0ZW0uaGVpZ2h0ICogaXRlbS5hbmNob3JZKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhLmxlZnQgPSBpdGVtLnggLSAoaXRlbS53aWR0aCAqIGl0ZW0uYW5jaG9yWCk7XHJcbiAgICAgICAgICAgIGRhdGEucmlnaHQgPSBpdGVtLnggKyAoaXRlbS53aWR0aCAqICgxIC0gaXRlbS5hbmNob3JYKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgLy/ojrflj5ZJdGVt5L2N572uXHJcbiAgICBnZXRJdGVtUG9zKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fdmlydHVhbClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNJdGVtUG9zKGlkKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNJdGVtUG9zKGlkKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNFeGlzdEl0ZW1Qb3MoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6I635Y+W5Zu65a6a5bC65a+4XHJcbiAgICBfZ2V0Rml4ZWRTaXplKGxpc3RJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jdXN0b21TaXplKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAobGlzdElkID09IG51bGwpXHJcbiAgICAgICAgICAgIGxpc3RJZCA9IHRoaXMuX251bUl0ZW1zO1xyXG4gICAgICAgIGxldCBmaXhlZDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoaWQpIDwgbGlzdElkKSB7XHJcbiAgICAgICAgICAgICAgICBmaXhlZCArPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsOiBmaXhlZCxcclxuICAgICAgICAgICAgY291bnQ6IGNvdW50LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5rua5Yqo57uT5p2f5pe2Li5cclxuICAgIF9vblNjcm9sbEJlZ2FuKCkge1xyXG4gICAgICAgIHRoaXMuX2JlZ2FuUG9zID0gdGhpcy5fc2l6ZVR5cGUgPyB0aGlzLnZpZXdUb3AgOiB0aGlzLnZpZXdMZWZ0O1xyXG4gICAgfVxyXG4gICAgLy/mu5rliqjnu5PmnZ/ml7YuLlxyXG4gICAgX29uU2Nyb2xsRW5kZWQoKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuc2Nyb2xsVG9MaXN0SWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogYW55ID0gdC5nZXRJdGVtQnlMaXN0SWQodC5zY3JvbGxUb0xpc3RJZCk7XHJcbiAgICAgICAgICAgIHQuc2Nyb2xsVG9MaXN0SWQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMSwgMS4wNiksXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMSwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXcgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKHJ1bk5vZGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XHJcblxyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HICYmXHJcbiAgICAgICAgICAgICF0LmFkaGVyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKHQuYWRoZXJpbmcsIHQuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCksIHQuX3Njcm9sbFZpZXcuaXNTY3JvbGxpbmcoKSk7XHJcbiAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpIHtcclxuICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2VBZGhlcmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDop6bmkbjml7ZcclxuICAgIF9vblRvdWNoU3RhcnQoZXYsIGNhcHR1cmVMaXN0ZW5lcnMpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlld1snX2hhc05lc3RlZFZpZXdHcm91cCddKGV2LCBjYXB0dXJlTGlzdGVuZXJzKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBpc01lID0gZXYuZXZlbnRQaGFzZSA9PT0gY2MuRXZlbnQuQVRfVEFSR0VUICYmIGV2LnRhcmdldCA9PT0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGlmICghaXNNZSkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbU5vZGU6IGFueSA9IGV2LnRhcmdldDtcclxuICAgICAgICAgICAgd2hpbGUgKGl0ZW1Ob2RlLl9saXN0SWQgPT0gbnVsbCAmJiBpdGVtTm9kZS5wYXJlbnQpXHJcbiAgICAgICAgICAgICAgICBpdGVtTm9kZSA9IGl0ZW1Ob2RlLnBhcmVudDtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsSXRlbSA9IGl0ZW1Ob2RlLl9saXN0SWQgIT0gbnVsbCA/IGl0ZW1Ob2RlIDogZXYudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6Kem5pG45oqs6LW35pe2Li5cclxuICAgIF9vblRvdWNoVXAoKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgdC5fc2Nyb2xsUG9zID0gbnVsbDtcclxuICAgICAgICBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5BREhFUklORykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGhlcmluZylcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkaGVyaW5nQmFycmllciA9IHRydWU7XHJcbiAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpIHtcclxuICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2VBZGhlcmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsSXRlbSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hDYW5jZWxsZWQoZXYsIGNhcHR1cmVMaXN0ZW5lcnMpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuX3Njcm9sbFZpZXdbJ19oYXNOZXN0ZWRWaWV3R3JvdXAnXShldiwgY2FwdHVyZUxpc3RlbmVycykgfHwgZXYuc2ltdWxhdGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdC5fc2Nyb2xsUG9zID0gbnVsbDtcclxuICAgICAgICBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5BREhFUklORykge1xyXG4gICAgICAgICAgICBpZiAodC5hZGhlcmluZylcclxuICAgICAgICAgICAgICAgIHQuX2FkaGVyaW5nQmFycmllciA9IHRydWU7XHJcbiAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpIHtcclxuICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHQuX3BhZ2VBZGhlcmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHQuYWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsSXRlbSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvL+W9k+WwuuWvuOaUueWPmFxyXG4gICAgX29uU2l6ZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tJbml0ZWQoZmFsc2UpKVxyXG4gICAgICAgICAgICB0aGlzLl9vblNjcm9sbGluZygpO1xyXG4gICAgfVxyXG4gICAgLy/lvZNJdGVt6Ieq6YCC5bqUXHJcbiAgICBfb25JdGVtQWRhcHRpdmUoaXRlbSkge1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5jaGVja0luaXRlZChmYWxzZSkpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICghdGhpcy5fc2l6ZVR5cGUgJiYgaXRlbS53aWR0aCAhPSB0aGlzLl9pdGVtU2l6ZS53aWR0aClcclxuICAgICAgICAgICAgfHwgKHRoaXMuX3NpemVUeXBlICYmIGl0ZW0uaGVpZ2h0ICE9IHRoaXMuX2l0ZW1TaXplLmhlaWdodClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXN0b21TaXplKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gdGhpcy5fc2l6ZVR5cGUgPyBpdGVtLmhlaWdodCA6IGl0ZW0ud2lkdGg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0gIT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLl91cGRhdGVJdGVtUG9zKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBbGwoKTtcclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOW9k+WJjeato+WcqOi/kOihjCBzY3JvbGxUb++8jOiCr+WumuS8muS4jeWHhuehru+8jOWcqOi/memHjOWBmuS/ruato1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFRvTGlzdElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxQb3MgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl9zY3JvbGxUb1NvKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuX3Njcm9sbFRvTGlzdElkLCBNYXRoLm1heCgwLCB0aGlzLl9zY3JvbGxUb0VuZFRpbWUgLSAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgLy9QQUdF57KY6ZmEXHJcbiAgICBfcGFnZUFkaGVyZSgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmN5Y2xpYyAmJiAodC5lbGFzdGljVG9wID4gMCB8fCB0LmVsYXN0aWNSaWdodCA+IDAgfHwgdC5lbGFzdGljQm90dG9tID4gMCB8fCB0LmVsYXN0aWNMZWZ0ID4gMCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgY3VyUG9zID0gdC5fc2l6ZVR5cGUgPyB0LnZpZXdUb3AgOiB0LnZpZXdMZWZ0O1xyXG4gICAgICAgIGxldCBkaXMgPSAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKSAqIHQucGFnZURpc3RhbmNlO1xyXG4gICAgICAgIGxldCBjYW5Ta2lwID0gTWF0aC5hYnModC5fYmVnYW5Qb3MgLSBjdXJQb3MpID4gZGlzO1xyXG4gICAgICAgIGlmIChjYW5Ta2lwKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lSW5TZWNvbmQgPSAuNTtcclxuICAgICAgICAgICAgc3dpdGNoICh0Ll9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPiBjdXJQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmVQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygnX3BhZ2VBZGhlcmUgICBQUFBQUFBQUFBQUFBQUFAnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5leHRQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygnX3BhZ2VBZGhlcmUgICBOTk5OTk5OTk5OTk5OTk4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPCBjdXJQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmVQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZXh0UGFnZSh0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodC5lbGFzdGljVG9wIDw9IDAgJiYgdC5lbGFzdGljUmlnaHQgPD0gMCAmJiB0LmVsYXN0aWNCb3R0b20gPD0gMCAmJiB0LmVsYXN0aWNMZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fYmVnYW5Qb3MgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLy/nspjpmYRcclxuICAgIGFkaGVyZSgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0LmVsYXN0aWNUb3AgPiAwIHx8IHQuZWxhc3RpY1JpZ2h0ID4gMCB8fCB0LmVsYXN0aWNCb3R0b20gPiAwIHx8IHQuZWxhc3RpY0xlZnQgPiAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdC5hZGhlcmluZyA9IHRydWU7XHJcbiAgICAgICAgdC5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gKHQuX3NpemVUeXBlID8gdC5fdG9wR2FwIDogdC5fbGVmdEdhcCkgLyAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcclxuICAgICAgICBsZXQgdGltZUluU2Vjb25kOiBudW1iZXIgPSAuNztcclxuICAgICAgICB0LnNjcm9sbFRvKHQubmVhcmVzdExpc3RJZCwgdGltZUluU2Vjb25kLCBvZmZzZXQpO1xyXG4gICAgfVxyXG4gICAgLy9VcGRhdGUuLlxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA8PSAwIHx8IHRoaXMuX3VwZGF0ZURvbmUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyBjYy5sb2codGhpcy5kaXNwbGF5RGF0YS5sZW5ndGgsIHRoaXMuX3VwZGF0ZUNvdW50ZXIsIHRoaXMuZGlzcGxheURhdGFbdGhpcy5fdXBkYXRlQ291bnRlcl0pO1xyXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pID4gdGhpcy5kaXNwbGF5SXRlbU51bSA/IHRoaXMuZGlzcGxheUl0ZW1OdW0gOiAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdGhpcy5fdXBkYXRlQ291bnRlcjsgbiA8IGxlbjsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTogYW55ID0gdGhpcy5kaXNwbGF5RGF0YVtuXTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlT3JVcGRhdGVJdGVtKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlQ291bnRlciA+PSB0aGlzLmRpc3BsYXlJdGVtTnVtIC0gMSkgeyAvL+acgOWQjuS4gOS4qlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RvbmVBZnRlclVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIXRoaXMuX3Njcm9sbFZpZXcuaXNTY3JvbGxpbmcoKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb25lQWZ0ZXJVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVsUmVkdW5kYW50SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clBhZ2VOdW0gPSB0aGlzLm5lYXJlc3RMaXN0SWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyICs9IHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUNvdW50ZXIgPCB0aGlzLl9udW1JdGVtcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSkgPiB0aGlzLl9udW1JdGVtcyA/IHRoaXMuX251bUl0ZW1zIDogKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0aGlzLl91cGRhdGVDb3VudGVyOyBuIDwgbGVuOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciArPSB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJQYWdlTnVtID0gdGhpcy5uZWFyZXN0TGlzdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rmiJbmm7TmlrBJdGVt77yI6Jma5ouf5YiX6KGo55So77yJXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSDmlbDmja5cclxuICAgICAqL1xyXG4gICAgX2NyZWF0ZU9yVXBkYXRlSXRlbShkYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXRlbTogYW55ID0gdGhpcy5nZXRJdGVtQnlMaXN0SWQoZGF0YS5pZCk7XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7IC8v5aaC5p6c5LiN5a2Y5ZyoXHJcbiAgICAgICAgICAgIGxldCBjYW5HZXQ6IGJvb2xlYW4gPSB0aGlzLl9wb29sLnNpemUoKSA+IDA7XHJcbiAgICAgICAgICAgIGlmIChjYW5HZXQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLl9wb29sLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCfku47msaDkuK3lj5blh7o6OiAgIOaXp2lkID0nLCBpdGVtWydfbGlzdElkJ10sICfvvIzmlrBpZCA9JywgZGF0YS5pZCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5faXRlbVRtcCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ+aWsOW7ujo6JywgZGF0YS5pZCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0uX2xpc3RJZCAhPSBkYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLl9saXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRDb250ZW50U2l6ZSh0aGlzLl9pdGVtU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihDb21wYXRpYmxlVG9vbC5wb3NpdGlvbihkYXRhLngsIGRhdGEueSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChjYW5HZXQgJiYgdGhpcy5fbmVlZFVwZGF0ZVdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gaXRlbS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0U2libGluZ0luZGV4KHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW06IExpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtWydsaXN0SXRlbSddID0gbGlzdEl0ZW07XHJcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgIGxpc3RJdGVtLmxpc3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uX3JlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgZGF0YS5pZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZm9yY2VVcGRhdGUgJiYgdGhpcy5yZW5kZXJFdmVudCkgeyAvL+W8uuWItuabtOaWsFxyXG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKENvbXBhdGlibGVUb29sLnBvc2l0aW9uKGRhdGEueCwgZGF0YS55KSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0SXRlbVNpemUoaXRlbSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZygnQUREOjonLCBkYXRhLmlkLCBpdGVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGRhdGEuaWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVzZXRJdGVtU2l6ZShpdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdEl0ZW0oaXRlbVsnbGlzdEl0ZW0nXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3REaXNwbGF5RGF0YS5pbmRleE9mKGRhdGEuaWQpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEucHVzaChkYXRhLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WIm+W7uuaIluabtOaWsEl0ZW3vvIjpnZ7omZrmi5/liJfooajnlKjvvIlcclxuICAgIF9jcmVhdGVPclVwZGF0ZUl0ZW0yKGxpc3RJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMuY29udGVudC5jaGlsZHJlbltsaXN0SWRdO1xyXG4gICAgICAgIGxldCBsaXN0SXRlbTogTGlzdEl0ZW07XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7IC8v5aaC5p6c5LiN5a2Y5ZyoXHJcbiAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9pdGVtVG1wKTtcclxuICAgICAgICAgICAgaXRlbS5fbGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtWydsaXN0SXRlbSddID0gbGlzdEl0ZW07XHJcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5fcmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBsaXN0SWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZvcmNlVXBkYXRlICYmIHRoaXMucmVuZGVyRXZlbnQpIHsgLy/lvLrliLbmm7TmlrBcclxuICAgICAgICAgICAgaXRlbS5fbGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICBpZiAobGlzdEl0ZW0pXHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5saXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBsaXN0SWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdEl0ZW0obGlzdEl0ZW0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9sYXN0RGlzcGxheURhdGEuaW5kZXhPZihsaXN0SWQpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEucHVzaChsaXN0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfdXBkYXRlTGlzdEl0ZW0obGlzdEl0ZW06IExpc3RJdGVtKSB7XHJcbiAgICAgICAgaWYgKCFsaXN0SXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZSA+IFNlbGVjdGVkVHlwZS5OT05FKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSBsaXN0SXRlbS5ub2RlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5TSU5HTEU6XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkSWQgPT0gaXRlbS5fbGlzdElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuTVVMVDpcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IHRoaXMubXVsdFNlbGVjdGVkLmluZGV4T2YoaXRlbS5fbGlzdElkKSA+PSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/ku4XomZrmi5/liJfooajnlKhcclxuICAgIF9yZXNldEl0ZW1TaXplKGl0ZW06IGFueSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgc2l6ZTogbnVtYmVyO1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplICYmIHRoaXMuX2N1c3RvbVNpemVbaXRlbS5fbGlzdElkXSkge1xyXG4gICAgICAgICAgICBzaXplID0gdGhpcy5fY3VzdG9tU2l6ZVtpdGVtLl9saXN0SWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb2xMaW5lTnVtID4gMSlcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0Q29udGVudFNpemUodGhpcy5faXRlbVNpemUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzaXplID0gdGhpcy5fc2l6ZVR5cGUgPyB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgOiB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NpemVUeXBlKVxyXG4gICAgICAgICAgICAgICAgaXRlbS5oZWlnaHQgPSBzaXplO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpdGVtLndpZHRoID0gc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsEl0ZW3kvY3nva5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfHxOb2RlfSBsaXN0SWRPckl0ZW1cclxuICAgICAqL1xyXG4gICAgX3VwZGF0ZUl0ZW1Qb3MobGlzdElkT3JJdGVtOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXRlbTogYW55ID0gaXNOYU4obGlzdElkT3JJdGVtKSA/IGxpc3RJZE9ySXRlbSA6IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZE9ySXRlbSk7XHJcbiAgICAgICAgbGV0IHBvczogYW55ID0gdGhpcy5nZXRJdGVtUG9zKGl0ZW0uX2xpc3RJZCk7XHJcbiAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihwb3MueCwgcG9zLnkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lpJrpgIlcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3Mg5Y+v5Lul5piv5Y2V5LiqbGlzdElk77yM5Lmf5Y+v5piv5LiqbGlzdElk5pWw57uEXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGJvb2wg5YC877yM5aaC5p6c5Li6bnVsbOeahOivne+8jOWImeebtOaOpeeUqGFyZ3Popobnm5ZcclxuICAgICAqL1xyXG4gICAgc2V0TXVsdFNlbGVjdGVkKGFyZ3M6IGFueSwgYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZ3MpKSB7XHJcbiAgICAgICAgICAgIGFyZ3MgPSBbYXJnc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib29sID09IG51bGwpIHtcclxuICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQgPSBhcmdzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0SWQ6IG51bWJlciwgc3ViOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSBhcmdzLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdElkID0gYXJnc1tuXTtcclxuICAgICAgICAgICAgICAgICAgICBzdWIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YiA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQucHVzaChsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IGFyZ3MubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SWQgPSBhcmdzW25dO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YiA9IHQubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuX2ZvcmNlVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDmjIflrprnmoRJdGVtXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcmdzIOWNleS4qmxpc3RJZO+8jOaIluiAheaVsOe7hFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgdXBkYXRlSXRlbShhcmdzOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xyXG4gICAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSAwLCBsZW46IG51bWJlciA9IGFyZ3MubGVuZ3RoOyBuIDwgbGVuOyBuKyspIHtcclxuICAgICAgICAgICAgbGV0IGxpc3RJZDogbnVtYmVyID0gYXJnc1tuXTtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtKVxyXG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgbGlzdElkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5YWo6YOoXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUFsbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubnVtSXRlbXMgPSB0aGlzLm51bUl0ZW1zO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja5MaXN0SUTojrflj5ZJdGVtXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGlzdElkXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBnZXRJdGVtQnlMaXN0SWQobGlzdElkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250ZW50KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbl07XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5fbGlzdElkID09IGxpc3RJZClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Zyo5pi+56S65Yy65Z+f5aSW55qESXRlbVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgX2dldE91dHNpZGVJdGVtKCkge1xyXG4gICAgICAgIGxldCBpdGVtOiBhbnk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbl07XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzcGxheURhdGEuZmluZChkID0+IGQuaWQgPT0gaXRlbS5fbGlzdElkKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIC8v5Yig6Zmk5pi+56S65Yy65Z+f5Lul5aSW55qESXRlbVxyXG4gICAgX2RlbFJlZHVuZGFudEl0ZW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgbGV0IGFycjogYW55W10gPSB0aGlzLl9nZXRPdXRzaWRlSXRlbSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSBhcnIubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSBhcnJbbl07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsSXRlbSAmJiBpdGVtLl9saXN0SWQgPT0gdGhpcy5fc2Nyb2xsSXRlbS5fbGlzdElkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9vbC5wdXQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBtOiBudW1iZXIgPSB0aGlzLl9sYXN0RGlzcGxheURhdGEubGVuZ3RoIC0gMTsgbSA+PSAwOyBtLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhW21dID09IGl0ZW0uX2xpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEuc3BsaWNlKG0sIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2MubG9nKCflrZjlhaU6OicsIHN0ciwgJyAgICBwb29sLmxlbmd0aCA9JywgdGhpcy5fcG9vbC5sZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCA+IHRoaXMuX251bUl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxTaW5nbGVJdGVtKHRoaXMuY29udGVudC5jaGlsZHJlblt0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5Yig6Zmk5Y2V5LiqSXRlbVxyXG4gICAgX2RlbFNpbmdsZUl0ZW0oaXRlbTogYW55KSB7XHJcbiAgICAgICAgY2MubG9nKCdERUw6OicsIGl0ZW1bJ19saXN0SWQnXSwgaXRlbSk7XHJcbiAgICAgICAgaXRlbS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgaWYgKGl0ZW0uZGVzdHJveSlcclxuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XHJcbiAgICAgICAgaXRlbSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvKiogXHJcbiAgICAgKiDliqjmlYjliKDpmaRJdGVt77yI5q2k5pa55rOV5Y+q6YCC55So5LqO6Jma5ouf5YiX6KGo77yM5Y2zX3ZpcnR1YWw9dHJ1Ze+8iVxyXG4gICAgICog5LiA5a6a6KaB5Zyo5Zue6LCD5Ye95pWw6YeM6YeN5paw6K6+572u5paw55qEbnVtSXRlbXPov5vooYzliLfmlrDvvIzmr5Xnq5/mnKxMaXN05piv6Z2g5pWw5o2u6amx5Yqo55qE44CCXHJcbiAgICAgKi9cclxuICAgIGFuaURlbEl0ZW0obGlzdElkOiBudW1iZXIsIGNhbGxGdW5jOiBGdW5jdGlvbiwgYW5pVHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpIHx8IHQuY3ljbGljIHx8ICF0Ll92aXJ0dWFsKVxyXG4gICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoJ1RoaXMgZnVuY3Rpb24gaXMgbm90IGFsbG93ZWQgdG8gYmUgY2FsbGVkIScpO1xyXG5cclxuICAgICAgICBpZiAodC5fYW5pRGVsUnVuaW5nKVxyXG4gICAgICAgICAgICByZXR1cm4gY2Mud2FybignUGxlYXNlIHdhaXQgZm9yIHRoZSBjdXJyZW50IGRlbGV0aW9uIHRvIGZpbmlzaCEnKTtcclxuXHJcbiAgICAgICAgbGV0IGl0ZW06IGFueSA9IHQuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZCk7XHJcbiAgICAgICAgbGV0IGxpc3RJdGVtOiBMaXN0SXRlbTtcclxuICAgICAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgICAgICAgY2FsbEZ1bmMobGlzdElkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0Ll9hbmlEZWxSdW5pbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCBjdXJMYXN0SWQ6IG51bWJlciA9IHQuZGlzcGxheURhdGFbdC5kaXNwbGF5RGF0YS5sZW5ndGggLSAxXS5pZDtcclxuICAgICAgICBsZXQgcmVzZXRTZWxlY3RlZElkOiBib29sZWFuID0gbGlzdEl0ZW0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgbGlzdEl0ZW0uc2hvd0FuaShhbmlUeXBlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5pyJ5rKh5pyJ5LiL5LiA5Liq77yM5aaC5p6c5pyJ55qE6K+d77yM5Yib5bu657KX5p2lXHJcbiAgICAgICAgICAgIGxldCBuZXdJZDogbnVtYmVyO1xyXG4gICAgICAgICAgICBpZiAoY3VyTGFzdElkIDwgdC5fbnVtSXRlbXMgLSAyKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdJZCA9IGN1ckxhc3RJZCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld0lkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhOiBhbnkgPSB0Ll9jYWxjSXRlbVBvcyhuZXdJZCk7XHJcbiAgICAgICAgICAgICAgICB0LmRpc3BsYXlEYXRhLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fdmlydHVhbClcclxuICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0obmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtMihuZXdJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgdC5fbnVtSXRlbXMtLTtcclxuICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5TSU5HTEUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNldFNlbGVjdGVkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9zZWxlY3RlZElkID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHQuX3NlbGVjdGVkSWQgLSAxID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0Ll9zZWxlY3RlZElkLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodC5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLk1VTFQgJiYgdC5tdWx0U2VsZWN0ZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViOiBudW1iZXIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5zcGxpY2Uoc3ViLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5aSa6YCJ55qE5pWw5o2u77yM5Zyo5YW25ZCO55qE5YWo6YOo5YeP5LiAXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0Lm11bHRTZWxlY3RlZC5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpZDogbnVtYmVyID0gdC5tdWx0U2VsZWN0ZWRbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID49IGxpc3RJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWRbbl0tLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodC5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX2N1c3RvbVNpemVbbGlzdElkXSlcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdC5fY3VzdG9tU2l6ZVtsaXN0SWRdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0N1c3RvbVNpemU6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpemU6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHQuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaXplID0gdC5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkTnVtYmVyOiBudW1iZXIgPSBwYXJzZUludChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3VzdG9tU2l6ZVtpZE51bWJlciAtIChpZE51bWJlciA+PSBsaXN0SWQgPyAxIDogMCldID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHQuX2N1c3RvbVNpemUgPSBuZXdDdXN0b21TaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5ZCO6Z2i55qESXRlbeWQkeWJjeaAvOeahOWKqOaViFxyXG4gICAgICAgICAgICBsZXQgc2VjOiBudW1iZXIgPSAuMjMzMztcclxuICAgICAgICAgICAgbGV0IGFjdHM6IGFueVtdLCBoYXZlQ0I6IGJvb2xlYW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IG5ld0lkICE9IG51bGwgPyBuZXdJZCA6IGN1ckxhc3RJZDsgbiA+PSBsaXN0SWQgKyAxOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0LmdldEl0ZW1CeUxpc3RJZChuKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0RhdGE6IGFueSA9IHQuX2NhbGNJdGVtUG9zKG4gLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3RzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oc2VjLCBDb21wYXRpYmxlVG9vbC5wb3NpdGlvbihwb3NEYXRhLngsIHBvc0RhdGEueSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPD0gbGlzdElkICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXZlQ0IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RzLnB1c2goY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYW5pRGVsUnVuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsRnVuYyhsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RzLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdHMpKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKGFjdHNbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaGF2ZUNCKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9hbmlEZWxSdW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5rua5Yqo5YiwLi5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsaXN0SWQg57Si5byV77yI5aaC5p6cPDDvvIzliJnmu5rliLDpppbkuKpJdGVt5L2N572u77yM5aaC5p6cPj1fbnVtSXRlbXPvvIzliJnmu5rliLDmnIDmnKtJdGVt5L2N572u77yJXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGltZUluU2Vjb25kIOaXtumXtFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCDntKLlvJXnm67moIfkvY3nva7lgY/np7vvvIwwLTFcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3ZlclN0cmVzcyDmu5rliqjlkI7mmK/lkKblvLrosIPor6VJdGVt77yI6L+Z5Y+q5piv5Liq5a6e6aqM5Yqf6IO977yJXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbFRvKGxpc3RJZDogbnVtYmVyLCB0aW1lSW5TZWNvbmQ6IG51bWJlciA9IC41LCBvZmZzZXQ6IG51bWJlciA9IG51bGwsIG92ZXJTdHJlc3M6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoZmFsc2UpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gdC5fc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xyXG4gICAgICAgIGlmICh0aW1lSW5TZWNvbmQgPT0gbnVsbCkgICAvL+m7mOiupDAuNVxyXG4gICAgICAgICAgICB0aW1lSW5TZWNvbmQgPSAuNTtcclxuICAgICAgICBlbHNlIGlmICh0aW1lSW5TZWNvbmQgPCAwKVxyXG4gICAgICAgICAgICB0aW1lSW5TZWNvbmQgPSAwO1xyXG4gICAgICAgIGlmIChsaXN0SWQgPCAwKVxyXG4gICAgICAgICAgICBsaXN0SWQgPSAwO1xyXG4gICAgICAgIGVsc2UgaWYgKGxpc3RJZCA+PSB0Ll9udW1JdGVtcylcclxuICAgICAgICAgICAgbGlzdElkID0gdC5fbnVtSXRlbXMgLSAxO1xyXG4gICAgICAgIC8vIOS7pemYsuiuvue9ruS6hm51bUl0ZW1z5LmL5ZCObGF5b3V055qE5bC65a+46L+Y5pyq5pu05pawXHJcbiAgICAgICAgaWYgKCF0Ll92aXJ0dWFsICYmIHQuX2xheW91dCAmJiB0Ll9sYXlvdXQuZW5hYmxlZClcclxuICAgICAgICAgICAgdC5fbGF5b3V0LnVwZGF0ZUxheW91dCgpO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gdC5nZXRJdGVtUG9zKGxpc3RJZCk7XHJcbiAgICAgICAgbGV0IHRhcmdldFg6IG51bWJlciwgdGFyZ2V0WTogbnVtYmVyO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHQuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgIHRhcmdldFggPSBwb3MubGVmdDtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYIC09IHQubm9kZS53aWR0aCAqIG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYIC09IHQuX2xlZnRHYXA7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBDb21wYXRpYmxlVG9vbC5wb3NpdGlvbih0YXJnZXRYLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WCA9IHBvcy5yaWdodCAtIHQubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYICs9IHQubm9kZS53aWR0aCAqIG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYICs9IHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gQ29tcGF0aWJsZVRvb2wucG9zaXRpb24odGFyZ2V0WCArIHQuY29udGVudC53aWR0aCwgMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSBwb3MudG9wO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgKz0gdC5ub2RlLmhlaWdodCAqIG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZICs9IHQuX3RvcEdhcDtcclxuICAgICAgICAgICAgICAgIHBvcyA9IENvbXBhdGlibGVUb29sLnBvc2l0aW9uKDAsIC10YXJnZXRZKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WSA9IHBvcy5ib3R0b20gKyB0Lm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgLT0gdC5ub2RlLmhlaWdodCAqIG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZIC09IHQuX2JvdHRvbUdhcDtcclxuICAgICAgICAgICAgICAgIHBvcyA9IENvbXBhdGlibGVUb29sLnBvc2l0aW9uKDAsIC10YXJnZXRZICsgdC5jb250ZW50LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZpZXdQb3M6IGFueSA9IHQuY29udGVudC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHZpZXdQb3MgPSBNYXRoLmFicyh0Ll9zaXplVHlwZSA/IHZpZXdQb3MueSA6IHZpZXdQb3MueCk7XHJcblxyXG4gICAgICAgIGxldCBjb21wYXJlUG9zID0gdC5fc2l6ZVR5cGUgPyBwb3MueSA6IHBvcy54O1xyXG4gICAgICAgIGxldCBydW5TY3JvbGwgPSBNYXRoLmFicygodC5fc2Nyb2xsUG9zICE9IG51bGwgPyB0Ll9zY3JvbGxQb3MgOiB2aWV3UG9zKSAtIGNvbXBhcmVQb3MpID4gLjU7XHJcbiAgICAgICAgLy8gY2MubG9nKHJ1blNjcm9sbCwgdC5fc2Nyb2xsUG9zLCB2aWV3UG9zLCBjb21wYXJlUG9zKVxyXG5cclxuICAgICAgICAvLyB0Ll9zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKCk7XHJcbiAgICAgICAgaWYgKHJ1blNjcm9sbCkge1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KHBvcywgdGltZUluU2Vjb25kKTtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVG9MaXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFRvRW5kVGltZSA9ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgKyB0aW1lSW5TZWNvbmQ7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhsaXN0SWQsIHQuY29udGVudC53aWR0aCwgdC5jb250ZW50LmdldFBvc2l0aW9uKCksIHBvcyk7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFRvU28gPSB0LnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXQuX2FkaGVyaW5nQmFycmllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuYWRoZXJpbmcgPSB0Ll9hZGhlcmluZ0JhcnJpZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHQuX3Njcm9sbFBvcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2Nyb2xsVG9MaXN0SWQgPVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX3Njcm9sbFRvRW5kVGltZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2Nyb2xsVG9TbyA9XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKCcyMjIyMjIyMjIyJywgdC5fYWRoZXJpbmdCYXJyaWVyKVxyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJTdHJlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0LnNjcm9sbFRvTGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdC5nZXRJdGVtQnlMaXN0SWQobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjEsIDEuMDUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMSwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdGltZUluU2Vjb25kICsgLjEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRpbWVJblNlY29uZCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDorqHnrpflvZPliY3mu5rliqjnqpfmnIDov5HnmoRJdGVtXHJcbiAgICAgKi9cclxuICAgIF9jYWxjTmVhcmVzdEl0ZW0oKSB7XHJcbiAgICAgICAgY2MubG9nKFwiX2NhbGNOZWFyZXN0SXRlbVwiKTtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBudWxsO1xyXG4gICAgICAgIGxldCBkYXRhOiBhbnksIGNlbnRlcjogbnVtYmVyO1xyXG5cclxuICAgICAgICBpZiAodC5fdmlydHVhbClcclxuICAgICAgICAgICAgdC5fY2FsY1ZpZXdQb3MoKTtcclxuXHJcbiAgICAgICAgbGV0IHZUb3A6IG51bWJlciwgdlJpZ2h0OiBudW1iZXIsIHZCb3R0b206IG51bWJlciwgdkxlZnQ6IG51bWJlcjtcclxuICAgICAgICB2VG9wID0gdC52aWV3VG9wO1xyXG4gICAgICAgIHZSaWdodCA9IHQudmlld1JpZ2h0O1xyXG4gICAgICAgIHZCb3R0b20gPSB0LnZpZXdCb3R0b207XHJcbiAgICAgICAgdkxlZnQgPSB0LnZpZXdMZWZ0O1xyXG5cclxuICAgICAgICBsZXQgYnJlYWtGb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHQuY29udGVudC5jaGlsZHJlbkNvdW50ICYmICFicmVha0ZvcjsgbiArPSB0Ll9jb2xMaW5lTnVtKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB0Ll92aXJ0dWFsID8gdC5kaXNwbGF5RGF0YVtuXSA6IHQuX2NhbGNFeGlzdEl0ZW1Qb3Mobik7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSB0Ll9zaXplVHlwZSA/ICgoZGF0YS50b3AgKyBkYXRhLmJvdHRvbSkgLyAyKSA6IChjZW50ZXIgPSAoZGF0YS5sZWZ0ICsgZGF0YS5yaWdodCkgLyAyKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJpZ2h0ID49IHZMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZMZWZ0ID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCArPSB0Ll9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlZnQgPD0gdlJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZSaWdodCA8IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgKz0gdC5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ib3R0b20gPD0gdlRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2VG9wIDwgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCArPSB0Ll9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRvcCA+PSB2Qm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZCb3R0b20gPiBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkICs9IHQuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mnIDlkI7kuIDkuKpJdGVt44CC44CC44CC77yI5ZOO77yM6L+Z5Lqb5Yik5pat55yf5b+D5oG25b+D77yM5Yik5pat5LqG5YmN6Z2i55qE6L+Y6KaB5Yik5pat5pyA5ZCO5LiA5Liq44CC44CC44CC5LiA5byA5aeL5ZGi77yM5bCx5Y+q5pyJ5LiA5Liq5biD5bGA77yI5Y2V5YiX5biD5bGA77yJ77yM6YKj5pe25YCZ5Luj56CB5omN5LiJ55m+6KGM77yM5ZCO5p2l5bCx5oOz552A5a6M5ZaE5ZWK77yM6Im5Li7ov5nlnZHnnJ/mt7HvvIznjrDlnKjov5nooYzmlbDpg73kuIDljYPkupTkuoY9ID18fO+8iVxyXG4gICAgICAgIGRhdGEgPSB0Ll92aXJ0dWFsID8gdC5kaXNwbGF5RGF0YVt0LmRpc3BsYXlJdGVtTnVtIC0gMV0gOiB0Ll9jYWxjRXhpc3RJdGVtUG9zKHQuX251bUl0ZW1zIC0gMSk7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pZCA9PSB0Ll9udW1JdGVtcyAtIDEpIHtcclxuICAgICAgICAgICAgY2VudGVyID0gdC5fc2l6ZVR5cGUgPyAoKGRhdGEudG9wICsgZGF0YS5ib3R0b20pIC8gMikgOiAoY2VudGVyID0gKGRhdGEubGVmdCArIGRhdGEucmlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlJpZ2h0ID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodkxlZnQgPCBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2Qm90dG9tIDwgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlRvcCA+IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy5sb2coJ3QubmVhcmVzdExpc3RJZCA9JywgdC5uZWFyZXN0TGlzdElkKTtcclxuICAgIH1cclxuICAgIC8v5LiK5LiA6aG1XHJcbiAgICBwcmVQYWdlKHRpbWVJblNlY29uZDogbnVtYmVyID0gLjUpIHtcclxuICAgICAgICAvLyBjYy5sb2coJ/CfkYgnKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2tpcFBhZ2UodGhpcy5jdXJQYWdlTnVtIC0gMSwgdGltZUluU2Vjb25kKTtcclxuICAgIH1cclxuICAgIC8v5LiL5LiA6aG1XHJcbiAgICBuZXh0UGFnZSh0aW1lSW5TZWNvbmQ6IG51bWJlciA9IC41KSB7XHJcbiAgICAgICAgLy8gY2MubG9nKCfwn5GJJyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnNraXBQYWdlKHRoaXMuY3VyUGFnZU51bSArIDEsIHRpbWVJblNlY29uZCk7XHJcbiAgICB9XHJcbiAgICAvL+i3s+i9rOWIsOesrOWHoOmhtVxyXG4gICAgc2tpcFBhZ2UocGFnZU51bTogbnVtYmVyLCB0aW1lSW5TZWNvbmQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSAhPSBTbGlkZVR5cGUuUEFHRSlcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdUaGlzIGZ1bmN0aW9uIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNhbGxlZCwgTXVzdCBTbGlkZU1vZGUgPSBQQUdFIScpO1xyXG4gICAgICAgIGlmIChwYWdlTnVtIDwgMCB8fCBwYWdlTnVtID49IHQuX251bUl0ZW1zKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHQuY3VyUGFnZU51bSA9PSBwYWdlTnVtKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gY2MubG9nKHBhZ2VOdW0pO1xyXG4gICAgICAgIHQuY3VyUGFnZU51bSA9IHBhZ2VOdW07XHJcbiAgICAgICAgaWYgKHQucGFnZUNoYW5nZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdC5wYWdlQ2hhbmdlRXZlbnRdLCBwYWdlTnVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5zY3JvbGxUbyhwYWdlTnVtLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgfVxyXG4gICAgLy/orqHnrpcgQ3VzdG9tU2l6Ze+8iOi/meS4quWHveaVsOi/mOaYr+S/neeVmeWQp++8jOafkOS6m+e9leingeeahOaDheWGteeahOehrui/mOaYr+mcgOimgeaJi+WKqOiuoeeul2N1c3RvbVNpemXnmoTvvIlcclxuICAgIGNhbGNDdXN0b21TaXplKG51bUl0ZW1zOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdC5faXRlbVRtcClcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdVbnNldCB0ZW1wbGF0ZSBpdGVtIScpO1xyXG4gICAgICAgIGlmICghdC5yZW5kZXJFdmVudClcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdVbnNldCBSZW5kZXItRXZlbnQhJyk7XHJcbiAgICAgICAgdC5fY3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgIGxldCB0ZW1wOiBhbnkgPSBjYy5pbnN0YW50aWF0ZSh0Ll9pdGVtVG1wKTtcclxuICAgICAgICB0LmNvbnRlbnQuYWRkQ2hpbGQodGVtcCk7XHJcbiAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gMDsgbiA8IG51bUl0ZW1zOyBuKyspIHtcclxuICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnJlbmRlckV2ZW50XSwgdGVtcCwgbik7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wLmhlaWdodCAhPSB0Ll9pdGVtU2l6ZS5oZWlnaHQgfHwgdGVtcC53aWR0aCAhPSB0Ll9pdGVtU2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdC5fY3VzdG9tU2l6ZVtuXSA9IHQuX3NpemVUeXBlID8gdGVtcC5oZWlnaHQgOiB0ZW1wLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghT2JqZWN0LmtleXModC5fY3VzdG9tU2l6ZSkubGVuZ3RoKVxyXG4gICAgICAgICAgICB0Ll9jdXN0b21TaXplID0gbnVsbDtcclxuICAgICAgICB0ZW1wLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICBpZiAodGVtcC5kZXN0cm95KVxyXG4gICAgICAgICAgICB0ZW1wLmRlc3Ryb3koKTtcclxuICAgICAgICByZXR1cm4gdC5fY3VzdG9tU2l6ZTtcclxuICAgIH1cclxufSJdfQ==