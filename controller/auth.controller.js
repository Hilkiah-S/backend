const config = require('../config');
const authService = require('../service/authentication')
const jwt = require("jsonwebtoken")

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const result = await authService.login(email, password)
        if (!result)
            return res.json({ "success": false, "msg": "email and password don't match!" }, 401)
        const token = jwt.sign({ email: email }, config.jwt_key, { expiresIn: '6h' });
        return res.json({ "success": true, "data": { ...result._doc, token } })
    } catch (e) {
        return res.json({ "success": false, "msg": e.toString() }, 500)
    }

}
async function signup(req, res) {
    try {
        const { firstname, lastname, email, password } = req.body;
        const result = await authService.signup(firstname, lastname, email, password)
        if (!result)
            return res.json({ "success": false, "msg": "creating user failed" }, 400)
            const token = jwt.sign({ email: email }, config.jwt_key, { expiresIn: '6h' });

        return res.json({ "success": true, "data": { ...result._doc, token } })
    } catch (e) {
        if (e?.code == 11000)
            return res.json({ "success": false, "msg": "User already exist" }, 400)
        return res.json({ "success": false, "msg": e.toString() }, 500)
    }

}
async function othercustomersignup(req, res) {
    try {
        const { firstname, lastname, email, password } = req.body;
        const result = await authService.signup(firstname, lastname, email, password)
        if (!result)
            return res.json({ "success": false, "msg": "creating user failed" }, 400)
            const token = jwt.sign({ email: email }, config.jwt_key, { expiresIn: '6h' });

        return res.json({ "success": true, "data": { ...result._doc, token } })
    } catch (e) {
        if (e?.code == 11000)
            return res.json({ "success": false, "msg": "User already exist" }, 400)
        return res.json({ "success": false, "msg": e.toString() }, 500)
    }

}

module.exports = { login, signup,othercustomersignup }