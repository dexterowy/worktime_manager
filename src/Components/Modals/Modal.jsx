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

const Modal = (props) => (
  <ModalBox>
    <ModalHeader>
      <h1>Modal Header</h1>
    </ModalHeader>
    <ModalMain>{props.children}</ModalMain>
  </ModalBox>
);

Modal.propTypes = {};

export default Modal;
