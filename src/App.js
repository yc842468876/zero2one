import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import { header } from './hoc/index';

@header
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <div className="box">

        </div>
      </div>
    );
  }
}

export default App;