import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="profile-intro">
        {/* <img src="/path/to/your/profile-photo.jpg" alt="Ibrahim's profile photo" className="profile-photo" /> */}
        <h1 className="main-title">Hej, jag är Ibrahim.</h1>
        <h2 className="sub-title">Fullstack-utvecklare med fokus på kreativ problemlösning.</h2>
        <p className="intro-text">
          Nyligen utexaminerad med passion för att bygga moderna och användarvänliga webbapplikationer.
        </p>
        <a href="/projects" className="cta-button">Se mina projekt</a>
      </div>
    </div>
  );
};

export default HomePage;