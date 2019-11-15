/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Modal from './Modal';
import Button from '../Button/Button';
import Backdrop from './Backdrop';
import colors from '../../Utils/colors';

const { backgrounds } = colors;

const ModalInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  padding: 15px 30px;
`;

const ModalButtons = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: center;
`;

const SelectBox = styled.div`
  height: 40px;
  width: 80px;
  border-radius: 5px;
  background: ${backgrounds.app};
  display: flex;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }
`;

const SelectItem = styled.div`
  height: 100%;
  width: 40px;
  background: ${({ value }) =>
    value === 'pol' ? backgrounds.corner : backgrounds.settingsBox};
  border-radius: 5px 0 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectItemRight = styled(SelectItem)`
  border-radius: 0 5px 5px 0;
  background: ${({ value }) =>
    value === 'en' ? backgrounds.corner : backgrounds.settingsBox};
`;

const Settings = ({ show, value, changeLanguage, closeModal }) => (
  <Backdrop show={show}>
    <Modal header="Settings">
      <ModalInputs>
        <InputRow>
          <span>Language:</span>
          <SelectBox>
            <SelectItem value={value} onClick={() => changeLanguage('pol')}>
              PL
            </SelectItem>
            <SelectItemRight value={value} onClick={() => changeLanguage('en')}>
              EN
            </SelectItemRight>
          </SelectBox>
        </InputRow>
      </ModalInputs>
      <ModalButtons>
        <Button type="primary" label="Done" click={closeModal} />
      </ModalButtons>
    </Modal>
  </Backdrop>
);

Settings.propTypes = {
  show: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Settings;
