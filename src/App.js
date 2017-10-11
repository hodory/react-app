import React, { Component } from 'react';
import TopLayoutComponent from './components/Layout/LayoutTop';
import MainLayoutComponent from './components/Layout/LayoutMain';

import SubContent from './components/Layout/LayoutSubContents';
import DetailContainer from './containers/ContentContainer/DetailContainer';
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
            <Route path="/" component={SubContent}></Route>
            <Route path="/info/:areaCode" component={MainLayoutComponent}></Route>
            <Route exact path="/info/:areaCode/:contentId" component={DetailContainer}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;