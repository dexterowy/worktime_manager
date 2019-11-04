import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import textContext from '../../context/textContext';

import colors from '../../Utils/colors';

const StyledListItem = styled.tr`
  /* width: 100%; */
  /* padding: 20px; */
  color: ${colors.backgrounds.navbar};
  font-size: 1em;
  border-bottom: 1px solid ${colors.backgrounds.navbar};
  /* transition: 0.2s ease-in-out; */
  display: flex;
  justify-content: flex-start;
`;

// const Info = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 40%;
// `;

const StyledHeader = styled.th`
  width: 150px;
  padding: 15px;
  text-align: left;
`;

const ListHeader = ({ type }) => {
  const { texts, language } = useContext(textContext);

  const ProjectsHeader = (
    <>
      <StyledHeader>{texts.projects.table.headers.id[language]}</StyledHeader>
      <StyledHeader>{texts.projects.table.headers.name[language]}</StyledHeader>
      {/* <StyledHeader /> */}
    </>
  );

  const EmployeesHeader = (
    <>
      <StyledHeader>{texts.employees.table.headers.id[language]}</StyledHeader>
      <StyledHeader>
        {texts.employees.table.headers.firstName[language]}
      </StyledHeader>
      <StyledHeader>
        {texts.employees.table.headers.lastName[language]}
      </StyledHeader>
    </>
  );

  return (
    <thead>
      <StyledListItem>
        {type === 'projects' ? ProjectsHeader : EmployeesHeader}
      </StyledListItem>
    </thead>
  );
};

ListHeader.propTypes = {
  type: PropTypes.oneOf(['projects', 'employees']).isRequired,
};

export default ListHeader;
