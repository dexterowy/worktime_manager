import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import colors from '../../Utils/colors';

import infoSvg from '../../assets/icons/alert-circle.svg';
// import IconButton from '../IconButton/IconButton';

const StyledListItem = styled.tr`
  width: 100%;
  /* padding: 20px; */
  color: ${colors.backgrounds.navbar};
  font-size: 1em;
  border-bottom: 1px solid ${colors.backgrounds.navbar};
  transition: 0.1s linear;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  /* text-align: center; */

  :hover {
    background: ${colors.backgrounds.hover};
  }
`;

const StyledData = styled.td`
  width: 150px;
  padding: 15px;

  :last-of-type {
    width: auto;
    margin-left: auto;
  }
`;

const StyledIcon = styled.img`
  width: auto;
  fill: ${colors.backgrounds.navbar};
  height: auto;
  visibility: hidden;

  ${StyledListItem}:hover & {
    visibility: visible;
  }
`;

// eslint-disable-next-line object-curly-newline
const ListItem = ({
  type,
  id,
  name,
  lastName,
  hours,
  location: { pathname },
}) => {
  let styledData;
  if (type === 'projects') {
    styledData = (
      <>
        <StyledData>{id}</StyledData>
        <StyledData>{name}</StyledData>
        <StyledData>
          <Link to={`${pathname}/${id}`}>
            <StyledIcon src={infoSvg} />
          </Link>
        </StyledData>
      </>
    );
  } else if (type === 'employees') {
    styledData = (
      <>
        <StyledData>{id}</StyledData>
        <StyledData>{name}</StyledData>
        <StyledData>{lastName}</StyledData>
        <StyledData>
          <Link to={`${pathname}/${id}`}>
            <StyledIcon src={infoSvg} />
          </Link>
        </StyledData>
      </>
    );
  } else if (type === 'projectsDetails') {
    styledData = (
      <>
        <StyledData>{id}</StyledData>
        <StyledData>{name}</StyledData>
        <StyledData>{lastName}</StyledData>
        <StyledData>{hours}</StyledData>
        <StyledData>
          <Link to={`/employees/${id}`}>
            <StyledIcon src={infoSvg} />
          </Link>
        </StyledData>
      </>
    );
  } else {
    styledData = (
      <>
        <StyledData>{id}</StyledData>
        <StyledData>{name}</StyledData>
        <StyledData>{hours}</StyledData>
        <StyledData>
          <Link to={`/projects/${id}`}>
            <StyledIcon src={infoSvg} />
          </Link>
        </StyledData>
      </>
    );
  }

  return (
    <StyledListItem>
      {/* <Info>
      <StyledData>{id}</StyledData>
      <StyledData>{name}</StyledData>
      {lastname !== '' ? <StyledData>{lastname}</StyledData> : null}
      <StyledData>
        <Link to={`${pathname}/${id}`}>
          <StyledIcon src={infoSvg} />
        </Link>
      </StyledData> */}
      {styledData}
    </StyledListItem>
  );
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  type: PropTypes.oneOf([
    'projects',
    'employees',
    'projectsDetails',
    'employeesDetails',
  ]).isRequired,
  hours: PropTypes.number,
};

ListItem.defaultProps = {
  lastName: '',
  hours: 0,
};

export default withRouter(ListItem);
