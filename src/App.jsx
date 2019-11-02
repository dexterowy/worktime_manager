import React, { Component } from 'react';
import styled from 'styled-components';

//  JSON files
import employee from './employee.json';
import projects from './projects.json';

//  Components
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import colors from './Utils/colors';

const AppWrapper = styled.div``;

const MainWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  margin-left: 60px;
  width: 100%;
  min-height: calc(100vh - 60px);
  background: ${colors.backgrounds.app};
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      database: {
        employee,
        projects,
      },
      menu: {
        defaultPosition: true,
        isOpen: true,
      },
    };
  }

  toggleMenuHandler() {
    // console.log(this.state.menu.isOpen);
    this.setState((prevState) => ({
      menu: {
        isOpen: !prevState.menu.isOpen,
        defaultPosition: false,
      },
    }));
  }

  render() {
    const { menu, database } = this.state;
    console.log(database.employee);
    return (
      <AppWrapper>
        <Navbar toggleMenu={() => this.toggleMenuHandler()} />
        <MainWrapper>
          <Menu toggled={menu.isOpen} defaultPosition={menu.defaultPosition} />
          <ContentWrapper />
        </MainWrapper>
      </AppWrapper>
    );
  }
}
