const express = require("express");
const dbo = require("./db.js");
const objsTypes = require("./objs.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { ObjectId } = require("mongodb");
const crypto = require('crypto')

const { salt } = require("./login");

const app = express();
const port = 4444;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
	secret: salt,
	resave: true,
	saveUninitialized: true,
    store: MongoStore.create({
        client: dbo.client,
        dbName: "snowstorm",
        collectionName: "sessions"
    })
}));

const sessionUpdater = (req, res, next) => {
    // Session updater
    if (req.session.user && req.session.user._id) {
        GetOne("users", req.session.user._id, result => {
            if (result) {
                req.session.user = new objsTypes.user(result._id, result.email, undefined, result.first_name, result.last_name)
            } else {
                delete req.session.user
            }
            next()
        })
    } else next();
};

app.get("/", (req, res) => {
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

app.get("/products", (req, res) => {
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
app.get("/products/:id", (req, res) => {
    GetOne("products", req.params.id, x => {
        res.json(new objsTypes.product(x.name, x.price, x.description, x.images, x.tags));
    });
});

// Keyboards
app.get("/keyboards", (req, res) => {
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
app.get("/keyboards/:id", (req, res) => {
    GetOne("keyboards", req.params.id, x => {
        res.json(new objsTypes.keyboard(x._id, x.name, x.price, x.description, x.images, x.tags));
    });
});

// Components
app.get("/components", (req, res) => {
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
app.get("/components/by-keyboard/:id", (req, res) => {
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
app.get("/components/:id", (req, res) => {
    GetOne("components", req.params.id, x => {
        res.json(new objsTypes.component(x._id, x.name, x.price, x.description, x.images, x.keyboards));
    });
});

//* USERS *//

const hashPassword = password => crypto.createHash('sha256').update(salt+password).digest("hex")
app.post("/register", sessionUpdater, (req, res) => {
    const dbConnect = dbo.getDb();
    const body = req.body
    
    const obj = new objsTypes.user(undefined, body.email, password=hashPassword(body.password), body.first_name, body.last_name)

    dbConnect
    .collection("users")
    .insertOne(obj)
    .then(result => {
        if (result.acknowledged)
        {
            req.session.user = new objsTypes.user(result.insertedId, body.email, undefined, body.first_name, body.last_name)
            res.json({msg: "OK", userInfo: req.session.user})
        }
    })
})
app.post("/login", sessionUpdater, (req, res) => {
    const dbConnect = dbo.getDb();
    const body = req.body

    dbConnect
    .collection("users")
    .findOne({email: body.email.toString(), password: hashPassword(body.password)})
    .then((result) => {
        if (result) {
            req.session.user = new objsTypes.user(result._id, result.email, undefined, result.first_name, result.last_name)
            res.json({msg: "OK", userInfo: req.session.user})
        } else {
            res.status(400).json({msg: "Email or password incorrect!"})
        }
    })
})
app.get("/getUserInfo", sessionUpdater, (req, res) => {
    res.json(req.session.user)
})

//* ADMIN *//

// Products
app.post("/products/insert", sessionUpdater, (req, res) => {
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
app.post("/keyboards/insert", sessionUpdater, (req, res) => {
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
app.post("/components/insert", sessionUpdater, (req, res) => {
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
app.post("/sales/insert", (req, res) => {
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