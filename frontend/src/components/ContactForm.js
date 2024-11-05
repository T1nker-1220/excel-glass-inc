import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 border rounded"></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;