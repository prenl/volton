import React, { useState } from 'react';
import './Register.scss';

const Register = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send data to backend
        console.log(formData);
        // Reset form fields after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });
        // Close modal after submission
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={onClose}>X</button>
                        <h2>Регистрация</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">Ваше Имя:</label>
                                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder='Ваше Имя' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Ваша Фамилия:</label>
                                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder='Ваша Фамилия' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Электронная почта:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Ваша электронная почта' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Пароль:</label>
                                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required placeholder='Пароль' />
                            </div>
                            <button type="submit">Зарегистрироваться</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Register;
