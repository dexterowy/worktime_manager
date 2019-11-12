import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import textContext from '../../context/textContext';

const DashboardHeader = styled.h2`
  text-align: center;
  margin: 10px;
`;

const Dashboard = () => {
  const { texts, language } = useContext(textContext);

  return <DashboardHeader>{texts.dashboard.header[language]}</DashboardHeader>;
};

// Dashboard.propTypes = {};

export default Dashboard;
