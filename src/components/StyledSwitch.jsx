import {
    withStyles,
    Switch
} from "@material-ui/core";

const StyledSwitch = withStyles((theme) => ({
    root: {
        width: 62,
        height: 26,
        padding: 0,
        borderRadius: 26 / 2,
        boxShadow: theme.palette.neumorphismButton.mainPage,
        margin: theme.spacing(1),
    },
    switchBase: {
        color: theme.palette.grey[500],
        transform: 'translateX(4px)',
        padding: 1,
        '&$checked': {
            transform: 'translateX(36px)',
            color: theme.palette.primary.main,
            '& + $track': {
                backgroundColor: theme.palette.customNavbar.backgroundColor,
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 20,
        height: 20,
        transform: 'translateY(2px)'
    },
    track: {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.background.milkWhite,
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}), { withTheme: true })(Switch);

export default StyledSwitch;
