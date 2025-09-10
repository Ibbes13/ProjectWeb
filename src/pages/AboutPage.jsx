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
        Jag älskar att ta mig an nya utmaningar och att ständigt utvecklas och breda mina kunskaper.
      </p>
      <h2>Mina passioner</h2>
      <ul>
        <li>Utveckling av användarvänliga gränssnitt</li>
        <li>Lärande av nya programmeringsspråk och ramverk</li>
        <li>Att arbeta i agila team för att leverera bra produkter</li>
        <li>Kreativ problemlösning</li>
        <li>Att skriva ren och effektiv kod</li>
      </ul>
      <p>
        Utanför kodning älskar jag att vara fysisk aktiv i form av löpning och styrkoträning primärt.
        Jag är tidigare elitidrottare och passionen för träning och hälsa lever vidare. 
        Utöver hälsan har detta gjort mig disciplinerad, fokuserad, extremt stresstålig bland annat.
        Dessa är väldigt positiva saker som jag har riktigt bra nytta av både i mitt privatliv, men också 
        minst sagt på en arbetsplats.
      </p>
    </div>
  );
};

export default AboutPage;