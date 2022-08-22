import React, {useEffect, useState} from 'react';
import CustomMemoComponent from './CustomMemoComponent';
import CustomPureComponent from './CustomPureComponent';

const ExamplePureComponent = () => {
    const [name, setName]  = useState("Chris");

    useEffect(() => {
    const interval=  setInterval(() => {
        console.log("Name set again");
        setName("Chris")
     },1000);
     return (() => {
        clearInterval(interval);
     })
    });

    return (
        <>
        <CustomPureComponent name = {name}/>
        <CustomMemoComponent name = {name}/>
        </>
    );
};

export default ExamplePureComponent;