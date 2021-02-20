import React, {
    useState,
    useEffect
} from 'react';
import {
    Grid,
    makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
//Component
import ImageRegister from "./components/ImageRegister";
import InputFormRegister from "./components/InputFormRegister";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    image: {
        display: "flex",
        justifyContent: "center",
    },
}))

const RegisterForm = ({ onRegisterSuccess,  ...rest }) => {
    const [screenSize, setScreenSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    })
    const classes = useStyles();

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                height: window.innerHeight,
                width: window.innerWidth,
            })
        }

        window.addEventListener('resize', handleResize);

        renderResponsiveForm();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });


    //CONTENT

    const renderResponsiveForm = () => {
        if(screenSize.width < 960){
            return (
                <>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        className={classes.image}
                    >
                        <ImageRegister />
                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <InputFormRegister onRegisterSuccess={onRegisterSuccess} />
                    </Grid>
                </>
            )
        } else{
            return (
                <>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <InputFormRegister onRegisterSuccess={onRegisterSuccess} />
                    </Grid>
                    <Grid
                        item
                        md={6}
                        xs={12}
                        className={classes.image}
                    >
                        <ImageRegister />
                    </Grid>
                </>
            )
        }
    }

    return renderResponsiveForm();
};

RegisterForm.propTypes = {
    onRegisterSuccess : PropTypes.func
}

export default RegisterForm;
