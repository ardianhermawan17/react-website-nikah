import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';
import ErrorImage from 'src/assets/static/images/undraw_page_not_found_su7k.svg';
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80,
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto',
  },
}));

function Error404View() {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  const returnToPreviousPage = () => {
    history.goBack()
  }

  return (
    <Page className={classes.root} title="404: Not found">
      <Container maxWidth="lg">
        <Typography align="center" variant={mobileDevice ? 'h4' : 'h1'} color="textPrimary">
          404: Halaman yang anda tuju tidak ada
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Kemungkinan kesalahan pada saat mengetikkan halaman.
        </Typography>
        <Box mt={6} display="flex" justifyContent="center">
          <img
            alt="Under development"
            className={classes.image}
            src={ErrorImage}
          />
        </Box>
        <Box mt={6} display="flex" justifyContent="center">
          <Button
              color="secondary"
              variant="outlined"
              onClick={returnToPreviousPage}
          >
            Kembali ke halaman sebelumnya
          </Button>
        </Box>
      </Container>
    </Page>
  );
}

export default Error404View;
