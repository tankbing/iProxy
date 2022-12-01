const { update: update } = require('./../../db/dyUserMonitor');
const { set: set, get: get } = require('./../../appContext');
const { startScheduleJob: startScheduleJob,stopScheduleJob:stopScheduleJob,getRunningScheduleJob:getRunningScheduleJob } = require('./../../scheduleUtils')
module.exports = async (ctx) => {
    const { minutes, type } = ctx.request.body;
    const { localStorage } = ctx.req;
    console.log(minutes+' m');
    const startType = parseInt(type);
    console.log(typeof startType);
    if (startType) {
        // 开启监控
        let cron = '*/' + minutes + ' * * * *';
        stopScheduleJob();
        const job = startScheduleJob(cron);
        console.log('监控已开启');
        // set({ 'scheduleJob': job });
        getRunningScheduleJob();
    } else {
        // 停止监控
        console.log('开始调用停止监控')
        stopScheduleJob();
        console.log('runJob 已停止');
        getRunningScheduleJob()
    }

    let result = { 'cron': '' };
    ctx.body = result;
}
