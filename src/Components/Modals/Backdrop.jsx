import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../Utils/colors';

const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${colors.backgrounds.backdrop};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Backdrop = ({ show, children }) => {
  return show ? <BackdropWrapper>{children}</BackdropWrapper> : null;
};

Backdrop.propTypes = {};

export default Backdrop;
