
(function () {
var scripts = [{"deps":{"./i18n-plugin/LocalizedLabel":1,"./i18n-plugin/SpriteFrameSet":3,"./i18n-plugin/LocalizedSprite":5,"./i18n-plugin/polyglot.min":4,"./i18n-plugin/LanguageData":2,"./assets/common-plugin/Scripts/AdAgentBroser":79,"./assets/common-plugin/Scripts/AdAgentBaidu":174,"./assets/common-plugin/Scripts/AdAgentCocosplay":32,"./assets/common-plugin/Scripts/AdAgentDouyin":78,"./assets/common-plugin/Scripts/AdAgentFaceBook":17,"./assets/common-plugin/Scripts/AdAgentHuaWei":182,"./assets/common-plugin/Scripts/AdAgentGoogleWeb":85,"./assets/common-plugin/Scripts/AdAgentIOS":83,"./assets/common-plugin/Scripts/AdAgentKwai":33,"./assets/common-plugin/Scripts/AdAgentNative":31,"./assets/common-plugin/Scripts/AdAgentOPPO":184,"./assets/common-plugin/Scripts/AdAgentQQ":30,"./assets/common-plugin/Scripts/AdAgentHago":84,"./assets/common-plugin/Scripts/AdAgentQTT":34,"./assets/common-plugin/Scripts/AdAgentVIVO":179,"./assets/common-plugin/Scripts/AdAgentUC":88,"./assets/common-plugin/Scripts/AdAgentWechat":87,"./assets/common-plugin/Scripts/AdAgentWiFi":35,"./assets/common-plugin/Scripts/AdAgentXiaomi":80,"./assets/common-plugin/Scripts/AdManager":86,"./assets/common-plugin/Scripts/AdSDK":36,"./assets/common-plugin/Scripts/BeforGameOverRecGamesPanel":92,"./assets/common-plugin/Scripts/AldUtils":89,"./assets/common-plugin/Scripts/CommonConfig":183,"./assets/common-plugin/Scripts/CompatibleTool":95,"./assets/common-plugin/Scripts/CheckIsShowIcon":91,"./assets/common-plugin/Scripts/GameBox":94,"./assets/common-plugin/Scripts/GameBoxListGameItem":90,"./assets/common-plugin/Scripts/GameBoxListItem":93,"./assets/common-plugin/Scripts/GameBoxSlideItem":98,"./assets/common-plugin/Scripts/GameItem":99,"./assets/common-plugin/Scripts/GamePage":97,"./assets/common-plugin/Scripts/GameSDK":96,"./assets/common-plugin/Scripts/ListItem":37,"./assets/common-plugin/Scripts/HandAction":100,"./assets/common-plugin/Scripts/List":181,"./assets/common-plugin/Scripts/LogOutView":102,"./assets/common-plugin/Scripts/LuckBoxPannel":6,"./assets/common-plugin/Scripts/MoreGamesPanel":104,"./assets/common-plugin/Scripts/MoreGamesPanel1":101,"./assets/common-plugin/Scripts/MoreGamesWidget":103,"./assets/common-plugin/Scripts/NativeTryGameNode":106,"./assets/common-plugin/Scripts/NativeTryGamesWidget":105,"./assets/common-plugin/Scripts/OpenRedBagPanel":38,"./assets/common-plugin/Scripts/PlatUtils":39,"./assets/common-plugin/Scripts/QCrossWidget6":107,"./assets/common-plugin/Scripts/QCrossWidgetItem":108,"./assets/common-plugin/Scripts/RecommendGamesNode":110,"./assets/common-plugin/Scripts/RecommendGamesWidget":111,"./assets/common-plugin/Scripts/RedBagProgressNode":109,"./assets/common-plugin/Scripts/RewardBoxPanel":40,"./assets/common-plugin/Scripts/RedBagProgressWidget":114,"./assets/common-plugin/Scripts/RewardInsert":112,"./assets/common-plugin/Scripts/RewardRedBagPanel":113,"./assets/common-plugin/Scripts/RewardShortCutPanel":41,"./assets/common-plugin/Scripts/ShareRecordPanel":42,"./assets/common-plugin/Scripts/TryGameNode":116,"./assets/common-plugin/Scripts/TryGamesWidget":117,"./assets/common-plugin/Scripts/Utils":185,"./assets/common-plugin/Scripts/VerticalRecommentPanel":118,"./assets/common-plugin/Scripts/WechatTool":43,"./assets/common-plugin/Scripts/WithdrawalNode":119,"./assets/common-plugin/Scripts/WithdrawalPanel":120,"./assets/common-plugin/Scripts/WithdrawalWidget":122,"./assets/common-plugin/Scripts/YZ_ActionScale":115,"./assets/common-plugin/Scripts/YZ_BaiduRecommendWidget":128,"./assets/common-plugin/Scripts/YZ_Constant":44,"./assets/common-plugin/Scripts/YZ_EventManager":123,"./assets/common-plugin/Scripts/YZ_GameExitDialog":121,"./assets/common-plugin/Scripts/YZ_ListView":45,"./assets/common-plugin/Scripts/YZ_LocalStorage":125,"./assets/common-plugin/Scripts/YZ_NativeAdObject":124,"./assets/common-plugin/Scripts/YZ_NativeBanner":46,"./assets/common-plugin/Scripts/YZ_NativeItem":48,"./assets/common-plugin/Scripts/YZ_NativeSplashView":47,"./assets/common-plugin/Scripts/YZ_NativeInsert":11,"./assets/common-plugin/Scripts/YZ_RecommendGamesBanner":126,"./assets/common-plugin/Scripts/YZ_RecordWidget":127,"./assets/common-plugin/Scripts/YZ_ShakeNode":130,"./assets/common-plugin/Scripts/YZ_ShortcutWidget":129,"./assets/common-plugin/Scripts/YZ_Tool_4399":132,"./assets/common-plugin/Scripts/YZ_StatementRecommentAd":131,"./assets/common-plugin/Scripts/YZ_Tool_Baidu":18,"./assets/common-plugin/Scripts/YZ_Tool_Bili":133,"./assets/common-plugin/Scripts/YZ_Tool_Cocosplay":50,"./assets/common-plugin/Scripts/YZ_Tool_Douyin":49,"./assets/common-plugin/Scripts/YZ_Tool_Broswer":51,"./assets/common-plugin/Scripts/YZ_Tool_FaceBook":54,"./assets/common-plugin/Scripts/YZ_Tool_GoogleWeb":134,"./assets/common-plugin/Scripts/YZ_Tool_HuaWei":53,"./assets/common-plugin/Scripts/YZ_Tool_IOS":12,"./assets/common-plugin/Scripts/YZ_Tool_Hago":52,"./assets/common-plugin/Scripts/YZ_Tool_Kwai":19,"./assets/common-plugin/Scripts/YZ_Tool_Native":20,"./assets/common-plugin/Scripts/YZ_Tool_Oppo":175,"./assets/common-plugin/Scripts/YZ_Tool_QQ":22,"./assets/common-plugin/Scripts/YZ_Tool_QTT":21,"./assets/common-plugin/Scripts/YZ_Tool_UC":55,"./assets/common-plugin/Scripts/YZ_Tool_Vivo":23,"./assets/common-plugin/Scripts/YZ_Tool_Wifi":56,"./assets/common-plugin/Scripts/YZ_Tool_Xiaomi":13,"./assets/common-plugin/Scripts/YZ_Turntable":14,"./assets/common-plugin/Scripts/YzLoginPanel":137,"./assets/common-plugin/Scripts/YzRealNameAuthPanel":57,"./assets/common-plugin/Scripts/YzCustomAdPanel":136,"./assets/common-plugin/Scripts/YzUserPrivacyPanel":59,"./assets/common-plugin/Scripts/md5":58,"./assets/common-plugin/Scripts/AdAgentBili":77,"./assets/common-plugin/Scripts/Encrypt/CryptoJS":7,"./assets/common-plugin/Scripts/FaceBookSdk/FBSdk":140,"./assets/common-plugin/Scripts/FaceBookSdk/FBAdManager":24,"./assets/common-plugin/Scripts/YouWanSDK/YouWanAnalytics":25,"./assets/common-plugin/Scripts/YouWanSDK/EventAdInfo":141,"./assets/common-plugin/Scripts/AdAgent":135,"./assets/common-plugin/Scripts/UMengSDK/quickGame/uma.min":177,"./assets/res/effects/BgScroll":61,"./assets/resources/i18n/en":62,"./assets/resources/i18n/zh":138,"./assets/scripts/Framework/Constant":26,"./assets/scripts/Framework/DataMgr":8,"./assets/scripts/Framework/GameCtr":143,"./assets/scripts/Framework/FlyCoin":142,"./assets/scripts/Framework/GameLevel":145,"./assets/scripts/Framework/GameMgr":60,"./assets/scripts/Framework/GameStartScene":144,"./assets/scripts/Framework/Msg":146,"./assets/scripts/Framework/QEasing":147,"./assets/scripts/Framework/QRotation":149,"./assets/scripts/Framework/QMoveAction":148,"./assets/scripts/Framework/ResMgr":63,"./assets/scripts/Framework/QTween":150,"./assets/scripts/Framework/SceneMgr":152,"./assets/scripts/Framework/QScaleAction":154,"./assets/scripts/Framework/ShowDate":151,"./assets/scripts/Framework/TweenEffect":65,"./assets/scripts/Framework/StartScene":156,"./assets/scripts/Framework/UIMgr":153,"./assets/scripts/Framework/UIPage":157,"./assets/scripts/Framework/frameNode":155,"./assets/scripts/Framework/AudioMgr":162,"./assets/scripts/Game/UpgradeMgr":180,"./assets/scripts/Game/bullet":64,"./assets/scripts/Game/ani":66,"./assets/scripts/Game/gameDate":67,"./assets/scripts/Game/jingyan":164,"./assets/scripts/Game/gameMgr":81,"./assets/scripts/Game/mb":159,"./assets/scripts/Game/person":68,"./assets/scripts/Game/player":9,"./assets/scripts/Game/prop":161,"./assets/scripts/Game/setMap":160,"./assets/scripts/Game/showEffect":163,"./assets/scripts/Game/testPoint":165,"./assets/scripts/Game/weapon":69,"./assets/scripts/Game/ZombieBase":158,"./assets/scripts/UI/GuideLayer":168,"./assets/scripts/UI/PhysicalBord":166,"./assets/scripts/UI/UIADPanel":169,"./assets/scripts/UI/ShareOrVideo":167,"./assets/scripts/UI/UIBackPanel":72,"./assets/scripts/UI/UIGameLoadingPage":170,"./assets/scripts/UI/UIGamePage":27,"./assets/scripts/UI/UIHomePage":176,"./assets/scripts/UI/UILoadingPage":171,"./assets/scripts/UI/UIOverPage":10,"./assets/scripts/UI/UIPausePanel":71,"./assets/scripts/UI/UIRevivePanel":75,"./assets/scripts/UI/UIRankingPanel":16,"./assets/scripts/UI/UISignPage":70,"./assets/scripts/UI/UITimePage":73,"./assets/scripts/UI/UITrySkinPanel":74,"./assets/scripts/UI/UITurntablePage":15,"./assets/scripts/UI/UIWeaponLevelPanel":76,"./assets/scripts/UI/redPoint":172,"./assets/scripts/UI/UIUpgradePanel":28,"./assets/scripts/UI/CoinBord":173,"./assets/scripts/commonUi/listItem":82,"./assets/scripts/commonUi/list":178,"./assets/scripts/Framework/CocosZ":29,"./assets/common-plugin/Scripts/AdAgent4399":139},"path":"preview-scripts/__qc_index__.js"},{"deps":{"LanguageData":2},"path":"preview-scripts/i18n-plugin/LocalizedLabel.js"},{"deps":{"polyglot.min":4},"path":"preview-scripts/i18n-plugin/LanguageData.js"},{"deps":{},"path":"preview-scripts/i18n-plugin/SpriteFrameSet.js"},{"deps":{},"path":"preview-scripts/i18n-plugin/polyglot.min.js"},{"deps":{"SpriteFrameSet":3},"path":"preview-scripts/i18n-plugin/LocalizedSprite.js"},{"deps":{"./Utils":185,"./YZ_Constant":44,"./PlatUtils":39,"./AldUtils":89},"path":"preview-scripts/assets/common-plugin/Scripts/LuckBoxPannel.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/Encrypt/CryptoJS.js"},{"deps":{"../Game/weapon":69,"./Constant":26},"path":"preview-scripts/assets/scripts/Framework/DataMgr.js"},{"deps":{"LanguageData":2,"../Framework/CocosZ":29,"../Framework/Constant":26,"./gameDate":67,"./gameMgr":81,"./person":68,"./UpgradeMgr":180,"./bullet":64,"./weapon":69},"path":"preview-scripts/assets/scripts/Game/player.js"},{"deps":{"LanguageData":2,"../Framework/Constant":26,"../Framework/UIPage":157,"../Framework/CocosZ":29,"../../common-plugin/Scripts/PlatUtils":39,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/YZ_Constant":44,"../Game/gameMgr":81,"../Game/UpgradeMgr":180},"path":"preview-scripts/assets/scripts/UI/UIOverPage.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./CompatibleTool":95,"./YZ_Constant":44,"./YouWanSDK/EventAdInfo":141,"./YouWanSDK/YouWanAnalytics":25},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeInsert.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_IOS.js"},{"deps":{"./Utils":185,"./YZ_Constant":44,"./PlatUtils":39,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Xiaomi.js"},{"deps":{"./Utils":185,"./CompatibleTool":95,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Turntable.js"},{"deps":{"LanguageData":2,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":29,"../Framework/Constant":26,"../Framework/Msg":146,"../Framework/UIPage":157,"../Game/gameDate":67,"../Game/weapon":69},"path":"preview-scripts/assets/scripts/UI/UITurntablePage.js"},{"deps":{"LanguageData":2,"../Framework/CocosZ":29,"../../common-plugin/Scripts/Utils":185,"../Framework/Constant":26,"../Framework/TweenEffect":65,"../Framework/UIPage":157},"path":"preview-scripts/assets/scripts/UI/UIRankingPanel.js"},{"deps":{"./AdAgent":135,"./YZ_Constant":44,"./PlatUtils":39,"./Utils":185,"./FaceBookSdk/FBAdManager":24},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentFaceBook.js"},{"deps":{"./PlatUtils":39,"./YZ_Constant":44,"./Utils":185,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Baidu.js"},{"deps":{"./PlatUtils":39,"./YZ_Constant":44,"./YZ_LocalStorage":125,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Kwai.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Native.js"},{"deps":{"./md5.js":58,"./PlatUtils":39,"./Utils":185,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_QTT.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_QQ.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":177,"./PlatUtils":39,"./Utils":185,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Vivo.js"},{"deps":{"../Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/FaceBookSdk/FBAdManager.js"},{"deps":{"../PlatUtils":39,"../Utils":185,"../YZ_Constant":44,"../YZ_LocalStorage":125,"./EventAdInfo":141},"path":"preview-scripts/assets/common-plugin/Scripts/YouWanSDK/YouWanAnalytics.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/Constant.js"},{"deps":{"LanguageData":2,"../Framework/UIPage":157,"../Framework/Constant":26,"../Framework/CocosZ":29,"../../common-plugin/Scripts/PlatUtils":39,"../../common-plugin/Scripts/Utils":185,"../Game/gameMgr":81,"../../common-plugin/Scripts/YZ_Constant":44},"path":"preview-scripts/assets/scripts/UI/UIGamePage.js"},{"deps":{"../Framework/UIPage":157,"../Framework/CocosZ":29,"../Framework/Constant":26,"../Framework/TweenEffect":65,"../../common-plugin/Scripts/Utils":185,"../Game/UpgradeMgr":180,"../../common-plugin/Scripts/PlatUtils":39,"../Game/gameMgr":81},"path":"preview-scripts/assets/scripts/UI/UIUpgradePanel.js"},{"deps":{"LanguageData":2,"./DataMgr":8,"./GameMgr":60,"./ResMgr":63,"./UIMgr":153,"./Constant":26,"./SceneMgr":152,"./AudioMgr":162,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/PlatUtils":39,"./Msg":146},"path":"preview-scripts/assets/scripts/Framework/CocosZ.js"},{"deps":{"./AdAgent":135,"./PlatUtils":39,"./YZ_Constant":44,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentQQ.js"},{"deps":{"./AdAgent":135,"./YZ_Constant":44,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentNative.js"},{"deps":{"./AdAgent":135,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentCocosplay.js"},{"deps":{"./AdAgent":135,"./YZ_Constant":44,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentKwai.js"},{"deps":{"./AdAgent":135,"./YZ_Constant":44,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentQTT.js"},{"deps":{"./AdAgent":135,"./Utils":185,"./YZ_Constant":44,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentWiFi.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/AdSDK.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/ListItem.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/OpenRedBagPanel.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/PlatUtils.js"},{"deps":{"./Utils":185,"./YZ_Constant":44,"./AldUtils":89,"./PlatUtils":39,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/RewardBoxPanel.js"},{"deps":{"./Utils":185,"./YZ_Constant":44,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/RewardShortCutPanel.js"},{"deps":{"./Utils":185,"./YZ_Constant":44,"./PlatUtils":39,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/ShareRecordPanel.js"},{"deps":{"./PlatUtils":39,"./YZ_Constant":44,"./Utils":185,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/WechatTool.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Constant.js"},{"deps":{"./YZ_Constant":44,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ListView.js"},{"deps":{"./PlatUtils":39,"./YZ_Constant":44,"./Utils":185,"./CompatibleTool":95,"./YouWanSDK/EventAdInfo":141,"./YouWanSDK/YouWanAnalytics":25},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeBanner.js"},{"deps":{"./CompatibleTool":95,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeSplashView.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":44,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeItem.js"},{"deps":{"./Utils":185,"./YZ_Constant":44,"./YZ_LocalStorage":125,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Douyin.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_LocalStorage":125,"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Cocosplay.js"},{"deps":{"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Broswer.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Hago.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":177,"./PlatUtils":39,"./Utils":185,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_HuaWei.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_FaceBook.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_UC.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Wifi.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YzRealNameAuthPanel.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/md5.js"},{"deps":{"./CompatibleTool":95,"./Utils":185,"./PlatUtils":39,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YzUserPrivacyPanel.js"},{"deps":{"LanguageData":2,"./GameCtr":143,"./CocosZ":29,"../../common-plugin/Scripts/Utils":185,"./Msg":146,"./Constant":26,"../../common-plugin/Scripts/YZ_Constant":44,"../Game/UpgradeMgr":180,"../../common-plugin/Scripts/YZ_LocalStorage":125},"path":"preview-scripts/assets/scripts/Framework/GameMgr.js"},{"deps":{},"path":"preview-scripts/assets/res/effects/BgScroll.js"},{"deps":{},"path":"preview-scripts/assets/resources/i18n/en.js"},{"deps":{"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/ResMgr.js"},{"deps":{"../Framework/CocosZ":29,"../Framework/Constant":26,"./person":68,"./gameMgr":81},"path":"preview-scripts/assets/scripts/Game/bullet.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/TweenEffect.js"},{"deps":{"./gameDate":67,"../Framework/CocosZ":29,"./weapon":69},"path":"preview-scripts/assets/scripts/Game/ani.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/gameDate.js"},{"deps":{"LanguageData":2,"../../common-plugin/Scripts/PlatUtils":39,"../Framework/CocosZ":29,"../Framework/Constant":26,"./gameMgr":81,"./gameDate":67,"./weapon":69},"path":"preview-scripts/assets/scripts/Game/person.js"},{"deps":{"LanguageData":2,"../Framework/CocosZ":29,"../Framework/Constant":26,"../Framework/Msg":146,"./gameDate":67,"./gameMgr":81},"path":"preview-scripts/assets/scripts/Game/weapon.js"},{"deps":{"LanguageData":2,"../Framework/UIPage":157,"../Framework/Constant":26,"../Framework/CocosZ":29,"../../common-plugin/Scripts/Utils":185,"../Framework/Msg":146,"../Framework/TweenEffect":65},"path":"preview-scripts/assets/scripts/UI/UISignPage.js"},{"deps":{"../../common-plugin/Scripts/PlatUtils":39,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/YZ_Constant":44,"../Framework/CocosZ":29,"../Framework/Constant":26,"../Framework/UIPage":157,"../Game/gameMgr":81,"../Game/UpgradeMgr":180},"path":"preview-scripts/assets/scripts/UI/UIPausePanel.js"},{"deps":{"LanguageData":2,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":29,"../Framework/Constant":26,"../Framework/TweenEffect":65,"../Framework/UIPage":157},"path":"preview-scripts/assets/scripts/UI/UIBackPanel.js"},{"deps":{"../Framework/Constant":26,"../Framework/CocosZ":29,"../Framework/UIPage":157,"../../common-plugin/Scripts/Utils":185,"../Game/gameDate":67,"../Framework/TweenEffect":65},"path":"preview-scripts/assets/scripts/UI/UITimePage.js"},{"deps":{"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":29,"../Framework/Constant":26,"../Game/ani":66,"../Framework/UIPage":157},"path":"preview-scripts/assets/scripts/UI/UITrySkinPanel.js"},{"deps":{"LanguageData":2,"../Framework/UIPage":157,"../Framework/Msg":146,"../Framework/Constant":26,"../Framework/CocosZ":29,"../../common-plugin/Scripts/Utils":185,"../Game/gameMgr":81},"path":"preview-scripts/assets/scripts/UI/UIRevivePanel.js"},{"deps":{"LanguageData":2,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":29,"../Framework/Constant":26,"../Framework/Msg":146,"../Game/gameDate":67,"../Game/weapon":69,"../Framework/UIPage":157},"path":"preview-scripts/assets/scripts/UI/UIWeaponLevelPanel.js"},{"deps":{"./AdAgent":135,"./YZ_Constant":44,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBili.js"},{"deps":{"./AdAgent":135,"./PlatUtils":39,"./Utils":185,"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentDouyin.js"},{"deps":{"./AdAgent":135,"./YZ_NativeBanner":46,"./YZ_NativeInsert":11,"./YZ_Constant":44,"./CommonConfig":183,"./Utils":185,"./YZ_NativeAdObject":124},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBroser.js"},{"deps":{"./AdAgent":135,"./PlatUtils":39,"./YZ_Constant":44,"./Utils":185,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentXiaomi.js"},{"deps":{"../Framework/CocosZ":29,"../Framework/Constant":26,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/YZ_Constant":44,"./UpgradeMgr":180,"./ZombieBase":158},"path":"preview-scripts/assets/scripts/Game/gameMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/commonUi/listItem.js"},{"deps":{"./AdAgent":135,"./YZ_Constant":44,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentIOS.js"},{"deps":{"./AdAgent":135,"./YZ_Constant":44,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentHago.js"},{"deps":{"./AdAgent":135},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentGoogleWeb.js"},{"deps":{"./PlatUtils":39,"./AdAgentNative":31,"./AdAgentVIVO":179,"./AdAgentWechat":87,"./AdAgentOPPO":184,"./AdAgentBaidu":174,"./AdAgentDouyin":78,"./AdAgentQQ":30,"./YZ_Constant":44,"./AdAgentQTT":34,"./Utils":185,"./AdAgentXiaomi":80,"./AdAgent4399":139,"./AdAgentCocosplay":32,"./AdAgentIOS":83,"./AdAgentUC":88,"./AdAgentBili":77,"./AdAgentKwai":33,"./BeforGameOverRecGamesPanel":92,"./AdAgentBroser":79,"./AdAgentWiFi":35,"./AdAgentHuaWei":182,"./AdAgentFaceBook":17,"./AdAgentHago":84,"./YzCustomAdPanel":136,"./AdAgentGoogleWeb":85},"path":"preview-scripts/assets/common-plugin/Scripts/AdManager.js"},{"deps":{"./AdAgent":135,"./YZ_Constant":44,"./PlatUtils":39,"./Utils":185,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentWechat.js"},{"deps":{"./AdAgent":135,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentUC.js"},{"deps":{"./YZ_Constant":44,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AldUtils.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxListGameItem.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/CheckIsShowIcon.js"},{"deps":{"./Utils":185,"./YZ_Constant":44,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/BeforGameOverRecGamesPanel.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxListItem.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/GameBox.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/CompatibleTool.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/GameSDK.js"},{"deps":{"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/GamePage.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxSlideItem.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./YZ_Constant":44,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/GameItem.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/HandAction.js"},{"deps":{"./YZ_Constant":44,"./GameItem":99,"./Utils":185,"./List":181},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesPanel1.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/LogOutView.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./AldUtils":89,"./CompatibleTool":95,"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesWidget.js"},{"deps":{"./Utils":185,"./YZ_Constant":44,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesPanel.js"},{"deps":{"./Utils":185,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/NativeTryGamesWidget.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./NativeTryGamesWidget":105,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/NativeTryGameNode.js"},{"deps":{"./Utils":185,"./AldUtils":89,"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/QCrossWidget6.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./CompatibleTool":95,"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/QCrossWidgetItem.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/RedBagProgressNode.js"},{"deps":{"./Utils":185,"./YZ_Constant":44,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/RecommendGamesNode.js"},{"deps":{"./Utils":185,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/RecommendGamesWidget.js"},{"deps":{"./AldUtils":89,"./Utils":185,"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/RewardInsert.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/RewardRedBagPanel.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/RedBagProgressWidget.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ActionScale.js"},{"deps":{"./Utils":185,"./YZ_Constant":44,"./PlatUtils":39,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/TryGameNode.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/TryGamesWidget.js"},{"deps":{"./Utils":185,"./YZ_Constant":44,"./PlatUtils":39,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/VerticalRecommentPanel.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalNode.js"},{"deps":{"./Utils":185,"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalPanel.js"},{"deps":{"./YZ_Constant":44,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_GameExitDialog.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalWidget.js"},{"deps":{"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_EventManager.js"},{"deps":{"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeAdObject.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_LocalStorage.js"},{"deps":{"./Utils":185,"./PlatUtils":39,"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_RecommendGamesBanner.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_RecordWidget.js"},{"deps":{"./PlatUtils":39,"./Utils":185,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_BaiduRecommendWidget.js"},{"deps":{"./Utils":185,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ShortcutWidget.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ShakeNode.js"},{"deps":{"./Utils":185,"./AldUtils":89,"./YZ_Constant":44,"./List":181},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_StatementRecommentAd.js"},{"deps":{"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_4399.js"},{"deps":{"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Bili.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_GoogleWeb.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgent.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YzCustomAdPanel.js"},{"deps":{"./Utils":185,"./YZ_Constant":44},"path":"preview-scripts/assets/common-plugin/Scripts/YzLoginPanel.js"},{"deps":{},"path":"preview-scripts/assets/resources/i18n/zh.js"},{"deps":{"./AdAgent":135,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgent4399.js"},{"deps":{"./FBAdManager":24},"path":"preview-scripts/assets/common-plugin/Scripts/FaceBookSdk/FBSdk.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YouWanSDK/EventAdInfo.js"},{"deps":{"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/FlyCoin.js"},{"deps":{"./Constant":26,"./CocosZ":29,"../Game/gameMgr":81},"path":"preview-scripts/assets/scripts/Framework/GameCtr.js"},{"deps":{"./CocosZ":29,"./Constant":26},"path":"preview-scripts/assets/scripts/Framework/GameStartScene.js"},{"deps":{"./CocosZ":29,"./Constant":26},"path":"preview-scripts/assets/scripts/Framework/GameLevel.js"},{"deps":{"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/Msg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/QEasing.js"},{"deps":{"./QEasing":147},"path":"preview-scripts/assets/scripts/Framework/QMoveAction.js"},{"deps":{"./QEasing":147},"path":"preview-scripts/assets/scripts/Framework/QRotation.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/QTween.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/ShowDate.js"},{"deps":{"../Game/gameMgr":81,"../Game/setMap":160,"../UI/GuideLayer":168,"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/SceneMgr.js"},{"deps":{"./Constant":26,"../UI/UIHomePage":176,"../UI/UIRevivePanel":75,"../UI/UIGamePage":27,"../UI/UIGameLoadingPage":170,"../UI/UIPausePanel":71,"../UI/UILoadingPage":171,"../UI/UITurntablePage":15,"../UI/UITrySkinPanel":74,"../UI/UIWeaponLevelPanel":76,"../UI/UIUpgradePanel":28,"../UI/UISignPage":70,"../UI/UIOverPage":10,"../UI/UITimePage":73,"../UI/UIRankingPanel":16,"../UI/UIBackPanel":72},"path":"preview-scripts/assets/scripts/Framework/UIMgr.js"},{"deps":{"./QEasing":147},"path":"preview-scripts/assets/scripts/Framework/QScaleAction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/frameNode.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/StartScene.js"},{"deps":{"../../common-plugin/Scripts/Utils":185,"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/UIPage.js"},{"deps":{"../Framework/CocosZ":29,"../../common-plugin/Scripts/PlatUtils":39,"../Framework/Constant":26,"../Game/gameDate":67,"../Game/gameMgr":81,"../Game/person":68,"../Game/UpgradeMgr":180,"./bullet":64},"path":"preview-scripts/assets/scripts/Game/ZombieBase.js"},{"deps":{"../Framework/Constant":26,"../Framework/CocosZ":29,"./gameMgr":81},"path":"preview-scripts/assets/scripts/Game/mb.js"},{"deps":{"../Framework/CocosZ":29,"./gameMgr":81},"path":"preview-scripts/assets/scripts/Game/setMap.js"},{"deps":{"../Framework/CocosZ":29,"./gameMgr":81,"./person":68,"./weapon":69,"./UpgradeMgr":180},"path":"preview-scripts/assets/scripts/Game/prop.js"},{"deps":{"./CocosZ":29},"path":"preview-scripts/assets/scripts/Framework/AudioMgr.js"},{"deps":{"./gameMgr":81},"path":"preview-scripts/assets/scripts/Game/showEffect.js"},{"deps":{"../../common-plugin/Scripts/YZ_Constant":44,"../Framework/CocosZ":29,"../Framework/Constant":26,"./gameMgr":81,"./UpgradeMgr":180},"path":"preview-scripts/assets/scripts/Game/jingyan.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/testPoint.js"},{"deps":{"LanguageData":2,"../Framework/Constant":26,"../Framework/CocosZ":29,"../Framework/Msg":146},"path":"preview-scripts/assets/scripts/UI/PhysicalBord.js"},{"deps":{"../Framework/CocosZ":29,"../Framework/Constant":26},"path":"preview-scripts/assets/scripts/UI/ShareOrVideo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GuideLayer.js"},{"deps":{"LanguageData":2,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":29,"../Framework/Msg":146},"path":"preview-scripts/assets/scripts/UI/UIADPanel.js"},{"deps":{"../Framework/UIPage":157,"../Framework/Constant":26,"../Framework/CocosZ":29,"./GuideLayer":168},"path":"preview-scripts/assets/scripts/UI/UIGameLoadingPage.js"},{"deps":{"../Framework/UIPage":157,"../Framework/Constant":26,"../Framework/CocosZ":29,"../../common-plugin/Scripts/PlatUtils":39},"path":"preview-scripts/assets/scripts/UI/UILoadingPage.js"},{"deps":{"../Framework/CocosZ":29,"../Framework/Constant":26,"../Game/gameDate":67},"path":"preview-scripts/assets/scripts/UI/redPoint.js"},{"deps":{"LanguageData":2,"../Framework/Constant":26,"../Framework/CocosZ":29,"../Framework/Msg":146},"path":"preview-scripts/assets/scripts/UI/CoinBord.js"},{"deps":{"./AdAgent":135,"./YZ_Constant":44,"./PlatUtils":39,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBaidu.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":177,"./PlatUtils":39,"./Utils":185,"./YouWanSDK/YouWanAnalytics":25,"./YZ_Constant":44,"./YZ_LocalStorage":125},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Oppo.js"},{"deps":{"LanguageData":2,"../Framework/UIPage":157,"../Framework/Constant":26,"../Framework/CocosZ":29,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/YZ_Constant":44,"../../common-plugin/Scripts/PlatUtils":39,"../Game/ani":66,"../Framework/FlyCoin":142,"../Game/gameDate":67,"../Game/weapon":69,"../Framework/Msg":146},"path":"preview-scripts/assets/scripts/UI/UIHomePage.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/UMengSDK/quickGame/uma.min.js"},{"deps":{"listItem":82},"path":"preview-scripts/assets/scripts/commonUi/list.js"},{"deps":{"./AdAgent":135,"./YZ_Constant":44,"./PlatUtils":39,"./NativeTryGamesWidget":105,"./Utils":185,"./CompatibleTool":95,"./YZ_NativeAdObject":124},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentVIVO.js"},{"deps":{"../Framework/CocosZ":29,"../Framework/Constant":26,"./bullet":64,"./gameMgr":81,"./jingyan":164,"./ZombieBase":158,"./weapon":69,"./prop":161,"../../common-plugin/Scripts/Utils":185},"path":"preview-scripts/assets/scripts/Game/UpgradeMgr.js"},{"deps":{"./ListItem":37,"./CompatibleTool":95},"path":"preview-scripts/assets/common-plugin/Scripts/List.js"},{"deps":{"./AdAgent":135,"./PlatUtils":39,"./YZ_Constant":44,"./Utils":185,"./CompatibleTool":95,"./YZ_NativeAdObject":124,"./NativeTryGamesWidget":105},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentHuaWei.js"},{"deps":{"./YZ_Constant":44,"./YZ_LocalStorage":125,"./Utils":185,"./PlatUtils":39},"path":"preview-scripts/assets/common-plugin/Scripts/CommonConfig.js"},{"deps":{"./AdAgent":135,"./YZ_Constant":44,"./Utils":185,"./PlatUtils":39,"./YZ_NativeAdObject":124,"./CompatibleTool":95,"./YouWanSDK/YouWanAnalytics":25,"./NativeTryGamesWidget":105,"./YouWanSDK/EventAdInfo":141},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentOPPO.js"},{"deps":{"./AdManager":86,"./CommonConfig":183,"./YZ_Tool_Oppo":175,"./PlatUtils":39,"./WechatTool":43,"./YZ_Tool_Baidu":18,"./YZ_Tool_Native":20,"./YZ_Tool_Vivo":23,"./YZ_Tool_Douyin":49,"./YZ_Constant":44,"./YZ_Tool_QQ":22,"./YZ_Tool_Xiaomi":13,"./YZ_Tool_QTT":21,"./AldUtils":89,"./YZ_Tool_UC":55,"./YZ_Tool_Cocosplay":50,"./YZ_Tool_4399":132,"./YZ_Tool_IOS":12,"./YZ_Tool_Kwai":19,"./YZ_Tool_Bili":133,"./YZ_Tool_Broswer":51,"./YZ_Tool_Hago":52,"./YZ_Tool_Wifi":56,"./RedBagProgressWidget":114,"./CompatibleTool":95,"./YZ_Tool_HuaWei":53,"./OpenRedBagPanel":38,"./YZ_Tool_FaceBook":54,"./YzRealNameAuthPanel":57,"./YzUserPrivacyPanel":59,"./YZ_LocalStorage":125,"./YZ_Tool_GoogleWeb":134,"./Encrypt/CryptoJS":7},"path":"preview-scripts/assets/common-plugin/Scripts/Utils.js"}];
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
    