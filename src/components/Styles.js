import React from 'react';
import './Styles.css';
import Style from './Styles.module.css';

const inlineStyle = {
    color: 'blue'
}
const Styles = () => {
    return (
        <>
            <h1 class="heading"> STYLES </h1>
            <h1 style={inlineStyle}> Styles applied From a variable inside component </h1>
            <h1 class={Style.heading}> Styles applied From module</h1>
        </>
    );
};

export default Styles;