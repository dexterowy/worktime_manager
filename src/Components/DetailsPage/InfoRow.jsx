import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RowWrapper = styled.p`
  margin: 15px 30px;
`;

const InfoRow = ({ label, data, className }) => (
  <RowWrapper className={className}>
    <b>{String(label).concat(': ')}</b>
    {data}
  </RowWrapper>
);

InfoRow.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

InfoRow.defaultProps = {
  className: '',
};

export default InfoRow;
