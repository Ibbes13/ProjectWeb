import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Kontakta mig</h1>
      <p>
        Är du intresserad av att samarbeta eller bara vill säga hej? Tveka inte på att höra av dig!
      </p>

      <h2>Låt oss prata!</h2>
      <ul className="contact-list">
        <li><strong>Email:</strong> <a href="mailto:ibrahim.altinkaynak@hotmail.com">ibrahim.altinkaynak@hotmail.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ibrahim-altinkaynak-592808220" target="_blank" rel="noopener noreferrer">Ibrahim Altinkaynak</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/Ibbes13" target="_blank" rel="noopener noreferrer">Ibbes13</a></li>
      </ul>
      <p>Jag ser fram emot att få presentera mig själv
        och få höra mer av er! </p>
    </div>
  );
};

export default ContactPage;