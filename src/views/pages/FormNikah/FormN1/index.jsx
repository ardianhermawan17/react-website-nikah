import React from 'react';
import {
  makeStyles,
  Container,
  Grid,
  Hidden,
  Typography
} from "@material-ui/core";
import { useHistory } from "react-router";
import Page from 'src/components/Page';
import DesktopForm from "./components/DesktopForm";
import MobileForm from "./components/MobileForm";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64
    },
      [theme.breakpoints.down('sm')]: {
          paddingBottom: 120
      }
  },
    gridItem: {
        width: '100%'
    },
  typography: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontFamily: theme.palette.customFont.openSans,
    textTransform: "capitalize",
    fontWeight: "bold"
  },
}))

const FormN1 = ({ ...rest }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleChangePage = (status) => {
      switch (status) {
           case "next" :
               history.push('/form-nikah/n2');
               break;
          default : return;
      }
  }

  return (
    <Page
        className={classes.root}
        title="Form N1"
    >
      <Container
          maxWidth={false}
          className={classes.container}
      >
          <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-start"
          >
              <Grid
                  item
                  className={classes.gridItem}
              >
                <Typography
                    align="left"
                    variant="h4"
                    className={classes.typography}
                >
                  Surat Keterangan Untuk Nikah
                </Typography>
              </Grid>
              <Grid
                  item
                  className={classes.gridItem}
              >
                  {/*Mobile*/}
                  <Hidden smUp>
                      <MobileForm onChangePage={handleChangePage} />
                  </Hidden>
                 {/*Desktop*/}
                 <Hidden xsDown>
                   <DesktopForm onChangePage={handleChangePage} />
                 </Hidden>
              </Grid>
          </Grid>
      </Container>
    </Page>
  )
}

export default FormN1;
