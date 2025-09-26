import React from "react";
import "./Contact.css";

export default function ContactUs() {
  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">📞 Contact Us</h2>
      <p className="contact-subtitle">
        Have a question or want to book <strong>Dino's Ice Cream & Water Ice</strong> 
        for your event? Get in touch below!
      </p>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Reach Us Directly</h3>
          <p><strong>Email:</strong> info@dinosicecream.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Service Area:</strong> Delaware, Maryland, Philadelphia</p>
          <p>Follow us on social media for updates and location announcements!</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your@email.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="How can we help?" required></textarea>

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}