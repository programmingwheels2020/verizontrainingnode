const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    club: { type: String, required: true },
    rating: { type: Number, required: true },
})

const playerModel = mongoose.model("Player", playerSchema)

module.exports = playerModel;