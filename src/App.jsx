import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import TextContext from './context/textContext';
import text from './Localization/ui';

//  JSON files
import employeesFile from './employees.json';
import projectsFile from './projects.json';

//  Components
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Dashboard from './Components/Dashboard/Dashboard';
import ListPage from './Components/Lists/ListPage';
import DetailsPage from './Components/DetailsPage/DetailsPage';
import PageWrapper from './hoc/pageWrapper';

// utils
import colors from './Utils/colors';

const AppWrapper = styled.div`
  background: ${colors.backgrounds.app};
`;

const MainWrapper = styled.div`
  display: flex;
  padding-top: 60px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      language: 'pol',
      database: {
        employees: employeesFile,
        projects: projectsFile,
      },
      menu: {
        defaultPosition: true,
        isOpen: true,
      },
    };
  }

  toggleMenuHandler() {
    this.setState((prevState) => ({
      menu: {
        isOpen: !prevState.menu.isOpen,
        defaultPosition: false,
      },
    }));
  }

  deleteEmployeeHandler(id) {
    const { language } = this.state;
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    // eslint-disable-next-line no-alert
    if (window.confirm(text.actions.delete.employee[language])) {
      // redirect to the employees list
      // eslint-disable-next-line react/prop-types
      history.replace('/employees');
      this.setState((prevState) => {
        //  find index of the employee
        const employee = prevState.database.employees.findIndex(
          (el) => id === el.id,
        );
        //  clone array of employees
        const filteredEmployees = [...prevState.database.employees];
        //  remove employee from array
        filteredEmployees.splice(employee, 1);
        return {
          database: {
            employees: filteredEmployees,
            projects: prevState.database.projects,
          },
        };
      });
    }
  }

  deleteProjectHandler(id) {
    const { language } = this.state;
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    // eslint-disable-next-line no-alert
    if (window.confirm(text.actions.delete.project[language])) {
      // redirect to the employees list
      // eslint-disable-next-line react/prop-types
      history.replace('/projects');
      this.setState((prevState) => {
        //  find index of the employee
        const projectIndex = prevState.database.projects.findIndex(
          (el) => id === el.id,
        );
        //  clone array of employees
        const filteredProjects = [...prevState.database.projects];
        //  remove employee from array
        filteredProjects.splice(projectIndex, 1);

        const filteredEmployees = [...prevState.database.employees].map(
          (el) => {
            return {
              ...el,
              projects: el.projects.filter((project) => project.id !== id),
            };
          },
        );
        return {
          database: {
            employees: filteredEmployees,
            projects: filteredProjects,
          },
        };
      });
    }
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
    const { menu, language, database } = this.state;
    return (
      <TextContext.Provider
        value={{
          texts: { ...text },
          language,
          database,
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
            <PageWrapper>
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/projects/:id" exact>
                  <DetailsPage
                    type="projectsDetails"
                    deleteProject={(id) => this.deleteProjectHandler(id)}
                  />
                </Route>
                <Route path="/employees/:id" exact>
                  <DetailsPage
                    type="employeesDetails"
                    deleteEmployee={(id) => this.deleteEmployeeHandler(id)}
                  />
                </Route>
                <Route path="/projects" extact>
                  <ListPage type="projects" />
                </Route>
                <Route path="/employees" exact>
                  <ListPage type="employees" />
                </Route>
              </Switch>
            </PageWrapper>
          </MainWrapper>
        </AppWrapper>
      </TextContext.Provider>
    );
  }
}

export default withRouter(App);
