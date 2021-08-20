import { makeStyles } from '@material-ui/core/styles';
import mobileImage from '../../assets/images/booking/hero-bg-mobile.jpg';
import tabletImage from '../../assets/images/booking/hero-bg-tablet.jpg';
import desktopImage from '../../assets/images/booking/hero-bg-desktop.jpg';
import bgPattern from '../../assets/images/patterns/pattern-lines.svg'
import { white, codGrey } from '../../styles/colors.js';

const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4))';
const linearGradientTablet = 'linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4))';

const useStyles = makeStyles(theme => ({
    bookingHero: {
        backgroundImage: `${linearGradient}, url(${mobileImage})`,
        backgroundPosition: 'center top',
        height: 500,//'94vh',
        paddingTop: '5rem',
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradientTablet}, url(${tabletImage})`,
            height: 450
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradientTablet}, url(${desktopImage})`,
            height: 500,
        },
        [theme.breakpoints.up('lg')]: {
            paddingBottom: '5rem',
            paddingTop: 0
        }
    },
    heroPaper: {
        color: white
    },
    heroLink: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    bookingFormContainer: {
        [theme.breakpoints.up('lg')]: {
            height: 350,
            position: 'relative'
        }
    },
    bookingForm: {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        margin: '0 auto',
        padding: '1rem 5% 2rem 5%',
        transform: 'translateY(-94px)',
        width: '90%',
        [theme.breakpoints.up('sm')]: {
            width: '70%'
        },
        [theme.breakpoints.up('md')]: {
            width: '50%'
        },
        [theme.breakpoints.up('lg')]: {
            position: 'absolute',
            right: '10%',
            top: 0,
            transform: 'translate(0%, -50%)',
            width: 350,
            transformStyle: 'preserve-3d',
            '&::after': {
                backgroundImage: `url(${bgPattern})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 170,
                bottom: '-11%',
                content: '""',
                height: 100,
                left: '-14%',
                position: 'absolute',
                width: 180,
                transform: 'translateZ(-1px)'
            }
        },
        [theme.breakpoints.up(1500)]: {
            right: '15%'
        }
    },
    paper: {
        marginTop: '1.3rem'
    },
    bookingLabel: {
        fontSize: '.95rem',
        fontWeight: 700
    },
    bookingFormPaper: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    bookingInput: {
        width: '31%'
    }, 
    bookingActionsContainer: {
        borderBottom: `1px solid ${codGrey}`
    },
    bookingActionButton: {
        fontSize: '1.2rem'
    },
    bookingGuestsLabel: {
        color: codGrey,
        fontSize: '.95rem'
    },
    bookingSumbit: {
        backgroundColor: codGrey,
        fontSize: '.9rem',
        width: '100%',
        '&:hover': {
            border: `1px solid ${codGrey}`
        },
        [theme.breakpoints.up('sm')]: {
            width: '70%'
        },
        [theme.breakpoints.up('md')]: {
            margin: '1.5rem auto 0 auto',
            width: '70%'
        }
    }
}));

export {
    useStyles
}