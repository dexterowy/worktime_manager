import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import colors from '../../Utils/colors';

import Backdrop from './Backdrop';
import Modal from './Modal';
import Button from '../Button/Button';

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

const AddEmployee = ({
  show,
  value,
  closeModal,
  changeFirstName,
  changeLastName,
  changePhone,
  addEmployee,
}) => (
  <Backdrop show={show}>
    <Modal>
      <ModalInputs>
        <InputRow htmlFor="firstName">
          First name:
          <ModalInput
            type="text"
            name="firstName"
            value={value.firstName}
            onChange={changeFirstName}
          />
        </InputRow>
        <InputRow htmlFor="lastName">
          Last name:
          <ModalInput
            type="text"
            name="lastName"
            value={value.lastName}
            onChange={changeLastName}
          />
        </InputRow>
        <InputRow htmlFor="phone">
          Phone:
          <ModalInput
            type="text"
            name="phone"
            value={value.phone}
            onChange={changePhone}
          />
        </InputRow>
      </ModalInputs>
      <ModalButtons>
        <Button type="doit" label="Save" click={addEmployee} />
        <Button type="primary" label="Cancel" click={closeModal} />
      </ModalButtons>
    </Modal>
  </Backdrop>
);

AddEmployee.propTypes = {
  show: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object,
  changeFirstName: PropTypes.func,
  changeLastName: PropTypes.func,
  changePhone: PropTypes.func,
  closeModal: PropTypes.func,
  addEmployee: PropTypes.func,
};

AddEmployee.defaultProps = {
  value: {},
  changeFirstName: () => {},
  changePhone: () => {},
  changeLastName: () => {},
  closeModal: () => {},
  addEmployee: () => {},
};

export default AddEmployee;
