/*Obfuscated by JShaman.com*/const request=require('sync-request');const cheerio=require('cheerio');const {backdomain:backdomain}=require('./consta');const puppeteer=require('puppeteer');exports['paserSecUid']=function paserSecUid(_0x439b67,_0x275099){var _0x4326e6=request('POST',backdomain()+'/sph/hg/dy/sec/'+_0x275099,{'json':{'url':_0x439b67}});var _0x47033a=JSON['parse'](_0x4326e6['getBody']('utf8'));return _0x47033a;};exports['paserVideos']=function paserVideos(_0x57ee64,_0x2a4541){var _0x4e03ac='https://www.iesdouyin.com/web/api/v2/aweme/post/?sec_uid='+_0x57ee64+'&max_cursor='+_0x2a4541+'&count=2000';const _0x118bb0=request('GET',_0x4e03ac)['getBody']()['toString']();return JSON['parse'](_0x118bb0);};exports['parseUrl']=function parseUrl(_0x557831,_0x4f3d59){var _0x514b3d=request('POST',backdomain()+'/sph/hg/dy/va/'+_0x557831,{'json':{'url':_0x4f3d59}});var _0x7e5be1=JSON['parse'](_0x514b3d['getBody']('utf8'));return _0x7e5be1;};exports['requestVideoDetails']=function requestVideoDetails(_0x3b78c1){const _0x27ef7a=request('GET',_0x3b78c1)['getBody']()['toString']();return JSON['parse'](_0x27ef7a);};exports['liveWatch']=function liveWatch(_0x3a17ad,_0x27d01b){let _0x4af954={};const _0x1db841=request('GET','https://www.douyin.com/user/'+_0x3a17ad,{'headers':{'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','accept-language':'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7','cache-control':'no-cache','user-agent':'Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_7)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/101.0.0.0\x20Safari/537.36','pragma':'no-cache','cookie':_0x27d01b,'origin':'https://www.douyin.com','referer':'https://www.douyin.com/'}})['getBody']()['toString']();const _0x1f9bf6=cheerio['load'](_0x1db841);var _0x129ea2=_0x1f9bf6('#RENDER_DATA')['text']();if(_0x129ea2){const _0x383357=decodeURIComponent(_0x129ea2);const _0x433f95=JSON['parse'](_0x383357);var _0x1a1dfa=Object['keys'](_0x433f95);for(var _0x333179=0xa25db^0xa25db;_0x333179<_0x1a1dfa['length'];_0x333179++){var _0x4b4260=_0x1a1dfa[_0x333179];var _0x2a0691=_0x433f95[_0x4b4260];if(_0x2a0691['hasOwnProperty']('user')){const _0x3b74f6=_0x2a0691['user'];if(_0x3b74f6['hasOwnProperty']('user')){const _0x54446e=_0x3b74f6['user'];_0x4af954['uid']=_0x54446e['uid'];_0x4af954['secUid']=_0x54446e['secUid'];_0x4af954['nickname']=_0x54446e['nickname'];_0x4af954['desc']=_0x54446e['desc'];_0x4af954['roomId']=_0x54446e['roomId'];_0x4af954['ipLocation']=_0x54446e['ipLocation'];_0x4af954['roomData']=_0x54446e['roomData'];_0x4af954['awemeCount']=_0x54446e['awemeCount'];_0x4af954['followingCount']=_0x54446e['followingCount'];_0x4af954['followerCount']=_0x54446e['followerCount'];_0x4af954['totalFavorited']=_0x54446e['totalFavorited'];_0x4af954['age']=_0x54446e['age'];_0x4af954['avatarUrl']=_0x54446e['avatarUrl'];_0x4af954['avatar300Url']=_0x54446e['avatar300Url'];_0x4af954['gender']=_0x54446e['gender'];_0x4af954['mplatformFollowersCount']=_0x54446e['mplatformFollowersCount'];_0x4af954['uniqueId']=_0x54446e['uniqueId'];}}if(_0x2a0691['hasOwnProperty']('post')){const _0x4ab99d=_0x2a0691['post']['data'];console['log']('首页加载的数据量：'+_0x4ab99d['length']);_0x4af954['postData']=_0x4ab99d;}}}else{console['log']('没有找到\x20渲染数据'+_0x1db841);}return _0x4af954;};exports['defaultCookie']=async function defaultCookie(){let _0x122b45='';const _0x8ba8ee=await puppeteer['launch']();const _0x3d9965=await _0x8ba8ee['newPage']();await _0x3d9965['goto']('https://www.douyin.com');_0x122b45=await _0x3d9965['evaluate'](()=>document['cookie']);console['log']('cookie\x20:\x20'+_0x122b45);await _0x8ba8ee['close']();return _0x122b45;};