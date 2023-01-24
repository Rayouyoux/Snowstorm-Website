"use strict";

export function user(_id=undefined, first_name="John", last_name="Doe", email="email@example.com") {
    this._id = _id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
}

export function product(_id=undefined, name="", price=0, tags=[]) {
    this._id = _id
    this.name = name
    this.price = price
    this.tags = tags
}

export function component(_id=undefined, name="", price=0, keyboards=[]) {
    this._id = _id
    this.name = name
    this.price = price
    this.keyboards = keyboards
}

export function products(_id=undefined, name="", price=0, tags=[]) {
    this._id = _id
    this.name = name
    this.price = price
    this.tags = tags
}