const mongoose = require('mongoose');

mongoose
.connect("mongodb://localhost:27017/e-commerce")
.then(()=>{
    console.log("Connected to MongoDB successfully");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
});

module.exports = mongoose; 