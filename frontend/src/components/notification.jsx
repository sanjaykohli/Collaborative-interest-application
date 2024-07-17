import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './NotificationsList.css';

const NotificationsList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:4000/notification');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Notifications</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Data</th>
            <th>From</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification._id}>
              <td>{notification.data}</td>
              <td>{notification.from}</td>
              <td>{new Date(notification.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationsList;