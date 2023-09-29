const {  customersValidator, customersChangeStatusValidator } = require("../util/util");

const router = require("express-promise-router")(); 
const customerController = require("../controller/customer.controller")


/** 
 * List customer  
 *  
 * @route GET /customer/all
 * @group Customer   
 * @returns {object} 200 - List of customers 
 * @returns {Error}  default - Unexpected error 
 */ 
router.get('/all',  customerController.get); 
 
/** 
 * Create a customer  
 *  
 * @route POST /customer/ 
 * @group Customer  
 * @param {string} name - phone number of the user 
 * @param {integer} site_id - password of the user 
 * @returns {object} 200 - User object 
 * @returns {Error}  default - Unexpected error  
 */ 
router.post('/create', customersValidator, customerController.create); 
 
/** 
 * Change status of a customer  
 *  
 * @route PATCH /customer/ 
 * @group Customer  
 * @param {string} id - Id of the Customer 
 * @param {boolean} approved - status of customer 
 * @returns {object} 200 - User object 
 * @returns {Error}  default - Unexpected error  
 */ 
router.patch('/status', customersChangeStatusValidator, customerController.changeStatus); 
 

 
module.exports = router; 