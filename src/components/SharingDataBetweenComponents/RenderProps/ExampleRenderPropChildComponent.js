import React from 'react';
import ExampleRenderPropComponent from './ExampleRenderPropComponent';

const ExampleRenderPropChildComponent = ({count, incrementcount}) => {
    const handleButtonClick = () => {
        incrementcount(count+1);
    }
    return (
        <>
        <h1>First Counter {count}</h1>
        <button onClick={handleButtonClick}>Increment Count</button>
        </>

    );
};

export default ExampleRenderPropChildComponent;