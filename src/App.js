import React, { Component } from 'react';
import TopLayoutComponent from './components/LayoutTop';
import MainLayoutComponent from './components/LayoutMain';

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
            <Route path="/info" component={SubContent}></Route>
            <Route path="/info/:areaCode" component={MainLayoutComponent}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
