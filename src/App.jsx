import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line object-curly-newline
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextContext from './context/textContext';
import text from './Localization/ui';

//  JSON files
import employeesFile from './employees.json';
import projectsFile from './projects.json';

//  Components
import Report from './Components/Report/Report';
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import Dashboard from './Components/Dashboard/Dashboard';
import ListPage from './Components/Lists/ListPage';
import DetailsPage from './Components/DetailsPage/DetailsPage';
import PageWrapper from './hoc/pageWrapper';
import Modals from './Components/Modals/Modals';

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
    this.state = {
      language: 'en',
      database: {
        employees: employeesFile,
        projects: projectsFile,
      },
      menu: {
        defaultPosition: true,
        isOpen: true,
      },
      modals: {
        addEmployee: false,
        addProject: false,
        editEmployee: false,
        editProject: false,
        settings: false,
        hours: false,
      },
      inputs: {
        firstName: '',
        lastName: '',
        phone: '',
        title: '',
        desc: '',
        idProject: '',
        idEmployee: '',
        hours: '',
      },
    };
    this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
    this.deleteEmployeeHandler = this.deleteEmployeeHandler.bind(this);
    this.deleteProjectHandler = this.deleteProjectHandler.bind(this);
    this.openModalHandler = this.openModalHandler.bind(this);
    this.addEmployeeHandler = this.addEmployeeHandler.bind(this);
    this.closeModalHandler = this.closeModalHandler.bind(this);
    this.addProjectHandler = this.addProjectHandler.bind(this);
    this.loadEmployeeDataHandler = this.loadEmployeeDataHandler.bind(this);
    this.editEmployeeHandler = this.editEmployeeHandler.bind(this);
    this.loadProjectDataHandler = this.loadProjectDataHandler.bind(this);
    this.editProjectHandler = this.editProjectHandler.bind(this);
    this.addHours = this.addHours.bind(this);
    this.languageInputHandler = this.languageInputHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
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
    const { history } = this.props;
    // eslint-disable-next-line no-alert
    if (window.confirm(text.actions.delete.employee[language])) {
      // redirect to the employees list
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
    const { history } = this.props;
    // eslint-disable-next-line no-alert
    if (window.confirm(text.actions.delete.project[language])) {
      // redirect to the project list
      history.replace('/projects');
      this.setState((prevState) => {
        //  find index of the project
        const projectIndex = prevState.database.projects.findIndex(
          (el) => id === el.id,
        );
        //  clone array of projects
        const filteredProjects = [...prevState.database.projects];
        //  remove project from array
        filteredProjects.splice(projectIndex, 1);

        //  update employee's projects
        const filteredEmployees = [...prevState.database.employees].map(
          (el) => ({
            ...el,
            projects: el.projects.filter((project) => project.id !== id),
          }),
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

  openModalHandler(type, id = null) {
    const { inputs } = this.state;
    this.setState((prevState) => {
      const modals = {
        ...prevState.modals,
        [type]: true,
      };

      return {
        modals,
      };
    });

    if (type === 'hours') {
      this.setState({
        inputs: {
          ...inputs,
          idProject: id,
        },
      });
    }
  }

  inputHandler(e, input) {
    const { inputs } = this.state;
    this.setState({
      inputs: {
        ...inputs,
        [input]: e.target.value,
      },
    });
  }

  languageInputHandler(lang) {
    this.setState({
      language: lang,
    });
  }

  addHours() {
    const { database, inputs } = this.state;
    const newEmployees = [...database.employees];
    //  Find index of employee in database
    const newEmployeeIndex = newEmployees.findIndex(
      (el) => el.id === parseInt(inputs.idEmployee, 10),
    );
    if (newEmployeeIndex < 0) {
      // eslint-disable-next-line no-alert
      alert('Error! Invalid ID.');
      return;
    }
    if (inputs.hours <= 0) {
      // eslint-disable-next-line no-alert
      alert('Error! Hours should be positive number.');
      return;
    }
    //  Find index of project in database
    const projectIndex = newEmployees[newEmployeeIndex].projects.findIndex(
      (el) => el.id === parseInt(inputs.idProject, 10),
    );
    //  If employee is already assigned to the project,
    //  update hours property
    if (projectIndex >= 0) {
      newEmployees[newEmployeeIndex].projects[projectIndex].hours = parseInt(
        inputs.hours,
        10,
      );
      //  If employee has no realtions with this project
      //  add new relation to the projects property
    } else {
      newEmployees[newEmployeeIndex].projects.push({
        id: inputs.idProject,
        hours: parseInt(inputs.hours, 10),
      });
    }
    this.setState({
      database: {
        projects: [...database.projects],
        employees: newEmployees,
      },
    });
    this.closeModalHandler();
  }

  addEmployeeHandler() {
    const { database, inputs } = this.state;
    // Generate id for new employee
    const newId = database.employees[database.employees.length - 1].id + 1;

    // Create new employee object
    const newEmployee = {
      id: newId,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      phone: inputs.phone,
      projects: [],
    };
    this.setState((prevState) => {
      const newEmployees = [...prevState.database.employees];
      //  Add new employee to the database
      newEmployees.push(newEmployee);
      const newDatabase = {
        projects: [...prevState.database.projects],
        employees: newEmployees,
      };
      return {
        database: newDatabase,
      };
    });
    this.closeModalHandler();
  }

  addProjectHandler() {
    const { database, inputs } = this.state;
    // Generate id for new project
    const newId = database.projects[database.projects.length - 1].id + 1;
    // Create new project object
    const newProject = {
      id: newId,
      title: inputs.title,
      description: inputs.desc,
    };
    this.setState((prevState) => {
      const newProjects = [...prevState.database.projects];
      //  Add new project to the database
      newProjects.push(newProject);
      const newDatabase = {
        projects: newProjects,
        employees: [...prevState.database.employees],
      };
      return {
        database: newDatabase,
      };
    });
    this.closeModalHandler();
  }

  // Loading employee data to the inputs state,
  // before edit modal opening
  loadEmployeeDataHandler(id) {
    const { database, inputs } = this.state;
    const { firstName, lastName, phone } = database.employees.find(
      (emp) => emp.id === id,
    );
    this.setState({
      inputs: {
        ...inputs,
        firstName,
        lastName,
        phone,
        idEmployee: id,
      },
    });
    this.openModalHandler('editEmployee');
  }

  editEmployeeHandler() {
    const {
      database,
      // eslint-disable-next-line object-curly-newline
      inputs: { firstName, lastName, phone, idEmployee },
    } = this.state;
    const newEmployees = [...database.employees];
    // Find employee's index in database
    const employeeIndex = newEmployees.findIndex(
      (emp) => emp.id === idEmployee,
    );
    //  Update employee data
    newEmployees[employeeIndex].firstName = firstName;
    newEmployees[employeeIndex].lastName = lastName;
    newEmployees[employeeIndex].phone = phone;
    this.setState({
      database: {
        projects: [...database.projects],
        employees: newEmployees,
      },
    });
    this.closeModalHandler();
  }

  loadProjectDataHandler(id) {
    // Load project data to the inputs state,
    // before edit modal opening
    const { database, inputs } = this.state;
    const { title, description } = database.projects.find(
      (emp) => emp.id === id,
    );
    this.setState({
      inputs: {
        ...inputs,
        title,
        desc: description,
        idProject: id,
      },
    });
    this.openModalHandler('editProject');
  }

  editProjectHandler() {
    const {
      database,
      inputs: { title, desc, idProject },
    } = this.state;
    const newProjects = [...database.projects];
    // Find project's index in database
    const projectIndex = newProjects.findIndex((emp) => emp.id === idProject);
    // Update project
    newProjects[projectIndex].title = title;
    newProjects[projectIndex].description = desc;
    this.setState({
      database: {
        projects: newProjects,
        employees: [...database.employees],
      },
    });
    this.closeModalHandler();
  }

  closeModalHandler() {
    // Close all modals
    this.setState({
      modals: {
        addEmployee: false,
        addProject: false,
        editEmployee: false,
        editProject: false,
        settings: false,
        hours: false,
      },
      //  Clear all inputs
      inputs: {
        firstName: '',
        lastName: '',
        phone: '',
        title: '',
        desc: '',
        idProject: '',
        idEmployee: '',
        hours: '',
      },
    });
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { menu, language, database, modals, inputs } = this.state;
    return (
      <TextContext.Provider
        value={{
          // Internationalization
          texts: { ...text },
          language,
          //  Database of projects and employees
          database,
        }}
      >
        <AppWrapper>
          <Navbar isOpen={menu.isOpen} toggleMenu={this.toggleMenuHandler} />

          <MainWrapper>
            <Menu
              toggled={menu.isOpen}
              defaultPosition={menu.defaultPosition}
              openModal={this.openModalHandler}
            />
            <Modals
              modals={modals}
              inputs={inputs}
              text={text}
              language={language}
              closeModal={this.closeModalHandler}
              inputHandler={this.inputHandler}
              addEmployee={this.addEmployeeHandler}
              editEmployee={this.editEmployeeHandler}
              addProject={this.addProjectHandler}
              editProject={this.editProjectHandler}
              addHours={this.addHours}
              languageInput={this.languageInputHandler}
            />
            <PageWrapper>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <Dashboard
                      openModal={this.openModalHandler}
                      database={database}
                    />
                  )}
                />
                <Route
                  path="/projects/:id"
                  exact
                  render={() => (
                    <DetailsPage
                      type="projectsDetails"
                      deleteProject={this.deleteProjectHandler}
                      loadProjectData={this.loadProjectDataHandler}
                      openHoursModal={this.openModalHandler}
                    />
                  )}
                />
                <Route
                  path="/employees/:id"
                  exact
                  render={() => (
                    <DetailsPage
                      type="employeesDetails"
                      deleteEmployee={this.deleteEmployeeHandler}
                      loadEmployeeData={this.loadEmployeeDataHandler}
                    />
                  )}
                />
                <Route
                  path="/employees/report/:id"
                  exact
                  render={() => <Report database={database} />}
                />
                <Route
                  path="/projects"
                  exact
                  render={() => (
                    <ListPage
                      type="projects"
                      openModal={this.openModalHandler}
                    />
                  )}
                />
                <Route
                  path="/employees"
                  exact
                  render={() => (
                    <ListPage
                      type="employees"
                      openModal={this.openModalHandler}
                    />
                  )}
                />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </PageWrapper>
          </MainWrapper>
        </AppWrapper>
      </TextContext.Provider>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

export default withRouter(App);
