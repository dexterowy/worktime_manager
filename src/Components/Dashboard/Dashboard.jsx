import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import textContext from '../../context/textContext';

import ShortcutsBox from './ShortcutsBox';
import TopListBox from './TopListBox';
import LastProjectBox from './LastProjectBox';

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 70% 30%;
  /* grid-column-gap: 20px;
  grid-row-gap: 20px; */
  height: 100%;
  width: 100%;
`;

const Dashboard = ({ openModal, database: { projects, employees } }) => {
  // const { texts, language } = useContext(textContext);

  const fullProjects = projects.map((el) => {
    let totalHours = 0;
    employees.forEach((emp) => {
      emp.projects.forEach((project) => {
        if (project.id === el.id) {
          totalHours += project.hours;
        }
      });
    });

    return {
      id: el.id,
      title: el.title,
      description: el.description,
      totalHours,
    };
  });

  const lastProject = fullProjects[fullProjects.length - 1];

  fullProjects.sort((a, b) => {
    return b.totalHours - a.totalHours;
  });

  return (
    <DashboardWrapper>
      <TopListBox top5={fullProjects.slice(0, 5)} />
      <ShortcutsBox openModal={openModal} />
      <LastProjectBox lastProject={lastProject} />
    </DashboardWrapper>
  );
};

Dashboard.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Dashboard;
