
(function () {
var scripts = [{"deps":{"./i18n-plugin/LocalizedLabel":3,"./i18n-plugin/LocalizedSprite":1,"./i18n-plugin/SpriteFrameSet":5,"./i18n-plugin/polyglot.min":2,"./i18n-plugin/LanguageData":4,"./assets/common-plugin/Scripts/AdAgentDouyin":6,"./assets/common-plugin/Scripts/AdAgentCocosplay":30,"./assets/common-plugin/Scripts/AdAgentBili":18,"./assets/common-plugin/Scripts/AdAgentFaceBook":31,"./assets/common-plugin/Scripts/AdAgent":140,"./assets/common-plugin/Scripts/AdAgentGoogleWeb":86,"./assets/common-plugin/Scripts/AdAgentHago":84,"./assets/common-plugin/Scripts/AdAgentIOS":85,"./assets/common-plugin/Scripts/AdAgentHuaWei":182,"./assets/common-plugin/Scripts/AdAgentKwai":33,"./assets/common-plugin/Scripts/AdAgentNative":32,"./assets/common-plugin/Scripts/AdAgentQQ":35,"./assets/common-plugin/Scripts/AdAgentOPPO":184,"./assets/common-plugin/Scripts/AdAgentQTT":34,"./assets/common-plugin/Scripts/AdAgentUC":93,"./assets/common-plugin/Scripts/AdAgentVIVO":179,"./assets/common-plugin/Scripts/AdAgentWechat":87,"./assets/common-plugin/Scripts/AdAgentWiFi":36,"./assets/common-plugin/Scripts/AdAgentXiaomi":80,"./assets/common-plugin/Scripts/AdManager":89,"./assets/common-plugin/Scripts/AdSDK":37,"./assets/common-plugin/Scripts/BeforGameOverRecGamesPanel":102,"./assets/common-plugin/Scripts/AldUtils":92,"./assets/common-plugin/Scripts/CheckIsShowIcon":88,"./assets/common-plugin/Scripts/CommonConfig":183,"./assets/common-plugin/Scripts/CompatibleTool":90,"./assets/common-plugin/Scripts/GameBox":91,"./assets/common-plugin/Scripts/GameBoxListGameItem":94,"./assets/common-plugin/Scripts/GameBoxListItem":95,"./assets/common-plugin/Scripts/GameBoxSlideItem":96,"./assets/common-plugin/Scripts/GameItem":97,"./assets/common-plugin/Scripts/GamePage":100,"./assets/common-plugin/Scripts/GameSDK":98,"./assets/common-plugin/Scripts/HandAction":99,"./assets/common-plugin/Scripts/List":181,"./assets/common-plugin/Scripts/ListItem":38,"./assets/common-plugin/Scripts/LogOutView":101,"./assets/common-plugin/Scripts/LuckBoxPannel":10,"./assets/common-plugin/Scripts/MoreGamesPanel":103,"./assets/common-plugin/Scripts/MoreGamesPanel1":105,"./assets/common-plugin/Scripts/MoreGamesWidget":108,"./assets/common-plugin/Scripts/NativeTryGameNode":106,"./assets/common-plugin/Scripts/NativeTryGamesWidget":104,"./assets/common-plugin/Scripts/OpenRedBagPanel":40,"./assets/common-plugin/Scripts/PlatUtils":39,"./assets/common-plugin/Scripts/QCrossWidget6":107,"./assets/common-plugin/Scripts/QCrossWidgetItem":109,"./assets/common-plugin/Scripts/RecommendGamesNode":110,"./assets/common-plugin/Scripts/RecommendGamesWidget":112,"./assets/common-plugin/Scripts/RedBagProgressNode":113,"./assets/common-plugin/Scripts/RedBagProgressWidget":111,"./assets/common-plugin/Scripts/RewardBoxPanel":41,"./assets/common-plugin/Scripts/RewardInsert":114,"./assets/common-plugin/Scripts/RewardShortCutPanel":42,"./assets/common-plugin/Scripts/ShareRecordPanel":43,"./assets/common-plugin/Scripts/RewardRedBagPanel":115,"./assets/common-plugin/Scripts/TryGameNode":116,"./assets/common-plugin/Scripts/TryGamesWidget":118,"./assets/common-plugin/Scripts/Utils":185,"./assets/common-plugin/Scripts/VerticalRecommentPanel":117,"./assets/common-plugin/Scripts/WechatTool":44,"./assets/common-plugin/Scripts/WithdrawalNode":119,"./assets/common-plugin/Scripts/WithdrawalWidget":124,"./assets/common-plugin/Scripts/WithdrawalPanel":120,"./assets/common-plugin/Scripts/YZ_ActionScale":121,"./assets/common-plugin/Scripts/YZ_Constant":45,"./assets/common-plugin/Scripts/YZ_BaiduRecommendWidget":123,"./assets/common-plugin/Scripts/YZ_EventManager":122,"./assets/common-plugin/Scripts/YZ_GameExitDialog":127,"./assets/common-plugin/Scripts/YZ_ListView":46,"./assets/common-plugin/Scripts/YZ_LocalStorage":125,"./assets/common-plugin/Scripts/YZ_NativeAdObject":126,"./assets/common-plugin/Scripts/YZ_NativeBanner":48,"./assets/common-plugin/Scripts/YZ_NativeItem":47,"./assets/common-plugin/Scripts/YZ_NativeInsert":11,"./assets/common-plugin/Scripts/YZ_NativeSplashView":49,"./assets/common-plugin/Scripts/YZ_RecommendGamesBanner":128,"./assets/common-plugin/Scripts/YZ_RecordWidget":130,"./assets/common-plugin/Scripts/YZ_ShakeNode":131,"./assets/common-plugin/Scripts/YZ_ShortcutWidget":129,"./assets/common-plugin/Scripts/YZ_StatementRecommentAd":134,"./assets/common-plugin/Scripts/YZ_Tool_4399":132,"./assets/common-plugin/Scripts/YZ_Tool_Baidu":19,"./assets/common-plugin/Scripts/YZ_Tool_Bili":133,"./assets/common-plugin/Scripts/YZ_Tool_Broswer":51,"./assets/common-plugin/Scripts/YZ_Tool_Cocosplay":50,"./assets/common-plugin/Scripts/YZ_Tool_Douyin":54,"./assets/common-plugin/Scripts/YZ_Tool_FaceBook":52,"./assets/common-plugin/Scripts/YZ_Tool_GoogleWeb":135,"./assets/common-plugin/Scripts/YZ_Tool_Hago":53,"./assets/common-plugin/Scripts/YZ_Tool_HuaWei":55,"./assets/common-plugin/Scripts/YZ_Tool_IOS":12,"./assets/common-plugin/Scripts/YZ_Tool_Kwai":22,"./assets/common-plugin/Scripts/YZ_Tool_Native":20,"./assets/common-plugin/Scripts/YZ_Tool_Oppo":175,"./assets/common-plugin/Scripts/YZ_Tool_QQ":21,"./assets/common-plugin/Scripts/YZ_Tool_QTT":23,"./assets/common-plugin/Scripts/YZ_Tool_UC":56,"./assets/common-plugin/Scripts/YZ_Tool_Vivo":24,"./assets/common-plugin/Scripts/YZ_Tool_Wifi":58,"./assets/common-plugin/Scripts/YZ_Tool_Xiaomi":14,"./assets/common-plugin/Scripts/YZ_Turntable":13,"./assets/common-plugin/Scripts/YzCustomAdPanel":137,"./assets/common-plugin/Scripts/YzLoginPanel":136,"./assets/common-plugin/Scripts/YzRealNameAuthPanel":57,"./assets/common-plugin/Scripts/YzUserPrivacyPanel":59,"./assets/common-plugin/Scripts/md5":60,"./assets/common-plugin/Scripts/AdAgent4399":139,"./assets/common-plugin/Scripts/FaceBookSdk/FBAdManager":25,"./assets/common-plugin/Scripts/FaceBookSdk/FBSdk":138,"./assets/common-plugin/Scripts/Encrypt/CryptoJS":7,"./assets/common-plugin/Scripts/YouWanSDK/YouWanAnalytics":26,"./assets/common-plugin/Scripts/YouWanSDK/EventAdInfo":141,"./assets/common-plugin/Scripts/AdAgentBaidu":78,"./assets/common-plugin/Scripts/UMengSDK/quickGame/uma.min":177,"./assets/res/effects/BgScroll":63,"./assets/resources/i18n/en":144,"./assets/resources/i18n/zh":62,"./assets/scripts/Framework/Constant":15,"./assets/scripts/Framework/DataMgr":81,"./assets/scripts/Framework/FlyCoin":142,"./assets/scripts/Framework/GameCtr":146,"./assets/scripts/Framework/GameLevel":143,"./assets/scripts/Framework/GameMgr":61,"./assets/scripts/Framework/GameStartScene":147,"./assets/scripts/Framework/Msg":148,"./assets/scripts/Framework/QEasing":145,"./assets/scripts/Framework/QMoveAction":152,"./assets/scripts/Framework/QRotation":149,"./assets/scripts/Framework/QScaleAction":153,"./assets/scripts/Framework/QTween":150,"./assets/scripts/Framework/ResMgr":64,"./assets/scripts/Framework/SceneMgr":157,"./assets/scripts/Framework/ShowDate":155,"./assets/scripts/Framework/StartScene":154,"./assets/scripts/Framework/TweenEffect":65,"./assets/scripts/Framework/UIMgr":159,"./assets/scripts/Framework/UIPage":156,"./assets/scripts/Framework/frameNode":160,"./assets/scripts/Framework/AudioMgr":158,"./assets/scripts/Game/ZombieBase":151,"./assets/scripts/Game/ani":66,"./assets/scripts/Game/bullet":69,"./assets/scripts/Game/gameDate":68,"./assets/scripts/Game/gameMgr":82,"./assets/scripts/Game/jingyan":161,"./assets/scripts/Game/mb":167,"./assets/scripts/Game/person":67,"./assets/scripts/Game/player":8,"./assets/scripts/Game/prop":162,"./assets/scripts/Game/setMap":165,"./assets/scripts/Game/showEffect":166,"./assets/scripts/Game/testPoint":164,"./assets/scripts/Game/weapon":70,"./assets/scripts/Game/UpgradeMgr":180,"./assets/scripts/UI/GuideLayer":163,"./assets/scripts/UI/PhysicalBord":168,"./assets/scripts/UI/UIADPanel":172,"./assets/scripts/UI/ShareOrVideo":169,"./assets/scripts/UI/UIBackPanel":71,"./assets/scripts/UI/UIGameLoadingPage":170,"./assets/scripts/UI/UIGamePage":27,"./assets/scripts/UI/UIHomePage":176,"./assets/scripts/UI/UILoadingPage":171,"./assets/scripts/UI/UIOverPage":9,"./assets/scripts/UI/UIPausePanel":72,"./assets/scripts/UI/UIRankingPanel":16,"./assets/scripts/UI/UIRevivePanel":76,"./assets/scripts/UI/UISignPage":73,"./assets/scripts/UI/UITimePage":74,"./assets/scripts/UI/UITrySkinPanel":75,"./assets/scripts/UI/UITurntablePage":17,"./assets/scripts/UI/UIUpgradePanel":28,"./assets/scripts/UI/UIWeaponLevelPanel":77,"./assets/scripts/UI/redPoint":173,"./assets/scripts/UI/CoinBord":174,"./assets/scripts/commonUi/listItem":83,"./assets/scripts/commonUi/list":178,"./assets/scripts/Framework/CocosZ":29,"./assets/common-plugin/Scripts/AdAgentBroser":79},"path":"preview-scripts/__qc_index__.js"},{"deps":{"SpriteFrameSet":5},"path":"preview-scripts/i18n-plugin/LocalizedSprite.js"},{"deps":{},"path":"preview-scripts/i18n-plugin/polyglot.min.js"},{"deps":{"LanguageData":4},"path":"preview-scripts/i18n-plugin/LocalizedLabel.js"},{"deps":{"polyglot.min":2},"path":"preview-scripts/i18n-plugin/LanguageData.js"},{"deps":{},"path":"preview-scripts/i18n-plugin/SpriteFrameSet.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentDouyin.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/Encrypt/CryptoJS.js"},{"deps":{"LanguageData":4,"../Framework/CocosZ":29,"./bullet":69,"../Framework/Constant":15,"./gameDate":68,"./person":67,"./gameMgr":82,"./UpgradeMgr":180,"./weapon":70},"path":"preview-scripts/assets/scripts/Game/player.js"},{"deps":{"LanguageData":4,"../Framework/UIPage":156,"../Framework/Constant":15,"../Framework/CocosZ":29,"../../common-plugin/Scripts/PlatUtils":39,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/YZ_Constant":45,"../Game/gameMgr":82,"../Game/UpgradeMgr":180},"path":"preview-scripts/assets/scripts/UI/UIOverPage.js"},{"deps":{"./Utils":185,"./AldUtils":92,"./PlatUtils":39,"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/LuckBoxPannel.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./CompatibleTool":90,"./YZ_Constant":45,"./YouWanSDK/EventAdInfo":141,"./YouWanSDK/YouWanAnalytics":26},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeInsert.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_LocalStorage":125,"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_IOS.js"},{"deps":{"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Turntable.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Xiaomi.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/Constant.js"},{"deps":{"LanguageData":4,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":29,"../Framework/Constant":15,"../Framework/TweenEffect":65,"../Framework/UIPage":156},"path":"preview-scripts/assets/scripts/UI/UIRankingPanel.js"},{"deps":{"LanguageData":4,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":29,"../Framework/Constant":15,"../Framework/UIPage":156,"../Framework/Msg":148,"../Game/gameDate":68,"../Game/weapon":70},"path":"preview-scripts/assets/scripts/UI/UITurntablePage.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBili.js"},{"deps":{"./PlatUtils":39,"./YZ_Constant":45,"./Utils":185,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Baidu.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Native.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_QQ.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Kwai.js"},{"deps":{"./md5.js":60,"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_QTT.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":177,"./Utils":185,"./PlatUtils":39,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Vivo.js"},{"deps":{"../Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/FaceBookSdk/FBAdManager.js"},{"deps":{"../PlatUtils":39,"../Utils":185,"../YZ_Constant":45,"../YZ_LocalStorage":125,"./EventAdInfo":141},"path":"preview-scripts/assets/common-plugin/Scripts/YouWanSDK/YouWanAnalytics.js"},{"deps":{"LanguageData":4,"../Framework/UIPage":156,"../Framework/Constant":15,"../../common-plugin/Scripts/PlatUtils":39,"../Framework/CocosZ":29,"../../common-plugin/Scripts/YZ_Constant":45,"../Game/gameMgr":82,"../../common-plugin/Scripts/Utils":185},"path":"preview-scripts/assets/scripts/UI/UIGamePage.js"},{"deps":{"../Framework/UIPage":156,"../Framework/CocosZ":29,"../Framework/Constant":15,"../../common-plugin/Scripts/Utils":185,"../Framework/TweenEffect":65,"../Game/UpgradeMgr":180,"../../common-plugin/Scripts/PlatUtils":39,"../Game/gameMgr":82},"path":"preview-scripts/assets/scripts/UI/UIUpgradePanel.js"},{"deps":{"LanguageData":4,"./GameMgr":61,"./UIMgr":159,"./DataMgr":81,"./Constant":15,"./ResMgr":64,"./SceneMgr":157,"./AudioMgr":158,"./Msg":148,"../../common-plugin/Scripts/PlatUtils":39,"../../common-plugin/Scripts/Utils":185},"path":"preview-scripts/assets/scripts/Framework/CocosZ.js"},{"deps":{"./AdAgent":140,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentCocosplay.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./PlatUtils":39,"./Utils":185,"./FaceBookSdk/FBAdManager":25},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentFaceBook.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentNative.js"},{"deps":{"./YZ_Constant":45,"./PlatUtils":39,"./AdAgent":140,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentKwai.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentQTT.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentQQ.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./Utils":185,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentWiFi.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/AdSDK.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/ListItem.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/PlatUtils.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/OpenRedBagPanel.js"},{"deps":{"./YZ_Constant":45,"./Utils":185,"./PlatUtils":39,"./AldUtils":92,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/RewardBoxPanel.js"},{"deps":{"./Utils":185,"./YZ_Constant":45,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/RewardShortCutPanel.js"},{"deps":{"./Utils":185,"./YZ_Constant":45,"./PlatUtils":39,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/ShareRecordPanel.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/WechatTool.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Constant.js"},{"deps":{"./YZ_Constant":45,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ListView.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeItem.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./CompatibleTool":90,"./YouWanSDK/EventAdInfo":141,"./YouWanSDK/YouWanAnalytics":26},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeBanner.js"},{"deps":{"./CompatibleTool":90,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeSplashView.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Cocosplay.js"},{"deps":{"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Broswer.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_FaceBook.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Hago.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Douyin.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":177,"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_HuaWei.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_UC.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YzRealNameAuthPanel.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":45,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Wifi.js"},{"deps":{"./CompatibleTool":90,"./PlatUtils":39,"./YZ_Constant":45,"./Utils":185,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YzUserPrivacyPanel.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/md5.js"},{"deps":{"LanguageData":4,"./GameCtr":146,"./CocosZ":29,"./Constant":15,"../../common-plugin/Scripts/Utils":185,"./Msg":148,"../../common-plugin/Scripts/YZ_Constant":45,"../../common-plugin/Scripts/YZ_LocalStorage":125,"../Game/UpgradeMgr":180},"path":"preview-scripts/assets/scripts/Framework/GameMgr.js"},{"deps":{},"path":"preview-scripts/assets/resources/i18n/zh.js"},{"deps":{},"path":"preview-scripts/assets/res/effects/BgScroll.js"},{"deps":{"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/ResMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/TweenEffect.js"},{"deps":{"../Framework/CocosZ":29,"./gameDate":68,"./weapon":70},"path":"preview-scripts/assets/scripts/Game/ani.js"},{"deps":{"LanguageData":4,"./gameDate":68,"./gameMgr":82,"./weapon":70,"../Framework/Constant":15,"../Framework/CocosZ":29,"../../common-plugin/Scripts/PlatUtils":39},"path":"preview-scripts/assets/scripts/Game/person.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/gameDate.js"},{"deps":{"../Framework/CocosZ":29,"../Framework/Constant":15,"./gameMgr":82,"./person":67},"path":"preview-scripts/assets/scripts/Game/bullet.js"},{"deps":{"LanguageData":4,"../Framework/Msg":148,"../Framework/CocosZ":29,"../Framework/Constant":15,"./gameDate":68,"./gameMgr":82},"path":"preview-scripts/assets/scripts/Game/weapon.js"},{"deps":{"LanguageData":4,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":29,"../Framework/TweenEffect":65,"../Framework/Constant":15,"../Framework/UIPage":156},"path":"preview-scripts/assets/scripts/UI/UIBackPanel.js"},{"deps":{"../../common-plugin/Scripts/PlatUtils":39,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/YZ_Constant":45,"../Framework/CocosZ":29,"../Framework/Constant":15,"../Framework/UIPage":156,"../Game/gameMgr":82,"../Game/UpgradeMgr":180},"path":"preview-scripts/assets/scripts/UI/UIPausePanel.js"},{"deps":{"LanguageData":4,"../Framework/UIPage":156,"../Framework/Constant":15,"../Framework/CocosZ":29,"../../common-plugin/Scripts/Utils":185,"../Framework/Msg":148,"../Framework/TweenEffect":65},"path":"preview-scripts/assets/scripts/UI/UISignPage.js"},{"deps":{"../Framework/UIPage":156,"../Framework/Constant":15,"../../common-plugin/Scripts/Utils":185,"../Framework/TweenEffect":65,"../Game/gameDate":68,"../Framework/CocosZ":29},"path":"preview-scripts/assets/scripts/UI/UITimePage.js"},{"deps":{"../Framework/Constant":15,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":29,"../Framework/UIPage":156,"../Game/ani":66},"path":"preview-scripts/assets/scripts/UI/UITrySkinPanel.js"},{"deps":{"LanguageData":4,"../Framework/UIPage":156,"../Framework/Msg":148,"../Framework/CocosZ":29,"../../common-plugin/Scripts/Utils":185,"../Framework/Constant":15,"../Game/gameMgr":82},"path":"preview-scripts/assets/scripts/UI/UIRevivePanel.js"},{"deps":{"LanguageData":4,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":29,"../Framework/Msg":148,"../Framework/Constant":15,"../Framework/UIPage":156,"../Game/gameDate":68,"../Game/weapon":70},"path":"preview-scripts/assets/scripts/UI/UIWeaponLevelPanel.js"},{"deps":{"./Utils":185,"./AdAgent":140,"./PlatUtils":39,"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBaidu.js"},{"deps":{"./AdAgent":140,"./YZ_NativeBanner":48,"./YZ_NativeInsert":11,"./CommonConfig":183,"./YZ_Constant":45,"./Utils":185,"./YZ_NativeAdObject":126},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBroser.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./PlatUtils":39,"./CompatibleTool":90,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentXiaomi.js"},{"deps":{"./Constant":15,"./CocosZ":29,"../Game/weapon":70},"path":"preview-scripts/assets/scripts/Framework/DataMgr.js"},{"deps":{"./UpgradeMgr":180,"./ZombieBase":151,"../Framework/CocosZ":29,"../Framework/Constant":15,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/YZ_Constant":45},"path":"preview-scripts/assets/scripts/Game/gameMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/commonUi/listItem.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentHago.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentIOS.js"},{"deps":{"./AdAgent":140},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentGoogleWeb.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./PlatUtils":39,"./Utils":185,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentWechat.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/CheckIsShowIcon.js"},{"deps":{"./PlatUtils":39,"./AdAgentWechat":87,"./AdAgentNative":32,"./AdAgentVIVO":179,"./AdAgentBaidu":78,"./AdAgentOPPO":184,"./YZ_Constant":45,"./AdAgentQQ":35,"./Utils":185,"./AdAgentDouyin":6,"./AdAgentQTT":34,"./AdAgentXiaomi":80,"./AdAgent4399":139,"./AdAgentIOS":85,"./AdAgentUC":93,"./AdAgentCocosplay":30,"./AdAgentBili":18,"./AdAgentKwai":33,"./AdAgentBroser":79,"./BeforGameOverRecGamesPanel":102,"./AdAgentWiFi":36,"./AdAgentHago":84,"./AdAgentHuaWei":182,"./AdAgentFaceBook":31,"./YzCustomAdPanel":137,"./AdAgentGoogleWeb":86},"path":"preview-scripts/assets/common-plugin/Scripts/AdManager.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/CompatibleTool.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/GameBox.js"},{"deps":{"./YZ_Constant":45,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AldUtils.js"},{"deps":{"./AdAgent":140,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentUC.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxListGameItem.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxListItem.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxSlideItem.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./YZ_Constant":45,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/GameItem.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/GameSDK.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/HandAction.js"},{"deps":{"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/GamePage.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/LogOutView.js"},{"deps":{"./Utils":185,"./YZ_Constant":45,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/BeforGameOverRecGamesPanel.js"},{"deps":{"./Utils":185,"./YZ_Constant":45,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesPanel.js"},{"deps":{"./Utils":185,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/NativeTryGamesWidget.js"},{"deps":{"./YZ_Constant":45,"./Utils":185,"./GameItem":97,"./List":181},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesPanel1.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./NativeTryGamesWidget":104,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/NativeTryGameNode.js"},{"deps":{"./AldUtils":92,"./Utils":185,"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/QCrossWidget6.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./AldUtils":92,"./CompatibleTool":90,"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesWidget.js"},{"deps":{"./Utils":185,"./YZ_Constant":45,"./PlatUtils":39,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/QCrossWidgetItem.js"},{"deps":{"./YZ_Constant":45,"./Utils":185,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/RecommendGamesNode.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/RedBagProgressWidget.js"},{"deps":{"./Utils":185,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/RecommendGamesWidget.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/RedBagProgressNode.js"},{"deps":{"./Utils":185,"./AldUtils":92,"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/RewardInsert.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/RewardRedBagPanel.js"},{"deps":{"./Utils":185,"./YZ_Constant":45,"./PlatUtils":39,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/TryGameNode.js"},{"deps":{"./Utils":185,"./YZ_Constant":45,"./CompatibleTool":90,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/VerticalRecommentPanel.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/TryGamesWidget.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalNode.js"},{"deps":{"./Utils":185,"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalPanel.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ActionScale.js"},{"deps":{"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_EventManager.js"},{"deps":{"./Utils":185,"./CompatibleTool":90,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_BaiduRecommendWidget.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalWidget.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_LocalStorage.js"},{"deps":{"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeAdObject.js"},{"deps":{"./Utils":185,"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_GameExitDialog.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_RecommendGamesBanner.js"},{"deps":{"./Utils":185,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ShortcutWidget.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_RecordWidget.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ShakeNode.js"},{"deps":{"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_4399.js"},{"deps":{"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Bili.js"},{"deps":{"./Utils":185,"./AldUtils":92,"./YZ_Constant":45,"./List":181},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_StatementRecommentAd.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_GoogleWeb.js"},{"deps":{"./Utils":185,"./YZ_Constant":45},"path":"preview-scripts/assets/common-plugin/Scripts/YzLoginPanel.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YzCustomAdPanel.js"},{"deps":{"./FBAdManager":25},"path":"preview-scripts/assets/common-plugin/Scripts/FaceBookSdk/FBSdk.js"},{"deps":{"./AdAgent":140,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgent4399.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgent.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YouWanSDK/EventAdInfo.js"},{"deps":{"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/FlyCoin.js"},{"deps":{"./CocosZ":29,"./Constant":15},"path":"preview-scripts/assets/scripts/Framework/GameLevel.js"},{"deps":{},"path":"preview-scripts/assets/resources/i18n/en.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/QEasing.js"},{"deps":{"./Constant":15,"./CocosZ":29,"../Game/gameMgr":82},"path":"preview-scripts/assets/scripts/Framework/GameCtr.js"},{"deps":{"./CocosZ":29,"./Constant":15},"path":"preview-scripts/assets/scripts/Framework/GameStartScene.js"},{"deps":{"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/Msg.js"},{"deps":{"./QEasing":145},"path":"preview-scripts/assets/scripts/Framework/QRotation.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/QTween.js"},{"deps":{"../Game/gameDate":68,"../Game/gameMgr":82,"../Game/person":67,"../Game/UpgradeMgr":180,"./bullet":69,"../Framework/CocosZ":29,"../Framework/Constant":15,"../../common-plugin/Scripts/PlatUtils":39},"path":"preview-scripts/assets/scripts/Game/ZombieBase.js"},{"deps":{"./QEasing":145},"path":"preview-scripts/assets/scripts/Framework/QMoveAction.js"},{"deps":{"./QEasing":145},"path":"preview-scripts/assets/scripts/Framework/QScaleAction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/StartScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/ShowDate.js"},{"deps":{"../../common-plugin/Scripts/Utils":185,"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/UIPage.js"},{"deps":{"../Game/gameMgr":82,"../Game/setMap":165,"../UI/GuideLayer":163,"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/SceneMgr.js"},{"deps":{"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/AudioMgr.js"},{"deps":{"./Constant":15,"../UI/UIHomePage":176,"../UI/UILoadingPage":171,"../UI/UIRevivePanel":76,"../UI/UIGamePage":27,"../UI/UIGameLoadingPage":170,"../UI/UIPausePanel":72,"../UI/UITurntablePage":17,"../UI/UITrySkinPanel":75,"../UI/UIWeaponLevelPanel":77,"../UI/UIUpgradePanel":28,"../UI/UIOverPage":9,"../UI/UISignPage":73,"../UI/UITimePage":74,"../UI/UIBackPanel":71,"../UI/UIRankingPanel":16},"path":"preview-scripts/assets/scripts/Framework/UIMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/frameNode.js"},{"deps":{"../../common-plugin/Scripts/YZ_Constant":45,"../Framework/CocosZ":29,"./gameMgr":82,"./UpgradeMgr":180,"../Framework/Constant":15},"path":"preview-scripts/assets/scripts/Game/jingyan.js"},{"deps":{"../Framework/CocosZ":29,"./gameMgr":82,"./weapon":70,"./person":67,"./UpgradeMgr":180},"path":"preview-scripts/assets/scripts/Game/prop.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GuideLayer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/testPoint.js"},{"deps":{"./gameMgr":82,"../Framework/CocosZ":29},"path":"preview-scripts/assets/scripts/Game/setMap.js"},{"deps":{"./gameMgr":82},"path":"preview-scripts/assets/scripts/Game/showEffect.js"},{"deps":{"../Framework/CocosZ":29,"../Framework/Constant":15,"./gameMgr":82},"path":"preview-scripts/assets/scripts/Game/mb.js"},{"deps":{"LanguageData":4,"../Framework/Constant":15,"../Framework/CocosZ":29,"../Framework/Msg":148},"path":"preview-scripts/assets/scripts/UI/PhysicalBord.js"},{"deps":{"../Framework/CocosZ":29,"../Framework/Constant":15},"path":"preview-scripts/assets/scripts/UI/ShareOrVideo.js"},{"deps":{"../Framework/UIPage":156,"../Framework/Constant":15,"../Framework/CocosZ":29,"./GuideLayer":163},"path":"preview-scripts/assets/scripts/UI/UIGameLoadingPage.js"},{"deps":{"../Framework/UIPage":156,"../Framework/Constant":15,"../Framework/CocosZ":29,"../../common-plugin/Scripts/PlatUtils":39},"path":"preview-scripts/assets/scripts/UI/UILoadingPage.js"},{"deps":{"LanguageData":4,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":29,"../Framework/Msg":148},"path":"preview-scripts/assets/scripts/UI/UIADPanel.js"},{"deps":{"../Framework/Constant":15,"../Framework/CocosZ":29,"../Game/gameDate":68},"path":"preview-scripts/assets/scripts/UI/redPoint.js"},{"deps":{"LanguageData":4,"../Framework/Constant":15,"../Framework/Msg":148,"../Framework/CocosZ":29},"path":"preview-scripts/assets/scripts/UI/CoinBord.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":177,"./YouWanSDK/YouWanAnalytics":26,"./PlatUtils":39,"./YZ_Constant":45,"./Utils":185,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Oppo.js"},{"deps":{"LanguageData":4,"../Framework/UIPage":156,"../Framework/CocosZ":29,"../Framework/Constant":15,"../../common-plugin/Scripts/Utils":185,"../Game/ani":66,"../../common-plugin/Scripts/YZ_Constant":45,"../Framework/FlyCoin":142,"../../common-plugin/Scripts/PlatUtils":39,"../Game/gameDate":68,"../Game/weapon":70,"../Framework/Msg":148},"path":"preview-scripts/assets/scripts/UI/UIHomePage.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/UMengSDK/quickGame/uma.min.js"},{"deps":{"listItem":83},"path":"preview-scripts/assets/scripts/commonUi/list.js"},{"deps":{"./AdAgent":140,"./PlatUtils":39,"./YZ_Constant":45,"./Utils":185,"./NativeTryGamesWidget":104,"./YZ_NativeAdObject":126,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentVIVO.js"},{"deps":{"../Framework/CocosZ":29,"../Framework/Constant":15,"./bullet":69,"./gameMgr":82,"./jingyan":161,"./ZombieBase":151,"./weapon":70,"./prop":162,"../../common-plugin/Scripts/Utils":185},"path":"preview-scripts/assets/scripts/Game/UpgradeMgr.js"},{"deps":{"./ListItem":38,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/List.js"},{"deps":{"./AdAgent":140,"./PlatUtils":39,"./YZ_Constant":45,"./Utils":185,"./YZ_NativeAdObject":126,"./NativeTryGamesWidget":104,"./CompatibleTool":90},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentHuaWei.js"},{"deps":{"./YZ_Constant":45,"./PlatUtils":39,"./YZ_LocalStorage":125,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/CommonConfig.js"},{"deps":{"./AdAgent":140,"./YZ_Constant":45,"./YZ_NativeAdObject":126,"./NativeTryGamesWidget":104,"./PlatUtils":39,"./Utils":185,"./CompatibleTool":90,"./YouWanSDK/YouWanAnalytics":26,"./YouWanSDK/EventAdInfo":141},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentOPPO.js"},{"deps":{"./WechatTool":44,"./PlatUtils":39,"./AdManager":89,"./CommonConfig":183,"./YZ_Tool_Oppo":175,"./YZ_Tool_Native":20,"./YZ_Tool_Baidu":19,"./YZ_Tool_Vivo":24,"./YZ_Tool_Douyin":54,"./YZ_Constant":45,"./YZ_Tool_QQ":21,"./YZ_Tool_QTT":23,"./YZ_Tool_Xiaomi":14,"./AldUtils":92,"./YZ_Tool_4399":132,"./YZ_Tool_UC":56,"./YZ_Tool_Cocosplay":50,"./YZ_Tool_IOS":12,"./YZ_Tool_Bili":133,"./YZ_Tool_Kwai":22,"./YZ_Tool_Broswer":51,"./YZ_Tool_Wifi":58,"./RedBagProgressWidget":111,"./YZ_Tool_Hago":53,"./CompatibleTool":90,"./YZ_Tool_HuaWei":55,"./OpenRedBagPanel":40,"./YZ_Tool_FaceBook":52,"./YzRealNameAuthPanel":57,"./YzUserPrivacyPanel":59,"./YZ_Tool_GoogleWeb":135,"./YZ_LocalStorage":125,"./Encrypt/CryptoJS":7},"path":"preview-scripts/assets/common-plugin/Scripts/Utils.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    