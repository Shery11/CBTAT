
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user_activitySchema = new Schema({
   // duration : {type : String , required : true},
    mouse_strokes : {type: String , required : true},
    applications : [{ application_name: String, duration: String, description : String}],
    task_id : {type: Schema.ObjectId, ref : 'Task'},
    project_id: { type : Schema.ObjectId, ref: 'Project'},
    user_id : {type: Schema.ObjectId, ref: 'User'},
    notes : [{type : String}],
    switchShots : [{type : String}],
    start_time : {type : String},
    end_time :{type : String}

});


//now we need a variable that we can access outside of this file

module.exports = mongoose.model('UserActivity', user_activitySchema);
