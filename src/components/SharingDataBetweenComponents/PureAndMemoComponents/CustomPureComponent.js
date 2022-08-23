import React, { PureComponent } from 'react';

class CustomPureComponent extends PureComponent {
    render() {
        console.log('*****************************PURE Component Render****************************');
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}
export default CustomPureComponent;