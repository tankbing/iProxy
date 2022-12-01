const { remove: remove } = require('./../../db/dyUserMonitor');
module.exports = async (ctx) => {
    const { id } = ctx.request.body;
    await remove(id);
    ctx.body = { id: id };
}
