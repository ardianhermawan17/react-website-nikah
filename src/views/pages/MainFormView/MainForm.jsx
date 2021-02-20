import React, {
    useState
} from 'react';
import {
    Button,
    Box,
    Grid,
    makeStyles,
    Snackbar,
    RadioGroup,
    FormControl,
    FormControlLabel,
} from '@material-ui/core';
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import PropTypes from "prop-types";
import { Formik } from 'formik';
import MuiAlert from "@material-ui/lab/Alert";
import StyledRadio from "./components/StyledRadio";
//redux
import { register_event_married } from "src/redux/actions/accountActions";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    datePicker: {
        boxShadow: theme.palette.neumorphismButton.mainPage,
        '& + &': {
            marginLeft: theme.spacing(2)
        }
    },
    buttonMasuk: {
        boxShadow: theme.palette.neumorphismButton.mainPage
    },
    buttonBoxMasuk: {
        display: 'flex',
        justifyContent: 'center'
    }
}))

const MainForm = ({ onSuccessSubmitEventMarried, ...rest }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [snackbar, setSnackbar] = useState(false);

    //Function
    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }

        setSnackbar(false);
    }

    return(
        <Grid
            item
        >
            <Formik
                initialValues={{
                    citizen: 'warga negara indonesia',
                    marriedDate: new Date()
                }}
                validationSchema={Yup.object().shape({
                    marriedDate: Yup.date(),
                })}
                onSubmit={async (values, {
                    setErrors,
                    setStatus,
                    setSubmitting
                }) => {
                    try {

                        await dispatch(register_event_married(values.marriedDate, values.citizen))
                        //REDIRECT
                        await onSuccessSubmitEventMarried()
                        setStatus({ success: true });
                        setSubmitting(false);
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
                      handleSubmit,
                      isSubmitting,
                      setFieldValue,
                      setFieldTouched,
                      touched,
                      values
                  }) => (
                    <form
                        className={classes.form}
                        onSubmit={handleSubmit}
                        {...rest}
                    >
                        <Box mt={2} textAlign="center">
                            <KeyboardDatePicker
                                className={classes.datePicker}
                                inputVariant="outlined"
                                label="tanggal pernikahan"
                                name="marriedDate"
                                format="DD/MM/yyyy"
                                value={values.marriedDate}
                                onBlur={() => setFieldTouched('marriedDate')}
                                onClose={() => setFieldTouched('marriedDate')}
                                onAccept={() => setFieldTouched('marriedDate')}
                                onChange={(date) => setFieldValue('marriedDate' , date._d)}
                            />
                        </Box>
                        <Box mt={4} mb={4}>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    value={values.citizen}
                                    aria-label="status warga"
                                    row
                                    onChange={(value) => setFieldValue('citizen' , value.target.value)}
                                >
                                    <FormControlLabel
                                        name="citizen"
                                        value="warga negara indonesia"
                                        control={<StyledRadio />}
                                        label="Warga Negara Indonesia"
                                    />
                                    <FormControlLabel
                                        name="citizena"
                                        value="warga negara asing"
                                        control={<StyledRadio />}
                                        label="Warga Negara Asing"
                                    />
                                    <FormControlLabel
                                        name="citizen"
                                        value="tanpa kewarganegaraan"
                                        control={<StyledRadio />}
                                        label="Tanpa Kewarganegaraan"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Box>

                        <Box mt={2} mb={4} className={classes.buttonBoxMasuk}>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                type="submit"
                                className={classes.buttonMasuk}
                            >
                                ISI DATA
                            </Button>
                        </Box>
                        {Boolean(touched.marriedDate && errors.marriedDate) && (
                            <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleClose}>
                                <MuiAlert elevation={6} varian="filled" severity="error" onClose={handleClose}>
                                    {errors.marriedDate}
                                </MuiAlert>
                            </Snackbar>
                        )}
                    </form>
                )}
            </Formik>
        </Grid>
    )
};

MainForm.propTypes = {
    onSuccessSubmitEventMarried : PropTypes.func
}

export default MainForm;
