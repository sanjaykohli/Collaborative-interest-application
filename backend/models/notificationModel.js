const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;