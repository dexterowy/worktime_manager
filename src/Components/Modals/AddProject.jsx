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
  height: 100px;
  display: flex;
  margin: 20px 0;
  font-size: 1.2em;
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
  changeTitle,
  changeDesc,
  closeModal,
  addProject,
  show,
}) => {
  return (
    <Backdrop show={show}>
      <Modal>
        <ModalInputs>
          <InputRow htmlFor="title">
            Title:
            <ModalInput
              type="text"
              name="title"
              value={value.title}
              onChange={changeTitle}
            />
          </InputRow>
          <DescRow htmlFor="desc">
            Description:
            <DescInput name="desc" value={value.desc} onChange={changeDesc} />
          </DescRow>
        </ModalInputs>
        <ModalButtons>
          <Button type="doit" click={addProject} label="Save" />
          <Button type="primary" click={closeModal} label="Cancel" />
        </ModalButtons>
      </Modal>
    </Backdrop>
  );
};

AddProject.propTypes = {};

export default AddProject;
