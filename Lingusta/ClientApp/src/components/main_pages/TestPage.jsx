import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const TestPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestion < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleEnd = () => {
        let path = `/main`;
        navigate(path);
    }

    const questions = [
        {
            "question": "Ты еблан?", "answers": [
                { "text": "Да", "isCorrect": true },
                { "text": "Нет", "isCorrect": false },
                { "text": "Не знаю", "isCorrect": false },
                { "text": "[Сарказм]", "isCorrect": false }
            ]
        },
        {
            "question": "Точно?", "answers": [
                { "text": "Да", "isCorrect": true },
                { "text": "Нет", "isCorrect": false },
                { "text": "Не знаю", "isCorrect": false },
                { "text": "[Сарказм]", "isCorrect": false }
            ]
        },
    ];

    return (
        <div className="test-page">
            {currentQuestion != questions.length ?
                <div>
                    <h2>Вопрос {currentQuestion + 1} / {questions.length}</h2>
                    <p>{questions[currentQuestion].question}</p>
                    <ul>
                        {questions[currentQuestion].answers.map((answer, index) => (
                            <li key={index}>
                                <button onClick={() => handleAnswer(answer.isCorrect)}>{answer.text}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                :
                <div className="score">
                    <p>Вы набрали {score} из {questions.length} баллов</p>
                    <button onClick={handleEnd}>Завершить</button>
                </div>}
        </div>
    );
};

export default TestPage;