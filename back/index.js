const express = require("express");
const fs = require("fs")

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

app.use(cors({
    credentials: true,
    origin: ["http://10.1.144.34:3000", "http://localhost:3000","http://10.1.171.14:3000"]
}));
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
                req.session.user = new objsTypes.user(result._id, result.email, undefined, result.first_name, result.last_name, result.permission_level)
            } else {
                delete req.session.user
            }
            next()
        })
    } else next();
};

const adminRestricted = (req, res, next) => {
    // Session updater
    if (req.session.user && req.session.user.permission_level && (req.session.user.permission_level > 200)) {
        next();
    } else res.status(403).json({ msg: 'You cannot access this resource.' });
};

app.get("/", (req, res, next) => {
    res.send("Hello World!");
});

//* FETCH *//

// Generic search
const SearchCollection = async (collection, query, callback) => {
    const dbConnect = dbo.getDb();
    const sort = query.sort || {}
    delete query.sort

    var err, result
    await dbConnect
        .collection(collection)
        .find(query)
        .sort(sort)
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
        .findOne({ _id: ObjectId(_id) })
        .then((rresult) => {
            if (callback) callback(rresult)
            result = rresult
        });

    return result
}

const GetLast = async (collection, callback) => {
    const dbConnect = dbo.getDb();

    var result
    await dbConnect
        .collection(collection)
        .find()
        .limit(1)
        .sort({ $natural: -1 })
        .then((rresult) => {
            if (callback) callback(rresult)
            result = rresult
        });

    return result
}

// Products

app.get("/products", (req, res, next) => {
    SearchCollection("products", {}, (err, result) => {
        if (err) {
            res.status(400).send("Error fetching products!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.product(x._id, x.name, x.price, x.type, x.description, x.images, x.tags, x.quantity)
            })
            console.log(objects)
            res.json(result);
        }
    }).catch(next);
});
app.get("/products/:id", (req, res, next) => {
    GetOne("products", req.params.id, x => {
        res.json(new objsTypes.product(x._id, x.name, x.price, x.type, x.description, x.images, x.tags, x.quantity));
    }).catch(next);
});
app.get("/products/last", (req, res, next) => {
    GetLast("products", x => {
        res.json(new objsTypes.product(x._id, x.name, x.price, x.type, x.description, x.images, x.tags, x.quantity));
    }).catch(next);
});

// Keyboards
app.get("/keyboards", (req, res, next) => {
    SearchCollection("keyboards", {}, (err, result) => {
        if (err) {
            res.status(400).send("Error fetching keyboards!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.keyboard(x._id, x.name, x.price, x.description, x.images, x.tags, x.specs, x.quantity, x.keyCount)
            })
            res.json(result);
        }
    }).catch(next);
});
app.get("/keyboards/:id", (req, res, next) => {
    GetOne("keyboards", req.params.id, x => {
        res.json(new objsTypes.keyboard(x._id, x.name, x.price, x.description, x.images, x.tags, x.specs, x.quantity, x.keyCount));
    }).catch(next);
});
app.get("/keyboards/last", (req, res, next) => {
    GetLast("keyboards", x => {
        res.json(new objsTypes.keyboard(x._id, x.name, x.price, x.description, x.images, x.tags, x.specs, x.quantity, x.keyCount));
    }).catch(next);
});

// User Keyboards
app.get("/user_keyboards", (req, res, next) => {
    var sort = {}
    switch (req.query.sort) {
        case "mostliked":
            sort = { "ranking": -1 }
            break;
        default:
            sort = {}
            break;
    }

    SearchCollection("user_keyboards", { sort, user_id: req.query.user_id }, (err, result) => {
        if (err) {
            res.status(400).send("Error fetching keyboards!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.user_keyboard(x._id, x.name, x.price, x.description, x.images, x.tags, x.user_id, x.ranking, x.component, x.show)
            })
            res.json(result);
        }
    }).catch(next);
});

// Components
app.get("/components", (req, res, next) => {
    SearchCollection("components", {}, (err, result) => {
        if (err) {
            res.status(400).send("Error fetching components!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.component(x._id, x.name, x.price, x.description, x.images, x.keyboards, x.quantity)
            })
            res.json(result);
        }
    }).catch(next);
});
app.get("/components/by-keyboard/:id", (req, res, next) => {
    const _id = req.params.id

    SearchCollection("components", { keyboards: { $all: [_id] } }, (err, result) => {
        if (err) {
            console.log(err)
            res.status(400).send("Error fetching components!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.component(x._id, x.name, x.price, x.description, x.images, x.keyboards, x.quantity)
            })
            res.json(result);
        }
    });
});
app.get("/components/:id", (req, res, next) => {
    GetOne("components", req.params.id, x => {
        res.json(new objsTypes.component(x._id, x.name, x.price, x.description, x.images, x.keyboards, x.quantity));
    }).catch(next);
});
app.get("/components/last", (req, res, next) => {
    GetLast("components", x => {
        res.json(new objsTypes.component(x._id, x.name, x.price, x.description, x.images, x.keyboards, x.quantity));
    }).catch(next);
});

// Reviews

app.get("/reviews/:type/:id", (req, res, next) => {
    const product_id = req.params.id
    const type = req.params.type

    SearchCollection("reviews", { "type": type, "product_id": product_id }, (err, result) => {
        if (err) {
            console.log(err)
            res.status(400).send("Error fetching components!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.review(x._id, x.time, x.user_id, x.type, x.product_id, x.comment, x.rating)
            })
            res.json(result);
        }
    }).catch(next);
});

// Sales

app.get("/sales/most-sales", (req, res, next) => {
    const dbConnect = dbo.getDb();

    dbConnect.collection("sales").aggregate([
        {
        $group: {
          _id: {
            sold_id: "$sold_id",
            type: "$type"
          },
          count: {
            $sum: 1
          }
          }
        },
        {
          $addFields: {
            convertedId: { $toObjectId: "$_id.sold_id" },
          }
        },
        {
          $lookup: {
              from: "products",
              let: {sold_id: "$convertedId", type: "$type"},
              pipeline: [
                { $match: { $expr : { $eq: [ '$_id', "$$sold_id" ] } } }
              ],
              as: "product_info"
          },
        },
        {
          $lookup: {
              from: "keyboards",
              let: {sold_id: "$convertedId", type: "$type"},
              pipeline: [
                { $match: { $expr : { $eq: [ '$_id', "$$sold_id" ] } } }
              ],
              as: "keyboard_info"
          },
        }
      ]).sort({ "count": -1 }).limit(4).toArray((err, result) => {
        if (err) {
            console.log(err)
            res.status(400).send("Error fetching components!");
        } else {
            const ret = result.map(obj => {
                if (obj.keyboard_info[0])
                    return
                let x = obj.product_info[0] || obj.keyboard_info[0]
                return {
                    type: obj._id.type,
                    count: obj.count,
                    info:  obj.product_info[0] ? new objsTypes.product(x._id.o, x.name, x.price, x.type, x.description, x.images, x.tags, x.quantity) : new objsTypes.keyboard(x._id, x.name, x.price, x.description, x.images, x.tags, x.specs, x.quantity, x.keyCount)
                }
            })

            res.json(ret);
        }
    });
});

//* USERS *//

const hashPassword = password => crypto.createHash('sha256').update(salt + password).digest("hex")
app.post("/register", sessionUpdater, (req, res, next) => {
    const dbConnect = dbo.getDb();
    const body = req.body

    const obj = new objsTypes.user(undefined, body.email, password = hashPassword(body.password), body.first_name, body.last_name)

    dbConnect
        .collection("users")
        .insertOne(obj)
        .then(result => {
            if (result.acknowledged) {
                req.session.user = new objsTypes.user(result.insertedId, body.email, undefined, body.first_name, body.last_name)
                res.json({ msg: "OK", userInfo: req.session.user })
            }
        }).catch(next);
})
app.post("/login", sessionUpdater, (req, res, next) => {
    const dbConnect = dbo.getDb();
    const body = req.body

    dbConnect
        .collection("users")
        .findOne({ email: body.email.toString(), password: hashPassword(body.password) })
        .then((result) => {
            if (result) {
                req.session.user = new objsTypes.user(result._id, result.email, undefined, result.first_name, result.last_name, result.permission_level)
                res.json({ msg: "OK", userInfo: req.session.user })
            } else {
                res.status(400).json({ msg: "Email or password incorrect!" })
            }
        }).catch(next);
})
app.get("/logout", sessionUpdater, (req, res, next) => {
    const dbConnect = dbo.getDb();

    delete req.session.user
    res.json({ msg: "OK" })
})
app.get("/getUserInfo", sessionUpdater, (req, res, next) => {
    res.json(req.session.user)
})
app.post("/update", sessionUpdater, (req, res, next) => {
    const dbConnect = dbo.getDb();
    const body = req.body
    req.session.user

    dbConnect.collection("users").updateOne(
        {id:body.id},
        {$set:{email: body.email, password: body.password , first_name: body.first_name, last_name: body.last_name}})
});

//* NEWSLETTER *//
app.post("/newsletterOn", sessionUpdater, (req, res, next) => {
    const dbConnect = dbo.getDb();
    const body = req.body

    dbConnect.collection("users").update(
        {email: body.email.toString()},
        {newsletter: 1}
    )
});

app.post("/newsletterOff", sessionUpdater, (req, res, next) => {
    const dbConnect = dbo.getDb();
    const body = req.body

    dbConnect.collection("users").update(
        {email: body.email.toString()},
        {newsletter: 0}
    )
});

//* ADMIN *//

// Products
app.post("/products/insert", [sessionUpdater, adminRestricted], (req, res, next) => {
    const dbConnect = dbo.getDb();
    const body = req.body
    delete body._id;

    const obj = new objsTypes.product(undefined, body.name, body.price, body.type, body.description, body.images, body.tags, body.quantity)

    dbConnect
        .collection("products")
        .insertOne(obj)
        .then(result => {
            if (result.acknowledged)
                res.json({ msg: "OK", insertedId: result.insertedId.toString() })
        }).catch(next);
});

// Keyboards
app.post("/keyboards/insert", [sessionUpdater, adminRestricted], (req, res, next) => {
    const dbConnect = dbo.getDb();
    const body = req.body
    delete body._id;

    const obj = new objsTypes.keyboard(body._id, body.name, body.price, body.description, body.images, body.tags, body.specs, body.quantity, body.keyCount)

    dbConnect
        .collection("keyboards")
        .insertOne(obj)
        .then(result => {
            if (result.acknowledged)
                res.json({ msg: "OK", insertedId: result.insertedId.toString() })
        }).catch(next);
});

// User Keyboards
app.post("/user_keyboards/insert", [sessionUpdater, adminRestricted], (req, res, next) => {
    const dbConnect = dbo.getDb();
    const body = req.body
    delete body._id;

    const obj = new objsTypes.user_keyboard(body._id, body.name, body.price, body.description, body.images, body.tags, body.user_id, body.ranking, body.component, body.show)

    dbConnect
        .collection("user_keyboards")
        .insertOne(obj)
        .then(result => {
            if (result.acknowledged)
                res.json({ msg: "OK", insertedId: result.insertedId.toString() })
        }).catch(next);
});

// Components
app.post("/components/insert", [sessionUpdater, adminRestricted], (req, res, next) => {
    const dbConnect = dbo.getDb();
    const body = req.body
    delete body._id;

    const obj = new objsTypes.component(body._id, body.name, body.price, body.description, body.images, body.keyboards, body.quantity)

    dbConnect
        .collection("components")
        .insertOne(obj)
        .then(result => {
            if (result.acknowledged)
                res.json({ msg: "OK", insertedId: result.insertedId.toString() })
        }).catch(next);
});

// Users

app.get("/users", [sessionUpdater, adminRestricted], (req, res, next) => {
    SearchCollection("users", {}, (err, result) => {
        if (err) {
            res.status(400).send("Error fetching users!");
        } else {
            var objects = result.map(x => {
                return new objsTypes.user(x._id, x.email, undefined, x.first_name, x.last_name, x.permission_level, x.newsletter, x.custom_save_id, x.favorite_id)
            })
            res.json(result);
        }
    }).catch(next);
});

app.delete("/users/delete", [sessionUpdater, adminRestricted], (req, res, next)=> {
    const dbConnect = dbo.getDb();
    const body = req.body

    dbConnect.collection("users").deleteOne(
        {_id: body._id}
    ).then(result => {
        if (result.acknowledged)
            res.json({ msg: "OK" })
    }).catch(next);
})
/*
        _id=undefined, email="", password=undefined, first_name="", last_name="", permission_level=0, newsletter=0, custom_save_id=[], favorite_id=[]
*/
/* Sales
app.post("/sales/insert", (req, res, next) => {
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
*/

//* STATIC CONTENT *//

app.get("/info", (req, res, next) => {
    res.json(JSON.parse(fs.readFileSync('./info.json', { encoding: "utf-8" })))
});

app.post("/info", [sessionUpdater, adminRestricted], (req, res, next) => {
    fs.writeFile('./info.json', JSON.stringify(req.body), { encoding: "utf-8" }, err => {
        if (err)
            res.status(400).json({ msg: "ERROR", error: err })
        else
            res.json({ msg: "OK" })
    })
});

//* CONNECTION & STARTUP *//

app.use((err, req, res, next) => {
    res.status(500).json({ msg: `Error: ${err.message}` })
})

dbo.connectToServer().then(() =>
    app.listen(port, function () {
        console.log(`App listening on port ${port}!`);
    })
);