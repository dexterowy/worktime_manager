import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../Utils/colors';

import infoSvg from '../../assets/icons/alert-circle.svg';
// import IconButton from '../IconButton/IconButton';

const StyledListItem = styled.tr`
  width: 100%;
  /* padding: 20px; */
  color: ${colors.backgrounds.navbar};
  font-size: 1em;
  border-bottom: 1px solid ${colors.backgrounds.navbar};
  transition: 0.2s ease-in-out;
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

// const Info = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 40%;
// `;

const ListItem = ({ id, name, lastname }) => (
  <StyledListItem>
    {/* <Info> */}
    <StyledData>{id}</StyledData>
    <StyledData>{name}</StyledData>
    {lastname !== '' ? <StyledData>{lastname}</StyledData> : null}
    {/* </Info> */}
    <StyledData>
      <Link to="/">
        <StyledIcon src={infoSvg} />
      </Link>
    </StyledData>
  </StyledListItem>
);

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};

ListItem.defaultProps = {
  lastname: '',
};

export default ListItem;
