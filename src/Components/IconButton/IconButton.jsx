import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconButtonWrapper = styled.div`
  padding: 5px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;
const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;

const IconButton = ({ icon, click }) => (
  <IconButtonWrapper onClick={click}>
    <StyledImg src={icon} alt="" />
  </IconButtonWrapper>
);
IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  click: PropTypes.func,
};

IconButton.defaultProps = {
  click: () => {},
};

const checkProps = (prev, next) => {
  if (prev.icon !== next.icon) return true;
  return false;
};

export default memo(IconButton, checkProps);
