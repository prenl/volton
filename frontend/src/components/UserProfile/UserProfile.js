import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../../slices/userSlice.js';

const UserProfile = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogin = () => {
        // Пример данных пользователя
        const userData = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        };
        dispatch(setUser(userData));
    };

    const handleLogout = () => {
        dispatch(clearUser());
    };

    return (
        <div>
            <h1>User Profile</h1>
            {user.id ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    );
};

export default UserProfile;
