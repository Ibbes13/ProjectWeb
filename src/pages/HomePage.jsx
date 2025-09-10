import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="profile-intro">
        {/* <img src="/path/to/your/profile-photo.jpg" alt="Ibrahim's profile photo" className="profile-photo" /> */}
        <h1 className="main-title">Välkommen till Ibrahim Altinkaynaks sida!.</h1>
        <h2 className="sub-title">Mjukvaruutvecklare med inriktning på inbyggda system, samt IoT.</h2>
        <h3 className="section-title">Teknisk expertis</h3>
        <ul className="expertise-list">
          <li><strong>Programmeringsspråk 1:</strong> <span className="highlight-lang">C++/C</span>: Ständigt i mina IoT projekt.</li>
          <li><strong>Programmeringsspråk 2:</strong> <span className="highlight-lang">Java</span>: Objekt Orienterad Programmering.</li>
          <li><strong>Programmeringsspråk 3:</strong> <span className="highlight-lang">Python</span>: Rasp Pi, kommunikation, läsa av sensorer.</li>
        </ul>
        <p className="intro-text">
          Nyligen utexaminerad med passion för att utveckla både mjukvara och hårdvara, samt väldigt stor passion 
          av att koda. 
        </p>
        <a href="/projects" className="cta-button">Se mina projekt</a>
      </div>
    </div>
  );
};

export default HomePage;