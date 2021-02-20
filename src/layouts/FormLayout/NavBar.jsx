import React, {
    useEffect,
    useState,
} from 'react';
import {
    useLocation,
} from "react-router";
import {
    Stepper,
    Step,
    Hidden,
    StepLabel,
    Box,
    Drawer,
    makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import PerfectScrollbar from 'react-perfect-scrollbar';
import StepperConnectorDesktop from "./components/StepperConnectorDesktop";
import StepperConnectorMobile from "./components/StepperConnectorMobile";
import CustomStepIcon from "./components/CustomStepIcon";

const listNavigation = [
    {
        path: '/form-nikah/n1',
        name: 1
    },
    {
        path: '/form-nikah/n2',
        name: 2
    },
    {
        path: '/form-nikah/n3',
        name: 3
    },
    {
        path: '/form-nikah/n4',
        name: 4
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.customNavbar.backgroundColor,
    },
    desktopDrawer: {
        width: 200,
        top: 64,
        height: 'calc(100% - 64px)'
    },
    mobileDrawer: {
        width: '100%'
    },
    stepperDesktop: {
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        minHeight: '31rem',
        padding: 0
    },
    stepperMobile: {
        background: 'transparent',
        marginTop: '1rem',
        minHeight: '4rem',
        width: '100%',
        padding: 0
    },
}))

const NavBar = ({ onHandleRoutes, mobileScreen, onMobileClose }) => {
    const classes = useStyles();
    const location = useLocation();
    const [activeStep, setActiveStep] = useState(0);


    useEffect(() => {

        //Checking nav
        listNavigation.map((data, index) => {
            if(location.pathname === data.path) {
                setActiveStep(index)
            }
        })

    },[location.pathname])

    const handleChangeIconAndRoutes = (index) => {
        setActiveStep(index);
        onHandleRoutes(index)
    };


    const renderContent = (status) => {
        if(status === 'desktop'){
           return(
               <Box
                   height="100%"
                   className={classes.root}
               >
                   <PerfectScrollbar options={{ suppressScrollX: true}}>
                       <Box
                           display="flex"
                           alignItems="center"
                           justifyContent="center"
                           height="100%"
                       >
                           <Stepper
                               className={classes.stepperDesktop}
                               alternativeLabel
                               activeStep={activeStep}
                               connector={<StepperConnectorDesktop/>}
                               orientation="vertical"
                           >
                               {listNavigation.map((item, index) => {
                                   return (
                                       <Step key={item}>
                                           <StepLabel onClick={() => handleChangeIconAndRoutes(index)}  StepIconComponent={CustomStepIcon} />
                                       </Step>
                                   )
                               })}
                           </Stepper>
                       </Box>
                   </PerfectScrollbar>
               </Box>
           )
        }
        else{
            return (
                <Box
                    height="100%"
                    className={classes.root}
                >
                    <PerfectScrollbar options={{ suppressScrollX: true}}>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            height="100%"
                        >
                            <Stepper
                                className={classes.stepperMobile}
                                alternativeLabel
                                activeStep={activeStep}
                                connector={<StepperConnectorMobile/>}
                            >
                                {listNavigation.map((item, index) => (
                                    <Step key={item}>
                                        <StepLabel onClick={() => handleChangeIconAndRoutes(index)}  StepIconComponent={CustomStepIcon} />
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </PerfectScrollbar>
                </Box>
            )
        }
    }

    return (
        <>
            <Hidden mdUp>
                <Drawer
                    anchor="bottom"
                    classes={{ paper: classes.mobileDrawer}}
                    variant="persistent"
                    open
                >
                    {renderContent('mobile')}
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer
                    anchor="left"
                    classes={{ paper: classes.desktopDrawer}}
                    variant="persistent"
                    open
                >
                    {renderContent('desktop')}
                </Drawer>
            </Hidden>
        </>
    )
};

NavBar.propTypes = {
    mobileScreen: PropTypes.bool,
    onMobileClose: PropTypes.func,
    onHandleRoutes: PropTypes.func,
}

export default NavBar;
