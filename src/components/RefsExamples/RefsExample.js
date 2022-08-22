import React , {useRef} from 'react';
import ForwardRefChild from './ForwardRefChild';

const RefsExample = () => {
    const inputRef = useRef();
    const handleButtonClick = (e) => {
        inputRef.current.focus();
    }
    return (
        <>
          <ForwardRefChild ref={inputRef}/>
          <button onClick={handleButtonClick}>Focus Input</button>
        </>
    );
};

export default RefsExample;