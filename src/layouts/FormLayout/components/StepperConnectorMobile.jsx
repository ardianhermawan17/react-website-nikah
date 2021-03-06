import React from 'react';
import {
  StepConnector,
  withStyles,
} from "@material-ui/core";

const StepperConnectorMobile = withStyles((theme) => ({
  alternativeLabel: {
    top: 16,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      background: theme.palette.customNavbar.backgroundColor,
      boxShadow: theme.palette.customNavbar.neumorphismConnector,
    },
  },
  completed: {
    '& $line': {
      background: theme.palette.customNavbar.backgroundColor,
      boxShadow: theme.palette.customNavbar.neumorphismConnector,
    },
  },
  line: {
    height: 6,
    border: 0,
    background: theme.palette.customNavbar.backgroundColor,
    boxShadow: theme.palette.customNavbar.neumorphismConnector,
    borderRadius: 1,
  },
}), { withTheme: true } )(StepConnector);


export default StepperConnectorMobile;
