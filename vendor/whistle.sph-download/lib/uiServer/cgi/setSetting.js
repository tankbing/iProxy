// const path = require("path");
const fs = require("fs");
const { backdomain: backdomain } = require("./../../consta")
const request = require('sync-request');
const { set: setConfig } = require('./../../appContext');
const { mkdirsSync: mkdir, downCountKey: countKey, Exts: Exts, Type: Type, GetFileName: GetFileName, GetExt: GetExt, wildcard: wildcard } = require('./../../utils');
module.exports = (ctx) => {
    const { localStorage } = ctx.req;
    let { path, code, globalVideo, sphZb } = ctx.request.body;
    let result = {
        success: 1,
        message: ''
    };

    if (!code || !path) {
        result.message = '参数错误';
        result.success = 2;
        ctx.body = result;
        return;
    }


    if (!fs.existsSync(path)) {
        mkdir(path);
        console.log('目录创建成功：' + path);
    } else {
        console.log('目录存在，直接使用：' + path);
    }
    console.log('文件存储路径：' + path);

    localStorage.setProperty('videoDownLoadPath', path);
    localStorage.setProperty('globalVideo', globalVideo);
    localStorage.setProperty('sphZb', sphZb);
    localStorage.setProperty('fullDownLoadCode', code);
    setConfig('downLoadPath', path);
    setConfig('fullDownLoadCode', code);
    
    // const machineUUID = localStorage.getProperty('machine_uuid');

    const codeBody = request('GET', backdomain() + '/sph/hg/validate/' + code).getBody().toString();
    const codeInfo = JSON.parse(codeBody);
    result.userInfo = codeInfo.body;
    if (codeInfo.success == 1) {
        const openId = codeInfo.body.openId;
        localStorage.setProperty('user_open_id', openId);
        setConfig('user_open_id', openId);
    } else {
        result.success = codeInfo.success;
        result.message = codeInfo.message;
    }

    ctx.body = result;
};
