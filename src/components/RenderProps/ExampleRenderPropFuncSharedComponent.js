import React from 'react';

const ExampleRenderPropFuncSharedComponent = ({count, incrementcount}) => {
    const handleButtonClick = () => {
        incrementcount(count+1);
    }
    return (
        <>
        <h1>Second Counter  {count}</h1>
        <button onClick={handleButtonClick}>Increment Count</button>
        </>

    );
};

export default ExampleRenderPropFuncSharedComponent;