
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Framework/Constant.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64cadnkviJL44jGEeMwtjtg', 'Constant');
// scripts/Framework/Constant.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillInfo = exports.GunInfo = exports.SkinInfo = exports.Levelitem = exports.PanelName = exports.PageName = exports.ZindexLayer = exports.Starstate = exports.GameState = void 0;
var Constant = /** @class */ (function () {
    function Constant() {
    }
    /**
     * 总关卡数量
     */
    Constant.CT_TotalLevelCount = 20;
    /**
     * 每过一关奖励
     */
    Constant.CT_RewardCoinCount = 100;
    /**
     * 闯关失败奖励
     */
    Constant.CT_FailRewardCoinCount = 50;
    Constant.commonCJTimes = 1;
    Constant.weaponLevelPriceArr = [100, 300, 600];
    Constant.skinLevelPriceArr = [100, 200, 300, 400, 500, 600];
    Constant.ST_GameData = "GameData_dxcyxtgd";
    Constant.ST_BuildDate = "ST_BuildDate";
    Constant.ST_TotoalCount = "ST_TotoalCount";
    Constant.ST_CurModel1MapId = "ST_CurModel1MapId";
    Constant.ST_CurModel2MapId = "ST_CurModel2MapId";
    Constant.ST_CurLevelId = "ST_CurLevelId";
    Constant.currentLevel = 1;
    /**
     * 当前模式：是否为无尽关卡模式
    */
    Constant.isEndless = true; //false为正常模式
    /////////////////////////// 当前用到
    Constant.ST_AudioOn = "ST_AudioOn"; //音频开关
    Constant.ST_ShakeOn = "ST_ShakeOn"; //震动开关
    Constant.ST_CoinCount = "ST_CoinCount"; //金币数量
    Constant.ST_DiamondCount = "ST_DiamondCount";
    Constant.ST_PhysicalCount = "ST_PhysicalCount";
    Constant.ST_OnlineToday = "ST_OnlineToday";
    Constant.ST_ReceiveToday = "ST_ReceiveToday";
    Constant.ST_LastLoadDate = "ST_LastLoadDate";
    Constant.ST_LastDailyBonusTime = "ST_LastDailyBonusTime";
    Constant.ST_LastDailyBonusIndex = "ST_LastDailyBonusIndex";
    Constant.ST_LastPhycicalTime = "ST_LastPhycicalTime";
    Constant.ST_SkinInfo = "ST_SkinInfo";
    Constant.ST_CurSkinId = "ST_CurSkinId";
    Constant.ST_SkillInfo = "ST_SkillInfo";
    Constant.ST_CurSkillId = "ST_CurSkillId";
    Constant.ST_GunInfo = "ST_GunInfo";
    Constant.ST_CurMeleeId = "ST_CurMeleeId";
    Constant.ST_CurRangeId = "ST_CurRangeId";
    Constant.ST_LevelItem = "LevelItem";
    Constant.ST_ShareNum = "ST_ShareNum";
    /** 游戏逻辑事件 */
    Constant.E_GAME_LOGIC = "E_GAME_LOGIC";
    /** 更新进度条事件 */
    Constant.E_UPDATE_PROGRESS = "E_UPDATE_PROGRESS";
    /** 事件: Fly_Coin */
    Constant.E_Fly_Coin = "E_Fly_Coin";
    /** 事件：金币数量改变 */
    Constant.E_COIN_CHANGE = "E_COIN_CHANGE";
    /** 事件：钻石数量改变 */
    Constant.E_Diamond_CHANGE = "E_Diamond_CHANGE";
    /** 事件：钻石数量改变 */
    Constant.E_Physical_CHANGE = "E_Physical_CHANGE";
    /** 事件：经验值改变 */
    Constant.E_EXP_CHANGE = "E_EXP_CHANGE";
    /** 事件：抽奖得皮肤  */
    Constant.E_CJ_SKIN = "E_CJ_SKIN";
    /** 事件：抽奖得武器  */
    Constant.E_CJ_Weapon = "E_CJ_Weapon";
    /** 事件：显示分享或视频 */
    Constant.E_ShareOrVideo = "E_ShareOrVideo";
    /** 事件：地下城 */
    Constant.E_Player_Death = "E_Player_Death";
    Constant.E_Player_Hart = "E_Player_Hart";
    Constant.E_Bullet_Last = "E_Bullet_Last";
    Constant.E_Bullet_Reload = "E_Bullet_Reload";
    Constant.E_Zombie_Hart = "E_Zombie_Hart";
    Constant.E_Zombie_Death = "E_Zombie_Death";
    Constant.E_Jingyan_Finish = "E_Jingyan_Finish";
    Constant.E_Commonzombie_Destory = "E_Commonzombie_Destory";
    Constant.E_Allzombie_Destory = "E_Allzombie_Destory";
    /** 事件_磁铁 */
    Constant.E_Skill_Citie = "E_Skill_Citie";
    /** 指引_全屏爆炸 */
    Constant.ST_Guide_Skill = "ST_Guide_Skill";
    Constant.WEB_LINE_TITLE = "http://192.168.1.10:8080";
    Constant.PERSON_TPKKEN = "100";
    Constant.GAME_ID = "1";
    return Constant;
}());
exports.default = Constant;
var GameState;
(function (GameState) {
    GameState[GameState["None"] = -1] = "None";
    GameState[GameState["Prepare"] = 0] = "Prepare";
    GameState[GameState["Start"] = 1] = "Start";
    GameState[GameState["Success"] = 2] = "Success";
    GameState[GameState["Failed"] = 3] = "Failed";
    GameState[GameState["Pause"] = 4] = "Pause";
    GameState[GameState["Relive"] = 5] = "Relive";
})(GameState = exports.GameState || (exports.GameState = {}));
var Starstate;
(function (Starstate) {
    Starstate[Starstate["default"] = 0] = "default";
    Starstate[Starstate["bright"] = 1] = "bright";
    Starstate[Starstate["drown"] = 2] = "drown";
})(Starstate = exports.Starstate || (exports.Starstate = {}));
var ZindexLayer;
(function (ZindexLayer) {
    ZindexLayer[ZindexLayer["zindex_min"] = cc.macro.MIN_ZINDEX] = "zindex_min";
    ZindexLayer[ZindexLayer["zinedx_floorTip"] = cc.macro.MIN_ZINDEX + 1] = "zinedx_floorTip";
    ZindexLayer[ZindexLayer["zinedx_floorLiewen"] = cc.macro.MIN_ZINDEX + 2] = "zinedx_floorLiewen";
    ZindexLayer[ZindexLayer["zinedx_floorSkill"] = cc.macro.MIN_ZINDEX + 3] = "zinedx_floorSkill";
    ZindexLayer[ZindexLayer["zinedx_footPrint"] = cc.macro.MIN_ZINDEX + 4] = "zinedx_footPrint";
    ZindexLayer[ZindexLayer["zinedx_gh"] = cc.macro.MIN_ZINDEX + 5] = "zinedx_gh";
    ZindexLayer[ZindexLayer["zinedx_footYc"] = cc.macro.MIN_ZINDEX + 6] = "zinedx_footYc";
    ZindexLayer[ZindexLayer["zinedx_jingyan"] = cc.macro.MIN_ZINDEX + 7] = "zinedx_jingyan";
    ZindexLayer[ZindexLayer["zindex_shellcase"] = cc.macro.MIN_ZINDEX + 8] = "zindex_shellcase";
    ZindexLayer[ZindexLayer["default"] = 0] = "default";
    ZindexLayer[ZindexLayer["zindex_mb"] = 1] = "zindex_mb";
    ZindexLayer[ZindexLayer["zinedx_item"] = 100] = "zinedx_item";
    ZindexLayer[ZindexLayer["zinedx_dropbox"] = 200] = "zinedx_dropbox";
    ZindexLayer[ZindexLayer["zindex_zombie"] = 300] = "zindex_zombie";
    ZindexLayer[ZindexLayer["zindex_monster"] = 400] = "zindex_monster";
    ZindexLayer[ZindexLayer["zindex_enemy"] = 500] = "zindex_enemy";
    ZindexLayer[ZindexLayer["zindex_soldier"] = 600] = "zindex_soldier";
    ZindexLayer[ZindexLayer["zindex_ai"] = 700] = "zindex_ai";
    ZindexLayer[ZindexLayer["zindex_player"] = 800] = "zindex_player";
    ZindexLayer[ZindexLayer["zindex_tower"] = 900] = "zindex_tower";
    ZindexLayer[ZindexLayer["zindex_bullet"] = 1000] = "zindex_bullet";
    ZindexLayer[ZindexLayer["zindex_hp"] = 1100] = "zindex_hp";
    ZindexLayer[ZindexLayer["zindex_bomb"] = 1200] = "zindex_bomb";
    ZindexLayer[ZindexLayer["zindex_blood"] = 1300] = "zindex_blood";
    ZindexLayer[ZindexLayer["zindex_effect"] = 1400] = "zindex_effect";
    ZindexLayer[ZindexLayer["zindex_effect_fire"] = 1500] = "zindex_effect_fire";
    ZindexLayer[ZindexLayer["zindex_effect_spark"] = 1600] = "zindex_effect_spark";
    ZindexLayer[ZindexLayer["zindex_effect_hit"] = 1800] = "zindex_effect_hit";
    ZindexLayer[ZindexLayer["zindex_bullet_sky"] = 1900] = "zindex_bullet_sky";
    ZindexLayer[ZindexLayer["zindex_skill"] = cc.macro.MAX_ZINDEX - 6] = "zindex_skill";
    ZindexLayer[ZindexLayer["zindex_roleLabel"] = cc.macro.MAX_ZINDEX - 2] = "zindex_roleLabel";
    ZindexLayer[ZindexLayer["zindex_max"] = cc.macro.MAX_ZINDEX] = "zindex_max";
})(ZindexLayer = exports.ZindexLayer || (exports.ZindexLayer = {}));
///////////////////////////////////////////// 界面 /////////////////////////////////////////////
var PageName = /** @class */ (function () {
    function PageName() {
    }
    PageName.UILoadingPage = "UILoadingPage";
    PageName.UIHomePage = "UIHomePage";
    PageName.UIGamePage = "UIGamePage";
    PageName.UIOverPage = "UIOverPage";
    PageName.UIGameLoadingPage = "UIGameLoadingPage";
    return PageName;
}());
exports.PageName = PageName;
var PanelName = /** @class */ (function () {
    function PanelName() {
    }
    PanelName.UISignPanel = "UISignPanel";
    PanelName.UITurntablePanel = "UITurntablePanel";
    PanelName.UIRevivePanel = "UIRevivePanel";
    PanelName.UIUpgradePanel = "UIUpgradePanel";
    PanelName.UIPausePanel = "UIPausePanel";
    PanelName.UITrySkinPanel = "UITrySkinPanel";
    PanelName.UIWeaponLevelPanel = "UIWeaponLevelPanel";
    PanelName.UITimePanel = "UITimePanel";
    PanelName.UIRankingPanel = "UIRankingPanel";
    PanelName.UIBackPanel = "UIBackPanel";
    return PanelName;
}());
exports.PanelName = PanelName;
///////////////////////////////////////////////////
var Levelitem = /** @class */ (function () {
    function Levelitem(str) {
        var info = JSON.parse(str);
        if (info) {
            if (info.Id) {
                this.Id = parseInt(info.Id);
            }
            else {
                cc.log("Id 字段不存在!");
            }
            if (info.State) {
                this.State = parseInt(info.State);
            }
            else {
                cc.log("State 字段不存在!");
            }
            if (info.Grade) {
                this.Grade = parseInt(info.Grade);
            }
            else {
                cc.log("Grade 字段不存在!");
            }
        }
        else {
            cc.log("构建 Levelitem 的字符串不合法!");
        }
    }
    Levelitem.prototype.ToString = function () {
        return "{\"Id\":\"" + this.Id + "\",\"State\":\"" + this.State + "\",\"Grade\":\"" + this.Grade + "\"}";
    };
    return Levelitem;
}());
exports.Levelitem = Levelitem;
var SkinInfo = /** @class */ (function () {
    function SkinInfo(str) {
        var info = JSON.parse(str);
        if (info) {
            if (info.Id) {
                this.Id = parseInt(info.Id);
            }
            else {
                cc.log("Id 字段不存在!");
            }
            if (info.State) {
                this.State = parseInt(info.State);
            }
            else {
                cc.log("State 字段不存在!");
            }
            if (info.Price) {
                this.Price = parseInt(info.Price);
            }
            else {
                cc.log("Price 字段不存在!");
            }
            if (info.Level) {
                this.Level = parseInt(info.Level);
            }
            else {
                cc.log("Level 字段不存在!");
            }
            if (info.VideoCount) {
                this.VideoCount = parseInt(info.VideoCount);
            }
            else {
                cc.log("VideoCount 字段不存在!");
            }
        }
        else {
            cc.log("构建 SkinInfo 的字符串不合法!");
        }
    }
    SkinInfo.prototype.ToString = function () {
        return "{\"Id\":\"" + this.Id + "\",\"State\":" + this.State + "\",\"Price\":\"" + this.Price + "\",\"VideoCount\":\"" + this.VideoCount + "\"}";
    };
    return SkinInfo;
}());
exports.SkinInfo = SkinInfo;
var GunInfo = /** @class */ (function () {
    function GunInfo(str) {
        var info = JSON.parse(str);
        if (info) {
            if (info.Id) {
                this.Id = parseInt(info.Id);
            }
            else {
                cc.log("Id 字段不存在!");
            }
            if (info.State) {
                this.State = parseInt(info.State);
            }
            else {
                cc.log("State 字段不存在!");
            }
            if (info.Price) {
                this.Price = parseInt(info.Price);
            }
            else {
                cc.log("Price 字段不存在!");
            }
            if (info.Level) {
                this.Level = parseInt(info.Level);
            }
            else {
                cc.log("Level 字段不存在!");
            }
            if (info.VideoCount) {
                this.VideoCount = parseInt(info.VideoCount);
            }
            else {
                cc.log("VideoCount 字段不存在!");
            }
        }
        else {
            cc.log("构建 GunInfo 的字符串不合法!");
        }
    }
    GunInfo.prototype.ToString = function () {
        return "{\"Id\":\"" + this.Id + "\",\"State\":\"" + this.State + "\",\"Price\":\"" + this.Price + "\",\"Level\":\"" + this.Level + "\",\"VideoCount\":\"" + this.VideoCount + "\"}";
    };
    return GunInfo;
}());
exports.GunInfo = GunInfo;
var SkillInfo = /** @class */ (function () {
    function SkillInfo(str) {
        // cc.log("构建 SkinInfo :", str);
        var info = JSON.parse(str);
        if (info) {
            if (info.Id) {
                this.Id = parseInt(info.Id);
            }
            else {
                cc.log("Id 字段不存在!");
            }
            if (info.State) {
                this.State = parseInt(info.State);
            }
            else {
                cc.log("State 字段不存在!");
            }
            if (info.Price) {
                this.Price = parseInt(info.Price);
            }
            else {
                cc.log("Price 字段不存在!");
            }
        }
        else {
            cc.log("构建 SkillInfo 的字符串不合法!");
        }
    }
    SkillInfo.prototype.ToString = function () {
        return "{\"Id\":\"" + this.Id + "\",\"State\":\"" + this.State + "\",\"Price\":\"" + this.Price + "\"}";
    };
    return SkillInfo;
}());
exports.SkillInfo = SkillInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJhbWV3b3JrXFxDb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBZ0dBLENBQUM7SUEvRkc7O09BRUc7SUFDVywyQkFBa0IsR0FBVyxFQUFFLENBQUM7SUFDOUM7O09BRUc7SUFDVywyQkFBa0IsR0FBVyxHQUFHLENBQUM7SUFDL0M7O09BRUc7SUFDVywrQkFBc0IsR0FBVyxFQUFFLENBQUM7SUFFcEMsc0JBQWEsR0FBVyxDQUFDLENBQUM7SUFDMUIsNEJBQW1CLEdBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELDBCQUFpQixHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUU3RCxvQkFBVyxHQUFXLG1CQUFtQixDQUFDO0lBQzFDLHFCQUFZLEdBQVcsY0FBYyxDQUFDO0lBQ3RDLHVCQUFjLEdBQVcsZ0JBQWdCLENBQUM7SUFDMUMsMEJBQWlCLEdBQVcsbUJBQW1CLENBQUM7SUFDaEQsMEJBQWlCLEdBQVcsbUJBQW1CLENBQUM7SUFDaEQsc0JBQWEsR0FBVyxlQUFlLENBQUM7SUFFeEMscUJBQVksR0FBWSxDQUFDLENBQUM7SUFFeEM7O01BRUU7SUFDWSxrQkFBUyxHQUFhLElBQUksQ0FBQyxDQUFHLFlBQVk7SUFFeEQsZ0NBQWdDO0lBQ2xCLG1CQUFVLEdBQVcsWUFBWSxDQUFDLENBQUMsTUFBTTtJQUN6QyxtQkFBVSxHQUFXLFlBQVksQ0FBQyxDQUFDLE1BQU07SUFDekMscUJBQVksR0FBVyxjQUFjLENBQUMsQ0FBQyxNQUFNO0lBQzdDLHdCQUFlLEdBQVcsaUJBQWlCLENBQUM7SUFDNUMseUJBQWdCLEdBQVcsa0JBQWtCLENBQUM7SUFDOUMsdUJBQWMsR0FBVyxnQkFBZ0IsQ0FBQztJQUMxQyx3QkFBZSxHQUFXLGlCQUFp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Q0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNULElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDSCxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3ZCO1lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDSCxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzFCO1lBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDSCxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0o7YUFBTTtZQUNILEVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUNuQztJQUVMLENBQUM7SUFFTSw0QkFBUSxHQUFmO1FBQ0ksT0FBTyxlQUFVLElBQUksQ0FBQyxFQUFFLHVCQUFjLElBQUksQ0FBQyxLQUFLLHVCQUFjLElBQUksQ0FBQyxLQUFLLFFBQUksQ0FBQztJQUNqRixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBeENZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RhbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmgLvlhbPljaHmlbDph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDVF9Ub3RhbExldmVsQ291bnQ6IG51bWJlciA9IDIwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmr4/ov4fkuIDlhbPlpZblirFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDVF9SZXdhcmRDb2luQ291bnQ6IG51bWJlciA9IDEwMDtcclxuICAgIC8qKlxyXG4gICAgICog6Zev5YWz5aSx6LSl5aWW5YqxXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ1RfRmFpbFJld2FyZENvaW5Db3VudDogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjb21tb25DSlRpbWVzOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHN0YXRpYyB3ZWFwb25MZXZlbFByaWNlQXJyOiBudW1iZXJbXSA9IFsxMDAsIDMwMCwgNjAwXTtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2tpbkxldmVsUHJpY2VBcnI6IG51bWJlcltdID0gWzEwMCwgMjAwLCAzMDAsIDQwMCwgNTAwLCA2MDBdO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfR2FtZURhdGE6IHN0cmluZyA9IFwiR2FtZURhdGFfZHhjeXh0Z2RcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfQnVpbGREYXRlOiBzdHJpbmcgPSBcIlNUX0J1aWxkRGF0ZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9Ub3RvYWxDb3VudDogc3RyaW5nID0gXCJTVF9Ub3RvYWxDb3VudFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9DdXJNb2RlbDFNYXBJZDogc3RyaW5nID0gXCJTVF9DdXJNb2RlbDFNYXBJZFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9DdXJNb2RlbDJNYXBJZDogc3RyaW5nID0gXCJTVF9DdXJNb2RlbDJNYXBJZFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9DdXJMZXZlbElkOiBzdHJpbmcgPSBcIlNUX0N1ckxldmVsSWRcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGN1cnJlbnRMZXZlbCA6IG51bWJlciA9IDE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3mqKHlvI/vvJrmmK/lkKbkuLrml6DlsL3lhbPljaHmqKHlvI9cclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzRW5kbGVzcyA6IGJvb2xlYW4gPSB0cnVlOyAgIC8vZmFsc2XkuLrmraPluLjmqKHlvI9cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8g5b2T5YmN55So5YiwXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX0F1ZGlvT246IHN0cmluZyA9IFwiU1RfQXVkaW9PblwiOyAvL+mfs+mikeW8gOWFs1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9TaGFrZU9uOiBzdHJpbmcgPSBcIlNUX1NoYWtlT25cIjsgLy/pnIfliqjlvIDlhbNcclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfQ29pbkNvdW50OiBzdHJpbmcgPSBcIlNUX0NvaW5Db3VudFwiOyAvL+mHkeW4geaVsOmHj1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9EaWFtb25kQ291bnQ6IHN0cmluZyA9IFwiU1RfRGlhbW9uZENvdW50XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX1BoeXNpY2FsQ291bnQ6IHN0cmluZyA9IFwiU1RfUGh5c2ljYWxDb3VudFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9PbmxpbmVUb2RheTogc3RyaW5nID0gXCJTVF9PbmxpbmVUb2RheVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9SZWNlaXZlVG9kYXk6IHN0cmluZyA9IFwiU1RfUmVjZWl2ZVRvZGF5XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX0xhc3RMb2FkRGF0ZTogc3RyaW5nID0gXCJTVF9MYXN0TG9hZERhdGVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfTGFzdERhaWx5Qm9udXNUaW1lOiBzdHJpbmcgPSBcIlNUX0xhc3REYWlseUJvbnVzVGltZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9MYXN0RGFpbHlCb251c0luZGV4OiBzdHJpbmcgPSBcIlNUX0xhc3REYWlseUJvbnVzSW5kZXhcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfTGFzdFBoeWNpY2FsVGltZTogc3RyaW5nID0gXCJTVF9MYXN0UGh5Y2ljYWxUaW1lXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX1NraW5JbmZvOiBzdHJpbmcgPSBcIlNUX1NraW5JbmZvXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX0N1clNraW5JZDogc3RyaW5nID0gXCJTVF9DdXJTa2luSWRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfU2tpbGxJbmZvOiBzdHJpbmcgPSBcIlNUX1NraWxsSW5mb1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9DdXJTa2lsbElkOiBzdHJpbmcgPSBcIlNUX0N1clNraWxsSWRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfR3VuSW5mbzogc3RyaW5nID0gXCJTVF9HdW5JbmZvXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX0N1ck1lbGVlSWQ6IHN0cmluZyA9IFwiU1RfQ3VyTWVsZWVJZFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9DdXJSYW5nZUlkOiBzdHJpbmcgPSBcIlNUX0N1clJhbmdlSWRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfTGV2ZWxJdGVtOiBzdHJpbmcgPSBcIkxldmVsSXRlbVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9TaGFyZU51bTogc3RyaW5nID0gXCJTVF9TaGFyZU51bVwiO1xyXG5cclxuICAgIC8qKiDmuLjmiI/pgLvovpHkuovku7YgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9HQU1FX0xPR0lDOiBzdHJpbmcgPSBcIkVfR0FNRV9MT0dJQ1wiO1xyXG4gICAgLyoqIOabtOaWsOi/m+W6puadoeS6i+S7tiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX1VQREFURV9QUk9HUkVTUzogc3RyaW5nID0gXCJFX1VQREFURV9QUk9HUkVTU1wiO1xyXG4gICAgLyoqIOS6i+S7tjogRmx5X0NvaW4gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9GbHlfQ29pbjogc3RyaW5nID0gXCJFX0ZseV9Db2luXCI7XHJcbiAgICAvKiog5LqL5Lu277ya6YeR5biB5pWw6YeP5pS55Y+YICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfQ09JTl9DSEFOR0U6IHN0cmluZyA9IFwiRV9DT0lOX0NIQU5HRVwiO1xyXG4gICAgLyoqIOS6i+S7tu+8mumSu+efs+aVsOmHj+aUueWPmCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX0RpYW1vbmRfQ0hBTkdFOiBzdHJpbmcgPSBcIkVfRGlhbW9uZF9DSEFOR0VcIjtcclxuICAgIC8qKiDkuovku7bvvJrpkrvnn7PmlbDph4/mlLnlj5ggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9QaHlzaWNhbF9DSEFOR0U6IHN0cmluZyA9IFwiRV9QaHlzaWNhbF9DSEFOR0VcIjtcclxuICAgIC8qKiDkuovku7bvvJrnu4/pqozlgLzmlLnlj5ggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9FWFBfQ0hBTkdFOiBzdHJpbmcgPSBcIkVfRVhQX0NIQU5HRVwiO1xyXG4gICAgLyoqIOS6i+S7tu+8muaKveWlluW+l+earuiCpCAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9DSl9TS0lOOiBzdHJpbmcgPSBcIkVfQ0pfU0tJTlwiO1xyXG4gICAgLyoqIOS6i+S7tu+8muaKveWlluW+l+atpuWZqCAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9DSl9XZWFwb246IHN0cmluZyA9IFwiRV9DSl9XZWFwb25cIjtcclxuICAgIC8qKiDkuovku7bvvJrmmL7npLrliIbkuqvmiJbop4bpopEgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9TaGFyZU9yVmlkZW86IHN0cmluZyA9IFwiRV9TaGFyZU9yVmlkZW9cIjtcclxuXHJcbiAgICAvKiog5LqL5Lu277ya5Zyw5LiL5Z+OICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfUGxheWVyX0RlYXRoOiBzdHJpbmcgPSBcIkVfUGxheWVyX0RlYXRoXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVfUGxheWVyX0hhcnQ6IHN0cmluZyA9IFwiRV9QbGF5ZXJfSGFydFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBFX0J1bGxldF9MYXN0OiBzdHJpbmcgPSBcIkVfQnVsbGV0X0xhc3RcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRV9CdWxsZXRfUmVsb2FkOiBzdHJpbmcgPSBcIkVfQnVsbGV0X1JlbG9hZFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBFX1pvbWJpZV9IYXJ0OiBzdHJpbmcgPSBcIkVfWm9tYmllX0hhcnRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRV9ab21iaWVfRGVhdGg6IHN0cmluZyA9IFwiRV9ab21iaWVfRGVhdGhcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRV9KaW5neWFuX0ZpbmlzaDogc3RyaW5nID0gXCJFX0ppbmd5YW5fRmluaXNoXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVfQ29tbW9uem9tYmllX0Rlc3Rvcnk6IHN0cmluZyA9IFwiRV9Db21tb256b21iaWVfRGVzdG9yeVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBFX0FsbHpvbWJpZV9EZXN0b3J5OiBzdHJpbmcgPSBcIkVfQWxsem9tYmllX0Rlc3RvcnlcIjtcclxuXHJcbiAgICAvKiog5LqL5Lu2X+ejgemTgSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX1NraWxsX0NpdGllOiBzdHJpbmcgPSBcIkVfU2tpbGxfQ2l0aWVcIjtcclxuICAgIC8qKiDmjIflvJVf5YWo5bGP54iG54K4ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX0d1aWRlX1NraWxsOiBzdHJpbmcgPSBcIlNUX0d1aWRlX1NraWxsXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBXRUJfTElORV9USVRMRSA6IHN0cmluZyA9IFwiaHR0cDovLzE5Mi4xNjguMS4xMDo4MDgwXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBQRVJTT05fVFBLS0VOIDogc3RyaW5nID0gXCIxMDBcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdBTUVfSUQgOiBzdHJpbmcgPSBcIjFcIjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gR2FtZVN0YXRlIHtcclxuICAgIE5vbmUgPSAtMSxcclxuICAgIFByZXBhcmUgPSAwLFxyXG4gICAgU3RhcnQgPSAxLFxyXG4gICAgU3VjY2VzcyA9IDIsXHJcbiAgICBGYWlsZWQgPSAzLFxyXG4gICAgUGF1c2UgPSA0LFxyXG4gICAgUmVsaXZlID0gNSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3RhcnN0YXRlIHtcclxuICAgIGRlZmF1bHQgPSAwLFxyXG4gICAgYnJpZ2h0ID0gMSxcclxuICAgIGRyb3duID0gMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gWmluZGV4TGF5ZXIge1xyXG4gICAgemluZGV4X21pbiA9IGNjLm1hY3JvLk1JTl9aSU5ERVgsXHJcbiAgICB6aW5lZHhfZmxvb3JUaXAgPSBjYy5tYWNyby5NSU5fWklOREVYICsgMSwvL+WcsOmdouaPkOekulxyXG4gICAgemluZWR4X2Zsb29yTGlld2VuID0gY2MubWFjcm8uTUlOX1pJTkRFWCArIDIsLy/lnLDpnaLoo4LnurlcclxuICAgIHppbmVkeF9mbG9vclNraWxsID0gY2MubWFjcm8uTUlOX1pJTkRFWCArIDMsLy/lnLDpnaLmioDog71cclxuICAgIHppbmVkeF9mb290UHJpbnQgPSBjYy5tYWNyby5NSU5fWklOREVYICsgNCwvL+iEmuWNsFxyXG4gICAgemluZWR4X2doID0gY2MubWFjcm8uTUlOX1pJTkRFWCArIDUsLy/kurrnianlhYnnjq9cclxuICAgIHppbmVkeF9mb290WWMgPSBjYy5tYWNyby5NSU5fWklOREVYICsgNiwvL+eDn+WwmFxyXG4gICAgemluZWR4X2ppbmd5YW4gPSBjYy5tYWNyby5NSU5fWklOREVYICsgNywvL+e7j+mqjOWxglxyXG4gICAgemluZGV4X3NoZWxsY2FzZSA9IGNjLm1hY3JvLk1JTl9aSU5ERVggKyA4LC8v5by55aOzXHJcbiAgICBkZWZhdWx0ID0gMCxcclxuICAgIHppbmRleF9tYiA9IDEsLy/lopPnopFcclxuICAgIHppbmVkeF9pdGVtID0gMTAwLC8v6YGT5YW3XHJcbiAgICB6aW5lZHhfZHJvcGJveCA9IDIwMCwvL+epuuaKlVxyXG4gICAgemluZGV4X3pvbWJpZSA9IDMwMCwvL+WDteWwuFxyXG4gICAgemluZGV4X21vbnN0ZXIgPSA0MDAsLy/mgKrnialcclxuICAgIHppbmRleF9lbmVteSA9IDUwMCwvL+aVjOS6ulxyXG4gICAgemluZGV4X3NvbGRpZXIgPSA2MDAsLy/mlYzkurpcclxuICAgIHppbmRleF9haSA9IDcwMCwvL2FpXHJcbiAgICB6aW5kZXhfcGxheWVyID0gODAwLC8v546p5a62XHJcbiAgICB6aW5kZXhfdG93ZXIgPSA5MDAsLy/loZRcclxuICAgIHppbmRleF9idWxsZXQgPSAxMDAwLC8v5a2Q5by5XHJcbiAgICB6aW5kZXhfaHAgPSAxMTAwLC8v6KGA5rayXHJcbiAgICB6aW5kZXhfYm9tYiA9IDEyMDAsLy/niIbngrhcclxuICAgIHppbmRleF9ibG9vZCA9IDEzMDAsLy/ooYDmtrJcclxuICAgIHppbmRleF9lZmZlY3QgPSAxNDAwLC8v54m55pWIXHJcbiAgICB6aW5kZXhfZWZmZWN0X2ZpcmUgPSAxNTAwLC8v54m55pWIX+W8gOeBq1xyXG4gICAgemluZGV4X2VmZmVjdF9zcGFyayA9IDE2MDAsLy/nibnmlYhf5pKe5aKZXHJcbiAgICB6aW5kZXhfZWZmZWN0X2hpdCA9IDE4MDAsLy/nibnmlYhf5Ye75LitXHJcbiAgICB6aW5kZXhfYnVsbGV0X3NreSA9IDE5MDAsLy/nqbrkuK3lrZDlvLlcclxuICAgIHppbmRleF9za2lsbCA9IGNjLm1hY3JvLk1BWF9aSU5ERVggLSA2LC8v5oqA6IO9XHJcbiAgICB6aW5kZXhfcm9sZUxhYmVsID0gY2MubWFjcm8uTUFYX1pJTkRFWCAtIDIsLy/op5LoibLlj5fkvKTmj5DnpLrmloflrZdcclxuICAgIHppbmRleF9tYXggPSBjYy5tYWNyby5NQVhfWklOREVYLFxyXG59XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyDnlYzpnaIgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBQYWdlTmFtZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFVJTG9hZGluZ1BhZ2U6IHN0cmluZyA9IFwiVUlMb2FkaW5nUGFnZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBVSUhvbWVQYWdlOiBzdHJpbmcgPSBcIlVJSG9tZVBhZ2VcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgVUlHYW1lUGFnZTogc3RyaW5nID0gXCJVSUdhbWVQYWdlXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFVJT3ZlclBhZ2U6IHN0cmluZyA9IFwiVUlPdmVyUGFnZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBVSUdhbWVMb2FkaW5nUGFnZTogc3RyaW5nID0gXCJVSUdhbWVMb2FkaW5nUGFnZVwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFuZWxOYW1lIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgVUlTaWduUGFuZWw6IHN0cmluZyA9IFwiVUlTaWduUGFuZWxcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgVUlUdXJudGFibGVQYW5lbDogc3RyaW5nID0gXCJVSVR1cm50YWJsZVBhbmVsXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFVJUmV2aXZlUGFuZWw6IHN0cmluZyA9IFwiVUlSZXZpdmVQYW5lbFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBVSVVwZ3JhZGVQYW5lbDogc3RyaW5nID0gXCJVSVVwZ3JhZGVQYW5lbFwiXHJcbiAgICBwdWJsaWMgc3RhdGljIFVJUGF1c2VQYW5lbDogc3RyaW5nID0gXCJVSVBhdXNlUGFuZWxcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgVUlUcnlTa2luUGFuZWw6IHN0cmluZyA9IFwiVUlUcnlTa2luUGFuZWxcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgVUlXZWFwb25MZXZlbFBhbmVsOiBzdHJpbmcgPSBcIlVJV2VhcG9uTGV2ZWxQYW5lbFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBVSVRpbWVQYW5lbDogc3RyaW5nID0gXCJVSVRpbWVQYW5lbFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBVSVJhbmtpbmdQYW5lbDogc3RyaW5nID0gXCJVSVJhbmtpbmdQYW5lbFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBVSUJhY2tQYW5lbDogc3RyaW5nID0gXCJVSUJhY2tQYW5lbFwiO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIExldmVsaXRlbSB7XHJcbiAgICBwdWJsaWMgSWQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogMOS7o+ihqOS4iumUgSAgXHJcbiAgICAgKiAx5Luj6KGo5pyq5a6M5oiQICBcclxuICAgICAqIDLku6PooajlrozmiJBcclxuICAgICAqL1xyXG4gICAgcHVibGljIFN0YXRlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIEdyYWRlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgaW5mbzogYW55ID0gSlNPTi5wYXJzZShzdHIpO1xyXG4gICAgICAgIGlmIChpbmZvKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmZvLklkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLklkID0gcGFyc2VJbnQoaW5mby5JZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJJZCDlrZfmrrXkuI3lrZjlnKghXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5mby5TdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0ZSA9IHBhcnNlSW50KGluZm8uU3RhdGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiU3RhdGUg5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5mby5HcmFkZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HcmFkZSA9IHBhcnNlSW50KGluZm8uR3JhZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiR3JhZGUg5a2X5q615LiN5a2Y5ZyoIVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi5p6E5bu6IExldmVsaXRlbSDnmoTlrZfnrKbkuLLkuI3lkIjms5UhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBUb1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHtcIklkXCI6XCIke3RoaXMuSWR9XCIsXCJTdGF0ZVwiOlwiJHt0aGlzLlN0YXRlfVwiLFwiR3JhZGVcIjpcIiR7dGhpcy5HcmFkZX1cIn1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTa2luSW5mbyB7XHJcbiAgICBwdWJsaWMgSWQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogMDrmnKrop6PplIFcclxuICAgICAqIDE65bey6Kej6ZSBXHJcbiAgICAgKiAyOuW9k+WJjeS9v+eUqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU3RhdGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBQcmljZTogbnVtYmVyO1xyXG4gICAgcHVibGljIExldmVsOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgVmlkZW9Db3VudDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGluZm86IGFueSA9IEpTT04ucGFyc2Uoc3RyKTtcclxuICAgICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgICAgICBpZiAoaW5mby5JZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5JZCA9IHBhcnNlSW50KGluZm8uSWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiSWQg5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5mby5TdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0ZSA9IHBhcnNlSW50KGluZm8uU3RhdGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiU3RhdGUg5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5mby5QcmljZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QcmljZSA9IHBhcnNlSW50KGluZm8uUHJpY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiUHJpY2Ug5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5mby5MZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5MZXZlbCA9IHBhcnNlSW50KGluZm8uTGV2ZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiTGV2ZWwg5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5mby5WaWRlb0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlZpZGVvQ291bnQgPSBwYXJzZUludChpbmZvLlZpZGVvQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW9Db3VudCDlrZfmrrXkuI3lrZjlnKghXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi5p6E5bu6IFNraW5JbmZvIOeahOWtl+espuS4suS4jeWQiOazlSFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUb1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHtcIklkXCI6XCIke3RoaXMuSWR9XCIsXCJTdGF0ZVwiOiR7dGhpcy5TdGF0ZX1cIixcIlByaWNlXCI6XCIke3RoaXMuUHJpY2V9XCIsXCJWaWRlb0NvdW50XCI6XCIke3RoaXMuVmlkZW9Db3VudH1cIn1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3VuSW5mbyB7XHJcbiAgICBwdWJsaWMgSWQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogMDrmnKrop6PplIFcclxuICAgICAqIDE65bey6Kej6ZSBXHJcbiAgICAgKiAyOuW9k+WJjeS9v+eUqFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU3RhdGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBQcmljZTogbnVtYmVyO1xyXG4gICAgcHVibGljIExldmVsOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgVmlkZW9Db3VudDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGluZm86IGFueSA9IEpTT04ucGFyc2Uoc3RyKTtcclxuICAgICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgICAgICBpZiAoaW5mby5JZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5JZCA9IHBhcnNlSW50KGluZm8uSWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiSWQg5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5mby5TdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TdGF0ZSA9IHBhcnNlSW50KGluZm8uU3RhdGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiU3RhdGUg5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5mby5QcmljZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QcmljZSA9IHBhcnNlSW50KGluZm8uUHJpY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiUHJpY2Ug5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5mby5MZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5MZXZlbCA9IHBhcnNlSW50KGluZm8uTGV2ZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiTGV2ZWwg5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5mby5WaWRlb0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlZpZGVvQ291bnQgPSBwYXJzZUludChpbmZvLlZpZGVvQ291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVmlkZW9Db3VudCDlrZfmrrXkuI3lrZjlnKghXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi5p6E5bu6IEd1bkluZm8g55qE5a2X56ym5Liy5LiN5ZCI5rOVIVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUb1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHtcIklkXCI6XCIke3RoaXMuSWR9XCIsXCJTdGF0ZVwiOlwiJHt0aGlzLlN0YXRlfVwiLFwiUHJpY2VcIjpcIiR7dGhpcy5QcmljZX1cIixcIkxldmVsXCI6XCIke3RoaXMuTGV2ZWx9XCIsXCJWaWRlb0NvdW50XCI6XCIke3RoaXMuVmlkZW9Db3VudH1cIn1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2tpbGxJbmZvIHtcclxuICAgIHB1YmxpYyBJZDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiAwOuacquino+mUgVxyXG4gICAgICogMTrlt7Lop6PplIFcclxuICAgICAqIDI65b2T5YmN5L2/55SoXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTdGF0ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIFByaWNlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBjYy5sb2coXCLmnoTlu7ogU2tpbkluZm8gOlwiLCBzdHIpO1xyXG4gICAgICAgIGxldCBpbmZvOiBhbnkgPSBKU09OLnBhcnNlKHN0cik7XHJcbiAgICAgICAgaWYgKGluZm8pIHtcclxuICAgICAgICAgICAgaWYgKGluZm8uSWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuSWQgPSBwYXJzZUludChpbmZvLklkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIklkIOWtl+auteS4jeWtmOWcqCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbmZvLlN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXRlID0gcGFyc2VJbnQoaW5mby5TdGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJTdGF0ZSDlrZfmrrXkuI3lrZjlnKghXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5mby5QcmljZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QcmljZSA9IHBhcnNlSW50KGluZm8uUHJpY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiUHJpY2Ug5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuaehOW7uiBTa2lsbEluZm8g55qE5a2X56ym5Liy5LiN5ZCI5rOVIVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUb1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHtcIklkXCI6XCIke3RoaXMuSWR9XCIsXCJTdGF0ZVwiOlwiJHt0aGlzLlN0YXRlfVwiLFwiUHJpY2VcIjpcIiR7dGhpcy5QcmljZX1cIn1gO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=