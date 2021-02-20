import React from 'react';
import {
    makeStyles,
    Container,
    Grid,
    Typography
} from '@material-ui/core';
import { useHistory } from "react-router";
import Page from 'src/components/Page';
import RegisterForm from './RegisterForm';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "1.5rem"
    },
    typography: {
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        fontFamily: theme.palette.customFont.openSans,
        fontWeight: "bold"
    }
}));

const RegisterView = () => {
    const history = useHistory();
    const classes = useStyles();

    const handleRegisterSuccess = (userRole) => {
        // switch(userRole) {
        //     case "Admin" : {
        //         history.push('/form/admin');
        //         break
        //     }
        //
        //     case "Couple": {
        //         history.push('/form/main');
        //         break
        //     }
        //
        //     default: return
        // }
        history.push('/');
    }

    return (
        <Page
            className={classes.root}
            title="Register Akun"
        >
            <Container >
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography
                            align="center"
                            variant="h1"
                            className={classes.typography}
                        >
                            Formulir Pencatatan Pernikahan
                        </Typography>
                    </Grid>
                    <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
                </Grid>
            </Container>
        </Page>
    );
};

export default RegisterView;
