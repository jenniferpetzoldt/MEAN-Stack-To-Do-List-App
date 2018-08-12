const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task: {type: String},
    completed: {type: Boolean}
});

const List = mongoose.model('Lists', TaskSchema);

let list = [];

router.post('/', (req, res)=>{
    console.log('/list POST');
    console.log(req.body);
    let taskFromClient = req.body;
    const taskToAdd = new List(taskFromClient);
    taskToAdd.save().then(()=>{
        console.log('Task added', taskToAdd);
        res.sendStatus(201);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    });
});

// router.get('/outback', (req, res)=>{
//     res.send(List);
// }).catch((error)=>{
//     res.sendStatus(500);
// })

module.exports = router;