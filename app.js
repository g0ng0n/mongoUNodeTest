/**
 * Created by gogisbert on 08/08/15.
 */
var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");


MongoClient.connect('mongodb://localhost:27017/course',function(err, db){
    if (err) throw error;

        app.get('/', function (req, res){
            db.collection('hello_mongo_express').findOne({}, function(err, doc){
                if (err) throw error;
                console.log(doc);
                res.render('hello', doc);
            });
        });

        app.get('*', function(req,res){
            res.send("Page Not Found", 404);
        });


    app.listen(8080);
    console.log("Express server is running at port 8080");

});