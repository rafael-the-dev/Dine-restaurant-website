import { makeStyles } from '@material-ui/core/styles';
import heroImage from '../../assets/images/homepage/hero-bg-mobile.jpg';
import heroImageTablet from '../../assets/images/homepage/hero-bg-tablet.jpg';
import heroImageDesktop from '../../assets/images/homepage/hero-bg-desktop.jpg';
import reservationImage from '../../assets/images/homepage/ready-bg-mobile.jpg';
import reservationImageTablet from '../../assets/images/homepage/ready-bg-tablet.jpg';
import reservationImageDesktop from '../../assets/images/homepage/ready-bg-desktop.jpg';
import { beaver, ebonyClay, white } from '../../assets/js/colors';

const useStyles = makeStyles(theme => ({ //
    homeMain: {
        [theme.breakpoints.up('lg')]: {
            maxWidth: '100%'
        }
    },
    homeHero: {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4)), url(${heroImage})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        height: 550,//'94vh',
        padding: '0 5%',
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4)), url(${heroImageTablet})`,
            height: 700
        },
        [theme.breakpoints.up('md')]: {
            alignItems: 'center',
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4)), url(${heroImageDesktop})`,
            height: 600,
            padding: '0 10%',
        },
        [theme.breakpoints.up('lg')]: {
            height: 700
        }
    },
    heroPaper: {
        backgroundColor: 'transparent',
        color: '#FFF',
        marginBottom: '8rem',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            marginBottom: 0,
            textAlign: 'left'
        }
    },
    heroTitle: {
        [theme.breakpoints.up('md')]: {
            fontSize: '2.7rem'
        }
    },
    heroDescription: {
        margin: '1rem auto 0 auto',
        lineHeight: '1.5rem',
        width: '90%',
        [theme.breakpoints.up('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
            lineHeight: '1.8rem',
            margin: '1rem 0 0 0',
            width: '80%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '60%'
        }
    },
    heroLink: {
        border: '1px solid #FFF',
        borderRadius: 3,
        color: '#FFF',
        display: 'block',
        fontSize: '.95rem',
        fontWeight: 'bold',
        margin: '1.5rem auto 0 auto',
        padding: '.7rem 0',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'all 400ms ease-in',
        width: '60%',
        '&:hover': {
            backgroundColor: '#FFF',
            color: '#000',
            textDecoration: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            width: '45%'
        },
        [theme.breakpoints.up('md')]: {
            margin: '1.5rem 0 0 0',
            width: '30%'
        }
    },
    services: {
        padding: '0 5% 4rem 5%',
        [theme.breakpoints.up('sm')]: {
            padding: '0 10% 2rem 10%',
        }
    },
    servicesImageContainer: {
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        height: 350,
        transform: 'translateY(-60px)',
        zIndex: 10,
        [theme.breakpoints.up('sm')]: {
            height: 300,
        }
    },
    servicesImage: {
        display: 'block',
        height: '100%',
        width: '100%'
    },
    servicesContent: {
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left'
        }
    },
    servicesSubTitle: {
        color: ebonyClay,
        fontWeight: 700,
        '&::before': {
            backgroundColor: beaver,
            content: '""',
            display: 'block',
            height: 2,
            margin: '0 auto 1rem auto',
            width: '20%'
        }
    },
    servicesDescription: {
        fontSize: '.95rem',
        lineHeight: '1.6rem',
        margin: '1.3rem auto 0 auto',
        width: '94%'
    },
    foodSection: {
        marginTop: '3rem'
    },
    reservationSection: {
        alignItems: 'center',
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4)), url(${reservationImage})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        height: 250,//'94vh',
        justifyContent: 'center',
        padding: '2rem 5%',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4)), url(${reservationImageTablet})`,
            padding: '2rem 10%',
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4)), url(${reservationImageDesktop})`,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 240
        },
        [theme.breakpoints.up('lg')]: {
        }
    },
    reservationSectionTitle: {
        color: white,
        fontWeight: 700,
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.8rem'
        }
    },
    reservationSectionLink: {
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
        },
        [theme.breakpoints.up('lg')]: {
            width: '20%'
        }
    }
}));

export {
    useStyles
}