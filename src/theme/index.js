import _ from 'lodash';
import {
  colors,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core";
import { THEMES } from '../constants';
import typography from "./typography";
import {
  softShadows
} from "./shadows";

const baseConfig = {
  direction : 'ltr',
  typography,
  overrides: {
    MuiLinearProgress: {
      root : {
        borderRadius : 3,
        overflow : 'hidden'
      }
    },
    MuiListItemIcon: {
      root : {
        minWidth : 32
      }
    },
    MuiChip : {
      root : {
        backgroundColor : 'rgba(0,0,0,0.075)'
      }
    }
  }
};

export const themeConfigs = [
  {
    name : THEMES.LIGHT,
    overrides: {
      // Custom Component
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600]
          }
        }
      },
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600]
      },
      customFont: {
        openSans: "Open Sans",
      },
      customNavbar: {
        backgroundColor: '#81D4FA',
        neumorphism: '4px 4px 8px #4D7F96, -5px -5px 10px #B5FFFF',
        neumorphismConnector:'2px 2px 4px #4D7F96, -5px -5px 10px #B5FFFF'
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        milkWhite: '#EDF0F2',
        linearMilkWhite : "linear-gradient(135deg, rgba(237,240,242,1) 0%, rgba(237,240,242,0) 100%)",
        paper: colors.common.white
      },
      primary: {
        main: '#01579b',
        dark: '#268cdd',
        success_green: colors.green.A700
      },
      secondary: {
        defaultMain: '#5850EC',
        main: colors.lightBlue.A700,
        indigo_one: colors.indigo[500],
        contrastText: colors.grey[100],
      },
      neumorphismButton: {
        mainPage: '3px 3px 6px rgba(130, 131, 133, 0.8), -6px -6px 12px rgba(255, 255, 255, 0.8)',
        formPage: '2px 2px 4px rgba(130, 131, 133, 0.8), -6px -6px 12px rgba(255, 255, 255, 0.8)',
        checkedButton: 'radial-gradient(#01579b,#01579b 28%,transparent 32%)',
      },
      neumorphismForm: {
        main: '5px 5px 10px rgba(130, 131, 133, 0.8), -6px -6px 12px rgba(255, 255, 255, 0.8)'
      },
      supportColor: {
        orange_third: colors.orange.A400,
        teal_white: colors.teal[100],
        teal_third: colors.teal.A700,
        grey_third: colors.grey[200],
        grey_black: colors.grey[900]
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600]
      }
    },
    shadows: softShadows
  }
];

export const createTheme = (settings = {}) => {
  let themeConfig = themeConfigs.find((theme) => theme.name === settings.theme);

  if (!themeConfig){
    console.warn(new Error(`The theme ${settings.theme} is not valid`));
    [themeConfig] = themeConfigs;
  }

  let theme = createMuiTheme(
      _.merge(
        {},
        baseConfig,
        themeConfig,
        { direction: settings.direction }
      )
  )

  if (settings.responsiveFontSizes){
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
