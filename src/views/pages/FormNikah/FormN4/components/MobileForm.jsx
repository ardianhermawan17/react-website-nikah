import React,{
    useState
} from 'react';
import {
    Card,
    CardHeader,
    Avatar,
    Snackbar,
    CardContent,
    Icon,
    FormControlLabel,
    Box,
    makeStyles,
    TextField,
    Button,
    Divider
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import StyledSwitch from "src/components/StyledSwitch";
import iconMan from 'src/assets/static/images/man.svg';
import iconFemale from 'src/assets/static/images/girl.svg';
import * as Yup from 'yup';
import PropTypes from "prop-types";
import { Formik } from 'formik';
import { KeyboardDatePicker } from "@material-ui/pickers";
import { useDispatch } from "react-redux";
import {fillFormN4} from "src/redux/actions/formSelesaiActions";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        background: theme.palette.background.milkWhite,
        boxShadow: theme.palette.neumorphismForm.main
    },
    avatar: {
        background: theme.palette.background.milkWhite,
        boxShadow: theme.palette.neumorphismButton.mainPage,
        color: 'red'
    },
    imageIcon: {
        display: 'flex',
        height: 'inherit',
        width: 'inherit'
    },
    iconRoot: {
        textAlign: 'center'
    },
    card: {
        background: 'transparent',
        boxShadow: 'none'
    },
    cardHeader: {
        fontSize: '1rem',
        font: theme.palette.customFont.openSans,
        fontWeight: 'bold',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
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
    datePicker: {
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
        boxShadow: theme.palette.neumorphismButton.mainPage,
        '& + &': {
            marginLeft: theme.spacing(2)
        }
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: "1rem",
        marginBottom: "1rem",
    },
    buttonNext: {
        boxShadow: theme.palette.neumorphismButton.mainPage,
        marginRight: "0.5rem",
        marginLeft: "0.5rem"
    },
    divider: {
        marginTop: '1rem',
        marginBottom: '1rem',
        height: '10px',
        borderRadius: '30px',
        background: theme.palette.primary.main,
        boxShadow: theme.palette.neumorphismForm.main
    }
}))

const MobileForm = ({ onChangePage, ...rest }) => {
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
        <Formik
            initialValues={{
                // TODO : Nek sempet dadikno array seng mantan anak dan istri
                namaKeluargaPria: 'yoshi',
                namaPanggilanPria: 'password',
                tanggalLahirPria : new Date(),
                tempatLahirPria: '',
                pekerjaanPria: '',
                tempatTinggalPria: '',
                tempatTinggalDahuluPria: '',
                //Istri
                namaKeluargaWanita: 'yoshi',
                namaPanggilanWanita: 'password',
                tanggalLahirWanita : new Date(),
                tempatLahirWanita: '',
                pekerjaanWanita: '',
                tempatTinggalWanita: '',
                tempatTinggalDahuluWanita: '',
            }}
            validationSchema={Yup.object().shape({
                namaKeluargaPria: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi nama keluarga anda'),
                namaPanggilanPria: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi nama panggilan anda'),
                tanggalLahirPria: Yup.date().required('Mohon isi tanggal lahir anda'),
                tempatLahirPria: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi nama tempat lahir anda'),
                pekerjaanPria: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi pekerjaan anda'),
                tempatTinggalPria: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi tempat tinggal anda'),
                tempatTinggalDahuluPria: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi tempat tinggal sebelumnya anda'),

                //Istri
                namaKeluargawanita: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi nama keluarga anda'),
                namaPanggilanwanita: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi nama panggilan anda'),
                tanggalLahirwanita: Yup.date().required('Mohon isi tanggal lahir anda'),
                tempatLahirwanita: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi nama tempat lahir anda'),
                pekerjaanwanita: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi pekerjaan anda'),
                tempatTinggalwanita: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi tempat tinggal anda'),
                tempatTinggalDahuluwanita: Yup.string().min(1, "Minimal 1 huruf").max(255).required('Mohon isi tempat tinggal sebelumnya anda'),

            })}
            onSubmit={async (values, {
                setErrors,
                setStatus,
                setSubmitting
            }) => {
                try {

                    // const userRole = await dispatch(login(values.username, values.password));
                    // await onLoginSuccess(userRole)
                    // const dataForm = {
                    //     namaKeluargaPria: values.namaKeluargaPria,
                    //     namaPanggilanPria: values.namaPanggilanPria,
                    //     tanggalLahirPria: values.tanggalLahirPria,
                    //     tempatLahirPria: values.tempatLahirPria,
                    //     pekerjaanPria: values.pekerjaanPria,
                    //     tempatTinggalDahuluPria: values.tempatTinggalDahuluPria,
                    //
                    //     namaKeluargaWanita: values.namaKeluargaWanita,
                    //     namaPanggilanWanita: values.namaKeluargaWanita,
                    //     tanggalLahirWanita: values.tanggalLahirWanita,
                    //     tempatLahirWanita: values.tempatLahirWanita,
                    //     pekerjaanWanita: values.pekerjaanWanita,
                    //     tempatTinggalWanita: values.tempatTinggalWanita,
                    //     tempatTinggalDahuluWanita: values.tempatTinggalDahuluWanita,
                    // }
                    //
                    // await dispatch(fillFormN4(dataForm));
                    //
                    // await onChangePage("done");
                    // setStatus({success: true});
                    // setSubmitting(false);
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
                  setFieldValue,
                  setFieldTouched,
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
                    <div className={classes.root}>
                        <Card className={classes.card}>
                            <CardHeader
                                classes={{ title: classes.cardHeader }}
                                avatar={
                                    <Avatar aria-label="man-icon" className={classes.avatar}>
                                        <Icon classes={{ root: classes.iconRoot}}>
                                            <img
                                                className={classes.imageIcon}
                                                src={iconMan}
                                                alt="M"
                                                width={100}
                                                height={100}
                                            />
                                        </Icon>
                                    </Avatar>
                                }
                                title="Mempelai Pria"
                            />
                            <CardContent className={classes.cardContent} >
                                <TextField
                                    error={Boolean(touched.namaKeluargaPria && errors.namaKeluargaPria)}
                                    helperText={touched.namaKeluargaPria && errors.namaKeluargaPria}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.namaKeluargaPria}
                                    className={classes.formInput}
                                    label="Nama Keluarga"
                                    name="namaKeluargaPria"
                                    margin="normal"
                                    type="text"
                                    variant="outlined"
                                />

                                <TextField
                                    error={Boolean(touched.namaPanggilanPria && errors.namaPanggilanPria)}
                                    helperText={touched.namaPanggilanPria && errors.namaPanggilanPria}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.namaPanggilanPria}
                                    className={classes.formInput}
                                    label="Nama Panggilan"
                                    name="namaPanggilanPria"
                                    margin="normal"
                                    type="text"
                                    variant="outlined"
                                />

                                <KeyboardDatePicker
                                    className={classes.datePicker}
                                    inputVariant="outlined"
                                    label="Tanggal Lahir"
                                    name="tanggalLahirPria"
                                    format="DD/MM/yyyy"
                                    value={values.tanggalLahirPria}
                                    onBlur={() => setFieldTouched('tanggalLahirPria')}
                                    onClose={() => setFieldTouched('tanggalLahirPria')}
                                    onAccept={() => setFieldTouched('tanggalLahirPria')}
                                    onChange={(date) => setFieldValue('tanggalLahirPria' , date._d)}
                                />

                                <TextField
                                    error={Boolean(touched.tempatLahirPria && errors.tempatLahirPria)}
                                    helperText={touched.tempatLahirPria && errors.tempatLahirPria}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.tempatLahirPria}
                                    className={classes.formInput}
                                    label="Tempat Lahir"
                                    name="tempatLahirPria"
                                    margin="normal"
                                    type="search"
                                    variant="outlined"
                                    autoFocus
                                />

                                <TextField
                                    error={Boolean(touched.pekerjaanPria && errors.pekerjaanPria)}
                                    helperText={touched.pekerjaanPria && errors.pekerjaanPria}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.pekerjaanPria}
                                    className={classes.formInput}
                                    label="Pekerjaan"
                                    name="pekerjaanPria"
                                    margin="normal"
                                    type="search"
                                    variant="outlined"
                                    autoFocus
                                />

                                <TextField
                                    error={Boolean(touched.tempatTinggalPria && errors.tempatTinggalPria)}
                                    helperText={touched.tempatTinggalPria && errors.tempatTinggalPria}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.tempatTinggalPria}
                                    className={classes.formInput}
                                    label="Tempat Tinggal"
                                    name="tempatTinggalPria"
                                    margin="normal"
                                    type="search"
                                    variant="outlined"
                                    autoFocus
                                />

                                <TextField
                                    error={Boolean(touched.tempatTinggalDahuluPria && errors.tempatTinggalDahuluPria)}
                                    helperText={touched.tempatTinggalDahuluPria && errors.tempatTinggalDahuluPria}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.tempatTinggalDahuluPria}
                                    className={classes.formInput}
                                    label="Tempat Tinggal Dahulu"
                                    name="tempatTinggalDahuluPria"
                                    margin="normal"
                                    type="search"
                                    variant="outlined"
                                    autoFocus
                                />

                            </CardContent>
                        </Card>

                        <Divider className={classes.divider} />

                        <Card className={classes.card}>
                            <CardHeader
                                classes={{ title: classes.cardHeader }}
                                avatar={
                                    <Avatar aria-label="man-icon" className={classes.avatar}>
                                        <Icon classes={{ root: classes.iconRoot}}>
                                            <img
                                                className={classes.imageIcon}
                                                src={iconFemale}
                                                alt="M"
                                                width={100}
                                                height={100}
                                            />
                                        </Icon>
                                    </Avatar>
                                }
                                title="Mempelai Wanita"
                            />

                            <CardContent className={classes.cardContent}>

                                <TextField
                                    error={Boolean(touched.namaKeluargaWanita && errors.namaKeluargaWanita)}
                                    helperText={touched.namaKeluargaWanita && errors.namaKeluargaWanita}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.namaKeluargaWanita}
                                    className={classes.formInput}
                                    label="Nama Keluarga"
                                    name="namaKeluargaWanita"
                                    margin="normal"
                                    type="text"
                                    variant="outlined"
                                />

                                <TextField
                                    error={Boolean(touched.namaPanggilanwanita && errors.namaPanggilanwanita)}
                                    helperText={touched.namaPanggilanwanita && errors.namaPanggilanwanita}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.namaPanggilanwanita}
                                    className={classes.formInput}
                                    label="Nama Panggilan"
                                    name="namaPanggilanwanita"
                                    margin="normal"
                                    type="text"
                                    variant="outlined"
                                />

                                <KeyboardDatePicker
                                    className={classes.datePicker}
                                    inputVariant="outlined"
                                    label="Tanggal Lahir"
                                    name="tanggalLahirwanita"
                                    format="DD/MM/yyyy"
                                    value={values.tanggalLahirwanita}
                                    onBlur={() => setFieldTouched('tanggalLahirwanita')}
                                    onClose={() => setFieldTouched('tanggalLahirwanita')}
                                    onAccept={() => setFieldTouched('tanggalLahirwanita')}
                                    onChange={(date) => setFieldValue('tanggalLahirwanita' , date._d)}
                                />

                                <TextField
                                    error={Boolean(touched.tempatLahirwanita && errors.tempatLahirwanita)}
                                    helperText={touched.tempatLahirwanita && errors.tempatLahirwanita}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.tempatLahirwanita}
                                    className={classes.formInput}
                                    label="Tempat Lahir"
                                    name="tempatLahirwanita"
                                    margin="normal"
                                    type="search"
                                    variant="outlined"
                                    autoFocus
                                />

                                <TextField
                                    error={Boolean(touched.pekerjaanwanita && errors.pekerjaanwanita)}
                                    helperText={touched.pekerjaanwanita && errors.pekerjaanwanita}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.pekerjaanwanita}
                                    className={classes.formInput}
                                    label="Pekerjaan"
                                    name="pekerjaanwanita"
                                    margin="normal"
                                    type="search"
                                    variant="outlined"
                                    autoFocus
                                />

                                <TextField
                                    error={Boolean(touched.tempatTinggalwanita && errors.tempatTinggalwanita)}
                                    helperText={touched.tempatTinggalwanita && errors.tempatTinggalwanita}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.tempatTinggalwanita}
                                    className={classes.formInput}
                                    label="Tempat Tinggal"
                                    name="tempatTinggalwanita"
                                    margin="normal"
                                    type="search"
                                    variant="outlined"
                                    autoFocus
                                />

                                <TextField
                                    error={Boolean(touched.tempatTinggalDahuluwanita && errors.tempatTinggalDahuluwanita)}
                                    helperText={touched.tempatTinggalDahuluwanita && errors.tempatTinggalDahuluwanita}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.tempatTinggalDahuluwanita}
                                    className={classes.formInput}
                                    label="Tempat Tinggal Dahulu"
                                    name="tempatTinggalDahuluwanita"
                                    margin="normal"
                                    type="search"
                                    variant="outlined"
                                    autoFocus
                                />

                                <Box
                                    className={classes.button}
                                >

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                        type="submit"
                                        className={classes.buttonNext}
                                        onClick={() => onChangePage("back")}
                                    >
                                        Sebelumnya
                                    </Button>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                        type="submit"
                                        className={classes.buttonNext}
                                        onClick={() =>   onChangePage("done")}
                                    >
                                        Selesai
                                    </Button>
                                    {errors.submit && (
                                        <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleClose}>
                                            <MuiAlert elevation={6} varian="filled" severity="error" onClose={handleClose}>
                                                {errors.submit}
                                            </MuiAlert>
                                        </Snackbar>
                                    )}
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
                </form>
            )}
        </Formik>
    )
}

MobileForm.propTypes = {
    onChangePage : PropTypes.func.isRequired,
}

export default MobileForm;
