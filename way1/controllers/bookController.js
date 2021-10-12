const mongoose = require("mongoose");
//const user = require("../models/user");
const Book = mongoose.model("Book");
const bodyParser = require("body-parser")

//var mongoosePaginate = require('mongoose-paginate');

exports.addBook = async (req, res) => {
  try{
    const { ISBN,name, author, publisher, type} = req.body;
    const bookExist = await Book.findOne({ ISBN });
    if (bookExist) throw "book with that name already exists!";
    const book = new Book({
      ISBN, 
      name,
      author,
      publisher,
      type});
      await book.save();
      res.status(200).json({book,message: "book created!"});
  }catch(err){
      console.log(err);
      res.status(500).json({err});
  }
  
};

exports.getAllBooks = async (req, res) => {
    try{
        const book = await Book.find({});
        res.status(200).json({book,message: "all the books"});
    } catch(err){
        console.log(err);
        res.status(500).json({err});

    }
    
};




exports.getBook = async (req, res) => {
    try{
        let ISBN = req.query.ISBN;
        let key = req.query.key;
        if(ISBN && type){
            let book = await Book.find({ISBN:ISBN},{type:key})
            res.status(200).json({book,message: "book according to filter"});
        }else if(ISBN){
            let book =await Book.findOne({ISBN});
            res.status(200).json({book,message: `boof of ISBN ${ISBN}`});
        }else if(key){
            let book = await Book.find({type:key})
        }else{
            res.status(500).json(`ISBN ${ISBN} or type ${key} doesn't exist`)
        }
    }catch(err){

    }
    
} 

