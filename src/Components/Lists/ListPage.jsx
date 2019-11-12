import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import textContext from '../../context/textContext';

import Button from '../Button/Button';
import List from './List';

const ListPageHeader = styled.h2`
  text-align: center;
  margin: 10px 0 20px;
`;

const ButtonsLine = styled.div`
  display: flex;
  width: 100%;
`;

const ListPage = ({ type }) => {
  // eslint-disable-next-line object-curly-newline
  const {
    texts,
    language,
    database: { employees, projects },
  } = useContext(textContext);

  //   TEMP FUNCTION     DELETE THAT!!!!!
  // eslint-disable-next-line no-console
  const tmp = () => console.log('clicked!');

  const EmployeesButtons = (
    <>
      <Button
        type="doit"
        click={tmp}
        label={texts.employees.buttons.add[language]}
      />
      <Button
        type="primary"
        click={tmp}
        label={texts.employees.buttons.report[language]}
      />
    </>
  );

  const ProjectsButtons = (
    <Button
      type="doit"
      click={tmp}
      label={texts.projects.buttons.add[language]}
    />
  );
  return (
    <>
      <ListPageHeader>{texts[type].header[language]}</ListPageHeader>
      <ButtonsLine>
        {type === 'projects' ? ProjectsButtons : EmployeesButtons}
      </ButtonsLine>
      <List type={type} data={type === 'projects' ? projects : employees} />
    </>
  );
};

ListPage.propTypes = {
  type: PropTypes.oneOf(['employees', 'projects']).isRequired,
};

export default ListPage;
