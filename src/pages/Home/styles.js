import { makeStyles } from '@material-ui/core/styles';
import heroImage from '../../assets/images/homepage/hero-bg-mobile.jpg';
import heroImageTablet from '../../assets/images/homepage/hero-bg-tablet.jpg';
import heroImageDesktop from '../../assets/images/homepage/hero-bg-desktop.jpg';
import reservationImage from '../../assets/images/homepage/ready-bg-mobile.jpg';
import reservationImageTablet from '../../assets/images/homepage/ready-bg-tablet.jpg';
import reservationImageDesktop from '../../assets/images/homepage/ready-bg-desktop.jpg';
import { beaver, ebonyClay, white, codGrey } from '../../styles/colors.js';

const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4))';
const linearGradientTablet = 'linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4))';

const useStyles = makeStyles(theme => ({ //
    homeHero: {
        backgroundImage: `${linearGradient}, url(${heroImage})`,
        backgroundPosition: 'center top',
        height: 550,//'94vh',
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradientTablet}, url(${heroImageTablet})`,
            height: 700
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradientTablet}, url(${heroImageDesktop})`,
            height: 600,
        },
        [theme.breakpoints.up('lg')]: {
            height: 700
        }
    },
    heroPaper: {
        backgroundColor: 'transparent',
        color: white,
        marginBottom: '8rem',
        [theme.breakpoints.up('md')]: {
            marginBottom: 0
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
        border: `1px solid ${white}`,
        borderRadius: 3,
        color: white,
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
            backgroundColor: white,
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
        paddingBottom: '4rem',
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '2rem',
            '&:nth-child(odd)': {
                flexDirection: 'row-reverse'
            }
        }
    },
    servicesImageContainer: {
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        height: 350,
        transform: 'translateY(-60px)',
        zIndex: 10,
        [theme.breakpoints.up('sm')]: {
            height: 300,
            transform: 'translateY(0)'
        },
        [theme.breakpoints.up('md')]: {
            height: 350
        },
        [theme.breakpoints.up('lg')]: {
            height: 400
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
            margin: '0 auto 2.3rem auto',
            width: '20%',
            [theme.breakpoints.up('md')]: {
                marginLeft: 0,
                marginRight: 0,
                width: 77
            }
        }
    },
    servicesDescription: {
        fontSize: '.95rem',
        lineHeight: '1.6rem',
        margin: '1.3rem auto 0 auto',
        width: '94%',
        [theme.breakpoints.up('sm')]: {
            marginTop: '1rem',
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            margin: '1.3rem 0 0 0'
        },
        [theme.breakpoints.up('lg')]: {
            width: '80%'
        }
    },
    placesSection: {
        transform: 'translateY(-67px)',
        paddingBottom: 0
    },
    placesSectionContent: {
        [theme.breakpoints.up('md')]: {
            marginTop: '5rem',
            padding: '0 5%',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '0 5% 0 15%',
        }
    },
    foodSection: {
        marginTop: '4rem',
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
            transform: 'translateY(73px)'
        }
    },
    foodSectionContent: {
        [theme.breakpoints.up('md')]: {
            marginBottom: '3rem',
            paddingRight: '5%'
        }
    },
    gatheringSection: {
        paddingBottom: '2rem',
        paddingTop: '2rem',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '4rem',
            paddingTop: '5rem'
        }
    },
    gatheringSectionImageContainer: {
        [theme.breakpoints.up('md')]: {
            height: 450
        }
    },
    gatheringSectionContentContainer: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '3rem'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '10%',
            flexDirection: 'column-reverse'
        }
    },
    gatheringSectionButtonGroup: {
    },
    gatheringSectionButton: {
        border: 'none !important',
        fontSize: '.8rem',
        opacity: .8,
        transition: '400ms all ease',
        '&:not(.active):hover': {
            backgroundColor: 'transparent !important',
            color: codGrey,
            fontSize: '.85rem',
            fontWeight: 700
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0
        }
    },
    gatheringSectionContent: {
        marginTop: '2rem',
        [theme.breakpoints.up('md')]: {
            marginBottom: '2rem',
            marginTop: 0
        }
    },
    gatheringSectionLink: {
        backgroundColor: codGrey,
        border: `none`,
        color: white,
        '&:hover': {
            backgroundColor: 'transparent',
            border: `1px solid ${codGrey}`,
            color: codGrey,
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: '3rem'
        }
    },
    reservationSection: {
        backgroundImage: `${linearGradient}, url(${reservationImage})`,
        backgroundPosition: 'center top',
        height: 250,//'94vh',
        paddingBottom: '2rem',
        paddingTop: '2rem',
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradientTablet}, url(${reservationImageTablet})`,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `${linearGradientTablet}, url(${reservationImageDesktop})`,
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
    },
    highlights: {
        backgroundColor: codGrey,
        paddingBottom: '2rem',
        paddingTop: '4rem',
        [theme.breakpoints.up('md')]: {
            paddingBottom: '3rem',
            paddingTop: '7rem',
        }
    },
    highlighsTitle: {
        color: white,
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.7rem'
        }
    },
    highlightDescription: {
        [theme.breakpoints.up('md')]: {
            marginLeft: 0,
            marginRight: 0
        }
    },
    highlightCardsContainer: {
        marginTop: '3.5rem',
        [theme.breakpoints.up('sm')]: {
            marginTop: 0
        }
    }
}));

export {
    useStyles
}