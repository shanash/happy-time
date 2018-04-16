import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Menu } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/menu/:id" component={Menu}/>
      </div>
    );
  }
}

export default App;