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
import AddEmployee from './Components/Modals/AddEmployee';
import AddProject from './Components/Modals/AddProject';
import AddHours from './Components/Modals/AddHours';

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
    // console.log(props);
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
        idProject: null,
        idEmployee: null,
        hours: null,
      },
    };
    this.firstNameInputHandler = this.firstNameInputHandler.bind(this);
    this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
    this.deleteEmployeeHandler = this.deleteEmployeeHandler.bind(this);
    this.deleteProjectHandler = this.deleteProjectHandler.bind(this);
    this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
    this.openModalHandler = this.openModalHandler.bind(this);
    this.descInputHandler = this.descInputHandler.bind(this);
    this.lastNameInputHandler = this.lastNameInputHandler.bind(this);
    this.titleInputHandler = this.titleInputHandler.bind(this);
    this.phoneInputHandler = this.phoneInputHandler.bind(this);
    this.addEmployeeHandler = this.addEmployeeHandler.bind(this);
    this.closeModalHandler = this.closeModalHandler.bind(this);
    this.addProjectHandler = this.addProjectHandler.bind(this);
    this.loadEmployeeDataHandler = this.loadEmployeeDataHandler.bind(this);
    this.editEmployeeHandler = this.editEmployeeHandler.bind(this);
    this.loadProjectDataHandler = this.loadProjectDataHandler.bind(this);
    this.editProjectHandler = this.editProjectHandler.bind(this);
    this.hoursInputHandler = this.hoursInputHandler.bind(this);
    this.idEmployeeInputHandler = this.idEmployeeInputHandler.bind(this);
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

  openModalHandler(type) {
    this.setState((prevState) => {
      const modals = {
        ...prevState.modals,
        [type]: true,
      };

      return {
        modals,
      };
    });
  }

  descInputHandler(e) {
    e.persist();

    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        desc: e.target.value,
      },
    }));
  }

  firstNameInputHandler(event) {
    event.persist();

    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        firstName: event.target.value,
      },
    }));
  }

  lastNameInputHandler(e) {
    e.persist();

    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        lastName: e.target.value,
      },
    }));
  }

  titleInputHandler(e) {
    e.persist();

    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        title: e.target.value,
      },
    }));
  }

  phoneInputHandler(e) {
    e.persist();

    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        phone: e.target.value,
      },
    }));
  }

  hoursInputHandler(e) {
    e.persist();

    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        hours: e.target.value,
      },
    }));
  }

  idEmployeeInputHandler(e) {
    e.persist();

    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        idEmployee: e.target.value,
      },
    }));
  }

  addEmployeeHandler() {
    const { database, inputs } = this.state;
    const newId = database.employees[database.employees.length - 1].id + 1;
    const newEmployee = {
      id: newId,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      phone: inputs.phone,
      projects: [],
    };
    this.setState((prevState) => {
      const newEmployees = [...prevState.database.employees];
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
    const newId = database.projects[database.projects.length - 1].id + 1;
    const newProject = {
      id: newId,
      title: inputs.title,
      description: inputs.desc,
    };
    this.setState((prevState) => {
      const newProjects = [...prevState.database.projects];
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
    //  CHANGE IT LATER!!
    this.openModalHandler('editEmployee');
  }

  editEmployeeHandler() {
    const {
      database,
      // eslint-disable-next-line object-curly-newline
      inputs: { firstName, lastName, phone, idEmployee },
    } = this.state;
    const newEmployees = [...database.employees];
    const employeeIndex = newEmployees.findIndex(
      (emp) => emp.id === idEmployee,
    );
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
    //  CHANGE IT LATER!!
    this.openModalHandler('editProject');
  }

  editProjectHandler() {
    const {
      database,
      inputs: { title, desc, idProject },
    } = this.state;
    const newProjects = [...database.projects];
    const projectIndex = newProjects.findIndex((emp) => emp.id === idProject);
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
    this.setState({
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
        name: '',
        desc: '',
        idProject: null,
        idEmployee: null,
      },
    });
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { menu, language, database, modals, inputs } = this.state;
    return (
      <TextContext.Provider
        value={{
          texts: { ...text },
          language,
          database,
        }}
      >
        <AppWrapper>
          <Navbar isOpen={menu.isOpen} toggleMenu={this.toggleMenuHandler} />

          <MainWrapper>
            <Menu
              toggled={menu.isOpen}
              defaultPosition={menu.defaultPosition}
              changeLanguage={this.changeLanguageHandler}
            />
            <AddEmployee
              show={modals.addEmployee}
              value={inputs}
              closeModal={this.closeModalHandler}
              changeFirstName={this.firstNameInputHandler}
              changeLastName={this.lastNameInputHandler}
              changePhone={this.phoneInputHandler}
              addEmployee={this.addEmployeeHandler}
            />
            <AddEmployee
              show={modals.editEmployee}
              value={inputs}
              closeModal={this.closeModalHandler}
              changeFirstName={this.firstNameInputHandler}
              changeLastName={this.lastNameInputHandler}
              changePhone={this.phoneInputHandler}
              addEmployee={this.editEmployeeHandler}
            />
            <AddProject
              show={modals.addProject}
              value={inputs}
              closeModal={this.closeModalHandler}
              changeTitle={this.titleInputHandler}
              changeDesc={this.descInputHandler}
              addProject={this.addProjectHandler}
            />
            <AddProject
              show={modals.editProject}
              value={inputs}
              closeModal={this.closeModalHandler}
              changeTitle={this.titleInputHandler}
              changeDesc={this.descInputHandler}
              addProject={this.editProjectHandler}
            />
            <AddHours
              show={modals.hours}
              value={inputs}
              closeModal={this.closeModalHandler}
              changeHours={this.hoursInputHandler}
              changeIdEmployee={this.idEmployeeInputHandler}
              addHours={() => this.closeModalHandler()}
            />
            <PageWrapper>
              <Switch>
                <Route path="/" exact render={() => <Dashboard />} />
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
              </Switch>
            </PageWrapper>
          </MainWrapper>
        </AppWrapper>
      </TextContext.Provider>
    );
  }
}

export default withRouter(App);
