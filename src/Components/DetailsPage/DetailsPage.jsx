import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import textContext from '../../context/textContext';
import colors from '../../Utils/colors';
import InfoRow from './InfoRow';
import List from '../Lists/List';
import Button from '../Button/Button';

const PageHeader = styled.h2`
  text-align: center;
  font-size: 1.8em;
  color: ${colors.backgrounds.navbar};
  margin: 20px 0 20px;
`;

const DetailsHeader = styled.h3`
  text-align: left;
  font-size: 1.5em;
  color: ${colors.backgrounds.navbar};
  margin: 20px 0 20px;
`;

const InfoWrapper = styled.div`
  font-size: 1.2em;
  width: 50%;
`;

const ButtonsLine = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0;
`;

const DetailsPage = (props) => {
  const { texts, language, database } = useContext(textContext);
  // eslint-disable-next-line object-curly-newline
  const {
    type,
    match,
    deleteEmployee,
    deleteProject,
    loadEmployeeData,
    loadProjectData,
    openHoursModal,
  } = props;
  // Extract info from database
  const info = database[
    type === 'projectsDetails' ? 'projects' : 'employees'
  ].find((el) => el.id === parseInt(match.params.id, 10));
  // console.log(info);

  let Details;
  let listItems = {};
  if (type === 'projectsDetails') {
    Details = (
      <>
        <InfoRow label={texts.details.projects.id[language]} data={info.id} />
        <InfoRow
          label={texts.details.projects.name[language]}
          data={info.title}
        />
        <InfoRow
          label={texts.details.projects.desc[language]}
          data={info.description}
        />
      </>
    );

    // Find and match related projects for this person
    listItems = database.employees
      .filter((person) => {
        let matchPerson = false;
        person.projects.forEach((el) => {
          if (info.id === el.id) {
            matchPerson = true;
          }
        });
        return matchPerson;
      })
      .map((person) => {
        const project = person.projects.filter((p) => p.id === info.id);
        return {
          ...person,
          hours: project[0].hours,
        };
      });
    // console.log(listItems);
  } else {
    Details = (
      <>
        <InfoRow label={texts.details.employees.id[language]} data={info.id} />
        <InfoRow
          label={texts.details.employees.firstName[language]}
          data={info.firstName}
        />
        <InfoRow
          label={texts.details.employees.lastName[language]}
          data={info.lastName}
        />
        <InfoRow
          label={texts.details.employees.phone[language]}
          data={info.phone}
        />
      </>
    );
    //  Find and match persons for this project
    listItems = info.projects.map((el) => ({
      ...database.projects.find((item) => el.id === item.id),
      hours: el.hours,
    }));

    // console.log(listItems);
  }

  //  TO REMOVE!!!1
  const tmp = () => {
    // console.log('clicked!');
  };
  const EmployeeButtons = (
    <ButtonsLine>
      <Button
        type="primary"
        click={() => loadEmployeeData(info.id)}
        label={texts.details.employees.buttons.edit[language]}
      />
      <Button
        type="danger"
        click={() => deleteEmployee(info.id)}
        label={texts.details.employees.buttons.delete[language]}
      />
    </ButtonsLine>
  );

  const ProjectButtons = (
    <ButtonsLine>
      <Button
        type="doit"
        click={() => openHoursModal('hours')}
        label={texts.details.projects.buttons.hours[language]}
      />
      <Button
        type="primary"
        click={() => loadProjectData(info.id)}
        label={texts.details.projects.buttons.edit[language]}
      />
      <Button
        type="danger"
        click={() => deleteProject(info.id)}
        label={texts.details.projects.buttons.delete[language]}
      />
      <Button
        type="primary"
        click={tmp}
        label={texts.details.projects.buttons.report[language]}
      />
    </ButtonsLine>
  );

  return (
    <div>
      <PageHeader>
        {type === 'projectsDetails'
          ? texts.details.detailsType.project[language]
          : texts.details.detailsType.employee[language]}
      </PageHeader>
      <DetailsHeader>{texts.details.header[language]}</DetailsHeader>
      <InfoWrapper>{Details}</InfoWrapper>
      {type === 'projectsDetails' ? ProjectButtons : EmployeeButtons}
      <DetailsHeader>
        {type === 'projectsDetails'
          ? texts.details.listsType.project[language]
          : texts.details.listsType.employee[language]}
      </DetailsHeader>
      <List type={type} data={listItems} />
    </div>
  );
};

DetailsPage.propTypes = {
  type: PropTypes.oneOf(['projectsDetails', 'employeesDetails']).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  deleteEmployee: PropTypes.func,
  deleteProject: PropTypes.func,
  loadEmployeeData: PropTypes.func,
  loadProjectData: PropTypes.func,
};

DetailsPage.defaultProps = {
  deleteEmployee: () => {},
  deleteProject: () => {},
  loadEmployeeData: () => {},
  loadProjectData: () => {},
};

export default withRouter(DetailsPage);
