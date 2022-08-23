import React, {useContext} from 'react';
import ChildComponentB from './ChildComponentB';
import {ParentContext} from './ParentComponent';

const ChildComponentA = () => {
    const {count} = useContext(ParentContext);
    return (
        <>
        <h1>{count}</h1>
        <ChildComponentB />
        </>
      
    );
};

export default ChildComponentA;