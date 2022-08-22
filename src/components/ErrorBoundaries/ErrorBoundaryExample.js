import React from 'react';

const ErrorBoundaryExample = ({simulateError}) => {
    if(simulateError) {
        throw new Error("there is an error");
    } 
    return (
        <h1>Error Boundary Example</h1> 
    );
};

export default ErrorBoundaryExample;