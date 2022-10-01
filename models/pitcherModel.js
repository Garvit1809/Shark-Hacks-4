const mongoose = require('mongoose');
const validator = require("validator");

const pitcherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a Username']
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"],
      },
    photo: String,
    comanyName: String,
    comapanyDescription: String,
    companyImage: String,
    companyPosition: String
})

const Pitcher = mongoose.model('Pitcher', investorSchema);

module.exports = Pitcher;
