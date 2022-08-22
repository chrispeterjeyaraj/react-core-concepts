import React from 'react';

const ForwardRefChild = React.forwardRef((props, ref) => {
    return (
        <input type="text" ref={ref}/>
    );
});

export default ForwardRefChild;