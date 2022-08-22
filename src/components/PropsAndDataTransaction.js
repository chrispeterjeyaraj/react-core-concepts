import React from 'react';

const PropsAndDataTransaction = ({name, getName}) => {
    return (
        name ? <h1>prop from parent = {name}</h1> : getName("Chris")
    );
};

export default PropsAndDataTransaction;