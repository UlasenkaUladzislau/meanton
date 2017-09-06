import React from 'react';
import Dictionary from './Dictionary.jsx';

export default class DictionariesMenu extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <h4>Dictionaries</h4>
                {this.props.dictionaries.map((dictionary) =>
                    <Dictionary key={dictionary.pk} {...dictionary} />
                )}
                <button onClick={this.props.createNewDictionary}>Add New Dictionary</button>
            </div>
        );
    }
}

