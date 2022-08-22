import React from 'react';
import ExampleHOCComponent from './ExampleHOCComponent';

const ExampleHOCChildComponent = ({name, count, incrementcount}) => {
    const handleButtonClick = () => {
        incrementcount(count+1);
    }
    return (
        <>
        <h1>{name} {count}</h1>
        <button onClick={handleButtonClick}>Increment Count</button>
        </>

    );
};

export default ExampleHOCComponent(ExampleHOCChildComponent);