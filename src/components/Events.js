import React from 'react';

const Events = () => {

    const handleButtonClick = () => {
        console.log("button clicked");
    }
    
    const handleButtonClickWithParam = (params) => {
        console.log(params);
    }

    const handleButtonClickEvents = (e) => {
        e.target.innerHTML = "event captured";
    }
    return (
        <>
        <button onClick={handleButtonClick}> click me with no parameter</button>
        <button onClick={() => handleButtonClickWithParam('param')}> click me with parameter</button>
        <button onClick={(e) => handleButtonClickEvents(e)}>click to capture event</button>
        </>
    );
};

export default Events;