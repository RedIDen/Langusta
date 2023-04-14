import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="column">
                <h3>Темы для изучения языка</h3>
                <ul>
                    <li>
                        <select>
                            <option>Выберите тему</option>
                            <option><Link to="/theory-page">Тема 1</Link></option>
                            <option><Link to="/theory-page">Тема 2</Link></option>
                            <option><Link to="/theory-page">Тема 3</Link></option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="column">
                <h3>Темы для тестов</h3>
                <ul>
                    <li>
                        <select>
                            <option>Выберите тему</option>
                            <option><Link to="/test-page">Тема 1</Link></option>
                            <option><Link to="/test-page">Тема 2</Link></option>
                            <option><Link to="/test-page">Тема 3</Link></option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="column">
            </div>
        </div>
    );
};

export default MainPage;