/******************************************
 * @name 绿色产业链通杀
 * @description 好男人专用脚本
 * @channel https://t.me/yqc_123
 * @feedback https://t.me/yqc_777
 * @version 1.0.5
******************************************
## 更新日志

### 20231108

> 修复撸先生播放问题、去除全局广告

> 增加一条快手的域名

### 20231021

#### 适配 Surge

> 可以使用 👉[模块](https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp/lsp.sgmodule)

> 亦可使用 Script Hub 直接转换该脚本

### 20231018

> 删除 91av, 增加抖阴 Porn

## 脚本注明

1. 脚本只是针对基于 Quantumult X 和 Surge 对 Javascript 和 WEB 逆向的学习，不得用于商业用途，否则后果自负。
2. 不保证脚本合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
3. 本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
4. 转载脚本请注明来源，欢迎分享，拒绝倒卖，倒卖 🐕 必死 🐎。
5. 如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
6. 所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明, 本人保留随时更改或补充此声明的权利, 一旦您使用或复制了此脚本，即视为您已接受此免责声明。
7. 欢迎对[本仓库](https://github.com/Yuheng0101/X)Star✅，但请不要 Fork❌。

## 脚本描述

解锁下方所有 APP(仅限轻量版)

## 下载地址

[50 度灰](https://50.aff009.net/af/jDM3U)

[91 短视频](https://dbf4801.zfijby.com/aff-hVbkx)

[汤头条](https://ttt.aff009.net/af/caJtT)

[微密圈](https://app.wmq.life/aff-nVJM)

[小蓝视频](https://p4.gv009.fun/#/home)

[她趣](https://app.xttworld.com/af/bnjU)

[撸先生](http://b.sir010.co/)

[抖阴 Porn](https://dypj.app004.me/aff-atdvk)

******************************************
# Quantumult X
[mimt]
hostname = *50a*,*bmafdxt*,*psovzwr*,*yxlauhm*,*yiqiapi*,*jiujiao*,*myb*api*,*hichatapi*,*tbrapi*,*wmqapi*,*gvlan*,*ksapi*,*nbpqfxr*,*91av*,*xtt*,*dyweb*,*argaxqn*,*eoeicmg*

[rewrite_local]
# 50度灰/汤头条/他趣
^http[s]?:\/\/.*((50(aa|ab|apia)pi|xtt.*)\.com|tbrapi\.org)\/pwa\.php\/api\/(user\/userinfo|MvDetail\/(detail|xiao_detail)|home\/(getOpenAdsAndVersion|appcenter)|system\/getad)$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp.js
# 91短视频/微密圈
^http[s]?:\/\/.*(yiqiapi|jiujiao|myb[0-9]+api|wmqapi|psovzwr|bmafdxt|yxlauhm).*\/pwa\.php$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp.js
# 撸先生
^http[s]?:\/\/.*hichatapi.+\/api\.php$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp.js
# 小蓝视频/快手
^http[s]?:\/\/.*(gvlan|ksapi|nbpqfxr).*pwa\.php.*(home\/getConfig|user(s)?\/getBaseInfo|(mv|manhua|story)\/detail|mv\/(pwa_main|listOfFeature|getFeature)|ChargeVideo\/(upIndex|vipIndex|recommend))$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp.js
# 抖阴Porn
^http[s]?:\/\/.*(dyweb|argaxqn|eoeicmg).+\/pwa\.php$ url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/lsp.js

******************************************/
const $ = new Env('绿色产业链通杀脚本')
let body = $response.body
let obj = JSON.parse(body)
const domainReg = new RegExp(/^(http[s]?:\/\/)([^\/]+)/g)
const domain = domainReg.exec($request.url)[0]
;(async () => {
    switch (!![]) {
        // 50度灰/他趣
        case /(50|xtt)/.test(domain):
            await handle50DHAndTQ()
            break
        // 91短视频
        case /(yiqiapi|jiujiao|myb[0-9]+api|wmqapi|psovzwr|bmafdxt|yxlauhm)/.test(domain):
            await handle91DSPORWMQ(0)
            break
        // 撸先生
        case /hichat/.test(domain):
            await handleLXS()
            break
        // 汤头条
        case /tbr/.test(domain):
            await handleTTT()
            break
        // 微密圈
        case /wmq/.test(domain):
            await handle91DSPORWMQ(1)
            break
        // 小蓝视频
        case /gvlan/.test(domain):
            await handleXLSP()
            break
        // 快手
        case /ksapi|nbpqfxr/.test(domain):
            await handleKS()
            break
        // 抖阴Porn
        case /(dyweb|argaxqn|eoeicmg)/.test(domain):
            await handleDYPorn()
    }
})()
    .catch((e) => $.log('', `❌ ${$.name}, ${e}`))
    .finally(() => $.done({ body: JSON.stringify(obj) }))
async function handle50DHAndTQ(){console.log("\n===🔔50度灰===\n");var a=await DecryptResp(obj.data,"50dh");try{a=JSON.parse(a)}catch(a){}if(/system\/getad/.test($request.url))a.data=[];else if(/home\/appcenter/.test($request.url))a.data.banner=[];else if(/home\/getOpenAdsAndVersion/.test($request.url))a.data.ads={},a.data.pop_ads=[];else if(/\/user\/userinfo/.test($request.url))a.isVip=!0,a.daily_view=999,a.data.nickname="𝒀𝒖𝒉𝒆𝒏𝒈",a.data.followed=999,a.data.fabulous_count=999,a.data.videos_count=999,a.data.vip=!0,a.data.free_view_cnt=999,a.data.coins=999;else if(/MvDetail\/xiao_detail/.test($request.url))a.data.detail.preview_video=__fuck(a.data.detail.preview_video),a.data.detail.is_pay=!0,a.data.detail.status=2,a.isVip=!0;else if(/\/MvDetail\/(detail)/.test($request.url)){a.isVip=!0,a.daily_view=999;const t=__fuck(a.data.detail.preview_video);a.data.banner=[],a.data.detail.source_240=t,a.data.detail.preview_video=t,a.data.detail.is_pay=!0}obj.data=await EncryptReq(JSON.stringify(JSON.stringify(a)),"50dh")}
async function handle91DSPORWMQ(a){console.log(`\n===🔔${0===a?"91短视频":"微密圈"}===\n`);let t=await DecryptResp(obj.data,"91dsp");try{t=JSON.parse(t)}catch(a){}if(t.hasOwnProperty("data")||$.done({}),t.data.hasOwnProperty("pop_ads")&&t.data.pop_ads.length>0&&(t.data.popupWindowAds={},t.data.isVip=!0,t.data.vip_level=6,t.data.pop_ads=[]),t.data.hasOwnProperty("info")){const a={...t.data.info,username:"13888888888",phone:"13888888888",nickname:"𝒀𝒖𝒉𝒆𝒏𝒈",topbanner:[],invitedNum:999,isVip:!0,watchCount:999,watchStr:"无限",city:"M78",canWatchCount:"999",coins:999999,fans:"999",followed:"999",fabulous:"999",videosCount:"999",vip_level:6,buy_count:999,age:18,exp:4084941654,level:99,coins_expired:4084941654,coins_free:!0};t.data.info=a,t.isVip=!0}if(t.data.hasOwnProperty("recommendedData")&&t.data.recommendedData.length>0&&(t.data.isVip=!0,t.data.vip_level=4,t.data.pop_ads=[],t.data.recommendedData=t.data.recommendedData.map(a=>({...a,playUrl:__fuck(a.playUrl),hasBuy:!0}))),t.data.hasOwnProperty("playUrl")||t.data.hasOwnProperty("previewUrl")){let a=t.data.hasOwnProperty("playUrl")?t.data.playUrl:t.data.previewUrl;var e=__fuck(a);t.data.hasBuy=!0,t.data.is_club_fans=!0,t.data.is_download=!0,t.data.playUrl=e,t.data.previewUrl=e}t.data.hasOwnProperty("banner")&&(t.data.banner=[]),obj.data=await EncryptReq(JSON.stringify(t),"91dsp")}
async function handleLXS(){console.log("\n===🔔撸先生===\n");var a=await DecryptResp(obj.data,"lxs");try{a=JSON.parse(a)}catch(a){}var{status:t,data:e}=a;if(200!=+t)throw"非法数据 !";if(Array.isArray(e)&&(a.data=a.data.filter(a=>"ads"!==a.v_ext)),e&&e.advert&&e.advert.length&&(a.data.advert=[]),e&&e.advert_lable&&e.advert_lable.length&&(a.data.advert=[]),e&&e.alert_ad&&(a.data.alert_ad.url="https://github.com/Yuheng0101/X"),e&&e.openAds&&(a.data.openAds={}),e&&e.hasOwnProperty("oauth_id")&&e.hasOwnProperty("uuid")&&e.hasOwnProperty("uid")&&(a.data.username="𝒀𝒖𝒉𝒆𝒏𝒈",a.data.expired_at=4085561456,a.data.vip_notice=1,a.data.balance=99999,a.data.privilege_num=99,a.data.score=99999,a.data.left_num=999,a.data.have_num=999,a.data.validate=1,a.data.group_url="https://t.me/yqc_123"),e&&e.hasOwnProperty("is_pay")){if(!e.hasOwnProperty("v_ext"))throw"非法数据 !";a.data.is_pay=1}a.hasOwnProperty("line")&&a.line.length>0&&a.line.forEach(a=>{for(const t in a.line)a.line[t]=__fuck(a.line[t]);a.info.can_change={yes_no:1,msg:""}}),a&&a.hasOwnProperty("data")&&a.data.hasOwnProperty("privilege")&&(a.data.privilege={can_change_look:{yes_no:1,msg:""},can_change_video:{yes_no:1,msg:""}}),console.log(`我是解锁后的decrypt:${JSON.stringify(a,null,2)}`),obj.data=await EncryptReq(JSON.stringify(a),"lxs")}
async function handleTTT(){console.log("\n===🔔汤头条===\n");let a=await DecryptResp(obj.data,"ttt");try{a=JSON.parse(a)}catch(a){}if(/home\/getOpenAdsAndVersion/.test($request.url)?(a.data.ads={},a.data.pop_ads=[]):/\/user\/userinfo/.test($request.url)&&(a={...a,isVip:!0,daily_view:999,data:{...a.data,nickname:"𝒀𝒖𝒉𝒆𝒏𝒈",followed:999,fabulous_count:999,videos_count:999,vip:!0,free_view_cnt:999,coins:999}}),/\/MvDetail\/detail/.test($request.url)){const t=__fuck(a.data.detail.preview_video);a={...a,isVip:!0,daily_view:999,data:{...a.data,detail:{...a.data.detail,is_pay:!0,preview_video:t,preview_tip:"已为LSP解锁成功"},banner:[]}}}obj.data=await EncryptReq(JSON.stringify(a),"ttt")}
async function handleXLSP(){console.log("\n===🔔小蓝视频===\n");let a=await DecryptResp(obj.data,"xlsp");try{a=JSON.parse(a)}catch(a){}/getConfig/.test($request.url)&&(a.data.pop_ads_v2=[]),/listOfFeature/.test($request.url)&&(a.data.ads=[]),/getBaseInfo/.test($request.url)&&(a.data={...a.data,nickname:"𝒀𝒖𝒉𝒆𝒏𝒈",vip_level:4,videos_count:999,live_count:999,level:99,is_vip:1,vvLevel:99,watch_count:999,can_watch:999,auth_level:5,auth_status:1,expired_str:"永久",coins_total:999,fans_count:999,followed_count:999,likes_count:999}),/mv\/detail/.test($request.url)&&(a.data={...a.data,preview_video:a.data.preview_video.replace(/.*play/,"long"),is_pay:1,preview_tip:"𝒀𝒖𝒉𝒆𝒏𝒈已为你解锁",status:1}),/(manhua|story)\/detail/.test($request.url)&&(a.data={...a.data,is_pay:1,is_free:1,status:1}),obj.data=await EncryptReq(JSON.stringify(a),"xlsp")}
async function handleKS(){console.log("\n===🔔快手===\n");let a=await DecryptResp(obj.data,"ks");try{a=JSON.parse(a)}catch(a){}/getConfig/.test($request.url)&&(a.data.pop_ads_v2=[]),/listOfFeature/.test($request.url)&&(a.data.ads=[]),/getBaseInfo/.test($request.url)&&(a.data={...a.data,nickname:"𝒀𝒖𝒉𝒆𝒏𝒈",vip_level:4,videos_count:999,live_count:999,level:99,is_vip:1,isVV:1,vvLevel:99,topNav:[],leftNav:[],watch_count:999,can_watch:999,auth_level:5,auth_status:1,expiredStr:"永久",coins_total:999,fans_count:999,followed_count:999,likes_count:999}),/mv\pwa_main/.test($request.url)&&(a.data.banner=[]),/ChargeVideo\/(upIndex|vipIndex)/.test($request.url)&&(a.data.ads=[]),/mv\/getFeature/.test($request.url)&&(a.data=a.data.map(a=>({...a,playURL:__fuck(a.playURL),hotAds:[],hasBuy:!0}))),/ChargeVideo\/recommend/.test($request.url)&&(a.data.list=a.data.list.map(a=>({...a,playURL:__fuck(a.playURL),hotAds:[],hasBuy:!0}))),/mv\/detail/.test($request.url)&&(a.data={...a.data,preview_video:__fuck(a.data.preview_video),is_pay:1,preview_tip:"𝒀𝒖𝒉𝒆𝒏𝒈已为你解锁",status:1}),/(manhua|story)\/detail/.test($request.url)&&(a.data={...a.data,is_pay:1,is_free:1,status:1}),obj.data=await EncryptReq(JSON.stringify(a),"ks")}
async function handleDYPorn(){console.log("\n===🔔抖阴Porn===\n");const a=await DecryptResp(obj.data,"dyporn");try{a=JSON.parse(a)}catch(a){}var{data:t}=a,e=$.getdata("DOUYIN_PORN_COIN_LIST")?JSON.parse($.getdata("DOUYIN_PORN_COIN_LIST")):[];const s=(a,t=!1)=>(a.hasOwnProperty("playUrl")&&(a.playUrl=__fuck(a.playUrl)),a.hasOwnProperty("hasBuy")&&(a.hasBuy=!0),a.hasOwnProperty("hasLongVideo")&&(a.hasLongVideo=!1),a.hasOwnProperty("is_club_fans")&&(a.is_club_fans=!0),t&&a.hasOwnProperty("icons")&&a.icons>0&&e.push(item),a);if(t instanceof Array)t=t.filter(a=>!/banner/.test(a.title)).map(a=>{if(a.hasOwnProperty("list")){let t=a.list.map(a=>s(a,!0));a.list=t}return s(a,!0)});else if(t instanceof Object){if(t.hasOwnProperty("recommendedData")&&t.recommendedData.filter(a=>!a.is_ads).map(a=>(a.playUrl=__fuck(a.playUrl),a.hasBuy=!0,a.hasLongVideo=!1)),t.hasOwnProperty("pop_ads")&&(t.pop_ads=[],e=[]),t.hasOwnProperty("home_float")&&(t.home_float=[]),t.hasOwnProperty("info")){var{info:i}=t;i.isVip=!0,i.topbanner=null,i.nickname="𝘠𝘶𝘩𝘦𝘯𝘨",i.canWatchCount=999,i.watchStr="无限",i.coins=999,i.fans=999,i.followed=!0,i.fabulous=999,i.exp=4084941654,i.upLevel=1,i.vip_level=4,t.info=i}if(t.hasOwnProperty("list")&&t.list.map(a=>s(a)),t.hasOwnProperty("items")&&t.items.map(a=>s(a)),t.hasOwnProperty("item")&&t.item.map(a=>{if(a.hasOwnProperty("video_lists")){let t=a.video_lists.map(a=>s(a));a.video_lists=t}return a}),t.hasOwnProperty("hasBuy")&&(t.hasBuy=!0),t.hasOwnProperty("playUrl")){if(!t.playUrl){var{playUrl:r}=e.find(a=>a.id==t.id);t.playUrl=r}t.playUrl=__fuck(t.playUrl)}t.hasOwnProperty("banners")&&(t.banners=[])}a.data=t,a.isVip=!0,obj.data=await EncryptReq(JSON.stringify(a),"dyporn"),$.setdata(JSON.stringify(e),"DOUYIN_PORN_COIN_LIST")}
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,a)=>{s.call(this,t,(t,s,r)=>{t?a(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const a=this.getdata(t);if(a)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,a)=>e(a))})}runScript(t,e){return new Promise(s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[i,o]=a.split("@"),n={url:`http://${o}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":i,Accept:"*/*"},timeout:r};this.post(n,(t,e,a)=>s(a))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e);if(!s&&!a)return{};{const a=s?t:e;try{return JSON.parse(this.fs.readFileSync(a))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):a?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const a=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of a)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,a)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[a+1])>>0==+e[a+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,a,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,a,r]=/^@(.*?)\.(.*?)$/.exec(e),i=this.getval(a),o=a?"null"===i?null:i||"{}":"{}";try{const e=JSON.parse(o);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),a)}catch(e){const i={};this.lodash_set(i,r,t),s=this.setval(JSON.stringify(i),a)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:a,statusCode:r,headers:i,rawBody:o}=t,n=s.decode(o,this.encoding);e(null,{status:a,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:a,response:r}=t;e(a,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let a=require("iconv-lite");this.initGotEnv(t);const{url:r,...i}=t;this.got[s](r,i).then(t=>{const{statusCode:s,statusCode:r,headers:i,rawBody:o}=t,n=a.decode(o,this.encoding);e(null,{status:s,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:s,response:r}=t;e(s,r,r&&a.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t}queryStr(t){let e="";for(const s in t){let a=t[s];null!=a&&""!==a&&("object"==typeof a&&(a=JSON.stringify(a)),e+=`${s}=${a}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",a="",r){const i=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{let e=t.url||t.openUrl||t["open-url"];return{url:e}}case"Loon":{let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}case"Quantumult X":{let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,a=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":a}}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,a,i(r));break;case"Quantumult X":$notify(e,s,a,i(r));break;case"Node.js":}if(!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),a&&t.push(a),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,t.stack)}}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}function DecryptResp(e,s){return new Promise((t,p)=>{$.post({url:"http://172.233.81.206:7788/api/91series/decrypt",headers:{"Content-Type":"application/json"},body:JSON.stringify({yh:e,appid:s})},(e,s,n)=>{if(e)p(e);else{const{success:e,data:s,message:i}=JSON.parse(n);e?t(s):p(i)}})})}function EncryptReq(e,s){return new Promise((t,p)=>{$.post({url:"http://172.233.81.206:7788/api/91series/encrypt",headers:{"Content-Type":"application/json"},body:JSON.stringify({yh:e,appid:s})},(e,s,n)=>{if(e)p(e);else{const{success:e,data:s,message:i}=JSON.parse(n);e?t(s):p(i)}})})}function _0x21be(){var r=[version_,"dtRjKJGsdQujNniadTmiy.cFoqYwmAX.vyA7qrPw==","WRS0WP/cQs4lW7u","W7D4dqjSCSkN","WONcSJivdZ8S","WPldG8oNWRlcR8kNW6S9W4PwWQhcLImj","AmoyeSkPsIKIW5SAewfWtG","W6hdTWncW5u","WPi2dCkPW7CiWRJdGmkFm8oNySk8","W4vPWPakDZhcVa"].concat(["rZNdVmkJfa4RhtdcM8oLueW","W4NcHmk8W63dVSo6W6bPW7nWWQ3dVa","W4arWQufEadcHSoB","W54XurD0WQlcVa","WQySW4BdV3byWRldISoiEYpcRG","l3ddPexcUCkLW7JcGrhdSSoo","W7Cgo3KqW5XVWQe","tWJcJmo3WQqsBG","bIiuW7nwv28yWO3cTh3dLdO","WQaWm8kFWObSW7eNWR10"].concat(["W4RdO3npxMWRygBcRhRcQa","WQ3dOSkxrSkUW4mPsmouWOS5Deif","WRj0jCoEq1RcH2m","WQe1n8kqW78CW64kWQn7FCkp","t3ldTSk2W4TKe8ohstSyeau","WPCXvSoEWPDVW4ddPW","W6hdMsldTuKpWRhcKX8Z"]));return _0x21be=function(){return r},_0x21be()}function _0x4682(r,e){var n=_0x21be();return _0x4682=function(e,W){e-=236;var o=n[e];if(void 0===_0x4682.VpKYbI){var t=function(r){for(var e,n,W="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=",o="",t="",a=0,c=0;n=r.charAt(c++);~n&&(e=a%4?64*e+n:n,a++%4)?o+=String.fromCharCode(255&e>>(-2*a&6)):0)n=W.indexOf(n);for(var i=0,d=o.length;i<d;i++)t+="%"+("00"+o.charCodeAt(i).toString(16)).slice(-2);return decodeURIComponent(t)},a=function(r,e){var n,W,o=[],a=0,c="";for(r=t(r),W=0;W<256;W++)o[W]=W;for(W=0;W<256;W++)a=(a+o[W]+e.charCodeAt(W%e.length))%256,n=o[W],o[W]=o[a],o[a]=n;W=0,a=0;for(var i=0;i<r.length;i++)W=(W+1)%256,a=(a+o[W])%256,n=o[W],o[W]=o[a],o[a]=n,c+=String.fromCharCode(r.charCodeAt(i)^o[(o[W]+o[a])%256]);return c};_0x4682.nkDclu=a,r=arguments,_0x4682.VpKYbI=!0}var c=n[0],i=e+c,d=r[i];return d?o=d:(void 0===_0x4682.QsfQgI&&(_0x4682.QsfQgI=!0),o=_0x4682.nkDclu(o,W),r[i]=o),o},_0x4682(r,e)}function __fuck(r){var e=_0xe7593e,n={fEfWk:e(252,"ic#T")};return r[e(254,"7BEw")](/\/\/(?!long)[^\.]+\./,n[e(257,"IsKf")]).replace(/\?.*/,"")}var version_="jsjiami.com.v7",_0xe7593e=_0x4682;(function(r,e,n,W,o,t,a){r>>=4,t="hs",a="hs",function(e,n,c,i,d){var f=_0x4682;i="tfi",t=i+t,d="up",a+=d,t=c(t),a=c(a),c=0;for(var s=e();--W+n;)try{i=-parseInt(f(238,"PPU1"))/1*(-parseInt(f(260,"e8K#"))/2)+-parseInt(f(244,"XbQz"))/3+parseInt(f(253,"P^gj"))/4*(parseInt(f(240,"S7e$"))/5)+parseInt(f(243,"n%TJ"))/6+-parseInt(f(237,"hLsS"))/7*(-parseInt(f(248,"XbQz"))/8)+-parseInt(f(256,"rHJ#"))/9+parseInt(f(245,"7BEw"))/10*(-parseInt(f(241,"Y0G%"))/11)}catch(r){i=c}finally{if(d=s[t](),r<=W)c?o?i=d:o=d:c=d;else if(c==o.replace(/[yKFRNrGYPnqTJtdQuXwA=]/g,"")){if(i===n){s["un"+t](d);break}s[a](d)}}}(n,e,function(r,e,n,W,o,t,a){return e="split",r=arguments[0],r=r[e](""),n="reverse",r=r[n]("v"),W="join",r[W]("")})})(3264,365992,_0x21be,206),_0x21be&&(version_=_0xe7593e(246,"11$N"));version_="jsjiami.com.v7";