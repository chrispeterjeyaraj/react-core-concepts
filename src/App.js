import './App.css';
import {useState} from 'react';
import Events from './components/Events';
import PropsAndDataTransaction from "./components/PropsAndDataTransaction";
import Styles from './components/Styles';
import FormInputHandling from './components/FormInputHandling';
import ExamplePureComponent from './components/PureAndMemoComponents/ExamplePureComponent';
import RefsExample from './components/RefsExamples/RefsExample';
import PortalsDemo from './components/Portals/PortalsDemo';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';
import ErrorBoundaryExample from './components/ErrorBoundaries/ErrorBoundaryExample';

function App() {
  // const [name, setName] = useState("...Will display value if received from Props component")
  // const getName = (childName) => {
  //   setName(childName);
  // }
  return (
    <>
    {/* <Events /> */}
    {/* <PropsAndDataTransaction name = "Chris"/>
    <PropsAndDataTransaction getName = {getName}/>
    <h1>value from Child component = {name}</h1> */}

    {/* <Styles /> */}
    {/* <FormInputHandling /> */}
    {/* <ExamplePureComponent /> */}
    {/* <RefsExample /> */}
    {/* <PortalsDemo /> */}
    <ErrorBoundary>
        <ErrorBoundaryExample simulateError={false}></ErrorBoundaryExample>
    </ErrorBoundary>
    </>
  );
}

export default App;
