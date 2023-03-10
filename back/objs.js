const { ObjectId } = require("mongodb");
const structs = {
    // les valeurs de user et leur type
    "user": {
        "first_name": String,
        "last_name": String,
        "email": String,
        "permission_level": Number,
        "newsletter": Number,
        "custom_save_id": Array,
        "favorite_id": Array
    },
    // les valeurs de product et leur type
    "product": {
        "name": String,
        "price": Number,
        "type": String,
        "description": String,
        "images": Array,
        "tags": Array,
        "quantity": Number
    },
    // les valeurs de component et leur type
    "component": {
        "name": String,
        "price": Number,
        "description": String,
        "images": Array,
        "keyboards": Array,
        "quantity": Number
    },
    // les valeurs de keyboard et leur type
    "keyboard": {
        "name": String,
        "price": Number,
        "description": String,
        "images": Array,
        "tags": Array,
        "specs": Object,
        "quantity": Number,
        "keyCount": Number
    },
    // les valeurs de user-keyboard et leur type
    "user_keyboard": {
        "name": String,
        "price": Number,
        "description": String,
        "images": Array,
        "tags": Array,
        "user_id": String,
        "ranking": Number,
        "components": Array,
        "show": Number
    },
    // les valeurs de sale et leur type
    "sale": {
        "time": Number,
        "user_id": String,
        "type": String,
        "sold_id": String
    },
    // les valeurs de review et leur type
    "review": {
        "time": Number,
        "user_id": String,
        "type": String,
        "product_id": String,
        "comment": String,
        "rating": Number
    }
}

function check(obj, struct) {
    var isValid = true
    msg = ''

    Object.entries(struct).forEach(([key, type]) => {
        if (key == "dummy") return

        if (obj[key] == undefined || obj[key] == null)
            obj[key] = struct.dummy[key]

        if (obj[key].constructor !== type)
        {
            isValid = false
            msg += `${key} is not the correct type. Should be ${type.name}. `
        }
    })
    return [isValid, msg]
}
// on initialise user en lui metant ou non des valeurs par default
function user(_id=undefined, email="", password=undefined, first_name="", last_name="", permission_level=0, newsletter=0, custom_save_id=[], favorite_id=[]) {
    this._id = _id
    if (this._id == undefined) delete this._id
    else this._id = this._id.toString()
    this.email = email
    this.password = password
    this.first_name = first_name
    this.last_name = last_name
    this.permission_level = permission_level
    this.newsletter = newsletter
    this.custom_save_id = custom_save_id
    this.favorite_id = favorite_id
    const [isValid, msg] = check(this, structs.user)
    if (!isValid)
        throw new Error(msg);
}
// on initialise product en lui metant ou non des valeurs par default
function product(_id=undefined, name="Hello world!", price=0, type="keyboard", description="Lorem Ipsum.", images=[], tags=[], quantity=0) {
    this._id = _id
    if (this._id == undefined) delete this._id
    else this._id = this._id.toString()
    this.name = name
    this.price = price
    this.type = type
    this.description = description
    this.images = images
    this.tags = tags
    this.quantity = quantity
    const [isValid, msg] = check(this, structs.product)
    if (!isValid)
        throw new Error(msg);
}
// on initialise component en lui metant ou non des valeurs par default
function component(_id=undefined, name="", price=0, description="", images=[], keyboards=[], quantity=0) {
    this._id = _id
    if (this._id == undefined) delete this._id
    else this._id = this._id.toString()
    this.name = name
    this.price = price
    this.description = description
    this.images = images
    this.keyboards = keyboards
    this.quantity = quantity
    const [isValid, msg] = check(this, structs.component)
    if (!isValid)
        throw new Error(msg);
}
// on initialise keyboard en lui metant ou non des valeurs par default
function keyboard(_id=undefined, name="", price=0, description="", images=[], tags=[], specs={}, quantity=0, keyCount=101) {
    this._id = _id
    if (this._id == undefined) delete this._id
    else this._id = this._id.toString()
    this.name = name
    this.price = price
    this.description = description
    this.images = images
    this.tags = tags
    this.specs = specs
    this.quantity = quantity
    this.keyCount = keyCount
    const [isValid, msg] = check(this, structs.keyboard)
    if (!isValid)
        throw new Error(msg);
}
// on initialise user-keyboard en lui metant ou non des valeurs par default
function user_keyboard(_id=undefined, name="", price=0, description="", images=[], tags=[], user_id="", ranking = 0, components = [], show=0) {
    this._id = _id
    if (this._id == undefined) delete this._id
    else this._id = this._id.toString()
    this.name = name
    this.price = price
    this.description = description
    this.images = images
    this.tags = tags
    this.user_id = user_id
    this.ranking = ranking
    this.components = components
    this.show = show
    const [isValid, msg] = check(this, structs.user_keyboard)
    if (!isValid)
        throw new Error(msg);
}
// on initialise sale en lui metant ou non des valeurs par default
function sale(_id=undefined, time=0, user_id="", type="", sold_id="") {
    this._id = _id
    if (this._id == undefined) delete this._id
    else this._id = this._id.toString()
    this.time = time
    if (this.time == 0) this.time = Date.now()
    this.user_id = user_id
    this.type = type
    this.sold_id = sold_id
    const [isValid, msg] = check(this, structs.sale)
    if (!isValid)
        throw new Error(msg);
}
// on initialise review en lui metant ou non des valeurs par default
function review(_id=undefined, time=0, user_id="", type="", product_id="", comment="", rating=0) {
    this._id = _id
    if (this._id == undefined) delete this._id
    else this._id = this._id.toString()
    this.time = time
    if (this.time == 0) this.time = Date.now()
    this.user_id = user_id
    this.type = type
    this.product_id = product_id
    this.comment = comment
    this.rating = rating
    const [isValid, msg] = check(this, structs.review)
    if (!isValid)
        throw new Error(msg);
}

// on export les diff??rente collections
const toExport = {
    user, product, component, keyboard, user_keyboard, sale, review
}

Object.entries(toExport).forEach(([name, cls]) => {
    structs[name].dummy = new cls()
})

module.exports = toExport