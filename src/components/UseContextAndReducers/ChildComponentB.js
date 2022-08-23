import React, {useContext} from 'react';
import {ParentContext} from './ParentComponent';

const ChildComponentB = () => {
    const {dispatch} = useContext(ParentContext);
    return (
        <>
            <button onClick={() => dispatch("increment")}>increment</button>
        </>
    );
};

export default ChildComponentB;