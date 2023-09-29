const express = require('express');
const mongoose = require('mongoose');
const cors =require("cors")

const config = require("./config")


const authRouter = require('./route/auth')
const customerRouter = require('./route/customer')
const bodyparser = require('body-parser');
const { validateJWT } = require('./util/util');
const app = express();

const port = config.port




mongoose.connect(config.mongo).then(() => {
    console.log('connected')
}).catch((error) => {
    console.log(error)
})


app.use(cors());

app.use((req,res,next)=>{
    console.log(req.body);
    next();
})


app.use(bodyparser.json())
app.use('/auth', authRouter)
app.use('/customer', validateJWT(), customerRouter)


app.use((err, req, res, next) => {
    if (err.name !== 'UnauthorizedError') {
        return next(err);
    }

    res.status(401).json({"success": false, "msg": "unauthenticated"});
});

app.listen(port, () => {
    console.log(`Node API is running on ${port}`);
})


