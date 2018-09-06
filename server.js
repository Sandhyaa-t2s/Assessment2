const express = require('express');
const bodyParser= require('body-parser')
const app = express();
var router = express.Router();
var request = require('request');
// const request = require('superagent');
app.use(bodyParser.json())

app.get('/', function(req, res){
  var obj=[];
  var url="https://jsonplaceholder.typicode.com/comments";
  request.get(url, function (error, response, body) {
    if(error){
      console.log('error',error)
    }
    if (!error && response.statusCode == 200) {
      console.log(body);
      obj = JSON.parse(body);
    var a=  Math.floor(Math.random() * obj.length);
      console.log(obj[a].email);
      var b=obj[a].email
      res.send(b);
    }
    else{
      res.send("invalid")
    }
      
      // do more stuff
  })
});
app.listen(5000 ,() => (console.log("The server is now running on port 5000.")));



// const express = require('express');
// const bodyParser = require('body-parser')
// const app = express();
// const MongoClient = require('mongodb').MongoClient;
// var ObjectID = require('mongodb').ObjectID;
// var db;
// var jwt = require('jsonwebtoken');
// var empty = require('is-empty');


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// //normal get method to view the token

// app.get('/get', (req, res) => {
//     var url="https://jsonplaceholder.typicode.com/comments";
//     request.get(url, function (error, response, body) {
//         if(error){
//           console.log('error',error)
//         }
//         res.send(result)
//     })

// });

//  app.listen(5000 ,() => (console.log("The server is now running on port 5000.")));
