const schedule = require('node-schedule');
const { runDownThread: runDownThread } = require('./dyMonitorThread');

exports.startScheduleJob = function startScheduleJob(cron) {
    // cancelJob
    runDownThread();
    const job = schedule.scheduleJob('scheduleJob-dy-ps', cron, function (fireDate) {
        console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
        runDownThread();
        console.log('调用了下载之后');
    });
    return job;
};
exports.stopScheduleJob = function stopScheduleJob() {
    if (schedule.scheduledJobs['scheduleJob-dy-ps']) {
        schedule.scheduledJobs['scheduleJob-dy-ps'].cancel();
    }

}
exports.getRunningScheduleJob = function getRunningScheduleJob() {
    return schedule.scheduledJobs;
}