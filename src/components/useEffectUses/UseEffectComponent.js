import React, {useState, useEffect} from 'react';
import shortid from 'shortid';

const UseEffectComponent = () => {
    const [name, setName] = useState('Chris');
    // without dependency array the setname will keep running every 2 seconds
    // and will trigger re-render
    // useEffect(() => {
    //     setInterval(() => {
    //         setName(`${name}_${shortid.generate()}_without dependency array`);
    //     },2000)
    // })

    // const handleNameChange = () => {
    //     setName(`${name}_${shortid.generate()}_change_name`);
    // }
    
    // With dependency array the useeffect will only run when there is a change in name
    // useEffect(() => {
    //     console.log("name Changed");
    // }, [name])

    // With empty dependency array the useeffect will only on the first render
    useEffect(() => {
        setName(`${name}_${shortid.generate()}_with empty array`);
    }, [])

    return (
        <>
        <div>{name}</div>
        {/* <button onClick={handleNameChange}>Change Name</button> */}
        </>

    );
};

export default UseEffectComponent;