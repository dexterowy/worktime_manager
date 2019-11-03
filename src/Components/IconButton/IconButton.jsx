import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconButton = ({ icon, click }) => {
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
  return (
    <IconButtonWrapper onClick={click}>
      <StyledImg src={icon} alt="" />
    </IconButtonWrapper>
  );
};
IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  click: PropTypes.func,
};

IconButton.defaultProps = {
  click: () => {},
};

export default IconButton;
