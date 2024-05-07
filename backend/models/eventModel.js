const mongoose = require('mongoose');

const eventFormSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  enrollmentNumber: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  previousExperience: {
    type: String
  },
  videoUrl: {
    type: String,
    required: true
  }, 
}, {timestamps: true}
);


module.exports = mongoose.model('eventForm', eventFormSchema);
