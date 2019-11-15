/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import textContext from '../../context/textContext';
import colors from '../../Utils/colors';

const TopList = styled.div`
  background: ${colors.backgrounds.dashboardBox};
  box-shadow: 1px 0 5px ${colors.backgrounds.navbar};
  grid-column: 1/2;
  grid-row: 1/2;
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

const BoxContent = styled.ol`
  width: 100%;
  height: calc(100% - 50px);
  list-style: none;
  padding: 20px;
  color: ${colors.fonts.dark};
`;

const ListItem = styled.li`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid ${colors.backgrounds.navbar};
  display: flex;
  justify-content: space-between;
`;

const TopListBox = ({ top5 }) => {
  const { texts, language } = useContext(textContext);

  return (
    <TopList>
      <BoxHeader>{texts.dashboard.headers.topList[language]}</BoxHeader>
      <BoxContent>
        {top5.map((el, index) => (
          <ListItem key={el.id}>
            <span>
              {index + 1}.{el.title}
            </span>
            <span>{el.totalHours}h</span>
          </ListItem>
        ))}
      </BoxContent>
    </TopList>
  );
};

TopListBox.propTypes = {
  top5: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      totalHours: PropTypes.number,
    }),
  ).isRequired,
};

export default TopListBox;
