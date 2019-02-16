import React, { Component } from 'react';
import Header from './components/header/header';
import Curriculo from './components/curriculo/curriculo';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Curriculo/>
      </div>
    );
  }
}

export default App;
