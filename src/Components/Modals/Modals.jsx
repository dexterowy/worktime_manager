import React from 'react';
import PropTypes from 'prop-types';

import AddEmployee from './AddEmployee';
import AddHours from './AddHours';
import AddProject from './AddProject';
import Settings from './Settings';

const Modals = ({
  modals,
  inputs,
  text,
  language,
  closeModal,
  inputHandler,
  addEmployee,
  editEmployee,
  addProject,
  editProject,
  addHours,
  languageInput,
}) => (
  <>
    <AddEmployee
      show={modals.addEmployee}
      value={inputs}
      closeModal={closeModal}
      inputHandler={inputHandler}
      addEmployee={addEmployee}
      labels={text.modals.addEmployee}
      language={language}
    />
    <AddEmployee
      show={modals.editEmployee}
      value={inputs}
      closeModal={closeModal}
      inputHandler={inputHandler}
      addEmployee={editEmployee}
      labels={text.modals.editEmployee}
      language={language}
    />
    <AddProject
      show={modals.addProject}
      value={inputs}
      closeModal={closeModal}
      inputHandler={inputHandler}
      addProject={addProject}
      labels={text.modals.addProject}
      language={language}
    />
    <AddProject
      show={modals.editProject}
      value={inputs}
      closeModal={closeModal}
      inputHandler={inputHandler}
      addProject={editProject}
      labels={text.modals.editProject}
      language={language}
    />
    <AddHours
      show={modals.hours}
      value={inputs}
      closeModal={closeModal}
      inputHandler={inputHandler}
      addHours={addHours}
      labels={text.modals.addHours}
      language={language}
    />
    <Settings
      show={modals.settings}
      value={language}
      changeLanguage={languageInput}
      closeModal={closeModal}
    />
  </>
);

Modals.propTypes = {
  inputs: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
  language: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  addEmployee: PropTypes.func.isRequired,
  editEmployee: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
  editProject: PropTypes.func.isRequired,
  addHours: PropTypes.func.isRequired,
  languageInput: PropTypes.func.isRequired,
  modals: PropTypes.shape({
    addProject: PropTypes.bool,
    editProject: PropTypes.bool,
    addEmployee: PropTypes.bool,
    editEmployee: PropTypes.bool,
    hours: PropTypes.bool,
    settings: PropTypes.bool,
  }).isRequired,
  text: PropTypes.shape({
    modals: PropTypes.shape({
      addEmployee: PropTypes.object,
      editEmployee: PropTypes.object,
      addProject: PropTypes.object,
      editProject: PropTypes.object,
      addHours: PropTypes.object,
    }),
  }).isRequired,
};

export default Modals;
