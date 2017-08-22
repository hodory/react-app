import React, { Component } from 'react';
import { Container } from 'reactstrap';
import TopLayoutComponent from './components/LayoutTop';
import MainLayoutComponent from './components/LayoutMainContents';

class App extends Component {
  render() {
    return (
      <div>
        <TopLayoutComponent />
        <Container>
          <MainLayoutComponent />
        </Container>
      </div>
    );
  }
}

export default App;
