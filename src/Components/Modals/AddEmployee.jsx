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
  labels,
  language,
  closeModal,
  inputHandler,
  addEmployee,
}) => (
  <Backdrop show={show}>
    <Modal header={labels.header[language]}>
      <ModalInputs>
        <InputRow htmlFor="firstName">
          {labels.labels.firstName[language]}
          :
          <ModalInput
            type="text"
            name="firstName"
            value={value.firstName}
            onChange={(e) => inputHandler(e, 'firstName')}
          />
        </InputRow>
        <InputRow htmlFor="lastName">
          {labels.labels.lastName[language]}
          :
          <ModalInput
            type="text"
            name="lastName"
            value={value.lastName}
            onChange={(e) => inputHandler(e, 'lastName')}
          />
        </InputRow>
        <InputRow htmlFor="phone">
          {labels.labels.phone[language]}
          :
          <ModalInput
            type="text"
            name="phone"
            value={value.phone}
            onChange={(e) => inputHandler(e, 'phone')}
          />
        </InputRow>
      </ModalInputs>
      <ModalButtons>
        <Button
          type="doit"
          label={labels.buttons.save[language]}
          click={addEmployee}
        />
        <Button
          type="primary"
          label={labels.buttons.cancel[language]}
          click={closeModal}
        />
      </ModalButtons>
    </Modal>
  </Backdrop>
);

AddEmployee.propTypes = {
  show: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object,
  inputHandler: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
  addEmployee: PropTypes.func,
  labels: PropTypes.shape({
    labels: PropTypes.shape({
      firstName: PropTypes.shape({
        pol: PropTypes.string,
        en: PropTypes.string,
      }),
      lastName: PropTypes.shape({
        pol: PropTypes.string,
        en: PropTypes.string,
      }),
      phone: PropTypes.shape({
        pol: PropTypes.string,
        en: PropTypes.string,
      }),
    }),
    header: PropTypes.shape({
      pol: PropTypes.string,
      en: PropTypes.string,
    }),
    buttons: PropTypes.shape({
      save: PropTypes.shape({
        pol: PropTypes.string,
        en: PropTypes.string,
      }),
      cancel: PropTypes.shape({
        pol: PropTypes.string,
        en: PropTypes.string,
      }),
    }),
  }).isRequired,
  language: PropTypes.string.isRequired,
};

AddEmployee.defaultProps = {
  value: {},
  closeModal: () => {},
  addEmployee: () => {},
};

export default AddEmployee;
