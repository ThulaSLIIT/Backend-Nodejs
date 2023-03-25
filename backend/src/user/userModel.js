var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var userSchema = new Schema({
 
   garbageitemname: {
        type: String,
        required: true
    },
  quantity: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
 
module.exports = mongoose.model('admin', userSchema);