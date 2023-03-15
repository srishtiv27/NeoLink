const mongoose = require("mongoose");

const HealthcareDetailsSchema = new mongoose.Schema(
    {
        adminname: { type: String, required: true },
        admincontact: { type: Number, unique: true, required: true },
        adminemail: { type: String, unique: true, required: true },
        orgname: { type: String, unique: true, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
        password: { type: String, required: true },
        confirmpassword: { type: String, required: true },
    },
    {
        collection: "HealthcareDetails",
    }
);

mongoose.model("HealthcareDetails", HealthcareDetailsSchema);