const {findAll:findAll, } = require('./../../db/dyUserMonitor');
module.exports = async (ctx) => {
    let result = {};

    const mUsers = await findAll();
    result.total = mUsers.length;
    result.data = mUsers;
    ctx.body = result;
    
}
