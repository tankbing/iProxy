/*Obfuscated by JShaman.com*/const request=require('sync-request');const cheerio=require('cheerio');const {liveWatch:liveWatch,defaultCookie:defaultCookie}=require('./douyinHttpUtil');exports['paserSecUid']=function paserSecUid(_0x5b94ba,_0x26d92a){var _0x59a8d8=request('POST',backdomain()+'/sph/hg/dy/sec/'+_0x26d92a,{'json':{'url':_0x5b94ba}});var _0x366743=JSON['parse'](_0x59a8d8['getBody']('utf8'));return _0x366743;};function requestUserHomePage(_0x3a8299){let _0x57d14f={};const _0x1340fa=request('GET','https://www.douyin.com/user/'+_0x3a8299,{'headers':{'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','accept-language':'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7','cache-control':'no-cache','user-agent':'Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_7)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/101.0.0.0\x20Safari/537.36','pragma':'no-cache','cookie':'__ac_nonce=06389f13500edfd649277;\x20__ac_signature=_02B4Z6wo00f01C94TSwAAIDCXV6VsBai-6gvWGmAAGhea2;\x20__ac_referer=__ac_blank','origin':'https://www.douyin.com','referer':'https://www.douyin.com/'}})['getBody']()['toString']();const _0x458e8b=cheerio['load'](_0x1340fa);var _0x18dcdd=_0x458e8b('#RENDER_DATA')['text']();if(_0x18dcdd){const _0xa18377=decodeURIComponent(_0x18dcdd);const _0x5dd2e4=JSON['parse'](_0xa18377);var _0x54cf28=Object['keys'](_0x5dd2e4);for(var _0x575d06=0x6d2e6^0x6d2e6;_0x575d06<_0x54cf28['length'];_0x575d06++){var _0x1cf6d1=_0x54cf28[_0x575d06];var _0x4e1c53=_0x5dd2e4[_0x1cf6d1];if(_0x4e1c53['hasOwnProperty']('user')){const _0x3a339d=_0x4e1c53['user'];if(_0x3a339d['hasOwnProperty']('user')){const _0x1127be=_0x3a339d['user'];_0x57d14f['uid']=_0x1127be['uid'];_0x57d14f['secUid']=_0x1127be['secUid'];_0x57d14f['nickname']=_0x1127be['nickname'];_0x57d14f['desc']=_0x1127be['desc'];_0x57d14f['roomId']=_0x1127be['roomId'];_0x57d14f['ipLocation']=_0x1127be['ipLocation'];_0x57d14f['roomData']=_0x1127be['roomData'];console['log'](_0x57d14f['roomData']);if(_0x57d14f['roomData']['hasOwnProperty']('stream_url')){const _0x4caf99=_0x57d14f['roomData']['stream_url']['flv_pull_url'];for(flv in _0x4caf99){console['log']('xxx');console['log'](flv+'\x20\x20'+_0x4caf99[flv]);}}else{}}}}console['log']('jsondata\x20---------');}else{console['log']('没有找到\x20渲染数据'+_0x1340fa);}}function requestLive(_0x51e4f4){const _0x5b14d3=request('GET','https://live.douyin.com/'+_0x51e4f4,{'headers':{'accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','accept-language':'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7','cache-control':'no-cache','user-agent':'Mozilla/5.0\x20(Macintosh;\x20Intel\x20Mac\x20OS\x20X\x2010_15_7)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/101.0.0.0\x20Safari/537.36','pragma':'no-cache','cookie':'__ac_nonce=06389f13500edfd649277;\x20__ac_signature=_02B4Z6wo00f01C94TSwAAIDCXV6VsBai-6gvWGmAAGhea2;\x20__ac_referer=__ac_blank','origin':'https://www.douyin.com','referer':'https://www.douyin.com/'}})['getBody']()['toString']();console['log'](_0x5b14d3);const _0x5bc8af=cheerio['load'](_0x5b14d3);var _0x4a1cb2=_0x5bc8af('#RENDER_DATA')['text']();if(_0x4a1cb2){const _0x42a912=decodeURIComponent(_0x4a1cb2);console['log'](_0x42a912);console['log']('jsondata\x20---------');}else{console['log']('没有找到\x20渲染数据'+_0x5b14d3);}}let data=liveWatch('MS4wLjABAAAAGZ4CX1S37ozq21Vzr9vwDhv44YjwVQAGg4TFz4d5-1I','__ac_nonce=06389f13500edfd649277;\x20__ac_signature=_02B4Z6wo00f01C94TSwAAIDCXV6VsBai-6gvWGmAAGhea2;\x20__ac_referer=__ac_blank');if(data['roomId']){console['log']('直播中：');const roomData=data['roomData'];const stream_url=roomData['stream_url'];const default_resolution=stream_url['default_resolution'];const play_pull_url=stream_url['flv_pull_url'][default_resolution];console['log'](play_pull_url);vid=roomData['owner']['web_rid'];}