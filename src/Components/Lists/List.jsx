/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListItem from './ListItem';
import ListHeader from './ListHeader';

const ListWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 40px;
  table-layout: fixed;
  /* text-align: center; */
`;

const StyledList = styled.tbody`
  list-style: none;
  width: 100%;
`;

const List = ({ type, data }) => (
  <ListWrapper>
    <ListHeader type={type} />
    <StyledList>
      {data.map(({ id, firstName, lastName, title, hours }) => {
        if (type === 'projects') {
          return <ListItem type={type} id={id} name={title} key={id} />;
        }
        if (type === 'employees') {
          return (
            <ListItem
              type={type}
              id={id}
              name={firstName}
              lastName={lastName}
              key={id}
            />
          );
        }
        if (type === 'projectsDetails') {
          return (
            <ListItem
              type={type}
              id={id}
              name={firstName}
              lastName={lastName}
              hours={hours}
              key={id}
            />
          );
        }
        return (
          <ListItem type={type} id={id} name={title} hours={hours} key={id} />
        );
      })}
    </StyledList>
  </ListWrapper>
);

List.propTypes = {
  type: PropTypes.oneOf([
    'projects',
    'employees',
    'projectsDetails',
    'employeesDetails',
  ]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default List;
