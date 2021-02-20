import React, {
    useState
} from 'react'
import { useHistory } from "react-router";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.linearMilkWhite,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%',
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
        [theme.breakpoints.up('md')]: {
            paddingLeft: 240
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 256
        },
    },
    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto',
    },
}));

const FormLayout = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    //Function
    const handleRoutes = (index) => {
        switch (index) {
            case 0 :
                return history.push('/form-nikah/n1');
            case 1 :
                return history.push('/form-nikah/n2');
            case 2 :
                return history.push('/form-nikah/n3');
            case 3 :
                return history.push('/form-nikah/n4');
            default:
                return history.push('/404')
        }
    }

    return (
        <div className={classes.root}>
            <TopBar />
            <NavBar
                mobileScreen={mobileNavOpen}
                onMobileClose={() => setMobileNavOpen(true)}
                onHandleRoutes={handleRoutes}
            />
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>
                        {children}
                        {/*<Footer />*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

FormLayout.propTypes = {
    children: PropTypes.any
};

export default FormLayout;
