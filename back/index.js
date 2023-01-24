const express = require("express");
const db = require("./db.js");
const cors = require("cors");

const app = express();
const port = 4444;

app.use(cors());

app.get("/", function (req, res) {
    res.send("Hello World!");
});

db.connectToServer().then(() => 
    app.listen(port, function () {
        console.log(`App listening on port ${port}!`);
    })
);