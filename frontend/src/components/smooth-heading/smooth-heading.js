import React, { useEffect, useState } from 'react';
import './smooth-heading.scss'; // Import your CSS file

const SmoothHeading = (props) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Set the mounted state to true when the component mounts
        setMounted(true);

        // Reset the animation state when the component is about to be unmounted
        return () => setMounted(false);
    }, []);

    return (
        <div className={`smooth-heading ${mounted ? 'visible' : ''}`}>
            <h3 style={{ fontSize: props.fontSize }}>{props.content}</h3>
        </div>
    );
}

export default SmoothHeading;