const express = require("express");
const dbo = require("./db.js");
const objsTypes = require("./objs.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require('express-session');

const { salt } = require("./login");

const ObjectId = express.ObjectId;
const app = express();
const port = 4444;

app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("Hello World!");
});

//* FETCH *//

// Generic search
const SearchCollection = async (collection, query, callback) => {
    const dbConnect = dbo.getDb();

    var err, result
    await dbConnect
    .collection(collection)
    .find(query)
    .toArray((rerr, rresult) => {
        if (callback) callback(rerr, rresult)
        err, result = rerr, rresult
    });

    return err, result
}

const GetOne = async (collection, _id, callback) => {
    const dbConnect = dbo.getDb();

    var err, result
    await dbConnect
    .collection(collection)
    .findOne({_id: ObjectId(_id)})
    .toArray((rerr, rresult) => {
        if (callback) callback(rerr, rresult)
        err, result = rerr, rresult
    });

    return err, result
}

// Products

app.get("/products", function (req, res) {
    SearchCollection("products", {}, (rerr, rresult) => {
        if (err) {
            res.status(400).send("Error fetching products!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.product(x._id, x.name, x.price, x.description, x.tags)
            })
            res.json(result);
        }
    });
});
app.get("/products/:id", function (req, res) {
    GetOne("products", req.params.id, (rerr, rresult) => {
        if (err) {
            res.status(400).send("Error fetching products!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.product(x.name, x.price, x.description, x.tags)
            })
            res.json(result);
        }
    });
});

// Keyboards
app.get("/keyboards", function (req, res) {
    const dbConnect = dbo.getDb();
    dbConnect
    .collection("keyboards")
    .find({})
    .toArray(function (err, result) {
    if (err) {
        res.status(400).send("Error fetching keyboards!");
    } else {
        var objects = result.map(x => {
            return new objsTypes.keybroad(x._id, x.name, x.price, x.description, x.tags)
        })
        res.json(result);
    }
    });   
});

// Components
app.get("/components", function (req, res) {
    const dbConnect = dbo.getDb();
    dbConnect
    .collection("components")
    .find({})
    .toArray(function (err, result) {
    if (err) {
        res.status(400).send("Error fetching components!");
    } else {
        var objects = result.map(x => {
            return new objsTypes.component(x._id, x.name, x.price, x.description, x.keyborads)
        })
        res.json(result);
    }
    });    
});

//* USERS *//



//* ADMIN *//

app.post("/products/insert", function (req, res) {
    const dbConnect = dbo.getDb();
    const body = req.body
    delete body._id;
    
    const obj = new objsTypes.product(undefined, body.name, body.price, body.description, body.images, body.tags)
    console.log(obj)

    dbConnect
    .collection("products")
    .insertOne(obj)
    .then(result => {
        if (result.acknowledged)
            res.json({msg: "OK", insertedId: result.insertedId.toString()})
    })
    
});


// CONNECTION

dbo.connectToServer().then(() => 
    app.listen(port, function () {
        console.log(`App listening on port ${port}!`);
    })
);