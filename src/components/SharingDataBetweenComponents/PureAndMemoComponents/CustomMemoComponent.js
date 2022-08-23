import React from 'react';

const CustomMemoComponent = ({name}) => {
    return (
        <div>
            {console.log('*****************************Memo Component Render****************************')}
            <h1>{name}</h1>
        </div>
    );
};

export default React.memo(CustomMemoComponent);