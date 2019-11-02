import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../Utils/colors';
import ui from '../../Localization/ui';

import menuIcon from '../../assets/icons/menu.svg';
import IconButton from '../IconButton/IconButton';

const NavbarWrapper = styled.div`
  background: ${colors.backgrounds.navbar};
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
`;

const Navbar = ({ toggleMenu }) => {
  const H1 = styled.h1`
    color: ${colors.fonts.light};
    font-family: sans-serif;
    text-align: center;
    width: calc(100% - 60px);
  `;

  return (
    <NavbarWrapper>
      <IconButton menu icon={menuIcon} toggleMenu={toggleMenu} />
      <H1>{ui.header.dashboard.pol}</H1>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Navbar;
