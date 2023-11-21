const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
    {
        name: String,
        email: String,
        phone: String,
        USN: String,
        branch: String,
        sem: Number,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Student", studentSchema);
