const express = require('express')
const app = express()

var assert = require('assert');
app.get('/', (req, res) => {
  res.send('HEY!')
})


app.get('/shudong/:time/:content', (req,res) => {
    res.send(req.params)
    console.log('123')
    console.log(req.params)
    json = req.params
    var MongoClient = require('mongodb').MongoClient;
    var ObjectId = require('mongodb').ObjectID;
    var url = 'mongodb://charlessong:songzhuonan123@ds141534.mlab.com:41534/secret_sw';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db,json, function() {
      db.close();
  });
});
})

app.listen(3000, () => console.log('Server running on port 3000'))

var insertDocument = function(db,json, callback) {
   db.collection('test').insertOne( 
   json , function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};
