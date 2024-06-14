import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import './smooth-heading.scss';

const SmoothHeading = ({ content, fontSize, className }) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <h1
            ref={ref}
            className={`${className} ${isVisible ? 'fadeIn' : ''}`}
            style={{ fontSize: `${fontSize}px` }}
        >
            {content}
        </h1>
    );
};

export default SmoothHeading;
