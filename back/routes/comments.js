const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { User } = require("./users");
const secret = "menachem farkash eli haela";

const comments = express.Router();
comments.use(cors());

const CommentsScheme = new mongoose.model(
    "Comment",
    new mongoose.Schema({
        body: {
            type: String,
            minlength: 3,
            maxlength: 255,
            // required: true,
        },
        user: {
            type: String,
            default: "noName",
            required: true,
        },
    })
);

comments.get("/", async (req, res) => {
    const comments = await CommentsScheme.find();
    res.send(comments);
});

comments.post("/", async (req, res) => {
    const user = jwt.decode(req.body.token, secret);
    const id = user.id;
    const specificUser = await User.find({ id });
    const userName = specificUser[0].name;
    let comment = await new CommentsScheme({
        body: req.body.body,
        user: userName,
    });
    try {
        comment = await comment.save();
        res.send(comment);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = comments;
