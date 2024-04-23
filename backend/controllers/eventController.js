const event = require('../models/eventModel');

const mongoose = require('mongoose');


//get all forms
const event_index = (req, res) => {
    event.find().sort({ createdAt: -1 })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}


//get single form
const event_details = (req, res) => {
    const id = req.params.id;
    event.findById(id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}


//create form
const event_create = (req, res) => {
    const newForm = new event(req.body)
    newForm.save()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
}


module.exports = {
    event_index,
    event_details,
    event_create
}