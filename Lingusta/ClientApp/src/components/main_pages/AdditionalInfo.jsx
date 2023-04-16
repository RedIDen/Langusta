import React, { useState } from 'react';
import './AdditionalInfo.css';
import camera from '../../img/camera.png'

import russian from '../../img/russian.png'
import english from '../../img/english.png'
import spanish from '../../img/spanish.png'

import { useTranslation } from 'react-i18next';

import LanguageSelect from '../ui/LanguageSelect';

const AdditiontalInfo = () => {
    const [avatar, setAvatar] = useState(null);
    const [nativeLanguage, setNativeLanguage] = useState('');
    const [language, setLanguage] = useState('');

    const [t, i18n] = useTranslation();

    const languages = [
        { "value": "ru", "text": "Русский", "img": russian },
        { "value": "en", "text": "English", "img": english },
        { "value": "sp", "text": "Español", "img": spanish },
    ];

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
        event.target.value = null;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const deleteAvatar = (event) => {
        event.preventDefault();
        setAvatar(null);
    }

    function handleLanguageChange(value) {
        setLanguage(value);
    }

    function handleNativeLanguageChange(value) {
        setNativeLanguage(value);
    }

    return (
        <div className="additional-info-container">
            <p className="title">{t("describe-yourself")}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label">{t("your-moto")}</label>
                    <input className="text-input" type="text" />
                </div>
                <div className="flex-container">
                    <div className="avatar-container">
                        <p className="label">
                            {t("avatar")}
                        </p>
                        <label className="avatar-label">
                            <input className="avatar-input" type="file" accept="image/*" onChange={handleAvatarChange} />
                            <div className="avatar"
                                style={{
                                    backgroundImage: avatar == null ? `url(${camera})` : `url(${URL.createObjectURL(avatar)})`,
                                }}>
                                {avatar && <button className="delete-avatar-btn" onClick={deleteAvatar}>

                                </button>}
                            </div>
                        </label>
                    </div>
                    <div className="languages-container">
                        <div>
                            <label className="label">
                                {t("native-language")}
                            </label>
                            <br />
                            <LanguageSelect languages={languages} onChange={handleNativeLanguageChange} />
                        </div>
                        <div>
                            <label className="label">
                                {t("learning-language")}
                            </label>
                            <br />
                            <LanguageSelect languages={languages} onChange={handleLanguageChange} />
                        </div>
                    </div>
                </div>
                <button className="enter-button" type="submit">{t("continue")}</button>
            </form>
        </div>
    );
};

export default AdditiontalInfo;