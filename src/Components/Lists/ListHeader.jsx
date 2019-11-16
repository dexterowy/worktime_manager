import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import textContext from '../../context/textContext';

import colors from '../../Utils/colors';

const StyledListItem = styled.tr`
  color: ${colors.backgrounds.navbar};
  font-size: 1em;
  border-bottom: 1px solid ${colors.backgrounds.navbar};
  display: flex;
  justify-content: flex-start;
`;

const StyledHeader = styled.th`
  width: 150px;
  padding: 15px;
  text-align: left;
`;

const ListHeader = ({ type }) => {
  const { texts, language } = useContext(textContext);

  let Header;
  if (type === 'projects') {
    Header = (
      <>
        <StyledHeader>{texts.projects.table.headers.id[language]}</StyledHeader>
        <StyledHeader>
          {texts.projects.table.headers.name[language]}
        </StyledHeader>
      </>
    );
  } else if (type === 'employees') {
    Header = (
      <>
        <StyledHeader>
          {texts.employees.table.headers.id[language]}
        </StyledHeader>
        <StyledHeader>
          {texts.employees.table.headers.firstName[language]}
        </StyledHeader>
        <StyledHeader>
          {texts.employees.table.headers.lastName[language]}
        </StyledHeader>
      </>
    );
  } else if (type === 'employeesDetails') {
    Header = (
      <>
        <StyledHeader>
          {texts.details.employees.listHeader.id[language]}
        </StyledHeader>
        <StyledHeader>
          {texts.details.employees.listHeader.name[language]}
        </StyledHeader>
        <StyledHeader>
          {texts.details.employees.listHeader.hours[language]}
        </StyledHeader>
      </>
    );
  } else if (type === 'projectsDetails') {
    Header = (
      <>
        <StyledHeader>
          {texts.details.projects.listHeader.id[language]}
        </StyledHeader>
        <StyledHeader>
          {texts.details.projects.listHeader.firstName[language]}
        </StyledHeader>
        <StyledHeader>
          {texts.details.projects.listHeader.lastName[language]}
        </StyledHeader>
        <StyledHeader>
          {texts.details.projects.listHeader.hours[language]}
        </StyledHeader>
      </>
    );
  }

  return (
    <thead>
      <StyledListItem>{Header}</StyledListItem>
    </thead>
  );
};

ListHeader.propTypes = {
  type: PropTypes.oneOf([
    'projects',
    'employees',
    'projectsDetails',
    'employeesDetails',
  ]).isRequired,
};

export default ListHeader;
