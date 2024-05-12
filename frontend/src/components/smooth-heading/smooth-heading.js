import React, { useEffect, useState } from 'react';
import './smooth-heading.scss'; // Import your CSS file

const SmoothHeading = (props) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // After the component mounts, set the mounted state to true
        setMounted(true);
    }, []);

    return (
        <div className={`smooth-heading ${mounted ? 'visible' : ''}`}>
            <h3 style={{ fontSize: props.fontSize }}>{props.content}</h3>
        </div>
    );
}

export default SmoothHeading;