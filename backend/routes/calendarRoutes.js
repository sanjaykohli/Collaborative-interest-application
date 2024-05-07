const express = require('express');
const { getAllcalendars, getcalendarById, createcalendar, updatecalendarById } = require('../controllers/calendarController');

const calendarRouter = express.Router();

// Route for getting all calendars
calendarRouter.get('/', getAllcalendars);

// Route for getting one calendar by Email
calendarRouter.get('/:id', getcalendarById);

// Route for creating a new calendar
calendarRouter.post('/', createcalendar);

// Route for updating a calendar by ID
calendarRouter.put('/:id', updatecalendarById);

module.exports = calendarRouter;
