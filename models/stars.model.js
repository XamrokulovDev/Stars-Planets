const mongoose = require("mongoose");

const starsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    planets:[{
        type:mongoose.Schema.ObjectId,
        ref:"Planets",
    }]
},{
    timestamps:true,
});

module.exports = mongoose.model("Stars",starsSchema);