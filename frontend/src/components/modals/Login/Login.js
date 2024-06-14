import React, { useState } from 'react';
import './Login.scss';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Пример данных пользователя после успешной аутентификации
        const userData = {
            id: 1,
            name: 'John Doe',
            email: formData.email
        };
        dispatch(setUser(userData));
        navigate('/profile');  // Перенаправление на страницу профиля после логина
        // Сброс формы после отправки
        setFormData({
            email: '',
            password: ''
        });
        // Закрытие модального окна после отправки
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={onClose}>X</button>
                        <h2>Вход</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Электронная почта:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Ваша электронная почта' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Пароль:</label>
                                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required placeholder='Пароль' />
                            </div>
                            <button type="submit">Войти</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
