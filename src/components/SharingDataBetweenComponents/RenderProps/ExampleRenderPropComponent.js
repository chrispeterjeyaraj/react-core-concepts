import React, {useState} from 'react';
// import ExampleRenderPropChildComponent from './ExampleRenderPropChildComponent';
// import ExampleRenderPropFuncSharedComponent from './ExampleRenderPropFuncSharedComponent';

const ExampleRenderPropComponent = ({render}) => {
 const [count, setCount] = useState(0);
const incrementCount = () => {
    setCount(count + 1);
}
    return (
        render(count, incrementCount)
    );
};

export default ExampleRenderPropComponent;