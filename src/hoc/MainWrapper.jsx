import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../Utils/colors';

const ContentWrapper = styled.div`
  margin-left: 60px;
  width: 100%;
  min-height: calc(100vh - 60px);
  background: ${colors.backgrounds.app};
  padding: 30px;
  font-family: sans-serif;
`;

const mainWrapper = ({ children }) => (
  <ContentWrapper>{children}</ContentWrapper>
);

mainWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default mainWrapper;
