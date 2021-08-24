import { Container, Typography, Grid, Paper } from '@material-ui/core';
import { useCallback, useEffect, useRef } from 'react';
import { useStyles } from './styles.js';
import Footer from '../../components/Footer';
import { useBackground, useDisplay, useResponsive, useTypography, useServices } from '../../styles';
import HighlightCard from '../../components/HighlightCard';
import React from 'react';
import classNames from 'classnames';
import logo from '../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import Carossel from '../../components/Carossel';

import enjoyablePlaceDesktop from '../../assets/images/homepage/enjoyable-place-desktop.jpg';
import enjoyablePlaceTablet from '../../assets/images/homepage/enjoyable-place-tablet.jpg';
import enjoyablePlace from '../../assets/images/homepage/enjoyable-place-mobile.jpg';

import foodImageDesktop from '../../assets/images/homepage/locally-sourced-desktop.jpg';
import foodImageTablet from '../../assets/images/homepage/locally-sourced-tablet.jpg';
import foodImage from '../../assets/images/homepage/locally-sourced-mobile.jpg';

import salmonImageTablet from '../../assets/images/homepage/salmon-desktop-tablet.jpg';
import salmonImage from '../../assets/images/homepage/salmon-mobile.jpg';

import beefImageTablet from '../../assets/images/homepage/beef-desktop-tablet.jpg';
import beefImage from '../../assets/images/homepage/beef-mobile.jpg';

import chocolateImageTablet from '../../assets/images/homepage/chocolate-desktop-tablet.jpg';
import chocolateImage from '../../assets/images/homepage/chocolate-mobile.jpg';

import familyGatheringDesktop from '../../assets/images/homepage/family-gathering-desktop.jpg';
import familyGatheringTablet from '../../assets/images/homepage/family-gathering-tablet.jpg';
import familyGathering from '../../assets/images/homepage/family-gathering-mobile.jpg';

import specialEventsDesktop from '../../assets/images/homepage/special-events-desktop.jpg';
import specialEventsTablet from '../../assets/images/homepage/special-events-tablet.jpg';
import specialEvents from '../../assets/images/homepage/special-events-mobile.jpg';

import socialEventsDesktop from '../../assets/images/homepage/social-events-desktop.jpg';
import socialEventsTablet from '../../assets/images/homepage/social-events-tablet.jpg';
import socialEvents from '../../assets/images/homepage/social-events-mobile.jpg';



const Home = () => {
    const classes = useStyles();
    const bg = useBackground();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();
    const services = useServices();

    const placesRef = useRef(null);
    const card1ImageRef = React.createRef();
    const card2ImageRef = React.createRef();
    const card3ImageRef = React.createRef();
    const foodImageRef = React.createRef();
    const specialEventRef = React.createRef();
    const familyGatheringRef = React.createRef();
    const socialEventRef = React.createRef();


    const setImage = useCallback((ref, image) => {
        if(ref.current !== null) {
            ref.current.src = image;
        }
    }, [ ]);

    const imageFilter = useCallback(width => {
        if(width >=992) {
            setImage(placesRef, enjoyablePlaceDesktop);
            setImage(foodImageRef, foodImageDesktop);
            setImage(card1ImageRef, salmonImageTablet);
            setImage(card2ImageRef, beefImageTablet);
            setImage(card3ImageRef, chocolateImageTablet);
            setImage(familyGatheringRef, familyGatheringDesktop);
            setImage(specialEventRef, specialEventsDesktop);
            setImage(socialEventRef, socialEventsDesktop);
        } else if(width >= 576) {
            setImage(placesRef, enjoyablePlaceTablet);
            setImage(foodImageRef, foodImageTablet);
            setImage(card1ImageRef, salmonImageTablet);
            setImage(card2ImageRef, beefImageTablet);
            setImage(card3ImageRef, chocolateImageTablet);
            setImage(familyGatheringRef, familyGatheringTablet);
            setImage(specialEventRef, specialEventsTablet);
            setImage(socialEventRef, socialEventsTablet);
        } else {
            setImage(placesRef, enjoyablePlace);
            setImage(foodImageRef, foodImage);
            setImage(card1ImageRef, salmonImage);
            setImage(card2ImageRef, beefImage);
            setImage(card3ImageRef, chocolateImage);
            setImage(familyGatheringRef, familyGathering);
            setImage(specialEventRef, specialEvents);
            setImage(socialEventRef, socialEvents);
        }
    }, [ setImage, placesRef, foodImageRef, card1ImageRef, card2ImageRef, card3ImageRef, familyGatheringRef, specialEventRef, socialEventRef ]);

    useEffect(() => {
        imageFilter(window.innerWidth);

        window.addEventListener('resize', event => {
            imageFilter(event.target.innerWidth)
        });

        return () => window.onresize = null;
    }, [ imageFilter ]);

    return (
        <>
            <Container component="main" maxWidth={false} disableGutters className={classes.homeMain}>
                <Grid container alignItems="flex-end" component="section" 
                    className={classNames(classes.homeHero, bg.noRepeat, bg.cover, 
                    display.flex, responsive.alignMDStart, responsive.px, display.alignCenter, display.justifyCenter,
                    responsive.justifyMDBetween)}>
                    <Grid item component="header" xs={12} className={classNames(services.header, display.flex, 
                        display.justifyCenter, responsive.justifySMStart, classes.heroHeader)}>
                        <Link to="/" className={classNames(display.block, services.logoContainer)}>
                            <img src={logo} className={classNames(display.block, services.logo)} alt="logo" />
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={7} component={Paper} elevation={0} 
                        className={`${classes.heroPaper} ${text.center} ${text.mdStart}`}>
                        <Typography component="h1" variant="h4" className={classes.heroTitle}>
                            Exquisite dining<br/>since 1989
                        </Typography>
                        <Typography component="p" variant="body2" className={classes.heroDescription}>
                            Experience our seasonal menu in beautiful country surroundings. Eat the 
                            freshest produce from the comfort of our farmhouse.
                        </Typography>
                        <Link to="/booking"  className={classNames(classes.heroLink, text.uppercase)}>
                            Book a table
                        </Link>
                    </Grid>
                </Grid>
                <Grid container component="section" className={classNames(classes.services, classes.placesSection, 
                     responsive.px, responsive.AlignMDCenter)}>
                    <Grid item xs={12} md={6} lg={5} xl={4} component="figure" className={classes.servicesImageContainer}>
                        <img ref={placesRef} alt="Enjoyable places for the all family" className={classes.servicesImage} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={7} xl={8} className={classNames(classes.servicesContent, classes.placesSectionContent)}>
                        <Typography component="h2" variant="h5" gutterBottom className={classes.servicesSubTitle} >
                            Enjoyable place<br/>for all the family
                        </Typography>
                        <Typography component="p" variant="body2" className={classes.servicesDescription}>
                            Our relaxed surroundings make dining with us a great experience for 
                            everyone. We can even arrange a tour of the farm before your meal.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container component="section" className={classNames(classes.services, classes.foodSection, 
                     responsive.px, responsive.AlignMDCenter)} >
                         <Grid item xl={1}></Grid>
                    <Grid item xs={12} md={6} lg={5} xl={4} component="figure" className={ classes.servicesImageContainer }>
                        <img ref={foodImageRef} alt="Enjoyable places for the all family" className={classes.servicesImage} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={7} xl={7} className={`${classes.servicesContent} ${classes.foodSectionContent}`}>
                        <Typography component="h2" variant="h5" gutterBottom className={classes.servicesSubTitle} >
                            The most locally<br/>sourced food
                        </Typography>
                        <Typography component="p" variant="body2" className={classes.servicesDescription}>
                            All our ingredients come directly from our farm or local fishery. So 
                            you can be sure that you’re eating the freshest, most sustainable food.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container component="section" className={classNames(classes.highlights, responsive.px)}>
                    <Grid item xs={12} md={4} component={Paper} elevation={0} className={classNames(text.center, 
                        text.mdStart, text.light, bg.transparent)}>
                        <Typography component="h2" variant="h5" className={classNames(classes.servicesSubTitle, classes.highlighsTitle)}>
                            A few highlights<br/>from our manu
                        </Typography>
                        <Typography component="p" variant="body2" className={`${classes.servicesDescription} 
                            ${classes.highlightDescription}`}>
                            We cater for all dietary requirements, but here’s a glimpse at some 
                            of our diner’s favourites. Our menu is revamped every season.
                        </Typography>
                    </Grid>
                    <Grid item lg={1}></Grid>
                    <Grid item xs={12} md={8} lg={7} component={Paper} elevation={0} 
                        className={classNames(bg.transparent, classes.highlightCardsContainer)}>
                        <HighlightCard ref={card1ImageRef} 
                            title="Seared Salmon Fillet"
                            description="Our locally sourced salmon served with a refreshing buckwheat summer salad."
                         />
                         <HighlightCard ref={card2ImageRef} 
                            title="Rosemary Filet Mignon"
                            description="Our prime beef served to your taste with a delicious choice of seasonal sides."
                         />
                         <HighlightCard ref={card3ImageRef} 
                            title="Summer Fruit Chocolate Mousse"
                            description="Creamy mousse combined with summer fruits and dark chocolate shavings."
                         />
                    </Grid>
                </Grid>
                <Carossel familyImageRef={familyGatheringRef} socialImageRef={socialEventRef} specialImageRef={specialEventRef} />
                <Container maxWidth={false} className={classNames(classes.reservationSection, bg.noRepeat, bg.cover, display.flex,
                    display.flexColumn, display.justifyCenter, display.alignCenter, responsive.flexMDRow, 
                    responsive.justifyMDBetween, text.center, responsive.px)} component="section">
                    <Typography component="h2" variant="h5" className={classNames(classes.reservationSectionTitle)}>
                        Ready to make a reservation?
                    </Typography>
                    <Link to="/booking" className={classNames(text.uppercase, classes.heroLink, classes.reservationSectionLink)}>
                        Book a table
                    </Link>
                </Container>
            </Container>
            <Footer />
        </>
    )
};

export default Home;