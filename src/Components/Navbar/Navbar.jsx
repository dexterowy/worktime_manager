import React from 'react';
import styled from 'styled-components';

import colors from '../../Utils/colors';
import ui from '../../Localization/ui';

const NavbarWrapper = styled.div`
  background: ${colors.backgrounds.navbar};
  width: 100%;
  padding: 15px;
  text-align: center;
`;

const Navbar = props => {
  const H1 = styled.h1`
    color: ${colors.fonts.light};
    font-family: sans-serif;
  `;

  return (
    <NavbarWrapper>
      <H1>{ui.header.dashboard.pol}</H1>
    </NavbarWrapper>
  );
};

export default Navbar;
