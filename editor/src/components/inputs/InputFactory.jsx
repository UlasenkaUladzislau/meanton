import React from 'react';
import { TEXT_INPUT, SLIDER_INPUT, DROPDOWN_INPUT } from '../../constants/inputTypes.js'
import SliderInput from './SliderInput.jsx'
import TextInput from './TextInput.jsx'
import DropdownInput from './DropdownInput.jsx'

export default class InputFactory extends React.Component {
    render() {
        let input = null;
        switch (this.props.inputType) {
            case TEXT_INPUT:
                input = <TextInput {...this.props} />;
                break;
            case SLIDER_INPUT:
                input = <SliderInput {...this.props} />;
                break;
            case DROPDOWN_INPUT:
                input = <DropdownInput {...this.props} />;
                break;
        }
        return (
            <div className="form-group">
                <span>{this.props.label}</span>
                {input}
            </div>
        )
    }
}
