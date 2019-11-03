import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import textContext from '../../context/textContext';

import MainWrapper from '../../hoc/MainWrapper';

const DashboardHeader = styled.h2`
  text-align: center;
  margin: 10px;
`;

const Dashboard = () => {
  const { texts, language } = useContext(textContext);

  return (
    <MainWrapper>
      <DashboardHeader>{texts.dashboard.header[language]}</DashboardHeader>
    </MainWrapper>
  );
};

// Dashboard.propTypes = {};

export default Dashboard;
