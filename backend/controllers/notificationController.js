const Notification = require('../models/notificationModel');

// Function to create a new notification
const createNotification = async (req, res) => {
  try {
    const { data, from } = req.body;
    const newNotification = await Notification.create({ data, from });
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all notifications
const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const notification_details = (req, res) => {
  const id = req.params.id;
  notification.findById(id)
      .then(result => {
          res.json(result)
      })
      .catch(err => {
          console.log(err)
      })
}


const deleteNotification = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedNotification = await Notification.findByIdAndDelete(id);
    if (!deletedNotification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    res.status(200).json({ message: "Notification deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createNotification,
  getAllNotifications,
  notification_details,
  deleteNotification
};