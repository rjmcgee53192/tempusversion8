import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    eventType: '',
    details: '',
    date: new Date(),
  });
  const [error, setError] = useState('');
  const [eventTypes, setEventTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch event types from your API and set them in state
    const fetchEventTypes = async () => {
      try {
        const response = await axios.get('/api/event-types');
        setEventTypes(response.data);
      } catch (error) {
        setError('Failed to fetch event types.');
      }
    };

    fetchEventTypes();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleDateChange = (date) => {
    setBookingData({ ...bookingData, date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingSubmission = {
      customerName: bookingData.name,
      customerEmail: bookingData.email,
      eventType: bookingData.eventType,
      date: bookingData.date,
      details: bookingData.details,
    };

    try {
      const response = await axios.post('/routes/bookings', bookingSubmission);
      navigate('/dashboard'); // Navigate to dashboard after successful booking
    } catch (error) {
      setError(error.response?.data?.message || "Error occurred while booking the event.");
    }
  };

  return (
    <div className="booking-page-container">
      <h2>Book an Appointment</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={bookingData.name}
          onChange={handleInputChange}
          required
        />
        <input
          name="email"
          placeholder="Your Email"
          value={bookingData.email}
          onChange={handleInputChange}
          required
          type="email"
        />
        <select
          name="eventType"
          value={bookingData.eventType}
          onChange={handleInputChange}
          required
        >
          {eventTypes.map((eventType) => (
            <option key={eventType._id} value={eventType._id}>
              {eventType.name}
            </option>
          ))}
        </select>
        <DatePicker
          selected={bookingData.date}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
        />
        <textarea
          name="details"
          placeholder="Additional details"
          value={bookingData.details}
          onChange={handleInputChange}
        />
        <button type="submit">Schedule Event</button>
      </form>
    </div>
  );
};

export default BookingPage;
