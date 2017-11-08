import React, { Component } from 'react';
import TopLayoutComponent from './components/Layout/LayoutTop';
import MainLayoutComponent from './components/Layout/LayoutMain';

import MainContainer from './containers/MainContainer/MainContainer';
import MainSearchContainer from './containers/SearchContainer/MainSearchContainer';
import SearchContainer from './containers/SearchContainer/SearchContainer';
import DetailContainer from './containers/ContentContainer/DetailContainer';
import MapContainer from './containers/MapContainer/MapContainer';
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
            <Route exact path="/" component={MainSearchContainer} />
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/main/:areaCode" component={MainSearchContainer} />
            <Route exact path="/main/:areaCode" component={MainContainer} />
            <Route path="/area/:areaCode" component={SearchContainer}></Route>
            <Route exact path="/area/:areaCode" component={MainLayoutComponent}></Route>
            <Route exact path="/detail/:areaCode/:contentTypeId/:contentId" component={DetailContainer}></Route>
            <Route exact path="/location" component={MapContainer}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;