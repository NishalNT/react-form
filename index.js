const express = require('express');
const app = express();
const PORT = 5000;
const Student = require('./models/Student');

const cors = require('cors');

require('./db');
app.use(express.json());
app.use(cors());

app.get("/hello", (req, res) => {
    res.send("Hello World!");
});

app.get("/name", (req, res) => {
    res.send("Nishal Here");
});

//create a student
app.post("/student", async (req, res) => {
    try {
        const data = req.body;
        const createdStudent = new Student(data);
        await createdStudent.save();
        res.send("Student Created");
    }catch(error){
        res.send(error);
    }
});

app.listen(PORT, function () {
    console.log("Server is running on localhost:" + PORT);
});

//read all the student data
//to insert save()
//to read find()
app.get("/student", async (req,res) => {
    try {
        const studentList = await Student.find();
        res.send(studentList);
    } catch (error) {
        res.send(error);
    }
});

//update using put
app.put("/student/:id", async (req,res) => {
    try {
        const data = req.body;
        await Student.updateOne({_id: req.params.id}, { $set: data });
        res.send("Student Updated");
    } catch (error) {
        res.send(error);
    }
});

//delete operation
app.delete("/student/:id", async (req,res) => {
    try {
        await Student.deleteOne({_id: req.params.id});
        res.send("Student Deleted");
    } catch (error) {
        res.send(error);
    }
});

//get the student by id
app.get("/student/:id", async (req,res) => {
    try {
        const student = await Student.findById({ _id: req.params.id });
        res.send(student);
    } catch (error) {
        res.send(error);
    }
});