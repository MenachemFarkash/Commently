const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const users = express.Router();

const User = new mongoose.model(
    "User",
    new mongoose.Schema({
        name: {
            type: String,
            minlength: 2,
            maxlength: 22,
            required: true,
        },
        email: {
            type: String,
            minlength: 5,
            maxlength: 255,
            required: true,
        },
        password: {
            type: String,
            minlength: 3,
            maxlength: 255,
            required: true,
        },
    })
);

users.get("/", async (req, res) => {
    const users = await User.find();
    res.send(users);
});

users.post("/", async (req, res) => {
    const salt = await bcrypt.genSalt(8);
    const hash = await bcrypt.hash(req.body.password, salt);

    let user = new User({
        name: req.body.name,
        password: hash,
        email: req.body.email,
    });
    user = await user.save();
    res.send(_.pick(user, ["name", "email"]));
});

module.exports = { users, User };
