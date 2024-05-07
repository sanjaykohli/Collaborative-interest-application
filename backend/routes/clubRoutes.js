const express = require('express')

const {
    club_index,
    club_details,
    club_create
} = require('../controllers/clubController')

const clubRouter = express.Router()

//get all forms
clubRouter.get('/', club_index)

//get single form
clubRouter.get('/:id', club_details)

//create form
clubRouter.post('/', club_create)


module.exports = clubRouter