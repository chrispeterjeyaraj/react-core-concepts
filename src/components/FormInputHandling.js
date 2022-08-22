import React, { useState } from 'react';

const FormInputHandling = () => {
   const [text, setText] = useState('Enter Something');
   const [select, setSelect] = useState("A");
    const handleInputChange = (e) => {
        setText(e.target.value);
    }
    const handleDropDownChange = (e) => {
        setSelect(e.target.value);
    }
    return (
       <>
       <div>{text}.......{select}</div>
        <input value={text} onChange={handleInputChange}></input>
        <select value={select} onChange={handleDropDownChange}>
            <option>A</option>
            <option>B</option>
            <option>C</option> 
        </select>
       </>
    );
};

export default FormInputHandling;