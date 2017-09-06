import React from 'react';
import InputFactory from '../inputs/InputFactory.jsx'
import translationFields from '../../constants/translationFields.js'

export default class DictionarySettings extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                {translationFields.map((input) =>
                    <InputFactory
                        key={input.name}
                        {...input}
                        value={this.props.activeDictionary[input.name]}
                        inputName={input.name}
                        changeActiveDictionarySetting={this.props.changeActiveDictionarySetting}
                    />
                )}
            </div>
        )
    }
}
