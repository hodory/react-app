import React, { Component } from 'react';
import TopLayoutComponent from './components/LayoutTop';
import MainLayoutComponent from './components/LayoutMainContents';

import SubContent from './components/LayoutSubContents';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <TopLayoutComponent />
          </header>
          <div>
            <Route exact path="/" component={MainLayoutComponent}></Route>
            <Route path="/sub" component={SubContent}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
