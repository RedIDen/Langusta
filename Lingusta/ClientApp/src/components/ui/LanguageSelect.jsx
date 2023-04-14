import React, { useState, useEffect, useRef } from 'react';
import './LanguageSelect.css';

const LanguageSelect = ({ languages, onChange }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectRef]);

    function handleSelectClick() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    function handleOptionClick(lang) {
        setSelectedLanguage(lang);
        setIsDropdownOpen(false);
        onChange(lang.value);
    }

    return (
        <div className="language-select" ref={selectRef}>
            <div className="selected" onClick={handleSelectClick}>
                {selectedLanguage ? (
                    <>
                        <img src={selectedLanguage.img} alt={selectedLanguage.text} />
                        {selectedLanguage.text}
                    </>
                ) : (
                    <span>Выберите язык</span>
                )}
            </div>
            {isDropdownOpen && (
                <ul className="options">
                    {languages.map(lang => (
                        <li key={lang.value} onClick={() => handleOptionClick(lang)}>
                            <img src={lang.img} alt={lang.text} />
                            {lang.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LanguageSelect;