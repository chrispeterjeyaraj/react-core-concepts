import React from 'react';

const ExampleHOCComponent = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state ={
                counter: 0
            }            
        }

        incrementCount = (count) => {
            this.setState({counter: this.state.counter+1})
        }
        
        render() {
            return (
                <Component name="Chris" incrementcount={this.incrementCount} 
                count={this.state.counter} {...this.props}></Component>
            );
        }
    }
};

export default ExampleHOCComponent;