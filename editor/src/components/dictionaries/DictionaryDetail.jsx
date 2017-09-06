import React from 'react';
import WordsInputArea from './WordsInputArea.jsx';
import WordsPreviewArea from './WordsPreviewArea.jsx';

export default class DictionaryDetail extends React.Component {
    render() {
        return (
        <div className="col-md-4">
            <WordsInputArea
                {...this.props.activeDictionary}
                inputWords={this.props.inputWords}
                addWordTranslation={this.props.addWordTranslation}
            />
            <WordsPreviewArea
                translations={this.props.activeDictionary.translations}
                outputWords={this.props.outputWords}
            />
            <button onClick={this.props.saveDictionary}>Save Dictionary</button>
        </div>
        );
    }
}
