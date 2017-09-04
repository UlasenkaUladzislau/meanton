import React from 'react';
import LoginForm from './LoginForm.jsx';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
     return (
        <div className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Meanton</a>
                </div>
                    <div className="navbar-collapse collapse" id="navbar-main">
                        <LoginForm />
                    </div>
            </div>
        </div>
    )}}

Navigation.propTypes = {
};

Navigation.contextTypes = {
};