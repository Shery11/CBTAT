
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var applicationSchema = mongoose.Schema({ AppName: String, Duration: String, Description : String},{ _id : false });


var report_Schema = new Schema({
    mouse_strokes : {type: Number },
    applications : [applicationSchema],
    switchShots : [{type: String}],
    screenShots : [{type: String}],
    webcamShots : [{type : String}]

});


//now we need a variable that we can access outside of this file

module.exports = mongoose.model('Report', report_Schema);
