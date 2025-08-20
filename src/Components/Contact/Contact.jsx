import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gkv7d1k",
        "template_um2b62f",
        form.current,
        "2qr6z_6PAxpLQt2_w"
      ) // 🔁 your real public key
    
    .then(() => {
      alert('✅ Message sent successfully!');
      e.target.reset();
    })
    .catch((error) => {
      console.error('❌ EmailJS Error:', error);
      alert('Something went wrong. Try again!');
    });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="title" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
