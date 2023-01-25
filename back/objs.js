"use strict";

function user(_id=undefined, first_name="John", last_name="Doe", email="email@example.com") {
    this._id = _id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
}

function product(_id=undefined, name="", price=0, description="", images=[], tags=[]) {
    this._id = _id
    this.name = name
    this.price = price
    this.description = description
    this.images = images
    this.tags = tags
}

function component(_id=undefined, name="", price=0, description="", images=[], keyboards=[]) {
    this._id = _id
    this.name = name
    this.price = price
    this.description = description
    this.images = images
    this.keyboards = keyboards
}

function keyboard(_id=undefined, name="", price=0, description="", images=[], tags=[]) {
    this._id = _id
    this.name = name
    this.price = price
    this.description = description
    this.images = images
    this.tags = tags
}

module.exports = {
    user, product, component, keyboard
}