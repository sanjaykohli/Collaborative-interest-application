const express = require('express')

const {
    event_index,
    event_details,
    event_create
} = require('../controllers/eventController')

const eventRouter = express.Router()

//get all forms
eventRouter.get('/', event_index)

//get single form
eventRouter.get('/:id', event_details)

//create form
eventRouter.post('/', event_create)


module.exports = eventRouter