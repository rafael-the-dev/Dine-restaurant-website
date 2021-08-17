import { Container, Typography, Grid, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import heroImage from '../../assets/images/homepage/hero-bg-mobile.jpg';
import heroImageTablet from '../../assets/images/homepage/hero-bg-tablet.jpg';
import heroImageDesktop from '../../assets/images/homepage/hero-bg-desktop.jpg';

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
            height: 600
        },
        [theme.breakpoints.up('lg')]: {
            height: 700
        }
    },
    heroPaper: {
        backgroundColor: 'transparent',
        color: '#FFF',
        marginBottom: '4rem',
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
    }
}));

const Home = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Container component="main" disableGutters className={classes.homeMain}>
            <Grid container alignItems="flex-end" component="section" className={classes.homeHero}>
                <Grid item xs={12} md={6} component={Paper} elevation={0} className={classes.heroPaper}>
                    <Typography component="h1" variant="h4" className={classes.heroTitle}>
                        Exquisite dining<br/>since 1989
                    </Typography>
                    <Typography component="p" variant="body2" className={classes.heroDescription}>
                        Experience our seasonal menu in beautiful country surroundings. Eat the 
                        freshest produce from the comfort of our farmhouse.
                    </Typography>
                    <Link href="/" onClick={preventDefault}  className={classes.heroLink}>
                        Link
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Home;