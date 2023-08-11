window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  en: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e219GIucpNLrSh66oAYwPq", "en");
    "use strict";
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages.en = {
      msg: {
        net_error: "The current network is not good, please restart the game",
        video_no: "No ads available",
        video_load_fail: "Video loading failed",
        Share_success: "Share success",
        share_fail: "Sharing failed",
        desktop_succ: "Create a desktop icon success",
        desktop_fail: "Create a desktop icon failed",
        jlylq: "Rewards have been collected",
        gxhdjb: "Congratulations to get gold ",
        gxhdzs: "Congratulations to get diamond ",
        gxhdxjs: "Congratulations to get a new role",
        gxhdxwq: "Congratulations to get a new weapon",
        gxhdnnp: "Congratulations to get birdGun",
        wzwfsyjn: "Cannot use skills when camouflaging",
        szwfsyjn: "Cannot use skills in water",
        jnlqz: "Skill cooling",
        mymb: "No target",
        mxbyzl: "Full blood without treatment",
        myzd: "No bullets",
        jnjssb: "Failed to unlock skill",
        ndwjs: "The difficulty did not unlock",
        gqwjs: "The level is not unlocked",
        djqhnd: "Click switching difficulty",
        dwbz: "Rank is insufficient",
        fhcg: "Resurrection successful",
        gpfxytsdwhq: "The skin needs to be promoted to obtain",
        gwqxytsdwhq: "The weapon needs to be promoted to obtain",
        gwqxytgjs: "The weapon through levels unlocked",
        xyzpsssq: "Try Your Luck on the wheel of fortune",
        gmsjyjzwq: "Melee weapons are disabled in current mode",
        jryqd: "Signed in today",
        qdcg: "Successful sign in",
        djankspjs: "Click the button to see the video unlock",
        sjcg: "Upgrade success",
        jswc: "Unlock completed ",
        zsbz: "Not enough diamonds",
        jlydz: "Reward has arrived"
      },
      load: {
        tip1: "Props such as branches, oil drum, cacti can disguise",
        tip2: "In the game, ranged weapons and melee weapons can be switched each other",
        tip3: "Game props can make you stronger"
      },
      home: {
        no: "Nothing",
        xzjs: "Select Role",
        xl: "HP:",
        ydsd: "Move Speed:",
        gjl: "Damage:",
        gjpl: "Attack Speed:",
        gjfw: "Attack Range:",
        dyl: "Bullets:",
        gqjl: "Level Rewards",
        ksyx: "Star Game"
      },
      try: {
        gjl: "Damage",
        gjpl: "Attack Speed",
        gjfw: "Attack Range",
        dyl: "Bullets"
      },
      game: {
        gameMess6_rask: "Mission: Capture 5 flags",
        player: "Player"
      },
      over: {
        killBoss: "Kill Boss",
        haveSkill: "Have skills",
        attribute: "Attribute",
        restart: "Restart",
        fanhui: "Return",
        bjxq: "NOW",
        lszj: "GOAT",
        gameTime: "Time:",
        kills: "Kills:",
        level: "level:",
        coin: "coin:",
        xlsx: "HP ceiling: ",
        wqsh: "Weapon damage: ",
        wqss: "Weapon speed: ",
        hdsd: "Reload speed: ",
        djrl: "Bullets : ",
        ydsd: "Moving speed: ",
        sqfw: "Picking region: ",
        killTip: '["Zerokill", "Firstblood", "Duoblekill", "Triplekill", "Quadrakill", "Pentakill", "Legendary"]'
      }
    };
    cc._RF.pop();
  }, {} ],
  zh: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1eedbEpZUBHApBzaCm+mgJQ", "zh");
    "use strict";
    window.i18n || (window.i18n = {});
    window.i18n.languages || (window.i18n.languages = {});
    window.i18n.languages.zh = {
      msg: {
        net_error: "\u5f53\u524d\u7f51\u7edc\u72b6\u6001\u4e0d\u4f73\uff0c\u8bf7\u91cd\u542f\u6e38\u620f",
        video_no: "\u6682\u65e0\u89c6\u9891\u5e7f\u544a",
        video_load_fail: "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25",
        Share_success: "\u5206\u4eab\u6210\u529f",
        share_fail: "\u5206\u4eab\u5931\u8d25",
        desktop_succ: "\u521b\u5efa\u684c\u9762\u56fe\u6807\u6210\u529f",
        desktop_fail: "\u521b\u5efa\u684c\u9762\u56fe\u6807\u5931\u8d25",
        jlylq: "\u5956\u52b1\u5df2\u9886\u53d6",
        gxhdjb: "\u606d\u559c\u83b7\u5f97\u91d1\u5e01 ",
        gxhdzs: "\u606d\u559c\u83b7\u5f97\u94bb\u77f3 ",
        gxhdxjs: "\u606d\u559c\u83b7\u5f97\u65b0\u89d2\u8272",
        gxhdxwq: "\u606d\u559c\u83b7\u5f97\u65b0\u6b66\u5668",
        gxhdnnp: "\u606d\u559c\u83b7\u5f97\u6b66\u5668\u9e1f\u9e1f\u70ae",
        wzwfsyjn: "\u4f2a\u88c5\u65e0\u6cd5\u4f7f\u7528\u6280\u80fd",
        szwfsyjn: "\u6c34\u4e2d\u65e0\u6cd5\u4f7f\u7528\u6280\u80fd",
        jnlqz: "\u6280\u80fd\u51b7\u5374\u4e2d",
        mymb: "\u6ca1\u6709\u76ee\u6807",
        mxbyzl: "\u6ee1\u8840\u4e0d\u7528\u6cbb\u7597",
        myzd: "\u6ca1\u6709\u5b50\u5f39",
        jnjssb: "\u6280\u80fd\u89e3\u9501\u5931\u8d25",
        ndwjs: "\u96be\u5ea6\u672a\u89e3\u9501",
        gqwjs: "\u5173\u5361\u672a\u89e3\u9501",
        djqhnd: "\u70b9\u51fb\u5207\u6362\u96be\u5ea6",
        dwbz: "\u6bb5\u4f4d\u4e0d\u8db3\uff0c\u8bf7\u7ee7\u7eed\u52aa\u529b",
        fhcg: "\u590d\u6d3b\u6210\u529f",
        gpfxytsdwhq: "\u8be5\u76ae\u80a4\u9700\u8981\u63d0\u5347\u6bb5\u4f4d\u83b7\u53d6",
        gwqxytsdwhq: "\u8be5\u6b66\u5668\u9700\u8981\u63d0\u5347\u6bb5\u4f4d\u83b7\u53d6",
        gwqxytgjs: "\u8be5\u6b66\u5668\u9700\u8981\u901a\u5173\u89e3\u9501",
        xyzpsssq: "\u53bb\u5e78\u8fd0\u8f6c\u76d8\u8bd5\u8bd5\u624b\u6c14\u5427",
        gmsjyjzwq: "\u5f53\u524d\u6a21\u5f0f\u7981\u7528\u8fd1\u6218\u6b66\u5668",
        jryqd: "\u4eca\u65e5\u5df2\u7b7e\u5230",
        qdcg: "\u7b7e\u5230\u6210\u529f",
        djankspjs: "\u70b9\u51fb\u6309\u94ae\u770b\u89c6\u9891\u89e3\u9501",
        sjcg: "\u5347\u7ea7\u6210\u529f",
        jswc: "\u89e3\u9501\u5b8c\u6210",
        zsbz: "\u94bb\u77f3\u4e0d\u8db3",
        jlydz: "\u5956\u52b1\u5df2\u5230\u8d26"
      },
      load: {
        tip1: "\u6811 \u679d\u3001\u6cb9 \u6876\u3001\u4ed9 \u4eba \u638c \u7b49 \u7269 \u54c1 \u5177 \u53ef \u4ee5 \u4f2a \u88c5 \uff01",
        tip2: "\u6e38 \u620f \u4e2d \u8fdc \u7a0b \u6b66 \u5668 \u548c \u8fd1 \u6218 \u6b66 \u5668 \u53ef \u4ee5 \u76f8 \u4e92 \u5207 \u6362 \uff01",
        tip3: "\u6e38 \u620f \u4e2d \u7684 \u9053 \u5177 \u80fd \u8ba9 \u60a8 \u53d8 \u5f3a \uff01"
      },
      home: {
        xzjs: "\u9009\u62e9\u89d2\u8272",
        xl: "\u8840\u91cf:",
        ydsd: "\u79fb\u52a8\u901f\u5ea6:",
        gjl: "\u653b\u51fb\u529b:",
        gjpl: "\u653b\u51fb\u9891\u7387:",
        gjfw: "\u653b\u51fb\u8303\u56f4:",
        dyl: "\u5f39\u836f\u91cf:",
        gqjl: "\u5173\u5361\u5956\u52b1",
        ksyx: "\u5f00\u59cb\u6e38\u620f"
      },
      try: {
        gjl: "\u653b\u51fb\u529b:",
        gjpl: "\u653b\u51fb\u9891\u7387:",
        gjfw: "\u653b\u51fb\u8303\u56f4:",
        dyl: "\u5f39\u836f\u91cf:"
      },
      game: {
        gameMess6_rask: "\u4efb\u52a1\uff1a\u593a\u53d65\u9762\u65d7\u5e1c",
        player: "\u73a9\u5bb6"
      },
      over: {
        no: "\u65e0",
        killBoss: "\u51fb\u6740Boss",
        haveSkill: "\u62e5\u6709\u6280\u80fd",
        attribute: "\u5c5e\u6027",
        restart: "\u91cd\u65b0\u5f00\u59cb",
        fanhui: "\u8fd4\u56de\u6574\u7406",
        bjxq: "\u672c\u5c40\u8be6\u60c5",
        lszj: "\u5386\u53f2\u6700\u4f73",
        gameTime: "\u6311\u6218\u65f6\u95f4:",
        kills: "\u6740\u654c\u6570:",
        level: "\u7b49\u7ea7:",
        coin: "\u91d1\u5e01:",
        xlsx: "\u8840\u91cf\u4e0a\u9650: ",
        wqsh: "\u6b66\u5668\u4f24\u5bb3: ",
        wqss: "\u6b66\u5668\u5c04\u901f: ",
        hdsd: "\u6362\u5f39\u901f\u5ea6: ",
        djrl: "\u5f39\u5939\u5bb9\u91cf: ",
        ydsd: "\u79fb\u52a8\u901f\u5ea6: ",
        sqfw: "\u62fe\u53d6\u8303\u56f4: ",
        killTip: '["\u65e0", "\u4e00\u8840", "\u4e8c\u6740", "\u4e09\u6740", "\u56db\u6740", "\u4e94\u6740", "\u8d85\u795e"]'
      }
    };
    cc._RF.pop();
  }, {} ]
}, {}, [ "en", "zh" ]);