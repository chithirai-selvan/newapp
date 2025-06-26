import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/contact', form);
    alert('Message sent!');
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" required onChange={e => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Message" required onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
