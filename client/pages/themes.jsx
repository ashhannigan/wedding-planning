import React, { useState } from 'react';
import backdropImage from '../images/backdrop.jpeg';
import floralImage from '../images/floral-arrangement.jpeg';
import destinationImage1 from '../images/destination1.jpeg';
import destinationImage2 from  '../images/destination2.jpeg';
import hollywoodImage from '../images/hollywood-couple.jpeg';
import rustic2 from '../images/rustic2.jpeg';
import vintageImage from '../images/vintage1.jpeg';
import minimalImage from '../images/minimal1.jpeg';
import fairytaleImage from '../images/fairytale.jpeg';


function Themes() {
    const themes = ["Vintage", "Hollywood", "Rustic", "Minimalist", "Garden", "Destination", "Fairytale", "Bohemian", "Glamorous", "Beach", "Black Tie", "Clown", "All White", "Medieval", "Spice Girls", "Carnival", "Halloween", "Food", "Holiday"];
    
    const [selectedTheme, setSelectedTheme] = useState(null);

    const handleThemeSelect = (theme) => {
        setSelectedTheme(theme);
    };

    return (
        <div>
            <h2>Potential Themes:</h2>
            <ul>
                {themes.map((theme, index) => (
                    <li key={index}>
                        <button onClick={() => handleThemeSelect(theme)}>{theme}</button>
                    </li>
                ))}
            </ul>
            <section className="theme-image-section">
            {selectedTheme === "Rustic" && (
                <fieldset style={{ width: 'max-content' }}>
                    <img className="flex" id="theme-image" src={backdropImage} alt="Rustic" />
                    <img className="flex" id="theme-image" src={rustic2} alt="Rustic" />
                </fieldset>
            )}
            {selectedTheme === "Garden" && (
                <fieldset style={{ width: 'max-content' }}>
                    <img className="flex" id="theme-image" src={floralImage} alt="Garden" />
                </fieldset>
            )}
               {selectedTheme === "Destination" && (
                <fieldset style={{ width: 'max-content' }}>
                    <img className="flex" id="theme-image" src={destinationImage1} alt="Destination" />
                    <img className="flex" id="theme-image" src={destinationImage2} alt="Destination" />
                </fieldset>
            )}
              {selectedTheme === "Fairytale" && (
                <fieldset style={{ width: 'max-content' }}>
                    <img className="flex" id="theme-image" src={fairytaleImage} alt="Fairytale" />
                </fieldset>
            )}
              {selectedTheme === "Hollywood" && (
                <fieldset style={{ width: 'max-content' }}>
                    <img className="flex" id="theme-image" src={hollywoodImage} alt="Hollywood" />
                </fieldset>
            )}
               {selectedTheme === "Vintage" && (
                <fieldset style={{ width: 'max-content' }}>
                    <img className="flex" id="theme-image" src={vintageImage} alt="Vintage" />
                </fieldset>
            )}
              {selectedTheme === "Minimalist" && (
                <fieldset style={{ width: 'max-content' }}>
                    <img className="flex" id="theme-image" src={minimalImage} alt="Minimalist" />
                </fieldset>
            )}
            </section>
        </div>
    );
}

export default Themes;
