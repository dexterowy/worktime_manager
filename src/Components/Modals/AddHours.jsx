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
  labels,
  value,
  language,
  closeModal,
  inputHandler,
  addHours,
}) => (
  <Backdrop show={show}>
    <Modal header={labels.header[language]}>
      <ModalInputs>
        <InputRow htmlFor="firstName">
          {labels.labels.employeeId[language]}
          :
          <ModalInput
            type="number"
            name="employeeId"
            value={value.idEmployee}
            onChange={(e) => inputHandler(e, 'idEmployee')}
          />
        </InputRow>
        <InputRow htmlFor="firstName">
          {labels.labels.hours[language]}
          :
          <ModalInput
            type="number"
            name="employeeId"
            value={value.hours}
            onChange={(e) => inputHandler(e, 'hours')}
          />
        </InputRow>
        <ModalWarning>{labels.warning[language]}</ModalWarning>
      </ModalInputs>
      <ModalButtons>
        <Button
          type="doit"
          label={labels.buttons.save[language]}
          click={addHours}
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

AddHours.propTypes = {
  show: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object,
  inputHandler: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
  addHours: PropTypes.func,
  labels: PropTypes.shape({
    labels: PropTypes.shape({
      employeeId: PropTypes.shape({
        pol: PropTypes.string,
        en: PropTypes.string,
      }),
      hours: PropTypes.shape({
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
    warning: PropTypes.shape({
      pol: PropTypes.string,
      en: PropTypes.string,
    }),
  }).isRequired,
  language: PropTypes.string.isRequired,
};

AddHours.defaultProps = {
  value: {},
  closeModal: () => {},
  addHours: () => {},
};

export default AddHours;
