const mongoose = require("mongoose");

//var mongoosePaginate = require('mongoose-paginate');

const bookSchema = new mongoose.Schema(
  {
    ISBN:{
      type:String,
      required:[true,"a book must have ISBN"],
      maxlength:15,
     unique:true

    },
    name: {
      type: String,
      required: [true, "name? keep it new"],
      trim:true,
      
    },
    author: {
      type: String,
      required: [true, "author name is required!!!"],
      trim: true,
      maxlength:100
    },
    publisher: {
        type: String,
        default: false,
    }, 
    
    type:{
      type: String,
      enum:["thriller","comedy","romantic"],
      required:true,
    },
    
  },
  {
    timestamps: true,
  }

);
//listSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Book", bookSchema);
