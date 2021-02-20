import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { SnackbarProvider } from 'notistack';
import {
  jssPreset,
  createStyles,
  makeStyles,
  ThemeProvider,
  StylesProvider
} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import Routes from "./Routes";
import Auth from "./components/Auth";
import ScrollReset from './components/ScrollReset';
import useSettingsContext from "./hooks/useSettingsContext";
import { createTheme } from "./theme";

const history = createBrowserHistory();
const jss = create({plugins: [...jssPreset().plugins, rtl()]})

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      height: '100%',
      width: '100%'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
  }
}))

function App() {
  useStyles();

  const { settings } = useSettingsContext();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <StylesProvider jss={jss}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <SnackbarProvider maxSnack={1}>
            <Router history={history}>
              <Auth>
                <ScrollReset />
                <Routes />
              </Auth>
            </Router>
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
