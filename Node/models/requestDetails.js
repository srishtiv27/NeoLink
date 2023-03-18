const mongoose = require("mongoose");

const requestDetailsSchema = new mongoose.Schema(
    {
        healthcareadminemail: { type: String, required: true },
        sncuadminemail: { type: String, required: true },
        healthcarename: { type: String, required: true },
        sncuname: { type: String, required: true },
    },
    {
        collection: "RequestDetails",
    }
);

mongoose.model("RequestDetails", requestDetailsSchema);