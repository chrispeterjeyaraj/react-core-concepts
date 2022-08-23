import React, {useState} from 'react';
import { AppContextProvider } from './Context'
import ChildContextComponent from './ChildContextComponent';

const ParentContextComponent = () => {
    const [count, setCount] = useState(0);
    const incrementcount = () => {
        setCount(count + 1);
    } 
        return (
       <AppContextProvider value={{count, incrementcount}}> 
            <ChildContextComponent />
       </AppContextProvider>
    );
};

export default ParentContextComponent;