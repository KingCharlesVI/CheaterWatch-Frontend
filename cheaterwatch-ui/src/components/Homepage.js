// Homepage.js
import React from 'react';
import '../App.css';

const Homepage = () => {
  return (
    <div className="container">
      <section>
        <h2>What is CheaterWatch?</h2>
        <p>
            CheaterWatch is a web app developed to help to keep cheaters in videogames at bay.
            By publically displaying suspected cheater profiles along with evidence and a grading system
            for how intense their cheating is, CheaterWatch raises awareness of serial cheaters with the aim of getting more
            reports submitted about them and therefore a higher chance of them getting banned. 
            We know that fighting cheaters is a losing battle (for now...) but we're doing our part to help.
        </p>
      </section>
      <section>
        <h2>How can I help?</h2>
        <p>
            You can help by using this website to submit reports of cheaters in any of the supported games.
            Our team will then review the report and either approve or deny it.
            Cheaters who make it onto the list on this website can then be looked up when they are found in game, and then reported. 
            Hopefully this results in more bans for cheaters!
        </p>
      </section>
    </div>
  );
}

export default Homepage;