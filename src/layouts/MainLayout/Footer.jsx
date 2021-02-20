import React from 'react';
import {
  makeStyles,
  Grid,
  Container,
  TextField
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111026',
    color: 'white',
    padding: theme.spacing(10),
    fontFamily: theme.typography.fontFamily,
  },
  p: {
    fontSize: `${16}px`,
    lineHeight: `${30}px`,
  },
  share: {
    display: 'inline',
    marginRight: `${1}rem`,
    cursor: 'pointer',
  },
  copyright: {
    opacity: `${50}%`,
    paddingTop: `${21}px`,
  },
  subscribe: {
    marginTop: `${10}px`,
    fontSize: `${12}px`,
  },
  input: {
    color: 'white',
  },
  or: {
    opacity: `${50}%`,
    fontSize: `${12}px`,
  },
}));

// eslint-disable-next-line no-unused-vars
const Footer = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <p className={classes.p}>
              Ardian Hermawan
              {' '}
              <br />
              Politeknik Elektronika Negeri Surabaya
              {' '}
              <br />
              Testing
            </p>
            <p className={classes.copyright}>Copyright 2020 ARDIAN</p>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <FacebookIcon className={classes.share} />
            <TwitterIcon className={classes.share} />
            <LinkedInIcon className={classes.share} />
            <InstagramIcon className={classes.share} />
            <br />
            <p className={classes.or}>Or</p>
            <p className={classes.subscribe}>Subscribe to this Page</p>
            <form>
              <TextField
                id="standard-full-width"
                style={{ marginTop: `${10}px` }}
                label="Masukkan Email"
                placeHolder="Email"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
