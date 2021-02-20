import React, {
    useEffect, useState
} from 'react';
import { useDispatch } from "react-redux";
import {
    Button,
    Grid,
    Snackbar,
    TextField,
    makeStyles,
    Typography, colors
} from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom';
import {Formik} from "formik";
import * as Yup from "yup";
import MuiAlert from "@material-ui/lab/Alert";
import PropTypes from 'prop-types';
//REDUX
import { login } from 'src/redux/actions/accountActions';

const useStyles = makeStyles((theme) => ({
    form: {
        display : "flex",
        flexDirection: "column",
        width: '100%'
    },
    formInput: {
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
        boxShadow: theme.palette.neumorphismButton.mainPage
    },
    typography: {
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        fontFamily: theme.palette.customFont.openSans,
        fontStyle: "normal",
        fontWeight: "bold",
    },
    button: {
        marginTop: "1rem",
        marginBottom: "1rem",
    },
    greyButton: {
        color: colors.grey[600]
    },
    buttonMasuk: {
        boxShadow: theme.palette.neumorphismButton.mainPage
    }
}))

const InputFormLogin = ({ onLoginSuccess, ...rest }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [snackbar, setSnackbar] = useState(false);

    //Function
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar(false);
    };

    return (
        <>
            <Typography
                variant="h2"
                className={classes.typography}
            >
                Masuk
            </Typography>
            <Formik
                initialValues={{
                    username: 'tester',
                    password: 'password'
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string().min(8, "Minimal 8 huruf").max(255).required('Mohon isi username anda'),
                    password: Yup.string().max(255).required('Mohon isi password anda')
                })}
                onSubmit={async (values, {
                    setErrors,
                    setStatus,
                    setSubmitting
                }) => {
                    try {

                        const userRole = await dispatch(login(values.username, values.password));
                        await onLoginSuccess(userRole)
                    } catch (error) {
                        const message = (error.data && error.data) || 'Something went wrong';
                        console.log(error)
                        setSnackbar(true)
                        setStatus({ success: false });
                        setErrors({ submit: message });
                        setSubmitting(false);
                    }
                }}
            >
                {({
                      errors,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      touched,
                      values
                  }) => (
                    <form
                        noValidate
                        className={classes.form}
                        onSubmit={handleSubmit}
                        {...rest}
                    >
                        <TextField
                            error={Boolean(touched.username && errors.username)}
                            helperText={touched.username && errors.username}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.username}
                            className={classes.formInput}
                            label="Nama User"
                            name="username"
                            margin="normal"
                            type="search"
                            variant="outlined"
                            autoFocus
                        />

                        <TextField
                            error={Boolean(touched.password && errors.password)}
                            helperText={touched.password && errors.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            className={classes.formInput}
                            label="Password"
                            name="password"
                            margin="normal"
                            type="password"
                            variant="outlined"
                        />
                        <Grid
                            container
                            justify="flex-end"
                            spacing={4}
                            className={classes.button}
                        >
                            <Grid item >
                                <Button
                                    component={RouterLink}
                                    to="/daftar"
                                    className={classes.greyButton}
                                >
                                    Daftar
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    type="submit"
                                    className={classes.buttonMasuk}
                                >
                                    Masuk
                                </Button>
                                {errors.submit && (
                                    <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleClose}>
                                        <MuiAlert elevation={6} varian="filled" severity="error" onClose={handleClose}>
                                            {errors.submit}
                                        </MuiAlert>
                                    </Snackbar>
                                )}
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    )
}

InputFormLogin.propTypes = {
    onLoginSuccess : PropTypes.func
}

export default InputFormLogin;
