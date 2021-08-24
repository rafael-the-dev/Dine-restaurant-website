import { makeStyles } from '@material-ui/core/styles';
import mobileImage from '../../assets/images/booking/hero-bg-mobile.jpg';
import tabletImage from '../../assets/images/booking/hero-bg-tablet.jpg';
import desktopImage from '../../assets/images/booking/hero-bg-desktop.jpg';
import { white } from '../../styles/colors.js';

const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4))';
const linearGradientTablet = 'linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4))';

const useStyles = makeStyles(theme => ({
    bookingHero: {
        backgroundImage: `${linearGradient}, url(${mobileImage})`,
        backgroundPosition: 'center top',
        height: 580,//'94vh',
        paddingTop: '5rem',
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradientTablet}, url(${tabletImage})`,
            height: 500
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
        color: white,
        marginTop: -113,
        [theme.breakpoints.up('sm')]: {
            marginTop: -100
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: -33
        }
    },
    heroTitle: {
        [theme.breakpoints.up('lg')]: {
            fontSize: '2.3rem'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '2.7rem'
        }
    },
    heroDescription: {
        [theme.breakpoints.up('md')]: {
            margin: '1rem auto 0 auto !important'
        },

        [theme.breakpoints.up('lg')]: {
            margin: '1rem 0 0 0 !important'
        }
    },
    heroLink: {
        [theme.breakpoints.up('sm')]: {
            display: 'none !important'
        }
    },
    bookingFormContainer: {
        [theme.breakpoints.up('lg')]: {
            height: 350,
            position: 'relative'
        }
    },
}));

export {
    useStyles
}