const mongoose = require("mongoose");

const feetbackSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comment:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
})

const feetback = mongoose.model("Feetback", feetbackSchema);

module.exports = feetback