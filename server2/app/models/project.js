/**
 * Created by Nir on 23/01/2017.
 * defines the assignment schema aka the assignment object
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;





var ProjectSchema = new Schema({
    project_name : {type: String , required : true},
    short_description : {type : String,required: true},
    long_description: {type : String},
    created_by: { type : String },
    start_date: { type: Date, default: Date.now },
    end_date: {type: Date, default: Date.now ,required: true},
    admins: [{ type : Schema.ObjectId, ref: 'User' }],
    tasks: [{ type : Schema.ObjectId, ref: 'Task' }], //this will reference to standard errors in the db
});


//now we need a variable that we can access outside of this file

module.exports = mongoose.model('Project', ProjectSchema);