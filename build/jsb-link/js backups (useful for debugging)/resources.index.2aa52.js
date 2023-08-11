window.__require = function e(s, n, l) {
function o(t, a) {
if (!n[t]) {
if (!s[t]) {
var d = t.split("/");
d = d[d.length - 1];
if (!s[d]) {
var r = "function" == typeof __require && __require;
if (!a && r) return r(d, !0);
if (i) return i(d, !0);
throw new Error("Cannot find module '" + t + "'");
}
t = d;
}
var g = n[t] = {
exports: {}
};
s[t][0].call(g.exports, function(e) {
return o(s[t][1][e] || e);
}, g, g.exports, e, s, n, l);
}
return n[t].exports;
}
for (var i = "function" == typeof __require && __require, t = 0; t < l.length; t++) o(l[t]);
return o;
}({
en: [ function(e, s, n) {
"use strict";
cc._RF.push(s, "4e219GIucpNLrSh66oAYwPq", "en");
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
zh: [ function(e, s, n) {
"use strict";
cc._RF.push(s, "1eedbEpZUBHApBzaCm+mgJQ", "zh");
window.i18n || (window.i18n = {});
window.i18n.languages || (window.i18n.languages = {});
window.i18n.languages.zh = {
msg: {
net_error: "当前网络状态不佳，请重启游戏",
video_no: "暂无视频广告",
video_load_fail: "视频加载失败",
Share_success: "分享成功",
share_fail: "分享失败",
desktop_succ: "创建桌面图标成功",
desktop_fail: "创建桌面图标失败",
jlylq: "奖励已领取",
gxhdjb: "恭喜获得金币 ",
gxhdzs: "恭喜获得钻石 ",
gxhdxjs: "恭喜获得新角色",
gxhdxwq: "恭喜获得新武器",
gxhdnnp: "恭喜获得武器鸟鸟炮",
wzwfsyjn: "伪装无法使用技能",
szwfsyjn: "水中无法使用技能",
jnlqz: "技能冷却中",
mymb: "没有目标",
mxbyzl: "满血不用治疗",
myzd: "没有子弹",
jnjssb: "技能解锁失败",
ndwjs: "难度未解锁",
gqwjs: "关卡未解锁",
djqhnd: "点击切换难度",
dwbz: "段位不足，请继续努力",
fhcg: "复活成功",
gpfxytsdwhq: "该皮肤需要提升段位获取",
gwqxytsdwhq: "该武器需要提升段位获取",
gwqxytgjs: "该武器需要通关解锁",
xyzpsssq: "去幸运转盘试试手气吧",
gmsjyjzwq: "当前模式禁用近战武器",
jryqd: "今日已签到",
qdcg: "签到成功",
djankspjs: "点击按钮看视频解锁",
sjcg: "升级成功",
jswc: "解锁完成",
zsbz: "钻石不足",
jlydz: "奖励已到账"
},
load: {
tip1: "树 枝、油 桶、仙 人 掌 等 物 品 具 可 以 伪 装 ！",
tip2: "游 戏 中 远 程 武 器 和 近 战 武 器 可 以 相 互 切 换 ！",
tip3: "游 戏 中 的 道 具 能 让 您 变 强 ！"
},
home: {
xzjs: "选择角色",
xl: "血量:",
ydsd: "移动速度:",
gjl: "攻击力:",
gjpl: "攻击频率:",
gjfw: "攻击范围:",
dyl: "弹药量:",
gqjl: "关卡奖励",
ksyx: "开始游戏"
},
try: {
gjl: "攻击力:",
gjpl: "攻击频率:",
gjfw: "攻击范围:",
dyl: "弹药量:"
},
game: {
gameMess6_rask: "任务：夺取5面旗帜",
player: "玩家"
},
over: {
no: "无",
killBoss: "击杀Boss",
haveSkill: "拥有技能",
attribute: "属性",
restart: "重新开始",
fanhui: "返回整理",
bjxq: "本局详情",
lszj: "历史最佳",
gameTime: "挑战时间:",
kills: "杀敌数:",
level: "等级:",
coin: "金币:",
xlsx: "血量上限: ",
wqsh: "武器伤害: ",
wqss: "武器射速: ",
hdsd: "换弹速度: ",
djrl: "弹夹容量: ",
ydsd: "移动速度: ",
sqfw: "拾取范围: ",
killTip: '["无", "一血", "二杀", "三杀", "四杀", "五杀", "超神"]'
}
};
cc._RF.pop();
}, {} ]
}, {}, [ "en", "zh" ]);