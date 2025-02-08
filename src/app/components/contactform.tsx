"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add logic to handle form submission (e.g., API call)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white md:px-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-8 pt-6 pb-8  w-full lg:w-3/5"
      >
        <h2 className="container mx-auto px-2 text-3xl font-bold text-center mb-14 mt-20 md:mt-24 leading-10 ">Questions? Comments?  Want to learn more?
            Please contact us using the form below and we will
            be happy to help in any way we can!</h2>

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="mb-4 mt-10">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
            placeholder="Your message....Please be nice"
            rows={4}
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-black hover:bg-black/50 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-6 w-full md:w-1/2 lg:w-3/5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;


