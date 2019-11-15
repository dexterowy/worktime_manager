import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../Utils/colors';

// let color = '';
// if (type === 'primary') color = colors.buttons.primary;
// else if (type === 'danger') color = colors.buttons.danger;
// else if (type === 'doit') color = colors.buttons.doit;

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid ${colors.backgrounds.navbar};
  border-radius: 5px;
  background: ${(props) => colors.buttons[props.bg]};
  margin-right: 20px;
  font-size: 1em;
  color: ${colors.fonts.light};
  box-shadow: 1px 1px 3px ${colors.backgrounds.navbar};
  :hover {
    cursor: pointer;
  }
`;

const Button = ({ type, label, click, className }) => (
  <StyledButton className={className} onClick={click} bg={type} type="button">
    {label}
  </StyledButton>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'danger', 'doit']).isRequired,
};

export default Button;
