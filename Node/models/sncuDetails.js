const mongoose = require("mongoose");

const SNCUDetailsSchema = new mongoose.Schema(
    {
        adminname: { type: String, required: true },
        admincontact: { type: Number, unique: true, required: true },
        adminemail: { type: String, unique: true, required: true },
        orgname: { type: String, unique: true, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: Number, required: true },
        beds: { type: Number, required: true },
        specializations: { type: String, required: true },
        staff: { type: Number, required: true },
        severity: { type: String, required: true },
        maxage: { type: Number, required: true },
        transport: { type: String, required: true },
        password: { type: String, required: true },
        confirmpassword: { type: String, required: true },
    },
    {
        collection: "SNCUDetails",
    }
);

mongoose.model("SNCUDetails", SNCUDetailsSchema);