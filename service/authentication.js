const userModel = require("../model/user.model")
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function login(email, password) {
    const hashedPassword = await hashPassword(password)
    const user = await userModel.findOne({ email: email})
    if(!user){
        return false
    }
    const isPasswordCorrect = await bcrypt.compare(password,  user.password);
    if(!isPasswordCorrect)
        return false;

    return user;
}

async function signup(firstname, lastname, email, password) {
    const hashedPassword = await hashPassword(password)

    const user = await userModel.create({firstname, lastname, email, password: hashedPassword })
    if(!user){
        return false
    }
    return user;
}

async function hashPassword(password) {

    return await bcrypt.hash(password, saltRounds);
}

module.exports = {login, signup}