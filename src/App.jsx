import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import TextContext from './context/textContext';
import text from './Localization/ui';

//  JSON files
import employeeFile from './employee.json';
import projectsFile from './projects.json';

//  Components
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Dashboard from './Components/Dashboard/Dashboard';
import List from './Components/Lists/List';

// utils
import colors from './Utils/colors';

const AppWrapper = styled.div`
  background: ${colors.backgrounds.app};
`;

const MainWrapper = styled.div`
  display: flex;
`;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      language: 'pol',
      database: {
        employee: employeeFile,
        projects: projectsFile,
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

  // JUST TO CHECK IF I18N WORKS
  changeLanguageHandler() {
    this.setState((prevState) => {
      if (prevState.language === 'pol') {
        return {
          language: 'en',
        };
      }
      return {
        language: 'pol',
      };
    });
  }

  render() {
    const {
      menu,
      language,
      database: { projects, employee },
    } = this.state;
    return (
      <TextContext.Provider
        value={{
          texts: { ...text },
          language,
          projects,
          employee,
        }}
      >
        <AppWrapper>
          <Navbar
            isOpen={menu.isOpen}
            toggleMenu={() => this.toggleMenuHandler()}
          />
          <MainWrapper>
            <Menu
              toggled={menu.isOpen}
              defaultPosition={menu.defaultPosition}
              changeLanguage={() => this.changeLanguageHandler()}
            />
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/projects" extact>
                <List type="projects" />
              </Route>
              <Route path="/employee" exact>
                <List type="employee" />
              </Route>
            </Switch>
          </MainWrapper>
        </AppWrapper>
      </TextContext.Provider>
    );
  }
}
