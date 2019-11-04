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
      {data.map(({ id, firstName, lastName, name }) => {
        if (type === 'projects') {
          return <ListItem id={id} name={name} key={id} />;
        }
        return (
          <ListItem id={id} name={firstName} lastname={lastName} key={id} />
        );
      })}
    </StyledList>
  </ListWrapper>
);

List.propTypes = {
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default List;
