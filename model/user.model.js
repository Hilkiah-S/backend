const mongoose = require('mongoose');  

const userSchema = new mongoose.Schema({  
    firstname: { type: String, required: true },  
    lastname: { type: String, required: true },  
    email: { type: String, required: true, unique: true, },  
    password: { type: String, required: true, minlength: 4, maxlength: 128},  
    password_changed_at: { type: Date },  
    
  },{timestamps: {createdAt: 'created_at', modifiedAt: 'modified_at'}  
}) 

module.exports = mongoose.model('User', userSchema); 
