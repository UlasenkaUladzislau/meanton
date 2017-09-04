import React from 'react';
import WordsInputArea from './WordsInputArea.jsx';
import WordsPreviewArea from './WordsPreviewArea.jsx';
import DictionarySettings from './DictionarySettings.jsx';

export default class DictionaryDetail extends React.Component {
    render() {
        return (
        <div>
            <DictionarySettings
                changeActiveDictionarySetting={this.props.changeActiveDictionarySetting}
                activeDictionary={this.props.activeDictionary}
            />
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
