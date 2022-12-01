const { update: update } = require('./../../db/dyUserMonitor');
module.exports = async (ctx) => {
    const { id } = ctx.request.body;
    let result = {};
    let data = { id: id, monitored: 1 };
    const re = await update(data);
    ctx.body = re;
}
