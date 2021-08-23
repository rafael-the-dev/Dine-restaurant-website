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
}));

export {
    useStyles
}