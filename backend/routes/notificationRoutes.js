const express = require('express');
const { createNotification, getAllNotifications, notification_details, deleteNotification } = require('../controllers/notificationController');

const notificationRouter = express.Router();

// Route for creating a new notification
notificationRouter.post('/', createNotification);

// Route for getting all notifications
notificationRouter.get('/', getAllNotifications);


notificationRouter.get('/:id', notification_details);


notificationRouter.delete('/:id', deleteNotification);


module.exports = notificationRouter;