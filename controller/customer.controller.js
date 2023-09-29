const customerService = require('../service/customer')
async function get(req, res) {
    try {

        const result = await customerService.getAll();
        if (!result)
            return res.json({ "success": false, "msg": "Can't fetch customers" }, 401)
        return res.json({ "success": true, "data": result })
    } catch (e) {
        return res.json({ "success": false, "msg": e.toString() }, 500)
    }

}
async function create(req, res) {
    try {
        const { customername,
            phone,
            site,
            email,
            approved } = req.body;
        const result = await customerService.create(customername,
            phone,
            site,
            email,
            approved)
        if (!result)
            return res.json({ "success": false, "msg": "creating customer failed" }, 400)
        return res.json({ "success": true, "data": result })
    } catch (e) {
        return res.json({ "success": false, "msg": e.toString() }, 500)
    }

}
async function changeStatus(req, res) {
    try {
        const { id,
            approved } = req.body;
        const result = await customerService.changeStatus(id,
            approved)
        if (!result)
            return res.json({ "success": false, "msg": "Chaning status of customer failed" }, 400)
        return res.json({ "success": true, "data": result })
    } catch (e) {
        return res.json({ "success": false, "msg": e.toString() }, 500)
    }

}

module.exports = { get, create, changeStatus }