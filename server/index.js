const express = require("express");
const mongoose = require("mongoose");
const app = express();

const { use } = require("express/lib/application");
const morgan = require("morgan");
let cors = require("cors");

app.use(morgan("common"));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader("Acces-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Acces-Contorl-Allow-Methods", "Content-Type", "Authorization");
  next();
});

mongoose.connect(
  "mongodb+srv://<username>:LUTXXCqxrpTcPcFD@cluster0.91oyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => {
    console.log("mongoDB ishladi");
  }
);

app.get("/api", (req, res) => {
  res.json({
    msg: "welcome to server",
  });
});

app.listen(7000, () => {
  console.log("server ishladi");
});

// mongo db parol LUTXXCqxrpTcPcFD//PPspauwTkIPSqq53
