
// import .env variables 
require('dotenv-safe').config({
    allowEmptyValues: true,
});

module.exports = {
    port: process.env.PORT,
    mongo: process.env.MONGO_URI,
    jwt_key: process.env.JWT_KEY
}; 