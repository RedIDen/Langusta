import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const TheoryPage = () => {
    const [currentRule, setCurrentRule] = useState(0);
    const navigate = useNavigate();

    const rules = [
        { "title": "Жопа", "text": "Меня зовут денис пенис" },
        { "title": "Жопа", "text": "Меня зовут денис пенис" },
        { "title": "Жопа", "text": "Меня зовут денис пенис" },
        { "title": "Жопа", "text": "Меня зовут денис пенис" },
        { "title": "Жопа", "text": "Меня зовут денис пенис" },
    ];

    const handleNext = () => {
        if (currentRule < rules.length - 1) {
            setCurrentRule(currentRule + 1);
        }
        else {
            let path = `/main`;
            navigate(path);
        }
    };

    return (
        <div className="theory-page">
            <h2>Правило {currentRule + 1}. {rules[currentRule].title}</h2>
            <p>{rules[currentRule].text}</p>
            <button onClick={handleNext}>
                {currentRule === rules.length - 1 ? "Завершить" : "Далее"}
            </button>
        </div>
    );
};

export default TheoryPage;