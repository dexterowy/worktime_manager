import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../Utils/colors';

const Wrapper = styled.div`
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
`;

const MenuWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

MenuWrapper.propTypes = {};

export default MenuWrapper;
