const { response } = require("express");
const mongoose = require("mongoose");


mongoose.connect(
    "mongodb+srv://NishalN:Nishal_2004@cluster0.iarovnv.mongodb.net/student?retryWrites=true&w=majority"
)
.then((response) => {
    console.log("Connected to database")
})
.catch((error) => {
    console.log(error);
})