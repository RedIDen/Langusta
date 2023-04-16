import React from 'react';
import { useState } from 'react';
import './ThemesList.css';

const ThemesList = (props) => {

    const [selectedTheme, setSelectedTheme] = useState(null);

    const handleThemeClick = (theme) => {
        setSelectedTheme(selectedTheme === theme ? null : theme);
    };

    const themes = props.themes;
    const link = props.link;

    return (
        <div className="list">
            {themes.map((theme) => (
                <div key={theme.theme} className="theme-button-container">
                    <button className={selectedTheme === theme.theme ? "theme-button-selected" : "theme-button"} onClick={() => handleThemeClick(theme.theme)}>
                        {theme.theme}
                    </button>
                    {selectedTheme === theme.theme && (
                        <div className="subthemes-container">
                            {theme.subthemes.map((subtheme) => (
                                <div className="subtheme" key={subtheme}>
                                    <div className="round"></div>
                                    <a className="theme-link" href={link + subtheme}>{subtheme}</a>
                                    <br />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ThemesList;