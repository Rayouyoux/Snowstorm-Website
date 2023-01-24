const express = require("express");
const db = require("./db.js");
const cors = require("cors");

const app = express();
const port = 4444;

app.use(cors());

/*

*/

app.get("/", function (req, res) {
    res.send("Hello World!");
});

db.connectToServer().then(() => 
    app.listen(port, function () {
        console.log(`App listening on port ${port}!`);
    })
);

app.get("/products", function (req, res) {
    const dbConnect = dbo.getDb();
    dbConnect
      .collection("products")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching pokemons!");
        } else {
          res.json(result);
        }
    });
});

app.get("/keyboards", function (req, res) {
    const dbConnect = dbo.getDb();
    dbConnect
    .collection("keyboards")
    .find({})
    .toArray(function (err, result) {
    if (err) {
        res.status(400).send("Error fetching pokemons!");
    } else {
        res.json(result);
    }
    });   
});

app.get("/components", function (req, res) {
    const dbConnect = dbo.getDb();
    dbConnect
    .collection("components")
    .find({})
    .toArray(function (err, result) {
    if (err) {
        res.status(400).send("Error fetching pokemons!");
    } else {
        res.json(result);
    }
    });    
});