const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const mongoose = require("mongoose");
const comments = express();
comments.use(cors());
const { users } = require("./routes/users");
const commentsRouter = require("./routes/comments");
const login = require("./routes/login");

comments.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/commently").then(console.log("connected"));

// comments.use('/api/auth');
comments.use("/api/users", users);
comments.use("/api/comments", commentsRouter);
comments.use("/api/login", login);

const port = process.env.PORT || 4000;
comments.listen(port);
