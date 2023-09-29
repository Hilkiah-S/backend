const { loginValidator, signUpValidator } = require("../util/util");

const router = require("express-promise-router")(); 
const authController = require("../controller/auth.controller")


/** 
 * Login user  
 *  
 * @route POST /auth/login/ 
 * @group Auth   
 * @param {string} email - email address of the user 
 * @param {string} password - password of the user 
 * @returns {object} 200 - User object 
 * @returns {Error}  default - Unexpected error 
 */ 
router.post('/login', loginValidator, authController.login); 
 
/** 
 * Create a new user  
 *  
 * @route POST /auth/u/signup/ 
 * @group Auth  
 * @param {string} phone_no.body.required - phone number of the user 
 * @param {string} password.body.required - password of the user 
 * @returns {object} 200 - User object 
 * @returns {Error}  default - Unexpected error  
 */ 
router.post('/signup', signUpValidator, authController.signup); 

/** 
 * Create other customers  
 *  
 * @route POST /auth/u/signup/ 
 * @group Auth  
 * @param {string} phone_no.body.required - phone number of the user 
 * @param {string} password.body.required - password of the user 
 * @returns {object} 200 - User object 
 * @returns {Error}  default - Unexpected error  
 */ 
router.post('/signup', signUpValidator, authController.signup); 
 

 
module.exports = router; 