import React from 'react';
import {
    StepConnector,
    withStyles,
} from "@material-ui/core";

const StepperConnectorDesktop = withStyles((theme) => ({
  alternativeLabel: {
    top: -76,
    left: 'calc(-50% + 24px)',
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
    width: 6,
    height: 68,
    border: 0,
    background: theme.palette.customNavbar.backgroundColor,
    boxShadow: theme.palette.customNavbar.neumorphismConnector,
    borderRadius: 1,
  },
}), { withTheme: true } )(StepConnector);


export default StepperConnectorDesktop;
