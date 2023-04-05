const mongoose = require('mongoose')

const Schema = mongoose.Schema

const timetableSchema = new Schema({
    title:{
        type: String,
        required:true,
    },
    day:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    subject:{
        type: String,
        required:true,
    },
   
    time:{
        type: String,
        required:true,
    }
}, {timestamps: true}
)
module.exports=mongoose.model('timetable',timetableSchema )