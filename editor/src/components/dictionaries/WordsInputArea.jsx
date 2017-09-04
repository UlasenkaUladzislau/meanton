import React from 'react';
import axios from 'axios';
import { YANDEX_TRANSLATE_API_KEY } from '../../constants/apiKeys.js'
import { YANDEX_TRANSLATOR_API_URL } from '../../constants/urls.js'


export default class WordsInputArea extends React.Component {

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.getWordTranslation(this.refs.input.value);
            this.refs.input.value = '';
        }
    };

    getWordTranslation = (value) => {
        axios.get(`${YANDEX_TRANSLATOR_API_URL}?key=${YANDEX_TRANSLATE_API_KEY}&text=${value}&lang=${this.props.input_lang}-${this.props.output_lang}`)
        .then(res => this.props.addWordTranslation({
            output: res.data.text[0],
            input: value,
        }))
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <input ref="input" type="text" onKeyPress={this.handleKeyPress} />
            </div>
        );
    }
}
