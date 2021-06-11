var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
var router = express.Router();
var top;
/* GET home page. */
router.get('/', function(req, res, next) { 
  MongoClient.connect(url)
	.then(function(db){
		top = db;
	   return db.collection('test');
	})
	.then(function(collection){
		return collection.findOne({});
	})
	.then(function(doc){
		res.render('index', { title: doc.name });
		console.log(doc.name);
		top.close();
	});
});


module.exports = router;
