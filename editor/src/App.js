import React, { Component } from 'react';
import Editor from './components/editor/Editor.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
