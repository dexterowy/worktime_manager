import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../Utils/colors';

const Button = ({ type, label, click }) => {
  let color = '';
  if (type === 'primary') color = colors.buttons.primary;
  else if (type === 'danger') color = colors.buttons.danger;
  else if (type === 'doit') color = colors.buttons.doit;

  const StyledButton = styled.button`
    width: 150px;
    height: 50px;
    border: 1px solid ${colors.backgrounds.navbar};
    border-radius: 5px;
    background: ${color};
    margin-right: 20px;
    font-size: 1em;
    color: ${colors.fonts.light};
    :hover {
      cursor: pointer;
    }
  `;

  return (
    <StyledButton onClick={click} type="button">
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'danger', 'doit']).isRequired,
};

export default Button;
