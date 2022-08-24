const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");

const user = {
    "user4" : {
        "name" : "john doe",
       "password" : "password1",
       "profession" : "teacher",
       "id": 1
    }
};

const sampleObj = {
    test: 1,
    testName: "test"
}

const jsonObj = JSON.stringify(sampleObj)

console.log(jsonObj)


//app.listen(port);

//console.log('Server is running');

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
})

app.post('/addUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

const server = app.listen(port, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Server Running", host, port)
 })

