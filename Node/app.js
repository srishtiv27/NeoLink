const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const mongoose = require("mongoose");
app.use(express.json());
const mongoUrl = "mongodb+srv://nehal033:zHWE23qQt2FQ7hRG@neolink.ib2ywci.mongodb.net/?retryWrites=true&w=majority"

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

app.post("/register", async (req, res) => {
    const { adminname, admincontact, adminemail, orgname, address, city, state, pincode, password, confirmpassword } = req.body;

    // const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await User.findOne({ adminemail });
        var errormessage = "";
        if (oldUser) {
            errormessage = "User Exists";
            return res.json({ error: errormessage });
        }
        const passwordcheck = await User.findOne({password});
        const cpasswordcheck = await User.findOne({confirmpassword});
        
        if(passwordcheck != cpasswordcheck)
        {
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
        res.send({ status: "ok" });
    } catch (error) {
        res.send({ status: "error" });
    }
});
app.listen(3001, () => {
    console.log("Server Started");
});



