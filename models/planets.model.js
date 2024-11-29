const mongoose = require("mongoose");

const planetsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mass:{
        type:String,
        required:true,
    },
    stars:[{
        type:mongoose.Schema.ObjectId,
        ref:"Stars",
    }]
},{
    timestamps:true,
});

module.exports = mongoose.model("Planets",planetsSchema);