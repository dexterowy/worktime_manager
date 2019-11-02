import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import colors from '../../Utils/colors';
import IconButton from '../IconButton/IconButton';
import dashboard from '../../assets/icons/dashboard.svg';
import file from '../../assets/icons/file.svg';
import user from '../../assets/icons/user.svg';
import settings from '../../assets/icons/settings.svg';

const showAnimation = keyframes`
    from {
        transform: translateX(-60px);
    }
    
    to {
        transform: translateX(0px);
    }
`;

const hideAnimation = keyframes`
    from {
        transform: translateX(0px);
    }
    
    to {
        transform: translateX(-60px);
    }
`;

const IconsGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = ({ toggled, defaultPosition }) => {
  const MenuWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 60px;
    left: 0;
    width: 60px;
    height: calc(100vh - 60px);
    background: ${colors.backgrounds.navbar};

    /* Menu toggle animation */
    /* 'defaultPosition' prevent to animate on first load */
    animation: ${toggled ? showAnimation : hideAnimation}
      ${defaultPosition ? '0s' : '0.1s'} ease forwards;
  `;

  return (
    <MenuWrapper>
      <IconsGroup>
        <IconButton icon={dashboard} />
        <IconButton icon={file} />
        <IconButton icon={user} />
      </IconsGroup>
      <IconsGroup>
        <IconButton icon={settings} />
      </IconsGroup>
    </MenuWrapper>
  );
};

Menu.propTypes = {
  toggled: PropTypes.bool.isRequired,
  defaultPosition: PropTypes.bool.isRequired,
};

export default Menu;
