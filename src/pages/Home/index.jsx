import { Container, Typography, Grid, Paper, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import heroImage from '../../assets/images/homepage/hero-bg-mobile.jpg';

const useStyles = makeStyles(theme => ({ //
    homeHero: {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .4)), url(${heroImage})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        height: '90vh',
        padding: '0 5%'
    },
    heroPaper: {
        backgroundColor: 'transparent',
        color: '#FFF',
        marginTop: '5rem',
        textAlign: 'center'
    },
    heroDescription: {
        margin: '1rem auto 0 auto',
        lineHeight: '1.5rem',
        width: '90%'
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
        textDecoration: 'none',
        width: '60%'
    }
}));

const Home = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Container component="main" disableGutters>
            <Grid container alignItems="center" component="section" className={classes.homeHero}>
                <Grid item xs={12} sm={5} component={Paper} elevation={0} className={classes.heroPaper}>
                    <Typography component="h1" variant="h4">
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