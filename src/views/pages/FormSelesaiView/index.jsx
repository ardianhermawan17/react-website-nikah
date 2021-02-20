import React from 'react';
import {
    Grid,
    Container,
    makeStyles,
    Typography
} from "@material-ui/core";
import Page from "src/components/Page";
import FormSelesai from "./FormSelesai";

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
}))

const FormSelesaiView = ({ ...rest }) => {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Form Selesai"
        >
            <Container>
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
                            Hasil Surat Keterangan Nikah
                        </Typography>
                        <FormSelesai />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    )
}

export default FormSelesaiView;
