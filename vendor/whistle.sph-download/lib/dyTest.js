const request = require('sync-request');
const cheerio = require('cheerio');
/**
 * 获取作者secUid
 * @param {*} url 作者主页链接，支持web和app分享地址
 * @param {*} openId 客户端用户ID
 * @returns 
 */
exports.paserSecUid = function paserSecUid(url, openId) {
    var res = request('POST', backdomain() + '/sph/hg/dy/sec/' + openId, {
        json: { url: url },
    });
    var user = JSON.parse(res.getBody('utf8'));
    return user;
}
// 获取主页信息 包含直播间开播信息
function requestUserHomePage(secUid) {
    const bodyStr = request('GET', 'https://www.douyin.com/user/' + secUid, {
        headers: {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            // 'accept-encoding':'gzip, deflate, br',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
            'cache-control': 'no-cache',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36',
            'pragma': 'no-cache',
            'cookie': '__ac_nonce=062c8e3280071b878b5d5; __ac_signature=_02B4Z6wo00f01k888ngAAIDDsXCOSbIdG-pPHPbAAPEW6c; __ac_referer=__ac_blank',
            'origin': 'https://www.douyin.com',
            'referer': 'https://www.douyin.com/',
            // '':'',
            // '':''


        },
    }).getBody().toString();

    console.log(bodyStr);

    const $ = cheerio.load(bodyStr);
    var renderData = $('#RENDER_DATA').text();
    if (renderData) {
        const jsonData = decodeURIComponent(renderData);
        console.log(jsonData);
        // console.log(oReq.url)

        // const response = JSON.parse(jsonData);
        //hasBreakpoints = true;
        console.log('jsondata ---------')
        // console.log(response);

    } else {
        console.log('没有找到 渲染数据' + bodyStr);
        console.log(oReq.url)
        // console.log('=====nodata')
    }
}


function requestLive(id) {
    const bodyStr = request('GET', 'https://live.douyin.com/' + id, {
        headers: {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            // 'accept-encoding':'gzip, deflate, br',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
            'cache-control': 'no-cache',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36',
            'pragma': 'no-cache',
            'cookie': '__ac_nonce=062c8e3280071b878b5d5; __ac_signature=_02B4Z6wo00f01k888ngAAIDDsXCOSbIdG-pPHPbAAPEW6c; __ac_referer=__ac_blank',
            'origin': 'https://www.douyin.com',
            'referer': 'https://www.douyin.com/',
            // '':'',
            // '':''


        },
    }).getBody().toString();

    console.log(bodyStr);

    const $ = cheerio.load(bodyStr);
    var renderData = $('#RENDER_DATA').text();
    if (renderData) {
        const jsonData = decodeURIComponent(renderData);
        console.log(jsonData);
        // console.log(oReq.url)

        // const response = JSON.parse(jsonData);
        //hasBreakpoints = true;
        console.log('jsondata ---------')
        // console.log(response);

    } else {
        console.log('没有找到 渲染数据' + bodyStr);
        console.log(oReq.url)
        // console.log('=====nodata')
    }
}
// requestUserHomePage('MS4wLjABAAAA-CIIz_uo9jN9M7iqaU9FTOHQgdOZ_ZwQL9nNM9crRr4');
requestLive('218961257183')