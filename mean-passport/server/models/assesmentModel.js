// grab the packages we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var assesmentSchema = new Schema({
    assesmentId:{ 
      type: String, 
      required: true, 
    },
    assesmentName:{ 
      type: String, 
      required: true, 
    },
    assesmentData:[
        {
            _questionId:Schema.Types.ObjectId,
            question:String,
            answers:[String]
        }
    ]
});
// the schema is useless so far
// we need to create a model using it
var Assesment = mongoose.model('Assesment', assesmentSchema);
// make this available to our users in our Node applications
module.exports = Assesment;