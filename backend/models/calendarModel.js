const mongoose = require('mongoose');



const calendarSchema = new mongoose.Schema({

    date: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      }
    });




const calendar = mongoose.model('calendar', calendarSchema);

module.exports = calendar;