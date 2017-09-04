import React from 'react';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                {this.props.translations.map(translation =>
                    <div key={translation.input}>{translation.input} - {translation.output}</div>
                )}
            </div>
        );
    }
}
