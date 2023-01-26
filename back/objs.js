const { ObjectId } = require("mongodb");
const structs = {
    "user": {
        "first_name": String,
        "last_name": String,
        "email": String
    },
    "product": {
        "name": String,
        "price": Number,
        "description": String,
        "images": Array,
        "tags": Array
    },
    "component": {
        "name": String,
        "price": Number,
        "description": String,
        "images": Array,
        "keyboards": Array
    },
    "keyboard": {
        "name": String,
        "price": Number,
        "description": String,
        "images": Array,
        "tags": Array,
        "specs": Object
    },
    "sale": {
        "time": Number,
        "user_id": String,
        "type": String,
        "sold_id": String
    }
}

function check(obj, struct) {
    var [ isValid, msg ] = [ true, '' ]
    Object.entries(struct).forEach(([key, type]) => {
        if (obj[key].constructor !== type)
        {
            isValid = false
            msg += `${key} is not the correct type. Should be ${type.name}. `
        }
    })
    return isValid, msg
}

function user(_id=undefined, first_name="John", last_name="Doe", email="email@example.com") {
    this._id = _id
    if (this._id == undefined) delete this._id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    const [isValid, msg] = check(this, structs.user)
    if (!isValid)
        throw new Error(msg);
}

function product(_id=undefined, name="", price=0, description="", images=[], tags=[]) {
    this._id = _id
    if (this._id == undefined) delete this._id
    this.name = name
    this.price = price
    this.description = description
    this.images = images
    this.tags = tags
    const [isValid, msg] = check(this, structs.product)
    if (!isValid)
        throw new Error(msg);
}

function component(_id=undefined, name="", price=0, description="", images=[], keyboards=[]) {
    this._id = _id
    if (this._id == undefined) delete this._id
    this.name = name
    this.price = price
    this.description = description
    this.images = images
    this.keyboards = keyboards
    const [isValid, msg] = check(this, structs.component)
    if (!isValid)
        throw new Error(msg);
}

function keyboard(_id=undefined, name="", price=0, description="", images=[], tags=[], specs={}) {
    this._id = _id
    if (this._id == undefined) delete this._id
    this.name = name
    this.price = price
    this.description = description
    this.images = images
    this.tags = tags
    this.specs = specs
    const [isValid, msg] = check(this, structs.keyboard)
    if (!isValid)
        throw new Error(msg);
}

function sale(_id=undefined, time=0, user_id="", type="", sold_id="") {
    this._id = _id
    if (this._id == undefined) delete this._id
    this.time = time
    if (this.time == 0) this.time = Date.now()
    this.user_id = user_id
    this.type = type
    this.sold_id = sold_id
    const [isValid, msg] = check(this, structs.sale)
    if (!isValid)
        throw new Error(msg);
}

module.exports = {
    user, product, component, keyboard, sale
}