const mongoose = require('mongoose');

const ownerScema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    products:{
        type: Array,
        default: []
    },
    picture: String,
    gstin: String,
})

mongoose.export = mongoose.model("owner", ownerScema);