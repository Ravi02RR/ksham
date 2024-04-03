// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {


  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://enliven-the-ngo-website.onrender.com/contact', contactInfo);
      if (response.data.success) {
        setContactInfo({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
        toast.success('Message sent successfully!');
      } else {
        toast.error(response.data.errorMessage || 'Failed to send the message. Please try again.');
      }
    } catch (err) {
      toast.error('Failed to send the message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4 shadow-lg">
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 p-8 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-bla">Contact Us</h1>
        <p className="text-lg font-semibold mb-8 text-center">YOUR IDEA <span className="text-yellow-400">IS OUR</span> SOLUTION</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
            placeholder="Full Name"
            type="text"
            name="fullName"
            value={contactInfo.fullName}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
            placeholder="Email"
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
            placeholder="Phone"
            type="tel"
            name="phone"
            value={contactInfo.phone}
            onChange={handleChange}
          />
          <textarea
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-md resize-none"
            placeholder="Message"
            name="message"
            value={contactInfo.message}
            onChange={handleChange}
          ></textarea>
          <button
            className="w-full bg-yellow-400 text-black py-3 rounded-md hover:bg-yellow-500"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ?'Sending.....' : 'Send Message'}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Contact;
