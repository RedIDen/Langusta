import './Registration.css';
import React from 'react';
import { useState } from 'react';
import openedEye from '../../img/opened-eye.png';
import closedEye from '../../img/closed-eye.png';

const Registraion = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showSecondPassword, setShowSecondPassword] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSecondPasswordChange = (event) => {
        setSecondPassword(event.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowSecondPassword = () => {
        setShowSecondPassword(!showSecondPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="registration">
            <p className="title">Регистрация</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="input-label" htmlFor="email">Электронная почта</label>
                    <input
                        className="text-input"
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="password-container">
                    <label className="input-label" htmlFor="name">Имя</label>
                    <input
                        className="text-input"
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="password-container">
                    <label className="input-label" htmlFor="password">Пароль</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            className="text-input"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <button className="show-password-button" tabIndex="-1" type="button" onClick={handleShowPassword}>
                            <img className="show-password-img" width="20" height="20" src={showPassword ? closedEye : openedEye} />
                        </button>
                    </div>
                </div>
                <div className="password-container">
                    <label className="input-label" htmlFor="password">Повторите пароль</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            className="text-input"
                            type={showSecondPassword ? "text" : "password"}
                            id="second-password"
                            value={secondPassword}
                            onChange={handleSecondPasswordChange}
                        />
                        <button className="show-password-button" tabIndex="-1" type="button" onClick={handleShowSecondPassword}>
                            <img className="show-password-img" width="20" height="20" src={showSecondPassword ? closedEye : openedEye} />
                        </button>
                    </div>
                </div>
                <button className="enter-button" type="submit">Зарегистрироваться</button>
                <div className="register-link">
                    <a href="/authentication">Войти</a>
                </div>
            </form>
        </div>
    );
}

export default Registraion;