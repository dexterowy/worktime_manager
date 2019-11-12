import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import LangContext from '../../context/textContext';
import colors from '../../Utils/colors';

import menuIcon from '../../assets/icons/menu.svg';
import close from '../../assets/icons/x.svg';
import IconButton from '../IconButton/IconButton';

const NavbarWrapper = styled.div`
  background: ${colors.backgrounds.navbar};
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const Navbar = ({ toggleMenu, isOpen }) => {
  const { texts, language } = useContext(LangContext);

  const H1 = styled.h1`
    color: ${colors.fonts.light};
    font-family: sans-serif;
    text-align: center;
    width: calc(100% - 60px);
  `;

  const CornerBox = styled.div`
    width: 60px;
    height: 60px;
    background: ${colors.backgrounds.corner};
  `;
  return (
    <NavbarWrapper>
      <CornerBox>
        <IconButton icon={isOpen ? close : menuIcon} click={toggleMenu} />
      </CornerBox>
      <H1>{texts.appname[language]}</H1>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default withRouter(Navbar);
