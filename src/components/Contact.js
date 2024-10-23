import React, { useState } from 'react';
import "./Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, please fill out the form below:</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      <h2>Other Contact Options</h2>
      <p>Phone: <a href="tel:+123456789">9297781321</a></p>
      <p>Email: <a href="mailto:contact@company.com">hi@himanshu.com</a></p>
      <p>Follow us on social media:</p>
      <ul>
        <li><a href="https://facebook.com/yourrestaurant" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com/yourrestaurant" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://instagram.com/yourrestaurant" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  );
};

export default Contact;

