import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import textContext from '../../context/textContext';

import MainWrapper from '../../hoc/MainWrapper';

const ListHeader = styled.h2`
  text-align: center;
  margin: 10px;
`;

const List = ({ type }) => {
  const { texts, language } = useContext(textContext);

  return (
    <MainWrapper>
      <ListHeader>{texts[type].header[language]}</ListHeader>
    </MainWrapper>
  );
};

List.propTypes = {
  type: PropTypes.oneOf(['employee', 'projects']).isRequired,
};

export default List;
