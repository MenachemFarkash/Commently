const express = require("express");
const bcrypt = require("bcryptjs");
const { User } = require("./users");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const secret = "menachem farkash eli haela";

const login = express.Router();

login.post("/", async (req, res) => {
    const user = await User.find({ email: req.body.email });
    if (!user) res.status(400).send("Username or password are incorrect");
    let token = "what bro what you do";
    try {
        const id = user[0]._id;
        const name = user[0].user;
        const correctDetails = await bcrypt.compare(req.body.password, user[0].password);
        try {
            if (correctDetails) {
                token = jwt.sign({ id, name }, secret);
            }
            res.header("x-auth-token", token)
                .header("access-control-expose-header", "x-auth-token")
                .send(token);
            console.log(token);
        } catch (error) {
            console.log("no token generated");
            res.status(401).send(token);
        }
    } catch {
        res.send("sorry no user was found");
    }
});

module.exports = login;
