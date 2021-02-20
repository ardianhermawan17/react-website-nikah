import React from 'react';
import clsx from "clsx";
import {
    makeStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.customNavbar.backgroundColor,
        boxShadow: theme.palette.customNavbar.neumorphism,
        zIndex: 1,
        color: theme.palette.primary,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    active: {
        color: theme.palette.customNavbar.backgroundColor,
        background: theme.palette.primary.main,
        boxShadow: theme.palette.customNavbar.neumorphism,
    },
    completed: {
        background: theme.palette.customNavbar.backgroundColor,
        boxShadow: theme.palette.customNavbar.neumorphism,
    },
}))

const CustomStepIcon = ({ icon, active, completed, ...rest }) => {
    const classes = useStyles();

    return (
        <div
            className={clsx(classes.root, {
                [classes.active] : active,
                [classes.completed] : completed
            })}
        >
            {icon}
        </div>
    );
}

CustomStepIcon.propTypes = {
    icon : PropTypes.any,
    active: PropTypes.bool,
    completed: PropTypes.bool
}

export default CustomStepIcon;
