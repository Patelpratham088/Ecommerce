import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="bg-white py-16 px-6 lg:px-20 text-center scroll-mt-20">
      <h2 className="text-3xl font-bold  mb-6">
        Contact Us</h2>
      <form className="max-w-2xl mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg"/>
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg"/>
        <textarea rows="5"placeholder="Your Message"className="w-full px-4 py-2 border rounded-lg"
        />
        <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
