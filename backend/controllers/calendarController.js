// calendarController.js

const calendar = require('../models/calendarModel');

// Function to get all calendars
const getAllcalendars = async (req, res) => {
    try {
        const calendars = await calendar.find();
        res.status(200).json(calendars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to get one calendar by email
const getcalendarById = async (req, res) => {
    try {
        const { id } = req.params;
        const calendar = await calendar.findOne({id: id});
        if (!calendar) {
            return res.status(404).json({ message: 'calendar not found' });
        }
        res.status(200).json(calendar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createcalendar = async (req, res) => {
    try {
        const { date, title, color  } = req.body;
        const newcalendar = await calendar.create({ date, title, color });
        res.status(201).json(newcalendar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatecalendarById = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, title, color } = req.body;

        const updatedcalendar = await calendar.findByIdAndUpdate(id, { date, title, color }, { new: true });

        if (!updatedcalendar) {
            return res.status(404).json({ message: 'calendar not found' });
        }

        res.status(200).json(updatedcalendar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllcalendars,
    getcalendarById,
    createcalendar,
    updatecalendarById
};
