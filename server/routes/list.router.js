const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task: { type: String },
    completed: { type: Boolean }
});

const List = mongoose.model('Lists', TaskSchema);

let list = [];

router.delete('/:id', (req, res)=> {
    List.findByIdAndRemove(req.params.id).then((response)=> {
        res.sendStatus(200);
    }).catch((error)=> {
        res.sendStatus(500);
    });
})//end delete

router.get('/', (req, res) => {
    console.log('/list GET hit');
    List.find({}).then((foundTasks) => {
        res.send(foundTasks);
        console.log(foundTasks);
    }).catch((error) => {
        res.sendStatus(500);
    });
})//end get

router.post('/', (req, res) => {
    console.log('/list POST');
    console.log(req.body);
    let taskFromClient = req.body;
    const taskToAdd = new List(taskFromClient);
    taskToAdd.save().then(() => {
        console.log('Task added', taskToAdd);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});//end post

router.put('/taskComplete/:id', (req, res)=>{
    console.log(foundTask);
    foundTask.complete = true;
    foundTask.save().then((response)=>{
        res.sendStatus(200);
        console.log('foundTask adjusted');
    }).catch((error)=>{
        res.sendStatus(500);
        console.log('error', error);
    });
})//end put

module.exports = router;