// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';

// Material-UI Dependencies
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// Component Definition
const TooltippedButton = (props) => {
  const {
    ariaLabel,
    icon,
    onClick,
    tooltip,
  } = props;

  return (
    <Tooltip title={tooltip}>
      <IconButton
        aria-label={ariaLabel}
        color="inherit"
        edge="end"
        onClick={onClick}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};

// Prop Validations
TooltippedButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  tooltip: PropTypes.string.isRequired,
};

export default TooltippedButton;
