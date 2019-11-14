import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import colors from '../../Utils/colors';

import Backdrop from './Backdrop';
import Modal from './Modal';
import Button from '../Button/Button';
import colors from '../../Utils/colors';

const InputRow = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  padding: 15px 30px;
`;

const ModalInput = styled.input`
  width: 50%;
  font-size: 1em;
  padding: 2px;
`;

const ModalInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalButtons = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const ModalWarning = styled.p`
  width: 90;
  text-align: center;
  color: ${colors.buttons.danger};
  font-size: 1em;
  padding-top: 30px;
`;

const AddHours = ({
  show,
  value,
  closeModal,
  changeIdEmployee,
  changeHours,
  addHours,
}) => (
  <Backdrop show={show}>
    <Modal>
      <ModalInputs>
        <InputRow htmlFor="firstName">
          Employee ID:
          <ModalInput
            type="number"
            name="employeeId"
            value={value.idEmployee}
            onChange={changeIdEmployee}
          />
        </InputRow>
        <InputRow htmlFor="firstName">
          Hours:
          <ModalInput
            type="number"
            name="employeeId"
            value={value.hours}
            onChange={changeHours}
          />
        </InputRow>
        <ModalWarning>
          If employee has some hours in this project, it will be overwritten!
        </ModalWarning>
      </ModalInputs>
      <ModalButtons>
        <Button type="doit" label="Save" click={addHours} />
        <Button type="primary" label="Cancel" click={closeModal} />
      </ModalButtons>
    </Modal>
  </Backdrop>
);

AddHours.propTypes = {
  show: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object,
  changeHours: PropTypes.func,
  changeIdEmployee: PropTypes.func,
  closeModal: PropTypes.func,
  addHours: PropTypes.func,
};

AddHours.defaultProps = {
  value: {},
  changeHours: () => {},
  changeIdEmployee: () => {},
  closeModal: () => {},
  addHours: () => {},
};

export default AddHours;
