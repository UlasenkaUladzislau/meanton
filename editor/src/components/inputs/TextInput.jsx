import React from 'react';

export default class LoginForm extends React.Component {
    handleOnChange = (proxy) => {
        this.props.changeActiveDictionarySetting(this.props.inputName, proxy.target.value)
    };

    render() {
        return (
            <input
                type={this.props.type}
                className={this.props.classes}
                name={this.props.name}
                placeholder={this.props.placeholder}
                defaultValue={this.props.value}
                onChange={this.handleOnChange}
            />
       )
    }
}
