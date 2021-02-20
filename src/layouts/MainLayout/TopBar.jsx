import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Toolbar,
  Hidden,
  Typography,
  Link,
  makeStyles,
} from '@material-ui/core';
import { APP_VERSION } from 'src/config';
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    height: 64,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();
  const namaUser = useSelector(data => data.account.user.username)

  return (
    <AppBar
      className={clsx(classes.root, className)}
      color="default"
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        <Hidden mdDown>
          <Typography
            variant="caption"
            color="textSecondary"
          >
            Website nikah versi
            {' '}
            {APP_VERSION}
          </Typography>
        </Hidden>
        <Box flexGrow={1} />
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/masuk"
          underline="none"
          variant="body2"
        >
          {namaUser || ''}
        </Link>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
