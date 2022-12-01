const { paserSecUid: paserSecUid, paserVideos: paserVideos } = require('./../../douyinHttpUtil');
const {generate:generate} = require('./../../utils');
const {insert:insert} = require('../../db/dyUserMonitor')
module.exports = async (ctx) => {
    const { urls } = ctx.request.body;
    const { localStorage } = ctx.req;
    let openId = localStorage.getProperty('user_open_id');
    console.log(urls)
    const secInfo = paserSecUid(urls,openId);
    // TODO 校验用户过期
    const secUid = secInfo.body.secUid;
    const videos = paserVideos(secUid,0);
    let result = {};
    const awemeList = videos.aweme_list;
    if(awemeList&&awemeList.length>0){
        result = awemeList[0].author;
        result.id=result.uid;
        result.monitored=0;
    }
    insert(result);
    ctx.body = result;
}
