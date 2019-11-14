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
  if (show) return <BackdropWrapper>{children}</BackdropWrapper>;
  return null;
};

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Backdrop;
