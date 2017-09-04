import React from 'react';


export default class SliderInput extends React.Component {

    handleOnChange = (proxy) => {
        this.props.changeActiveDictionarySetting(this.props.inputName, proxy.target.value)
    };

    render() {
         return (
              <input
                  type="range"
                  defaultValue={this.props.value}
                  min={this.props.min}
                  max={this.props.max}
                  onChange={this.handleOnChange}
              />
        )
    }
}
