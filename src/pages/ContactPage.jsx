import React from 'react';
import './ContactPage.css'; // Skapa denna CSS-fil för att styla sidan

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Kontakta mig</h1>
      <p>Är du intresserad av att samarbeta eller bara vill säga hej? Tveka inte att höra av dig!</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> din.email@example.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ditt-profilnamn" target="_blank" rel="noopener noreferrer">din-profil</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/ditt-github-namn" target="_blank" rel="noopener noreferrer">ditt-github-namn</a></p>
      </div>
    </div>
  );
};

export default ContactPage;