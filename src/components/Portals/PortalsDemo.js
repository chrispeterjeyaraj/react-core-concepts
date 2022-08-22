import React from 'react';
import ReactDOM from 'react-dom';

const PortalsDemo = () => {
    return ReactDOM.createPortal(
        <h1>TEST PORTALS</h1>
    , document.getElementById('portals-root'));
};

export default PortalsDemo;