import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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
  animation: ${(props) => (props.toggled ? showAnimation : hideAnimation)}
    ${(props) => (props.defaultPosition ? '0s' : '0.1s')} ease forwards;
`;

const Menu = ({ toggled, defaultPosition, openModal }) => (
  <MenuWrapper toggled={toggled} defaultPosition={defaultPosition}>
    <IconsGroup>
      <Link to="/">
        <IconButton icon={dashboard} />
      </Link>
      <Link to="/projects">
        <IconButton icon={file} />
      </Link>
      <Link to="/employees">
        <IconButton icon={user} />
      </Link>
    </IconsGroup>
    <IconsGroup>
      <IconButton icon={settings} click={() => openModal('settings')} />
    </IconsGroup>
  </MenuWrapper>
);

Menu.propTypes = {
  toggled: PropTypes.bool.isRequired,
  defaultPosition: PropTypes.bool.isRequired,

  // TEST PROP
  openModal: PropTypes.func.isRequired,
};

const checkProps = (prev, next) => {
  if (
    // eslint-disable-next-line operator-linebreak
    prev.toggled === next.toggled &&
    prev.defaultPosition === next.defaultPosition
  ) {
    return true;
  }
  return false;
};

export default memo(Menu, checkProps);
