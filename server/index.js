const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("common"));

app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader("Acces-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Acces-Contorl-Allow-Methods", "Content-Type", "Authorization");
  next();
});

// mongoose.connect(
//   "mongodb+srv://samandar021:NQElVJEclaWle9fd@cluster0.5ccw2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// );

// 2.data scheme
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   desc: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   number: {
//     type: Number,
//     required: true,
//   },
// });

// 3.data model
// const Contact = mongoose.model("Contact", userSchema);

// 4.api
// getContact = (req, res) => {
//   res.status(200).json({
//     data: "ishladi",
//   });
//   Contact.find()
//     .then((res) => res.json())
//     .catch((err) => res.status(400).json({ err }));
// };

// create route
// postContact = (req, res) => {
//   const newContact = new Contact({
//     name: req.body.name,
//     desc: req.body.desc,
//     number: req.body.number,
//   });
//   console.log(req.body);
//   console.log("bir");

//   newContact
//     .save()
//     .then((res) => console.log(res))
//     .catch((err) => {
//       res.status(400).json({ err });
//     });
// };

const book = JSON.parse(fs.readFileSync(`${__dirname}/kitoblar.json`, "utf-8"));

app.route("/newContact").get();

// app.route("/newContact").get(getContact);

app.listen(7000, () => {
  console.log("server ishladi");
});

// mongo db parol NQElVJEclaWle9fd
// "mongodb+srv://Samandar021:Iisp9l5PPAfpUAil@cluster0.vb04a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//
