import React from 'react';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <h1>Mina projekt</h1>
      <p className="projects-intro">Här är ett urval av några projekt från min GitHub. Gå gärna in och kika på resten av mina projekt!</p>
      
      <ul className="project-list">
        <li className="project-item">
          <h3>IoT-baserad miljöövervakning</h3>
          <p>Ett IoT-projekt för realtidsövervakning av inomhusklimat. Systemet använder en ESP32-sensor för att samla in data som lagras och visualiseras via en serverlös AWS-arkitektur. Projektet visar expertis inom molntjänster, sensorintegration och datavisualisering.</p>
          <p><strong>Teknologier:</strong> ESP32, AWS IoT Core, DynamoDB, Grafana, Telegram, AWS Lambda, MQTT</p>
          <a href="https://github.com/Ibbes13/IOT_ESP32_AWS_v2" target="_blank" rel="noopener noreferrer" className="github-link">Se på GitHub</a>
        </li>
        <li className="project-item">
          <h3>Java-baserat chattprogram</h3>
          <p>Ett klient/server-baserat chattprogram utvecklat i Java. Applikationen använder nätverksprotokollet Multicast för att möjliggöra realtidschatt mellan flera användare i ett lokalt nätverk. Projektet visar kunskaper inom nätverksprogrammering, multitrådning och UDP-kommunikation.</p>
          <p><strong>Teknologier:</strong> Java, Multicast, UDP-Sockets, Multitrådning</p>
          <a href="https://github.com/Ibbes13/Chatroom-project" target="_blank" rel="noopener noreferrer" className="github-link">Se på GitHub</a>
        </li>
        <li className="project-item">
          <h3>[Projektets namn #3]</h3>
          <p>[En kort och tydlig beskrivning av vad projektet gör, t.ex. "Ett C++-projekt för ett inbyggt system."]</p>
          <p><strong>Teknologier:</strong> [Lista de tekniker du använde, t.ex. C++, Arduino, IoT]</p>
          <a href="[Länk till ditt GitHub-repo]" target="_blank" rel="noopener noreferrer" className="github-link">Se på GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsPage;