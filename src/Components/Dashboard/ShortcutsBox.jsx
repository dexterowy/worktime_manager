import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import textContext from '../../context/textContext';
import colors from '../../Utils/colors';

import Button from '../Button/Button';

const Shortcuts = styled.div`
  background: ${colors.backgrounds.dashboardBox};
  box-shadow: 1px 0 5px ${colors.backgrounds.navbar};
  grid-column: 1/2;
  grid-row: 2/3;
  margin: 20px;
`;

const BoxHeader = styled.h2`
  color: ${colors.fonts.light};
  background: ${colors.backgrounds.navbar};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxContent = styled.div`
  width: 100%;
  height: calc(100% - 50px);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const StyledButtons = styled(Button)`
  && {
    margin: 0;
  }
`;

const ShortcutsBox = ({ openModal }) => {
  const { texts, language } = useContext(textContext);

  return (
    <Shortcuts>
      <BoxHeader>{texts.dashboard.headers.shortcuts[language]}</BoxHeader>
      <BoxContent>
        <ButtonsWrapper>
          <StyledButtons
            type="doit"
            click={() => openModal('addEmployee')}
            label={texts.employees.buttons.add[language]}
          />
          <StyledButtons
            type="doit"
            click={() => openModal('addProject')}
            label={texts.projects.buttons.add[language]}
          />
        </ButtonsWrapper>
      </BoxContent>
    </Shortcuts>
  );
};

ShortcutsBox.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default ShortcutsBox;
