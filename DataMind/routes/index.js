var express     = require('express');
var router      = express.Router();
var MongoClient = require('mongodb').MongoClient
      , assert  = require('assert');

router.get('/', function (req, res, next) {
      res.render('home');
});

router.get('/breathe', function (req, res, next) {
      res.render('breathe', {title: 'Breathe'});
});

router.get('/study', function (req, res, next) {
      res.render('study', {title: 'Study'});
});

router.get('/gain', function (req, res, next) {
      res.render('gain');
});

router.get('/motivated', function (req, res, next) {

          // Connection URL
          const url = 'mongodb://localhost:27017';

          // Database Name
          const dbName = 'DataMind';

          // Use connect method to connect to the server
          MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");

            const db = client.db(dbName);



                  const collection = db.collection('motivmess');
                    // Find some documents
                    collection.find({}).toArray(function(err, docs) {

                      console.log("Found the following records");
                      console.log(docs)
                      
                    });

          });

      res.render('motivated');
});

module.exports = router;
