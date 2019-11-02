import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../Utils/colors';

const IconButton = ({ icon, menu, toggleMenu }) => {
  const IconButtonWrapper = styled.div`
    padding: 5px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${menu ? colors.backgrounds.corner : 'none'};

    :hover {
      cursor: pointer;
    }
  `;

  const StyledImg = styled.img`
    width: 40px;
    height: 40px;
  `;
  return (
    <IconButtonWrapper onClick={toggleMenu}>
      <StyledImg src={icon} alt="" />
    </IconButtonWrapper>
  );
};
IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  menu: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

IconButton.defaultProps = {
  toggleMenu: null,
  menu: null,
};
export default IconButton;
