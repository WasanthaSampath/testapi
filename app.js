var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());

var Genre = require('./models/genre.js')
var Book = require('./models/book.js')

//connect to mongo
mongoose.connect('mongodb://127.0.0.1/bookstore');

var db = mongoose.connection;

app.get('/',function(req,res){
    res.send('Please use /api/books');
});

app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }else{
            res.json(genres)
        }
    });
});

app.get('/api/genres/:_id',function(req,res){
    var id=req.params._id;
    Genre.getGenresById(id,function(err, genre){
        if(err){
            throw err;
        }else{
            res.json(genre);
        }
    });
});

app.post('/api/genres',function(req,res){
    var genre = req.body;
    Genre.addGenres(genre,function(err, genre){
        if(err){
            throw err;
        }else{
            res.json(genre);
        }
    });
});

app.put('/api/genres/:_id',function(req,res){
    var id=req.params._id
    var genre = req.body;
    Genre.updateGenre(id,genre,{},function(err, genre){
        if(err){
            throw err;
        }else{
            res.json(genre);
        }
    });
});

app.delete('/api/genres/:_id',function(req,res){
    var id=req.params._id
    Genre.deleteGenre(id,function(err, genre){
        if(err){
            throw err;
        }else{
            res.json(genre);
        }
    });
});

//////////////////////////////
app.get('/api/books',function(req,res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }else{
            res.json(books)
        }
    });
});

app.get('/api/books/:id',function(req,res){
    Book.getBooksById(req.params.id,function(err, book){
        if(err){
            throw err;
        }else{
            res.json(book)
        }
    });
});



app.listen(3000);
console.log('Started');

/////
///

////