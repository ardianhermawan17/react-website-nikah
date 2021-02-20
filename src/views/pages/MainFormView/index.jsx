import React from 'react';
import {
    makeStyles,
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import { useHistory } from "react-router";
import Page from 'src/components/Page';
import CoupleImage from 'src/assets/couple1.svg';
import MainForm from "./MainForm";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "1.5rem"
    },
    groupTypography: {
      marginTop: "1.5rem"
    },
    typography: {
        paddingTop: "1rem",
        paddingBottom: "1rem",
        fontFamily: theme.palette.customFont.openSans,
        fontWeight: "bold"
    }
}))

const MainFormView = () => {
    const history = useHistory();
    const classes = useStyles();

    const handleSuccessSubmitEventMarried = () => {
        history.push('/form-nikah/n1')
    }

    return (
        <Page
            className={classes.root}
            title="Main Page"
        >
            <Container>
                <Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                >
                    <Grid
                        item
                    >
                        <img src={CoupleImage} width="auto" height={250} alt="Couple image"/>
                    </Grid>
                    <Grid
                        item
                        className={classes.groupTypography}
                    >
                        <Typography
                            align="center"
                            variant="h1"
                            className={classes.typography}
                        >
                            Formulir Pencatatan Pernikahan
                        </Typography>
                        <Typography
                            align="center"
                            variant="h3"
                            className={classes.typography}
                        >
                            Pernikahan dilangsungkan pada
                        </Typography>
                    </Grid>
                    <Grid
                        item
                    >
                        <MainForm onSuccessSubmitEventMarried={handleSuccessSubmitEventMarried} />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default MainFormView;
