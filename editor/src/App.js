import React, { Component } from 'react';
import Editor from './components/editor/Editor.jsx';
import { LOGOUT } from './constants/urls.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <a href={LOGOUT}>Log out</a>
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
