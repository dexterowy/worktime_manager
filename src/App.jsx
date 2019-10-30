import React, { Component } from 'react';
import styled from 'styled-components';

//  Components
import Navbar from './Components/Navbar/Navbar';

const AppWrapper = styled.div``;

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <AppWrapper>
        <Navbar />
      </AppWrapper>
    );
  }
}
