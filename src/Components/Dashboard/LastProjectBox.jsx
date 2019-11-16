/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import textContext from '../../context/textContext';
import colors from '../../Utils/colors';

import InfoRow from '../DetailsPage/InfoRow';

const LastProject = styled.div`
  background: ${colors.backgrounds.dashboardBox};
  box-shadow: 1px 0 5px ${colors.backgrounds.navbar};
  grid-column: 2/3;
  grid-row: 1/3;
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

const InfoSection = styled.div`
  height: 70%;
  padding: 20px 0;
  font-size: 1.1em;
  width: 100%;
`;

const HoursSection = styled.div`
  margin: 0 auto;
  height: 30%;
  padding: 30px;
  width: calc(100% - 40px);
  border-top: 1px solid ${colors.backgrounds.navbar};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8em;
`;

const StyledInfoRow = styled(InfoRow)`
  margin-bottom: 30px;
`;

const LastProjectBox = ({ lastProject }) => {
  const { texts, language } = useContext(textContext);

  return (
    <LastProject>
      <BoxHeader>{texts.dashboard.headers.lastProject[language]}</BoxHeader>
      <BoxContent>
        <InfoSection>
          <StyledInfoRow
            label={texts.details.projects.name[language]}
            data={lastProject.title}
          />
          <InfoRow
            label={texts.details.projects.desc[language]}
            data={lastProject.description}
          />
        </InfoSection>
        <HoursSection>
          <span>{texts.dashboard.lastProject.totalHours[language]}:</span>
          <span>{lastProject.totalHours}h</span>
        </HoursSection>
      </BoxContent>
    </LastProject>
  );
};

LastProjectBox.propTypes = {
  lastProject: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    totalHours: PropTypes.number,
  }).isRequired,
};

export default LastProjectBox;
