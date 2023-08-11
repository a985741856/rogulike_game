
(function () {
var scripts = [{"deps":{"./i18n-plugin/LocalizedLabel":3,"./i18n-plugin/LocalizedSprite":1,"./i18n-plugin/SpriteFrameSet":4,"./i18n-plugin/polyglot.min":5,"./i18n-plugin/LanguageData":2,"./assets/common-plugin/Scripts/AdAgentCocosplay":173,"./assets/common-plugin/Scripts/AdAgentBroser":77,"./assets/common-plugin/Scripts/AdAgentBaidu":59,"./assets/common-plugin/Scripts/AdAgentDouyin":78,"./assets/common-plugin/Scripts/AdAgentFaceBook":17,"./assets/common-plugin/Scripts/AdAgentGoogleWeb":86,"./assets/common-plugin/Scripts/AdAgentHago":82,"./assets/common-plugin/Scripts/AdAgentHuaWei":182,"./assets/common-plugin/Scripts/AdAgentKwai":30,"./assets/common-plugin/Scripts/AdAgentIOS":87,"./assets/common-plugin/Scripts/AdAgentNative":33,"./assets/common-plugin/Scripts/AdAgentOPPO":184,"./assets/common-plugin/Scripts/AdAgentQQ":31,"./assets/common-plugin/Scripts/AdAgentQTT":32,"./assets/common-plugin/Scripts/AdAgentUC":85,"./assets/common-plugin/Scripts/AdAgentVIVO":179,"./assets/common-plugin/Scripts/AdAgentWechat":83,"./assets/common-plugin/Scripts/AdManager":84,"./assets/common-plugin/Scripts/AdAgentWiFi":34,"./assets/common-plugin/Scripts/AdAgentXiaomi":79,"./assets/common-plugin/Scripts/AldUtils":88,"./assets/common-plugin/Scripts/AdSDK":35,"./assets/common-plugin/Scripts/BeforGameOverRecGamesPanel":92,"./assets/common-plugin/Scripts/CheckIsShowIcon":90,"./assets/common-plugin/Scripts/CommonConfig":183,"./assets/common-plugin/Scripts/CompatibleTool":89,"./assets/common-plugin/Scripts/GameBox":93,"./assets/common-plugin/Scripts/GameBoxListItem":94,"./assets/common-plugin/Scripts/GameBoxListGameItem":91,"./assets/common-plugin/Scripts/GameBoxSlideItem":95,"./assets/common-plugin/Scripts/GamePage":97,"./assets/common-plugin/Scripts/GameItem":96,"./assets/common-plugin/Scripts/GameSDK":98,"./assets/common-plugin/Scripts/List":181,"./assets/common-plugin/Scripts/HandAction":100,"./assets/common-plugin/Scripts/ListItem":37,"./assets/common-plugin/Scripts/LogOutView":99,"./assets/common-plugin/Scripts/LuckBoxPannel":6,"./assets/common-plugin/Scripts/MoreGamesPanel":101,"./assets/common-plugin/Scripts/MoreGamesPanel1":102,"./assets/common-plugin/Scripts/MoreGamesWidget":104,"./assets/common-plugin/Scripts/NativeTryGameNode":103,"./assets/common-plugin/Scripts/NativeTryGamesWidget":105,"./assets/common-plugin/Scripts/PlatUtils":38,"./assets/common-plugin/Scripts/QCrossWidget6":106,"./assets/common-plugin/Scripts/QCrossWidgetItem":107,"./assets/common-plugin/Scripts/OpenRedBagPanel":36,"./assets/common-plugin/Scripts/RecommendGamesNode":108,"./assets/common-plugin/Scripts/RecommendGamesWidget":112,"./assets/common-plugin/Scripts/RedBagProgressNode":109,"./assets/common-plugin/Scripts/RedBagProgressWidget":110,"./assets/common-plugin/Scripts/RewardInsert":111,"./assets/common-plugin/Scripts/RewardBoxPanel":39,"./assets/common-plugin/Scripts/RewardRedBagPanel":113,"./assets/common-plugin/Scripts/RewardShortCutPanel":40,"./assets/common-plugin/Scripts/ShareRecordPanel":41,"./assets/common-plugin/Scripts/TryGameNode":114,"./assets/common-plugin/Scripts/TryGamesWidget":115,"./assets/common-plugin/Scripts/Utils":185,"./assets/common-plugin/Scripts/VerticalRecommentPanel":117,"./assets/common-plugin/Scripts/WechatTool":42,"./assets/common-plugin/Scripts/WithdrawalNode":116,"./assets/common-plugin/Scripts/WithdrawalPanel":120,"./assets/common-plugin/Scripts/WithdrawalWidget":119,"./assets/common-plugin/Scripts/YZ_ActionScale":118,"./assets/common-plugin/Scripts/YZ_EventManager":121,"./assets/common-plugin/Scripts/YZ_Constant":43,"./assets/common-plugin/Scripts/YZ_BaiduRecommendWidget":122,"./assets/common-plugin/Scripts/YZ_GameExitDialog":131,"./assets/common-plugin/Scripts/YZ_ListView":44,"./assets/common-plugin/Scripts/YZ_NativeAdObject":124,"./assets/common-plugin/Scripts/YZ_LocalStorage":123,"./assets/common-plugin/Scripts/YZ_NativeBanner":45,"./assets/common-plugin/Scripts/YZ_NativeInsert":11,"./assets/common-plugin/Scripts/YZ_NativeItem":46,"./assets/common-plugin/Scripts/YZ_NativeSplashView":47,"./assets/common-plugin/Scripts/YZ_RecommendGamesBanner":126,"./assets/common-plugin/Scripts/YZ_RecordWidget":127,"./assets/common-plugin/Scripts/YZ_ShakeNode":125,"./assets/common-plugin/Scripts/YZ_ShortcutWidget":128,"./assets/common-plugin/Scripts/YZ_StatementRecommentAd":129,"./assets/common-plugin/Scripts/YZ_Tool_4399":130,"./assets/common-plugin/Scripts/YZ_Tool_Baidu":18,"./assets/common-plugin/Scripts/YZ_Tool_Bili":132,"./assets/common-plugin/Scripts/YZ_Tool_Broswer":50,"./assets/common-plugin/Scripts/YZ_Tool_Cocosplay":51,"./assets/common-plugin/Scripts/YZ_Tool_Douyin":48,"./assets/common-plugin/Scripts/YZ_Tool_FaceBook":52,"./assets/common-plugin/Scripts/YZ_Tool_GoogleWeb":133,"./assets/common-plugin/Scripts/YZ_Tool_Hago":53,"./assets/common-plugin/Scripts/YZ_Tool_HuaWei":49,"./assets/common-plugin/Scripts/YZ_Tool_IOS":12,"./assets/common-plugin/Scripts/YZ_Tool_Kwai":19,"./assets/common-plugin/Scripts/YZ_Tool_Native":21,"./assets/common-plugin/Scripts/YZ_Tool_Oppo":175,"./assets/common-plugin/Scripts/YZ_Tool_QQ":23,"./assets/common-plugin/Scripts/YZ_Tool_QTT":22,"./assets/common-plugin/Scripts/YZ_Tool_UC":54,"./assets/common-plugin/Scripts/YZ_Tool_Vivo":20,"./assets/common-plugin/Scripts/YZ_Tool_Wifi":55,"./assets/common-plugin/Scripts/YZ_Tool_Xiaomi":13,"./assets/common-plugin/Scripts/YZ_Turntable":14,"./assets/common-plugin/Scripts/YzCustomAdPanel":135,"./assets/common-plugin/Scripts/YzLoginPanel":134,"./assets/common-plugin/Scripts/YzRealNameAuthPanel":56,"./assets/common-plugin/Scripts/YzUserPrivacyPanel":57,"./assets/common-plugin/Scripts/md5":58,"./assets/common-plugin/Scripts/AdAgent":136,"./assets/common-plugin/Scripts/Encrypt/CryptoJS":7,"./assets/common-plugin/Scripts/FaceBookSdk/FBSdk":137,"./assets/common-plugin/Scripts/FaceBookSdk/FBAdManager":25,"./assets/common-plugin/Scripts/YouWanSDK/YouWanAnalytics":24,"./assets/common-plugin/Scripts/YouWanSDK/EventAdInfo":138,"./assets/common-plugin/Scripts/AdAgentBili":174,"./assets/common-plugin/Scripts/UMengSDK/quickGame/uma.min":177,"./assets/res/effects/BgScroll":61,"./assets/resources/i18n/en":62,"./assets/resources/i18n/zh":139,"./assets/scripts/Framework/Constant":26,"./assets/scripts/Framework/DataMgr":8,"./assets/scripts/Framework/FlyCoin":140,"./assets/scripts/Framework/GameCtr":141,"./assets/scripts/Framework/GameLevel":142,"./assets/scripts/Framework/GameStartScene":143,"./assets/scripts/Framework/Msg":145,"./assets/scripts/Framework/GameMgr":60,"./assets/scripts/Framework/QEasing":144,"./assets/scripts/Framework/QMoveAction":146,"./assets/scripts/Framework/QRotation":148,"./assets/scripts/Framework/QScaleAction":147,"./assets/scripts/Framework/QTween":149,"./assets/scripts/Framework/ResMgr":63,"./assets/scripts/Framework/SceneMgr":150,"./assets/scripts/Framework/ShowDate":151,"./assets/scripts/Framework/StartScene":152,"./assets/scripts/Framework/UIMgr":167,"./assets/scripts/Framework/UIPage":154,"./assets/scripts/Framework/TweenEffect":64,"./assets/scripts/Framework/frameNode":169,"./assets/scripts/Framework/AudioMgr":168,"./assets/scripts/Game/ani":65,"./assets/scripts/Game/bullet":67,"./assets/scripts/Game/gameDate":66,"./assets/scripts/Game/ZombieBase":153,"./assets/scripts/Game/jingyan":155,"./assets/scripts/Game/gameMgr":80,"./assets/scripts/Game/mb":162,"./assets/scripts/Game/person":68,"./assets/scripts/Game/player":9,"./assets/scripts/Game/prop":156,"./assets/scripts/Game/setMap":157,"./assets/scripts/Game/testPoint":159,"./assets/scripts/Game/weapon":69,"./assets/scripts/Game/showEffect":158,"./assets/scripts/Game/UpgradeMgr":180,"./assets/scripts/UI/GuideLayer":160,"./assets/scripts/UI/ShareOrVideo":163,"./assets/scripts/UI/UIADPanel":164,"./assets/scripts/UI/PhysicalBord":161,"./assets/scripts/UI/UIBackPanel":70,"./assets/scripts/UI/UIGameLoadingPage":166,"./assets/scripts/UI/UIGamePage":27,"./assets/scripts/UI/UIHomePage":176,"./assets/scripts/UI/UIOverPage":15,"./assets/scripts/UI/UILoadingPage":165,"./assets/scripts/UI/UIPausePanel":71,"./assets/scripts/UI/UIRankingPanel":10,"./assets/scripts/UI/UISignPage":72,"./assets/scripts/UI/UITimePage":74,"./assets/scripts/UI/UIRevivePanel":73,"./assets/scripts/UI/UITrySkinPanel":76,"./assets/scripts/UI/UITurntablePage":16,"./assets/scripts/UI/UIUpgradePanel":29,"./assets/scripts/UI/UIWeaponLevelPanel":75,"./assets/scripts/UI/redPoint":172,"./assets/scripts/UI/CoinBord":170,"./assets/scripts/commonUi/listItem":81,"./assets/scripts/commonUi/list":178,"./assets/scripts/Framework/CocosZ":28,"./assets/common-plugin/Scripts/AdAgent4399":171},"path":"preview-scripts/__qc_index__.js"},{"deps":{"SpriteFrameSet":4},"path":"preview-scripts/i18n-plugin/LocalizedSprite.js"},{"deps":{"polyglot.min":5},"path":"preview-scripts/i18n-plugin/LanguageData.js"},{"deps":{"LanguageData":2},"path":"preview-scripts/i18n-plugin/LocalizedLabel.js"},{"deps":{},"path":"preview-scripts/i18n-plugin/SpriteFrameSet.js"},{"deps":{},"path":"preview-scripts/i18n-plugin/polyglot.min.js"},{"deps":{"./Utils":185,"./PlatUtils":38,"./AldUtils":88,"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/LuckBoxPannel.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/Encrypt/CryptoJS.js"},{"deps":{"./Constant":26,"../Game/weapon":69},"path":"preview-scripts/assets/scripts/Framework/DataMgr.js"},{"deps":{"LanguageData":2,"../Framework/CocosZ":28,"../Framework/Constant":26,"./bullet":67,"./gameDate":66,"./gameMgr":80,"./person":68,"./UpgradeMgr":180,"./weapon":69},"path":"preview-scripts/assets/scripts/Game/player.js"},{"deps":{"LanguageData":2,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":28,"../Framework/Constant":26,"../Framework/UIPage":154,"../Framework/TweenEffect":64},"path":"preview-scripts/assets/scripts/UI/UIRankingPanel.js"},{"deps":{"./PlatUtils":38,"./CompatibleTool":89,"./Utils":185,"./YZ_Constant":43,"./YouWanSDK/YouWanAnalytics":24,"./YouWanSDK/EventAdInfo":138},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeInsert.js"},{"deps":{"./PlatUtils":38,"./YZ_Constant":43,"./Utils":185,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_IOS.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Xiaomi.js"},{"deps":{"./Utils":185,"./YZ_Constant":43,"./CompatibleTool":89,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Turntable.js"},{"deps":{"LanguageData":2,"../Framework/UIPage":154,"../Framework/Constant":26,"../Framework/CocosZ":28,"../../common-plugin/Scripts/PlatUtils":38,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/YZ_Constant":43,"../Game/gameMgr":80,"../Game/UpgradeMgr":180},"path":"preview-scripts/assets/scripts/UI/UIOverPage.js"},{"deps":{"LanguageData":2,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":28,"../Framework/Constant":26,"../Framework/Msg":145,"../Game/gameDate":66,"../Framework/UIPage":154,"../Game/weapon":69},"path":"preview-scripts/assets/scripts/UI/UITurntablePage.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185,"./FaceBookSdk/FBAdManager":25},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentFaceBook.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_LocalStorage":123,"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Baidu.js"},{"deps":{"./Utils":185,"./PlatUtils":38,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Kwai.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":177,"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Vivo.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Native.js"},{"deps":{"./md5.js":58,"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_QTT.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_LocalStorage":123,"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_QQ.js"},{"deps":{"../PlatUtils":38,"../Utils":185,"../YZ_Constant":43,"../YZ_LocalStorage":123,"./EventAdInfo":138},"path":"preview-scripts/assets/common-plugin/Scripts/YouWanSDK/YouWanAnalytics.js"},{"deps":{"../Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/FaceBookSdk/FBAdManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/Constant.js"},{"deps":{"LanguageData":2,"../Framework/Constant":26,"../Framework/UIPage":154,"../Framework/CocosZ":28,"../../common-plugin/Scripts/PlatUtils":38,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/YZ_Constant":43,"../Game/gameMgr":80},"path":"preview-scripts/assets/scripts/UI/UIGamePage.js"},{"deps":{"LanguageData":2,"./GameMgr":60,"./Constant":26,"./DataMgr":8,"./UIMgr":167,"./ResMgr":63,"./SceneMgr":150,"./AudioMgr":168,"../../common-plugin/Scripts/PlatUtils":38,"../../common-plugin/Scripts/Utils":185,"./Msg":145},"path":"preview-scripts/assets/scripts/Framework/CocosZ.js"},{"deps":{"../Framework/UIPage":154,"../Framework/Constant":26,"../Framework/CocosZ":28,"../../common-plugin/Scripts/Utils":185,"../Game/UpgradeMgr":180,"../../common-plugin/Scripts/PlatUtils":38,"../Framework/TweenEffect":64,"../Game/gameMgr":80},"path":"preview-scripts/assets/scripts/UI/UIUpgradePanel.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentKwai.js"},{"deps":{"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185,"./AdAgent":136},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentQQ.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./Utils":185,"./PlatUtils":38},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentQTT.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentNative.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentWiFi.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/AdSDK.js"},{"deps":{"./Utils":185,"./YZ_Constant":43,"./PlatUtils":38},"path":"preview-scripts/assets/common-plugin/Scripts/OpenRedBagPanel.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/ListItem.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/PlatUtils.js"},{"deps":{"./Utils":185,"./YZ_Constant":43,"./AldUtils":88,"./PlatUtils":38,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/RewardBoxPanel.js"},{"deps":{"./Utils":185,"./YZ_Constant":43,"./PlatUtils":38},"path":"preview-scripts/assets/common-plugin/Scripts/RewardShortCutPanel.js"},{"deps":{"./Utils":185,"./CompatibleTool":89,"./YZ_Constant":43,"./PlatUtils":38},"path":"preview-scripts/assets/common-plugin/Scripts/ShareRecordPanel.js"},{"deps":{"./PlatUtils":38,"./YZ_Constant":43,"./Utils":185,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/WechatTool.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Constant.js"},{"deps":{"./YZ_Constant":43,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ListView.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./CompatibleTool":89,"./YouWanSDK/EventAdInfo":138,"./YouWanSDK/YouWanAnalytics":24},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeBanner.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeItem.js"},{"deps":{"./CompatibleTool":89,"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeSplashView.js"},{"deps":{"./Utils":185,"./PlatUtils":38,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Douyin.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":177,"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_HuaWei.js"},{"deps":{"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Broswer.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Cocosplay.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_FaceBook.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Hago.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_UC.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Wifi.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YzRealNameAuthPanel.js"},{"deps":{"./CompatibleTool":89,"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YzUserPrivacyPanel.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/md5.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBaidu.js"},{"deps":{"LanguageData":2,"./GameCtr":141,"./CocosZ":28,"./Constant":26,"./Msg":145,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/YZ_Constant":43,"../../common-plugin/Scripts/YZ_LocalStorage":123,"../Game/UpgradeMgr":180},"path":"preview-scripts/assets/scripts/Framework/GameMgr.js"},{"deps":{},"path":"preview-scripts/assets/res/effects/BgScroll.js"},{"deps":{},"path":"preview-scripts/assets/resources/i18n/en.js"},{"deps":{"./CocosZ":28},"path":"preview-scripts/assets/scripts/Framework/ResMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/TweenEffect.js"},{"deps":{"../Framework/CocosZ":28,"./weapon":69,"./gameDate":66},"path":"preview-scripts/assets/scripts/Game/ani.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/gameDate.js"},{"deps":{"../Framework/CocosZ":28,"./gameMgr":80,"../Framework/Constant":26,"./person":68},"path":"preview-scripts/assets/scripts/Game/bullet.js"},{"deps":{"LanguageData":2,"../../common-plugin/Scripts/PlatUtils":38,"../Framework/CocosZ":28,"../Framework/Constant":26,"./gameDate":66,"./gameMgr":80,"./weapon":69},"path":"preview-scripts/assets/scripts/Game/person.js"},{"deps":{"LanguageData":2,"../Framework/CocosZ":28,"../Framework/Constant":26,"../Framework/Msg":145,"./gameDate":66,"./gameMgr":80},"path":"preview-scripts/assets/scripts/Game/weapon.js"},{"deps":{"LanguageData":2,"../Framework/CocosZ":28,"../../common-plugin/Scripts/Utils":185,"../Framework/Constant":26,"../Framework/TweenEffect":64,"../Framework/UIPage":154},"path":"preview-scripts/assets/scripts/UI/UIBackPanel.js"},{"deps":{"../../common-plugin/Scripts/PlatUtils":38,"../../common-plugin/Scripts/Utils":185,"../../common-plugin/Scripts/YZ_Constant":43,"../Framework/CocosZ":28,"../Framework/Constant":26,"../Framework/UIPage":154,"../Game/gameMgr":80,"../Game/UpgradeMgr":180},"path":"preview-scripts/assets/scripts/UI/UIPausePanel.js"},{"deps":{"LanguageData":2,"../Framework/UIPage":154,"../Framework/Constant":26,"../Framework/CocosZ":28,"../Framework/Msg":145,"../../common-plugin/Scripts/Utils":185,"../Framework/TweenEffect":64},"path":"preview-scripts/assets/scripts/UI/UISignPage.js"},{"deps":{"LanguageData":2,"../Framework/UIPage":154,"../Framework/Msg":145,"../Framework/Constant":26,"../Framework/CocosZ":28,"../../common-plugin/Scripts/Utils":185,"../Game/gameMgr":80},"path":"preview-scripts/assets/scripts/UI/UIRevivePanel.js"},{"deps":{"../Framework/UIPage":154,"../Framework/Constant":26,"../Framework/CocosZ":28,"../../common-plugin/Scripts/Utils":185,"../Framework/TweenEffect":64,"../Game/gameDate":66},"path":"preview-scripts/assets/scripts/UI/UITimePage.js"},{"deps":{"LanguageData":2,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":28,"../Framework/Constant":26,"../Framework/Msg":145,"../Game/gameDate":66,"../Framework/UIPage":154,"../Game/weapon":69},"path":"preview-scripts/assets/scripts/UI/UIWeaponLevelPanel.js"},{"deps":{"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":28,"../Framework/Constant":26,"../Framework/UIPage":154,"../Game/ani":65},"path":"preview-scripts/assets/scripts/UI/UITrySkinPanel.js"},{"deps":{"./YZ_NativeBanner":45,"./AdAgent":136,"./YZ_NativeInsert":11,"./YZ_Constant":43,"./CommonConfig":183,"./YZ_NativeAdObject":124,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBroser.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentDouyin.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentXiaomi.js"},{"deps":{"../Framework/CocosZ":28,"../../common-plugin/Scripts/Utils":185,"../Framework/Constant":26,"./UpgradeMgr":180,"../../common-plugin/Scripts/YZ_Constant":43,"./ZombieBase":153},"path":"preview-scripts/assets/scripts/Game/gameMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/commonUi/listItem.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentHago.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./PlatUtils":38,"./CompatibleTool":89,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentWechat.js"},{"deps":{"./PlatUtils":38,"./AdAgentNative":33,"./AdAgentOPPO":184,"./AdAgentWechat":83,"./AdAgentVIVO":179,"./AdAgentBaidu":59,"./AdAgentDouyin":78,"./YZ_Constant":43,"./AdAgentQQ":31,"./AdAgentQTT":32,"./Utils":185,"./AdAgentXiaomi":79,"./AdAgent4399":171,"./AdAgentCocosplay":173,"./AdAgentIOS":87,"./AdAgentUC":85,"./AdAgentBili":174,"./AdAgentKwai":30,"./AdAgentBroser":77,"./BeforGameOverRecGamesPanel":92,"./AdAgentWiFi":34,"./AdAgentHago":82,"./AdAgentHuaWei":182,"./AdAgentFaceBook":17,"./YzCustomAdPanel":135,"./AdAgentGoogleWeb":86},"path":"preview-scripts/assets/common-plugin/Scripts/AdManager.js"},{"deps":{"./AdAgent":136,"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentUC.js"},{"deps":{"./AdAgent":136},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentGoogleWeb.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentIOS.js"},{"deps":{"./YZ_Constant":43,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AldUtils.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/CompatibleTool.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/CheckIsShowIcon.js"},{"deps":{"./Utils":185,"./CompatibleTool":89,"./PlatUtils":38},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxListGameItem.js"},{"deps":{"./Utils":185,"./YZ_Constant":43,"./PlatUtils":38},"path":"preview-scripts/assets/common-plugin/Scripts/BeforGameOverRecGamesPanel.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/GameBox.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxListItem.js"},{"deps":{"./Utils":185,"./PlatUtils":38,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/GameBoxSlideItem.js"},{"deps":{"./Utils":185,"./PlatUtils":38,"./YZ_Constant":43,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/GameItem.js"},{"deps":{"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/GamePage.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/GameSDK.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/LogOutView.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/HandAction.js"},{"deps":{"./Utils":185,"./YZ_Constant":43,"./PlatUtils":38},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesPanel.js"},{"deps":{"./GameItem":96,"./YZ_Constant":43,"./Utils":185,"./List":181},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesPanel1.js"},{"deps":{"./Utils":185,"./PlatUtils":38,"./NativeTryGamesWidget":105,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/NativeTryGameNode.js"},{"deps":{"./Utils":185,"./PlatUtils":38,"./AldUtils":88,"./CompatibleTool":89,"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/MoreGamesWidget.js"},{"deps":{"./Utils":185,"./PlatUtils":38},"path":"preview-scripts/assets/common-plugin/Scripts/NativeTryGamesWidget.js"},{"deps":{"./AldUtils":88,"./Utils":185,"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/QCrossWidget6.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/QCrossWidgetItem.js"},{"deps":{"./Utils":185,"./YZ_Constant":43,"./PlatUtils":38},"path":"preview-scripts/assets/common-plugin/Scripts/RecommendGamesNode.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/RedBagProgressNode.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/RedBagProgressWidget.js"},{"deps":{"./Utils":185,"./AldUtils":88,"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/RewardInsert.js"},{"deps":{"./Utils":185,"./PlatUtils":38},"path":"preview-scripts/assets/common-plugin/Scripts/RecommendGamesWidget.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/RewardRedBagPanel.js"},{"deps":{"./Utils":185,"./YZ_Constant":43,"./PlatUtils":38,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/TryGameNode.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/TryGamesWidget.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalNode.js"},{"deps":{"./Utils":185,"./YZ_Constant":43,"./PlatUtils":38,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/VerticalRecommentPanel.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ActionScale.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalWidget.js"},{"deps":{"./Utils":185,"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/WithdrawalPanel.js"},{"deps":{"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_EventManager.js"},{"deps":{"./PlatUtils":38,"./Utils":185,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_BaiduRecommendWidget.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_LocalStorage.js"},{"deps":{"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_NativeAdObject.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ShakeNode.js"},{"deps":{"./Utils":185,"./PlatUtils":38,"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_RecommendGamesBanner.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_RecordWidget.js"},{"deps":{"./Utils":185,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_ShortcutWidget.js"},{"deps":{"./Utils":185,"./AldUtils":88,"./YZ_Constant":43,"./List":181},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_StatementRecommentAd.js"},{"deps":{"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_4399.js"},{"deps":{"./Utils":185,"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_GameExitDialog.js"},{"deps":{"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Bili.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_GoogleWeb.js"},{"deps":{"./Utils":185,"./YZ_Constant":43},"path":"preview-scripts/assets/common-plugin/Scripts/YzLoginPanel.js"},{"deps":{"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/YzCustomAdPanel.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgent.js"},{"deps":{"./FBAdManager":25},"path":"preview-scripts/assets/common-plugin/Scripts/FaceBookSdk/FBSdk.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/YouWanSDK/EventAdInfo.js"},{"deps":{},"path":"preview-scripts/assets/resources/i18n/zh.js"},{"deps":{"./CocosZ":28},"path":"preview-scripts/assets/scripts/Framework/FlyCoin.js"},{"deps":{"./Constant":26,"./CocosZ":28,"../Game/gameMgr":80},"path":"preview-scripts/assets/scripts/Framework/GameCtr.js"},{"deps":{"./CocosZ":28,"./Constant":26},"path":"preview-scripts/assets/scripts/Framework/GameLevel.js"},{"deps":{"./CocosZ":28,"./Constant":26},"path":"preview-scripts/assets/scripts/Framework/GameStartScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/QEasing.js"},{"deps":{"./CocosZ":28},"path":"preview-scripts/assets/scripts/Framework/Msg.js"},{"deps":{"./QEasing":144},"path":"preview-scripts/assets/scripts/Framework/QMoveAction.js"},{"deps":{"./QEasing":144},"path":"preview-scripts/assets/scripts/Framework/QScaleAction.js"},{"deps":{"./QEasing":144},"path":"preview-scripts/assets/scripts/Framework/QRotation.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/QTween.js"},{"deps":{"../Game/gameMgr":80,"./CocosZ":28,"../Game/setMap":157,"../UI/GuideLayer":160},"path":"preview-scripts/assets/scripts/Framework/SceneMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/ShowDate.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/StartScene.js"},{"deps":{"../Game/gameDate":66,"../Game/person":68,"../Game/gameMgr":80,"../Game/UpgradeMgr":180,"./bullet":67,"../Framework/Constant":26,"../Framework/CocosZ":28,"../../common-plugin/Scripts/PlatUtils":38},"path":"preview-scripts/assets/scripts/Game/ZombieBase.js"},{"deps":{"../../common-plugin/Scripts/Utils":185,"./CocosZ":28},"path":"preview-scripts/assets/scripts/Framework/UIPage.js"},{"deps":{"../../common-plugin/Scripts/YZ_Constant":43,"../Framework/CocosZ":28,"./gameMgr":80,"../Framework/Constant":26,"./UpgradeMgr":180},"path":"preview-scripts/assets/scripts/Game/jingyan.js"},{"deps":{"../Framework/CocosZ":28,"./gameMgr":80,"./person":68,"./weapon":69,"./UpgradeMgr":180},"path":"preview-scripts/assets/scripts/Game/prop.js"},{"deps":{"../Framework/CocosZ":28,"./gameMgr":80},"path":"preview-scripts/assets/scripts/Game/setMap.js"},{"deps":{"./gameMgr":80},"path":"preview-scripts/assets/scripts/Game/showEffect.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game/testPoint.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GuideLayer.js"},{"deps":{"LanguageData":2,"../Framework/Constant":26,"../Framework/CocosZ":28,"../Framework/Msg":145},"path":"preview-scripts/assets/scripts/UI/PhysicalBord.js"},{"deps":{"../Framework/CocosZ":28,"../Framework/Constant":26,"./gameMgr":80},"path":"preview-scripts/assets/scripts/Game/mb.js"},{"deps":{"../Framework/CocosZ":28,"../Framework/Constant":26},"path":"preview-scripts/assets/scripts/UI/ShareOrVideo.js"},{"deps":{"LanguageData":2,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":28,"../Framework/Msg":145},"path":"preview-scripts/assets/scripts/UI/UIADPanel.js"},{"deps":{"../Framework/UIPage":154,"../Framework/Constant":26,"../Framework/CocosZ":28,"../../common-plugin/Scripts/PlatUtils":38},"path":"preview-scripts/assets/scripts/UI/UILoadingPage.js"},{"deps":{"../Framework/UIPage":154,"../Framework/Constant":26,"../Framework/CocosZ":28,"./GuideLayer":160},"path":"preview-scripts/assets/scripts/UI/UIGameLoadingPage.js"},{"deps":{"./Constant":26,"../UI/UIHomePage":176,"../UI/UILoadingPage":165,"../UI/UIGamePage":27,"../UI/UIRevivePanel":73,"../UI/UIGameLoadingPage":166,"../UI/UIPausePanel":71,"../UI/UITurntablePage":16,"../UI/UITrySkinPanel":76,"../UI/UIWeaponLevelPanel":75,"../UI/UIUpgradePanel":29,"../UI/UIOverPage":15,"../UI/UISignPage":72,"../UI/UITimePage":74,"../UI/UIBackPanel":70,"../UI/UIRankingPanel":10},"path":"preview-scripts/assets/scripts/Framework/UIMgr.js"},{"deps":{"./CocosZ":28},"path":"preview-scripts/assets/scripts/Framework/AudioMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Framework/frameNode.js"},{"deps":{"LanguageData":2,"../Framework/Constant":26,"../Framework/CocosZ":28,"../Framework/Msg":145},"path":"preview-scripts/assets/scripts/UI/CoinBord.js"},{"deps":{"./AdAgent":136,"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgent4399.js"},{"deps":{"../Framework/CocosZ":28,"../Framework/Constant":26,"../Game/gameDate":66},"path":"preview-scripts/assets/scripts/UI/redPoint.js"},{"deps":{"./AdAgent":136,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentCocosplay.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentBili.js"},{"deps":{"./UMengSDK/quickGame/uma.min.js":177,"./PlatUtils":38,"./YouWanSDK/YouWanAnalytics":24,"./Utils":185,"./YZ_Constant":43,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/YZ_Tool_Oppo.js"},{"deps":{"LanguageData":2,"../Framework/UIPage":154,"../Framework/Constant":26,"../../common-plugin/Scripts/Utils":185,"../Framework/CocosZ":28,"../../common-plugin/Scripts/YZ_Constant":43,"../Game/ani":65,"../../common-plugin/Scripts/PlatUtils":38,"../Framework/FlyCoin":140,"../Game/gameDate":66,"../Game/weapon":69,"../Framework/Msg":145},"path":"preview-scripts/assets/scripts/UI/UIHomePage.js"},{"deps":{},"path":"preview-scripts/assets/common-plugin/Scripts/UMengSDK/quickGame/uma.min.js"},{"deps":{"listItem":81},"path":"preview-scripts/assets/scripts/commonUi/list.js"},{"deps":{"./AdAgent":136,"./YZ_Constant":43,"./NativeTryGamesWidget":105,"./PlatUtils":38,"./Utils":185,"./CompatibleTool":89,"./YZ_NativeAdObject":124},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentVIVO.js"},{"deps":{"../Framework/CocosZ":28,"../Framework/Constant":26,"./gameMgr":80,"./bullet":67,"./jingyan":155,"./weapon":69,"./ZombieBase":153,"./prop":156,"../../common-plugin/Scripts/Utils":185},"path":"preview-scripts/assets/scripts/Game/UpgradeMgr.js"},{"deps":{"./ListItem":37,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/List.js"},{"deps":{"./YZ_Constant":43,"./AdAgent":136,"./Utils":185,"./PlatUtils":38,"./YZ_NativeAdObject":124,"./NativeTryGamesWidget":105,"./CompatibleTool":89},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentHuaWei.js"},{"deps":{"./YZ_Constant":43,"./PlatUtils":38,"./Utils":185,"./YZ_LocalStorage":123},"path":"preview-scripts/assets/common-plugin/Scripts/CommonConfig.js"},{"deps":{"./AdAgent":136,"./PlatUtils":38,"./Utils":185,"./YZ_Constant":43,"./YZ_NativeAdObject":124,"./NativeTryGamesWidget":105,"./CompatibleTool":89,"./YouWanSDK/EventAdInfo":138,"./YouWanSDK/YouWanAnalytics":24},"path":"preview-scripts/assets/common-plugin/Scripts/AdAgentOPPO.js"},{"deps":{"./AdManager":84,"./CommonConfig":183,"./WechatTool":42,"./PlatUtils":38,"./YZ_Tool_Baidu":18,"./YZ_Tool_Native":21,"./YZ_Tool_Oppo":175,"./YZ_Tool_Vivo":20,"./YZ_Constant":43,"./YZ_Tool_QTT":22,"./YZ_Tool_QQ":23,"./YZ_Tool_Douyin":48,"./YZ_Tool_Xiaomi":13,"./YZ_Tool_Cocosplay":51,"./AldUtils":88,"./YZ_Tool_UC":54,"./YZ_Tool_4399":130,"./YZ_Tool_IOS":12,"./YZ_Tool_Bili":132,"./YZ_Tool_Kwai":19,"./YZ_Tool_Hago":53,"./YZ_Tool_Broswer":50,"./YZ_Tool_Wifi":55,"./RedBagProgressWidget":110,"./CompatibleTool":89,"./YZ_Tool_HuaWei":49,"./OpenRedBagPanel":36,"./YZ_Tool_FaceBook":52,"./YzRealNameAuthPanel":56,"./YzUserPrivacyPanel":57,"./YZ_LocalStorage":123,"./Encrypt/CryptoJS":7,"./YZ_Tool_GoogleWeb":133},"path":"preview-scripts/assets/common-plugin/Scripts/Utils.js"}];
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
    