const express = require("express");
const dbo = require("./db.js");
const objsTypes = require("./objs.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require('express-session');
const { ObjectId } = require("mongodb");

const { salt } = require("./login");

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

    var result
    await dbConnect
    .collection(collection)
    .findOne({_id: ObjectId(_id)})
    .then((rresult) => {
        if (callback) callback(rresult)
        result = rresult
    });

    return result
}

// Products

app.get("/products", function (req, res) {
    SearchCollection("products", {}, (err, result) => {
        if (err) {
            res.status(400).send("Error fetching products!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.product(x._id, x.name, x.price, x.description, x.images, x.tags)
            })
            res.json(result);
        }
    });
});
app.get("/products/:id", function (req, res) {
    GetOne("products", req.params.id, x => {
        res.json(new objsTypes.product(x.name, x.price, x.description, x.images, x.tags));
    });
});

// Keyboards
app.get("/keyboards", function (req, res) {
    SearchCollection("keyboards", {}, (err, result) => {
        if (err) {
            res.status(400).send("Error fetching keyboards!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.keyboard(x._id, x.name, x.price, x.description, x.images, x.tags)
            })
            res.json(result);
        }
    });
});
app.get("/keyboards/:id", function (req, res) {
    GetOne("keyboards", req.params.id, x => {
        res.json(new objsTypes.keyboard(x._id, x.name, x.price, x.description, x.images, x.tags));
    });
});

// Components
app.get("/components", function (req, res) {
    SearchCollection("components", {}, (err, result) => {
        if (err) {
            res.status(400).send("Error fetching components!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.component(x._id, x.name, x.price, x.description, x.images, x.keyboards)
            })
            res.json(result);
        }
    });
});
app.get("/components/by-keyboard/:id", function (req, res) {
    const _id = req.params.id

    SearchCollection("components", {keyboards: {$all: [_id]}}, (err, result) => {
        if (err) {
            console.log(err)
            res.status(400).send("Error fetching components!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.component(x._id, x.name, x.price, x.description, x.images, x.keyboards)
            })
            res.json(result);
        }
    });
});
app.get("/components/:id", function (req, res) {
    GetOne("components", req.params.id, x => {
        res.json(new objsTypes.component(x._id, x.name, x.price, x.description, x.images, x.keyboards));
    });
});

//* USERS *//



//* ADMIN *//

// Products
app.post("/products/insert", function (req, res) {
    const dbConnect = dbo.getDb();
    const body = req.body
    delete body._id;
    
    const obj = new objsTypes.product(undefined, body.name, body.price, body.description, body.images, body.tags)

    dbConnect
    .collection("products")
    .insertOne(obj)
    .then(result => {
        if (result.acknowledged)
            res.json({msg: "OK", insertedId: result.insertedId.toString()})
    })
});

// Keyboards
app.post("/keyboards/insert", function (req, res) {
    const dbConnect = dbo.getDb();
    const body = req.body
    delete body._id;
    
    const obj = new objsTypes.keyboard(body._id, body.name, body.price, body.description, body.images, body.tags)

    dbConnect
    .collection("keyboards")
    .insertOne(obj)
    .then(result => {
        if (result.acknowledged)
            res.json({msg: "OK", insertedId: result.insertedId.toString()})
    })
});

// Components
app.post("/components/insert", function (req, res) {
    const dbConnect = dbo.getDb();
    const body = req.body
    delete body._id;
    
    const obj = new objsTypes.component(body._id, body.name, body.price, body.description, body.images, body.keyboards)

    dbConnect
    .collection("components")
    .insertOne(obj)
    .then(result => {
        if (result.acknowledged)
            res.json({msg: "OK", insertedId: result.insertedId.toString()})
    })
});

// Sales
app.post("/sales/insert", function (req, res) {
    const dbConnect = dbo.getDb();
    const body = req.body
    delete body._id;
    
    const obj = new objsTypes.sale(body._id, body.time, body.user_id, body.type, body.sold_id)

    dbConnect
    .collection("sales")
    .insertOne(obj)
    .then(result => {
        if (result.acknowledged)
            res.json({msg: "OK", insertedId: result.insertedId.toString()})
    })
});


//* CONNECTION & STARTUP *//

dbo.connectToServer().then(() => 
    app.listen(port, function () {
        console.log(`App listening on port ${port}!`);
    })
);