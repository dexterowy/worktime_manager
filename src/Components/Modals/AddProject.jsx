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

const DescRow = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  font-size: 1.2em;
  padding: 15px 30px;
`;

const DescInput = styled.textarea`
  height: 200px;
  display: flex;
  margin: 20px 0;
  font-size: 1em;
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

const AddProject = ({
  value,
  labels,
  language,
  changeTitle,
  changeDesc,
  closeModal,
  addProject,
  show,
}) => (
  <Backdrop show={show}>
    <Modal header={labels.header[language]}>
      <ModalInputs>
        <InputRow htmlFor="title">
          {labels.labels.title[language]}
          :
          <ModalInput
            type="text"
            name="title"
            value={value.title}
            onChange={changeTitle}
          />
        </InputRow>
        <DescRow htmlFor="desc">
          {labels.labels.desc[language]}
          :
          <DescInput name="desc" value={value.desc} onChange={changeDesc} />
        </DescRow>
      </ModalInputs>
      <ModalButtons>
        <Button
          type="doit"
          click={addProject}
          label={labels.buttons.save[language]}
        />
        <Button
          type="primary"
          click={closeModal}
          label={labels.buttons.cancel[language]}
        />
      </ModalButtons>
    </Modal>
  </Backdrop>
);

AddProject.propTypes = {
  show: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object,
  changeTitle: PropTypes.func,
  changeDesc: PropTypes.func,
  closeModal: PropTypes.func,
  addProject: PropTypes.func,
  labels: PropTypes.shape({
    labels: PropTypes.shape({
      title: PropTypes.shape({
        pol: PropTypes.string,
        en: PropTypes.string,
      }),
      desc: PropTypes.shape({
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

AddProject.defaultProps = {
  value: {},
  changeTitle: () => {},
  changeDesc: () => {},
  closeModal: () => {},
  addProject: () => {},
};

export default AddProject;
