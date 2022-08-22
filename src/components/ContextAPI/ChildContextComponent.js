import React, {useContext} from 'react';
import { AppContext } from './Context';

const ChildContextComponent = () => {
    const { count, incrementcount } = useContext(AppContext);
    
    const handleButtonClick = () => {
        incrementcount(count+1);
    }
    return (
        <>
        <h1>Context Counter {count}</h1>
        <button onClick={handleButtonClick}>Increment Count</button>
        </>

    );
};

export default ChildContextComponent;