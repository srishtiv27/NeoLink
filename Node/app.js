const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const mongoose = require("mongoose");
app.use(express.json());
const mongoUrl = "mongodb+srv://nehal033:zHWE23qQt2FQ7hRG@neolink.ib2ywci.mongodb.net/?retryWrites=true&w=majority"
const JWT_SECRET = "nehalrosaliasrishtirosowlia";

mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((e) => console.log(e));

require("./models/healthcareDetails");
const User = mongoose.model("HealthcareDetails");

app.post("/register-healthcare", async (req, res) => {
    const { adminname, admincontact, adminemail, orgname, address, city, state, pincode, password, confirmpassword } = req.body;

    // const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await User.findOne({ adminemail });
        var errormessage = "";
        if (oldUser) {
            errormessage = "User Exists";
            return res.json({ error: errormessage });
        }
        const passwordcheck = req.body.password;
        const cpasswordcheck = req.body.confirmpassword;

        if (passwordcheck !== cpasswordcheck) {
            errormessage = "Passwords not matching!";
            return res.send({ error: errormessage });
        }
        await User.create({
            adminname,
            admincontact,
            adminemail,
            orgname,
            address,
            city,
            state,
            pincode,
            password,
            confirmpassword
        });
        res.send({ status: "ok", error: errormessage });
    } catch (error) {
        res.send({ status: "error", error: errormessage });
    }
});
app.listen(3001, () => {
    console.log("Server Started");
});

app.post("/login-healthcare", async (req, res) => {
    const { adminemail, password } = req.body;

    const user = await User.findOne({ adminemail });
    if (!user) {
        return res.json({ error: "User Not found" });
    }
    if (password === user.password) {
        const token = jwt.sign({ email: user.adminemail }, JWT_SECRET, {
            expiresIn: "150m",
        });

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "Invalid Password" });
});

app.post("/healthcare-data", async (req, res) => {
    const { token } = req.body;
    try {
        console.log(token);
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
          return "token expired";
        }
        return res;
      });
      console.log(user);
      if (user == "token expired") {
        return res.send({ status: "error", data: "token expired" });
      }
  
      const useremail = user.adminemail;
      User.findOne({ email: useremail })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) { }
  });