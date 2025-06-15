import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission (email service, backend API, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <main className="contact-page">
      <section className="header">
        <h1>Let’s Talk</h1>
        <p>Have a question, a role, or just want to say hey? Fill out the form or connect with me elsewhere.</p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">📨 Send Message</button>
      </form>

      <section className="alt-contact">
        <p>You can also reach me directly:</p>
        <p>Email: <a href="mailto:jewel@example.com">jewel@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/jewelmichael" target="_blank" rel="noopener noreferrer">linkedin.com/in/jewelmichael</a></p>
      </section>
    </main>
  );
};

export default Contact;
