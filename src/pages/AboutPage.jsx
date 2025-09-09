import React from 'react';
import './AboutPage.css'; // Skapa denna CSS-fil för att styla sidan

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>Om mig</h1>
      <p>
        Efter min examen insåg jag att min verkliga passion låg i att bygga saker. Jag brinner för att
        skapa intuitiva gränssnitt och lösa komplexa problem. Mitt mål är att hitta en roll där jag kan
        använda mina färdigheter för att bidra till meningsfulla projekt och fortsätta att lära mig.
      </p>
      <h2>Mina passioner</h2>
      <ul>
        <li>Utveckling av användarvänliga gränssnitt</li>
        <li>Lärande av nya programmeringsspråk och ramverk</li>
        <li>Att arbeta i agila team för att leverera bra produkter</li>
      </ul>
      <p>
        Utanför kodning älskar jag... (Lägg till något personligt här, t.ex. att vandra, läsa böcker eller spela musik.)
      </p>
    </div>
  );
};

export default AboutPage;