const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teacherSchema = new Schema({
    title:{
        type: String,
        required:true,
    },
    teacher_id:{
        type: Number,
        required:true,
    },
    subject:{
        type: String,
        required:true,
    }
}, {timestamps: true}
)
module.exports=mongoose.model('Teacher',teacherSchema )

