var mongoose = require('mongoose');

//genre schema
var bookSchema = mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    genre:{
        type:String,
        require: true
    },
    description:{
        type:String
    },
    author:{
        type:String
    },
    publisher:{
        type:String
    },
    image_url:{
        type:String
    },
    create_date:{
        type:Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//get books
module.exports.getBooks = function (callback, limit){
    Book.find(callback).limit(limit);
}

module.exports.getBooksById = function (id, callback){
    Book.findById(id,callback);
}