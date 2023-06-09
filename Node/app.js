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

require("./models/sncuDetails");
const UserSNCU = mongoose.model("SNCUDetails");

require("./models/requestDetails");
const UserRequestDetails = mongoose.model("RequestDetails");

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
            return res.json({ status: "ok", data: user.orgname});
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
app.post("/register-sncu", async (req, res) => {
    const { adminname, admincontact, adminemail, orgname, address, city, state, pincode, beds,
        specializations, staff, severity, maxage, transport, password, confirmpassword } = req.body;

    // const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await UserSNCU.findOne({ adminemail });
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

        var specializationsArr = specializations.split(', ');

        await UserSNCU.create({
            adminname, admincontact, adminemail, orgname, address, city, state, pincode, beds,
            specializationsArr, staff, severity, maxage, transport, password, confirmpassword
        });
        res.send({ status: "ok", error: errormessage });
    } catch (error) {
        res.send({ status: "error", error: errormessage });
    }
});

app.post("/login-sncu", async (req, res) => {
    const { adminemail, password } = req.body;

    const user = await UserSNCU.findOne({ adminemail });
    if (!user) {
        return res.json({ error: "User Not found" });
    }
    if (password === user.password) {
        const token = jwt.sign({ email: user.adminemail }, JWT_SECRET, {
            expiresIn: "150m",
        });

        if (res.status(201)) {
            return res.json({ status: "ok", data: user });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "Invalid Password" });
});

app.post("/search-sncu", async (req, res) => {
    const { location, transport, severity, beds, maxage, specializations } = req.body;
    var specializationsArr = [];
    for (let i = 0; i < specializations.length; i++) {
        specializationsArr.push(specializations[i].label);
    }

    try {
        const result = await UserSNCU
        .find({city: location,
               maxage: {$gte : maxage}, 
               severity: severity,
               beds: {$gte: beds},
               transport: transport,
               specializationsArr: {$in: specializationsArr},
            })

        res.send({ status: "ok", data : result });
    } catch (error) {
        res.send({ status: "error", error: "errormessage" });
    }
    
});

app.post("/request-details", async (req, res) => {
    const { healthcareadminemail, sncuadminemail, healthcarename, sncuname} = req.body;
    console.log(healthcareadminemail, sncuadminemail, healthcarename, sncuname);
    try {
        await UserRequestDetails.create({
            healthcareadminemail, sncuadminemail, healthcarename, sncuname
        });
        res.send({ status: "ok", error: "Error 1"});
    } catch (error) {
        res.send({ status: "error", error: "Error 2"});
    }
});

app.post("/get-details", async (req, res) => {
    const {sncuadminemail} = req.body;
    // const user = await UserSNCU.findOne({ adminemail: sncuadminemail});
    // console.log(user.orgname);
    console.log(sncuadminemail);
    try {
        const result = await UserRequestDetails.find(
            {
                sncuadminemail: sncuadminemail
            }
        )
        // console.log(result)
        res.send({ status: "ok", data: result});
    } catch (error) {
        res.send({ status: "error", error: "Error"});
    }
});