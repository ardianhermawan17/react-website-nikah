import React from 'react';
import clsx from "clsx";
import {
    makeStyles,
    Radio
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: theme.palette.neumorphismButton.formPage,
        backgroundColor: theme.palette.background.milkWhite,
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: theme.palette.background.milkWhite,
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: theme.palette.neumorphismButton.checkedButton,
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: theme.palette.background.dark,
        },
    },
}))

const StyledRadio = ({ ...rest }) => {
   const classes = useStyles();

   return (
       <Radio
           className={classes.root}
           color="default"
           checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
           icon={<span className={classes.icon} />}
           {...rest}
       />
   )

}

export default StyledRadio;
