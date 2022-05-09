const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/users.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/signup", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({
      message: "boshqattan kiriting",
    });
  }

  User.findOne({ email }).then((savedUser) => {
    if (savedUser) {
      return res.status(400).json({
        error: "bunda user mavjud",
      });
    }

    const user = new User({
      name: name,
      email: email,
      password: password,
    });

    user
      .save()
      .then((user) => {
        res.json({
          message: "muvaffaqqiyatli amalga oshirildi",
          user,
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  });
});

mongoose.connect(
  "mongodb+srv://Samandar021:Iisp9l5PPAfpUAil@cluster0.vb04a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.listen(7000, "127.0.0.1");

// mongo db parol Iisp9l5PPAfpUAil
// "mongodb+srv://Samandar021:Iisp9l5PPAfpUAil@cluster0.vb04a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//
