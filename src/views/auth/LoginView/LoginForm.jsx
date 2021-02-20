import React from 'react';
import {
    Grid,
    Hidden,
    makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
//components
import ImageLogin from "./components/ImageLogin";
import InputFormLogin from "./components/InputFormLogin";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    image: {
        display: "flex",
        justifyContent: "center",
    }
}));

const LoginForm = ({ onLoginSuccess, ...rest }) => {
    const classes = useStyles();


  return (
      <>
          <Hidden lgUp>
              <Grid
                  item
                  xs={12}
                  md={6}
                  className={classes.image}
              >
                  <ImageLogin />
              </Grid>
              <Grid
                  item
                  md={6}
                  xs={12}
              >
                  <InputFormLogin onLoginSuccess={onLoginSuccess} />
              </Grid>
          </Hidden>
          <Hidden mdDown>
              <Grid
                  item
                  xs={12}
                  md={6}
              >
                  <InputFormLogin onLoginSuccess={onLoginSuccess} />
              </Grid>
              <Grid
                  item
                  md={6}
                  xs={12}
                  className={classes.image}
              >
                  <ImageLogin />
              </Grid>
          </Hidden>
      </>
  );
};

LoginForm.propTypes = {
    onLoginSuccess: PropTypes.func
}

export default LoginForm;
