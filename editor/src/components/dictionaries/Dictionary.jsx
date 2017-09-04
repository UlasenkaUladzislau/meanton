import React from 'react';

export default class Dictionary extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <a href={this.props.file} download>Get File</a>
            </div>
        );
    }
}

