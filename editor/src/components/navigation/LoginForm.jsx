import React from 'react';
import Input from '../inputs/TextInput.jsx'
import axios from 'axios';
import Cookie from '../../utils/cookie.js';
import DjangoCSRFToken from 'django-react-csrftoken'
import $ from 'jquery';

axios.defaults.xsrfHeaderName = "X-CSRFToken";

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: [{
                type: 'text',
                classes: 'form-control',
                name: 'text',
                placeholder: 'Username',
            },
            {
                type: 'password',
                classes: 'form-control',
                name: 'password',
                placeholder: 'Password',
            }]
        };
    }

    handleSubmitForm = (e) => {
        console.log('handleSubmitForm');
        e.preventDefault();
        const form = $(this.refs.form);
        const data = form.serialize();
        const cookie = new Cookie();
        const csrftoken = cookie.getCookie('csrftoken');
        axios({
          method: 'post',
          url: '/sign_in/',
          headers: {"X-CSRFToken": csrftoken},
          data: {
            firstName: 'Fred',
            lastName: 'Flintstone',
          },
        }).then(res => this.props.addWordTranslation({
            output: res.data.text[0],
            input: value,
        }))
        .catch(err => console.log(err));
        //
        //
        // axios.post('/sign_in/', {
        //     data: 'data',
        //     csrfmiddlewaretoken: csrftoken,
        //     csrftoken,
        // }, {
        //     "X-CSRFToken": csrftoken,
        //     csrfmiddlewaretoken: csrftoken,
        //     csrftoken,
        // }
        // )
        // .then(res => this.props.addWordTranslation({
        //     output: res.data.text[0],
        //     input: value,
        // }))
        // .catch(err => console.log(err));
    };

    render() {
     return (
        <form className="navbar-form navbar-right">
            <DjangoCSRFToken />
            {this.state.inputs.map((input) =>
                <Input
                    key={input.name}
                    type={input.text}
                    classes={input.classes}
                    name={input.name}
                    placeholder={input.placeholder}
                />
            )}
            <button onClick={this.handleSubmitForm} className="btn btn-default">Sign In2</button>
        </form>
    )}}

// action="/sign_in/" method="POST"
LoginForm.propTypes = {

};

LoginForm.contextTypes = {
};