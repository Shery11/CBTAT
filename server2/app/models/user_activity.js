
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var applicationSchema = mongoose.Schema({ AppName: String, Duration: String, Description : String},{ _id : false });


var user_activitySchema = new Schema({
    mouse_strokes : {type: String , required : true},
    applications : [applicationSchema],
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
