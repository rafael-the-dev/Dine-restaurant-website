import { Container, Typography, Grid, Paper, Link } from '@material-ui/core';
import enjoyablePlace from '../../assets/images/homepage/enjoyable-place-mobile.jpg';
import { useCallback, useEffect, useRef } from 'react';
import { useStyles } from './styles.js';
import Footer from '../../components/Footer';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';


const Home = () => {
    const classes = useStyles();
    const bg = useBackground();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    const preventDefault = (event) => event.preventDefault();
    const placesRef = useRef(null);

    const setImage = useCallback((ref, name) => {
        import(`../../assets/images/homepage/${name}`)
            .then(image => ref.current.src = image.default);
    }, [ ]);

    const imageFilter = useCallback((ref, width) => {
        if(width >=768) {
            setImage(ref, 'enjoyable-place-desktop.jpg');
        } else if(width >= 576) {
            setImage(ref, 'enjoyable-place-tablet.jpg');
        } else {
            setImage(ref, 'enjoyable-place-mobile.jpg');
        }
    }, [ setImage ]);

    useEffect(() => {
        imageFilter(placesRef, window.innerWidth);

        window.addEventListener('resize', event => {
            let width = event.target.innerWidth; 
            imageFilter(placesRef, width)
        });

        return () => window.onresize = null;
    }, [ imageFilter ]);

    return (
        <>
            <Container component="main" disableGutters className={classes.homeMain}>
            <Grid container alignItems="flex-end" component="section" 
                className={`${classes.homeHero} ${bg.noRepeat} ${bg.cover} 
                ${display.flex} ${responsive.alignMDCenter}`}>
                <Grid item xs={12} md={6} component={Paper} elevation={0} 
                    className={`${classes.heroPaper} ${text.center} ${text.mdStart}`}>
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
            <Grid container component="section" className={classes.services} >
                <Grid item xs={12} md={6} component="figure" className={classes.servicesImageContainer}>
                    <img ref={placesRef} src={enjoyablePlace} alt="Enjoyable places for the all family" className={classes.servicesImage} />
                </Grid>
                <Grid item xs={12} md={6} className={classes.servicesContent}>
                    <Typography component="h2" variant="h5" gutterBottom className={classes.servicesSubTitle} >
                        Enjoyable place<br/>for all the family
                    </Typography>
                    <Typography component="p" variant="body2" className={classes.servicesDescription}>
                        Our relaxed surroundings make dining with us a great experience for 
                        everyone. We can even arrange a tour of the farm before your meal.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container component="section" className={`${classes.services} ${classes.foodSection}`} >
                <Grid item xs={12} md={6} component="figure" className={ classes.servicesImageContainer }>
                    <img ref={placesRef} src={enjoyablePlace} alt="Enjoyable places for the all family" className={classes.servicesImage} />
                </Grid>
                <Grid item xs={12} md={6} className={classes.servicesContent}>
                    <Typography component="h2" variant="h5" gutterBottom className={classes.servicesSubTitle} >
                        The most locally<br/>sourced food
                    </Typography>
                    <Typography component="p" variant="body2" className={classes.servicesDescription}>
                        All our ingredients come directly from our farm or local fishery. So 
                        you can be sure that you’re eating the freshest, most sustainable food.
                    </Typography>
                </Grid>
            </Grid>
            <Container maxWidth="false" className={`${classes.reservationSection} ${bg.noRepeat} ${bg.cover} ${display.flex}
                ${display.flexColumn} ${display.justifyCenter} ${display.alignCenter} ${responsive.flexMDRow} 
                ${responsive.justifyMDBetween} ${text.center}`}>
                <Typography component="h2" variant="h5" className={classes.reservationSectionTitle}>
                    Ready to make a reservation?
                </Typography>
                <Link href="/" onClick={preventDefault}  className={`${classes.heroLink} ${classes.reservationSectionLink}`}>
                    Link
                </Link>
            </Container>
        </Container>
            <Footer />
        </>
    )
};

export default Home;