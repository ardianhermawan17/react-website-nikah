import React, {
    useState
} from 'react';
import { useDispatch } from "react-redux";
import {
    Button, colors,
    Grid,
    makeStyles,
    Snackbar,
    TextField,
    Typography
} from "@material-ui/core";
import {Formik} from "formik";
import * as Yup from "yup";
import MuiAlert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";
//Reducer
import { register } from 'src/redux/actions/accountActions';

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
}));

const InputFormRegister = ({ onRegisterSuccess, ...rest }) => {
    const [snackbar, setSnackbar] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();

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
                Daftar
            </Typography>
            <Formik
                initialValues={{
                    username: 'tester',
                    fullname: '',
                    email: '',
                    password: 'password',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string().min(8, "Minimal 8 huruf").max(255).required('Mohon isi username anda'),
                    fullname: Yup.string().min(8, "Minimal 8 huruf").max(255).required('Mohon isi nama lengkap anda'),
                    email: Yup.string().email('Email salah').max(255).required('Mohon isi email anda'),
                    password: Yup.string().max(255).required('Mohon isi password anda'),
                    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password tidak sesuai')
                })}
                onSubmit={async (values, {
                    setErrors,
                    setStatus,
                    setSubmitting
                }) => {
                    try {

                        const auth = await dispatch(register(values.username, values.fullname, values.email, values.password));
                        console.log('auth so' + auth)
                        await onRegisterSuccess(auth)
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
                            error={Boolean(touched.fullname && errors.fullname)}
                            helperText={touched.fullname && errors.fullname}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.fullname}
                            className={classes.formInput}
                            label="Nama Lengkap"
                            name="fullname"
                            margin="normal"
                            type="search"
                            variant="outlined"
                        />

                        <TextField
                            error={Boolean(touched.email && errors.email)}
                            helperText={touched.email && errors.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            className={classes.formInput}
                            label="Email"
                            name="email"
                            margin="normal"
                            type="search"
                            variant="outlined"
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
                            type="search"
                            variant="outlined"
                        />

                        <TextField
                            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                            helperText={touched.confirmPassword && errors.confirmPassword}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.confirmPassword}
                            className={classes.formInput}
                            label="Konfirmasi Password"
                            name="confirmPassword"
                            margin="normal"
                            type="search"
                            variant="outlined"
                        />

                        <Grid
                            container
                            justify="flex-end"
                            spacing={4}
                            className={classes.button}
                        >
                            <Grid
                                item
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    type='submit'
                                    className={classes.buttonMasuk}
                                >
                                    Daftar
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

InputFormRegister.propTypes = {
    onRegisterSuccess : PropTypes.func
}

export default InputFormRegister;
