const joi = require('joi');
const { expressjwt: jwt } = require('express-jwt');
const config = require('../config');

function loginValidator(req, res, next) {
    const validation = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).required()
    })
    const result = validation.validate(req.body)
    if (result.error) {
        return res.json({ "success": false, "msg": result.error })
    }
    return next()

}
function signUpValidator(req, res, next) {
    const validation = joi.object({
        firstname: joi.string().required(),
        lastname: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).required()
    })
    const result = validation.validate(req.body)
    if (result.error) {
        return res.json({ "success": false, "msg": result.error })
    }
    return next()
}

function customersValidator(req, res, next) {
    const validation = joi.object({
        customername: joi.string().required(),
        phone: joi.string().min(10).max(10).required(),
        site: joi.string().required(),
        email: joi.string().email().required(),
        approved: joi.bool().required()
    })

    const result = validation.validate(req.body)
    if (result.error) {
        return res.json({ "success": false, "msg": result.error })
    }
    return next()
}

function customersChangeStatusValidator(req, res, next) {
    const validation = joi.object({
        id: joi.string().required(),
        approved: joi.bool().required()
    })

    const result = validation.validate(req.body)
    if (result.error) {
        return res.json({ "success": false, "msg": result.error })
    }
    return next()
}


function validateJWT(req, res) {
    return jwt({ secret: config.jwt_key, algorithms: ['HS256'] }, function (req, res, next) {
        if (!req.auth.admin) return res.status(401).json({ "success": false, "msg": "unauthenticated" });
        next()
    })
}

module.exports = { loginValidator, signUpValidator, validateJWT, customersValidator, customersChangeStatusValidator }