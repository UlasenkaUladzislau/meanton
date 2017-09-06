import React from 'react';


export default class SliderInput extends React.Component {

    handleOnChange = (proxy) => {
        this.props.changeActiveDictionarySetting(this.props.inputName, proxy.target.value)
    };

    render() {
        const spanStyles = {
            display: 'inline',
        };
        const inputStyles = {
            display: 'inline',
            width: '80%',
        };
        return (
             <div>
                 <input
                     style={inputStyles}
                     type="range"
                     defaultValue={this.props.value}
                     min={this.props.min}
                     max={this.props.max}
                     onChange={this.handleOnChange}
                 />
                 <span style={spanStyles}>{this.props.value}{this.props.postfix}</span>
             </div>
        )
    }
}
