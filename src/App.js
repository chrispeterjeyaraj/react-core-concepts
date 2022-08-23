import './App.css';
import {useState} from 'react';
import Events from './components/Events';
import PropsAndDataTransaction from "./components/PropsAndDataTransaction";
import Styles from './components/Styles';
import FormInputHandling from './components/FormInputHandling';
import ExamplePureComponent from './components/SharingDataBetweenComponents/PureAndMemoComponents/ExamplePureComponent';
import RefsExample from './components/RefsExamples/RefsExample';
import PortalsDemo from './components/Portals/PortalsDemo';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';
import ErrorBoundaryExample from './components/ErrorBoundaries/ErrorBoundaryExample';
import ExampleHOCChildComponent from './components/SharingDataBetweenComponents/HOC/ExampleHOCChildComponent';
import ExampleHOCFuncSharedComponent from './components/SharingDataBetweenComponents/HOC/ExampleHOCFuncSharedComponent';
import ExampleRenderPropComponent from './components/SharingDataBetweenComponents/RenderProps/ExampleRenderPropComponent';
import ExampleRenderPropFuncSharedComponent from './components/SharingDataBetweenComponents/RenderProps/ExampleRenderPropFuncSharedComponent';
import ExampleRenderPropChildComponent from './components/SharingDataBetweenComponents/RenderProps/ExampleRenderPropChildComponent';
import ParentContextComponent from './components/SharingDataBetweenComponents/ContextAPI/ParentContextComponent';
import UseEffectComponent from './components/useEffectUseCases/UseEffectComponent';
import FetchDataFromAPI from './components/FetchingDataFromAPI/FetchDataFromAPI';
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
    {/* <ErrorBoundary>
        <ErrorBoundaryExample simulateError={false}></ErrorBoundaryExample>
    </ErrorBoundary> */}
    {/* <ExampleHOCChildComponent />
    <ExampleHOCFuncSharedComponent /> */}
    {/* <ExampleRenderPropComponent render={(count, incrementcount) => <ExampleRenderPropChildComponent count={count} incrementcount={incrementcount}/>}/>
    <ExampleRenderPropComponent render={(count, incrementcount) => <ExampleRenderPropFuncSharedComponent count={count} incrementcount={incrementcount}/>}/> */}
    {/* <ParentContextComponent /> */}
    {/* <UseEffectComponent /> */}
    <FetchDataFromAPI />
    </>
  );
}

export default App;
