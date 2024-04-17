import React from 'react'
import { useNavigate } from 'react-router-dom';

import './NotFound.scss';

export const NotFound = () => {

    const navigator = useNavigate();

    return (
        <div className="not-found-container">
            <h2 className="not-found-title">404 - Not Found</h2>
            {/* <img src={notFoundImage} alt="Not Found" className="not-found-image" /> */}
            <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
            <div className="not-found-back-link" onClick={() => navigator('/')}>Go back to Home</div>
        </div>
    );
};
