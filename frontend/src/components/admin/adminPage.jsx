// AdminPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from '../Calendar';
import './admin.css';

const AdminPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [users, setUsers] = useState([]);
  const [newNotification, setNewNotification] = useState({ data: '', from: '' });
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ date: '', title: '', color: '' });
  const [clubForms, setClubForms] = useState([]);

  useEffect(() => {
    fetchNotifications();
    fetchUsers();
    fetchEvents();
    fetchClubForms();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:4000/notification');
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/login');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/calendar');
      const formattedEvents = response.data.map(event => ({
        ...event,
        date: new Date(event.date)
      }));
      const validEvents = formattedEvents.filter(event => event.date instanceof Date && !isNaN(event.date));
      setEvents(validEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchClubForms = async () => {
    try {
      const response = await axios.get('http://localhost:4000/club');
      setClubForms(response.data);
    } catch (error) {
      console.error('Error fetching club forms:', error);
    }
  };

  const handleNotificationChange = (e) => {
    setNewNotification({ ...newNotification, [e.target.name]: e.target.value });
  };

  const handleNotificationSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/notification', newNotification);
      setNewNotification({ data: '', from: '' });
      fetchNotifications();
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  };

  const handleNotificationDelete = async (notificationId) => {
    try {
      await axios.delete(`http://localhost:4000/notification/${notificationId}`);
      fetchNotifications();
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  const handleUserDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:4000/login/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEventChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      const eventDate = new Date(newEvent.date);
      const formattedDate = `new Date(${eventDate.getFullYear()}, ${eventDate.getMonth()}, ${eventDate.getDate()})`;
      await axios.post('http://localhost:4000/calendar', { ...newEvent, date: formattedDate });
      setNewEvent({ date: '', title: '', color: '' });
      fetchEvents();
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const handleEventDelete = async (eventId) => {
    try {
      await axios.delete(`http://localhost:4000/calendar/${eventId}`);
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-content">
        <div className="section notifications">
          <h2>Notifications</h2>
          <form onSubmit={handleNotificationSubmit}>
            <input
              type="text"
              name="data"
              placeholder="Notification Data"
              value={newNotification.data}
              onChange={handleNotificationChange}
            />
            <input
              type="text"
              name="from"
              placeholder="From"
              value={newNotification.from}
              onChange={handleNotificationChange}
            />
            <button type="submit">Add Notification</button>
          </form>
          <ul>
            {notifications.map((notification) => (
              <li key={notification._id}>
                <span>{notification.data}</span>
                <span>{notification.from}</span>
                <button onClick={() => handleNotificationDelete(notification._id)}>Delete</button>

              </li>
            ))}
          </ul>
        </div>
        <div className="section calendar">
          <h2>Calendar</h2>
          <Calendar events={events} monthColor="#000000" />
          <form onSubmit={handleEventSubmit}>
            <input
              type="date"
              name="date"
              placeholder="Event Date"
              value={newEvent.date}
              onChange={handleEventChange}
            />
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={handleEventChange}
            />
            <input
              type="color"
              name="color"
              placeholder="Event Color"
              value={newEvent.color}
              onChange={handleEventChange}
            />
            <button type="submit">Add Event</button>
          </form>
          <ul>
            {events.map((event) => (
              <li key={event._id}>
                <span>{event.date.toLocaleDateString()}</span>
                <span>{event.title}</span>
                <span style={{ backgroundColor: event.color, padding: '5px' }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <button onClick={() => handleEventDelete(event._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="section user-management">
          <h2>User Management</h2>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <span>{user.email}</span>
                <span>{user.college}</span>
                <button onClick={() => handleUserDelete(user._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="section club-forms">
          <h2>Club Forms</h2>
          <ul>
            {clubForms.map((form) => (
              <li key={form._id}>
                <span>Name: {form.name}</span>
                <span>Email: {form.email}</span>
                <span>Enrollment Number: {form.enrollmentNumber}</span>
                <span>Phone Number: {form.phoneNumber}</span>
                <span>Previous Experience: {form.previousExperience || 'N/A'}</span>
                <span>Video URL: {form.videoUrl}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;