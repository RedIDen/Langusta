import React from 'react';
import "./MainPage.css";
import ThemesList from '../ui/ThemesList';
import { useState } from 'react';
import { useEffect } from 'react';

const MainPage = () => {
    const [theoryThemes, setTheoryThemes] = useState([])
    const token = localStorage.getItem('token');

    useEffect(() => {
        console.log(token);
        fetch("api/LearningData/TheoryThemes", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                setTheoryThemes(responseJson);
            })
    }, []);

    const testThemes = [
        {
            "theme": "Тема 1", "subthemes": [
                "a", "b", "c",
            ]
        },
        {
            "theme": "Тема 2", "subthemes": [
                "aagasfg", "badfhzrh", "czthzdthtr",
            ]
        },
    ];

    return (
        <div className="main-page">
            <div className="column">
                <p className="column-title">Продолжить изучать язык</p>
                <ThemesList themes={theoryThemes} link="theory/" />
            </div>
            <div className="column">
                <p className="column-title">Проверить свои знания</p>
                <ThemesList themes={testThemes} link="test/" />
            </div>
            <div className="column">
                <p className="column-title">Тексты</p>
                <button className="user-text-button">Тексты пользователей</button>
                <button className="user-text-button">Написать свой текст</button>
            </div>
        </div>
    );
};

export default MainPage;