import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../Utils/colors';

const ModalBox = styled.div`
  width: 500px;
  height: 500px;
  background: ${colors.backgrounds.modal};
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 60px;
  background: ${colors.backgrounds.navbar};
  color: ${colors.fonts.light};
  text-align: center;
  padding: 10px;
`;

const ModalMain = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 60px);
`;

const Modal = ({ children, header }) => (
  <ModalBox>
    <ModalHeader>
      <h1>{header}</h1>
    </ModalHeader>
    <ModalMain>{children}</ModalMain>
  </ModalBox>
);

Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  header: PropTypes.string.isRequired,
};

export default Modal;
