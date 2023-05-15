import './Authentication.css';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import openedEye from '../../img/opened-eye.png';
import closedEye from '../../img/closed-eye.png';
import { useTranslation } from 'react-i18next';


const Authentication = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const [t, _] = useTranslation();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/Registration/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, rememberMe }),
            });

            if (response.ok) {
                const token = await response.text();
                localStorage.setItem('token', token);

                console.log('Login successful!');

                let path = `/first-login`;
                navigate(path);
            } else {
                const error = await response.text();
                console.error('Login failed:', error);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }

        setEmail('');
        setPassword('');
    };

    return (
        <div className="authentication">
            <p className="title">{t("authorization")}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="input-label" htmlFor="email">{t("email")}</label>
                    <input
                        className="text-input"
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="password-container">
                    <label className="input-label" htmlFor="password">{t("password")}</label>
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
                <div className="remember-me-container">
                    <input
                        tabIndex="-1"
                        className="checkbox"
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                    />
                    <label htmlFor="rememberMe">
                        {t("stay-in-system")}
                    </label>
                </div>
                <button className="enter-button" type="submit">{t("sign-in")}</button>
                <div className="register-link">
                    <a href="/registration">{t("sign-up")}</a>
                </div>
            </form>
        </div>
    );
}

export default Authentication;