const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task: {type: String},
    completed: {type: Boolean}
});

const List = mongoose.model('Lists', ListSchema);

let list = [];


module.exports = router;