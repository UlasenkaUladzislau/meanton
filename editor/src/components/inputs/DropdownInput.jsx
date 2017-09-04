import React from 'react';
import Dropdown from 'react-dropdown'

export default class DropdownInput extends React.Component {
    render() {
        return (
            <Dropdown
                options={this.props.options}
                value={this.props.value}
                onChange={this.handleOnChange}
            />
        )
    }
}
