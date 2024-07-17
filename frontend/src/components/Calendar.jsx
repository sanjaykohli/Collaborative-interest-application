import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from './Navbar';
import './Calendar.css';

function EventList({ events }) {
  return (
    <div style={{ width: '300px' }}>
      <h2 style={{ color: 'lightblue', fontFamily: 'Georgia, serif' }}>Events for 2024</h2>
      {events.map((event, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#f5f5f5',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>
            {new Date(event.date).toLocaleString('default', { month: 'long' })}
          </span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{ width: '15px', height: '15px', backgroundColor: event.color, marginRight: '10px', borderRadius: '50%' }}
            />
            <span style={{ color: '#444', fontSize: '14px' }}>{event.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CustomCalendar() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/calendar')
      .then(response => response.json())
      .then(data => {
        const formattedEvents = data.map(event => ({
          date: new Date(eval(event.date)),
          title: event.title,
          color: event.color,
        }));
        setEvents(formattedEvents);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const tileContent = ({ date, view }) => {
    const eventForDate = events.find(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate()
    );
    return eventForDate ? (
      <div
        style={{
          backgroundColor: eventForDate.color,
          color: '#fff',
          padding: '5px',
          borderRadius: '5px',
        }}
      />
    ) : null;
  };

  const eventsForYear2024 = events.filter((event) => event.date.getFullYear() === 2024);

  const calendarContainerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
  };

  const pageStyle = {
    backgroundColor: '#f8f8f8',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
  };

  return (
    <div style={pageStyle} className="calendar-page">
      <Navbar />
      <div style={calendarContainerStyle}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={tileContent}
            tileDisabled={() => false}
            tileClassName={({ date }) => {
              const isWeekend = date.getDay() === 0 || date.getDay() === 6;
              return isWeekend ? 'weekend' : null;
            }}
            navigationLabel={({ date }) => `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`}
            showNeighboringMonth={false}
          />
        </div>
        <EventList events={eventsForYear2024} />
      </div>
    </div>
  );
}

export default CustomCalendar;