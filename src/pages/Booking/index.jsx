import { Container, Typography, Grid, Paper, Link } from '@material-ui/core';
import Footer from '../../components/Footer';
import { useBackground, useDisplay, useResponsive, useTypography, useServices } from '../../styles';
import { useStyles } from './styles.js';
import classNames from 'classnames';
import { useEffect } from 'react';
import Form from '../../components/Form';

const Booking = () => {
    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();
    const bg = useBackground();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();
    const services = useServices();

    useEffect(() => {
        window.scrollBy({ 
            top: 0, // could be negative value
            left: 0, 
            behavior: 'smooth' 
          });
    }, [ ]);

    return (
        <>
            <Container component="main" maxWidth={false} disableGutters className={classes.homeMain}>
                <Grid container alignItems="flex-end" component="section" 
                    className={classNames(classes.bookingHero, bg.noRepeat, bg.cover, 
                    display.flex, display.alignStart, responsive.alignMDCenter, responsive.px, responsive.alignLGEnd)}>
                    <Grid item xs={12} md={8} lg={7} component={Paper} elevation={0} 
                        className={classNames(classes.heroPaper, bg.transparent, text.center, text.mdStart)}>
                        <Typography component="h1" variant="h4" className={services.heroTitle}>
                            Exquisite dining<br/>since 1989
                        </Typography>
                        <Typography component="p" variant="body2" className={services.heroDescription}>
                            Experience our seasonal menu in beautiful country surroundings. Eat the 
                            freshest produce from the comfort of our farmhouse.
                        </Typography>
                        <Link href="/" onClick={preventDefault}  className={classNames(services.link, text.uppercase, classes.heroLink)}>
                            Reserve place
                        </Link>
                    </Grid>
                </Grid>
                <Container maxWidth={false} component="section"
                    className={classNames(classes.px, classes.bookingFormContainer)}>
                    <Form />
                </Container>
            </Container>
            <Footer />
        </>
    );
};

export default Booking;