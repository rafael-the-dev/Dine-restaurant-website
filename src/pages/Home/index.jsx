import { Container, Typography, Grid, Paper, Link } from '@material-ui/core';
import enjoyablePlace from '../../assets/images/homepage/enjoyable-place-mobile.jpg';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useStyles } from './styles.js';
import Footer from '../../components/Footer';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import HighlightCard from '../../components/HighlightCard';
import React from 'react';
import classNames from 'classnames';
import GatheringSection from '../../components/GatheringSection';


const Home = () => {
    const classes = useStyles();
    const bg = useBackground();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    const preventDefault = (event) => event.preventDefault();
    const placesRef = useRef(null);
    const card1ImageRef = React.createRef();

    const [ carossel, setCarossel ] = useState('family');

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

    const familyGatheringClickHandler = () => setCarossel(c => 'family');
    const specialEventsClickHandler = () => setCarossel(c => 'special');
    const socialEventsClickHandler = () => setCarossel(c => 'social');

    return (
        <>
            <Container component="main" maxWidth={false} disableGutters className={classes.homeMain}>
                <Grid container alignItems="flex-end" component="section" 
                    className={classNames(classes.homeHero, bg.noRepeat, bg.cover, 
                    display.flex, responsive.alignMDCenter, responsive.px)}>
                    <Grid item xs={12} md={7} component={Paper} elevation={0} 
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
                <Grid container component="section" className={classNames(classes.services, classes.placesSection, 
                     responsive.px, responsive.AlignMDCenter)}>
                    <Grid item xs={12} md={6} lg={5} xl={4} component="figure" className={classes.servicesImageContainer}>
                        <img ref={placesRef} src={enjoyablePlace} alt="Enjoyable places for the all family" className={classes.servicesImage} />
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
                        <img ref={placesRef} src={enjoyablePlace} alt="Enjoyable places for the all family" className={classes.servicesImage} />
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
                    <Grid item md={1}></Grid>
                    <Grid item xs={12} md={7} component={Paper} elevation={0} 
                        className={classNames(bg.transparent, classes.highlightCardsContainer)}>
                        <HighlightCard ref={card1ImageRef} 
                            title="Seared Salmon Fillet"
                            description="Our locally sourced salmon served with a refreshing buckwheat summer salad."
                         />
                         <HighlightCard ref={card1ImageRef} 
                            title="Rosemary Filet Mignon"
                            description="Our prime beef served to your taste with a delicious choice of seasonal sides."
                         />
                         <HighlightCard ref={card1ImageRef} 
                            title="Summer Fruit Chocolate Mousse"
                            description="Creamy mousse combined with summer fruits and dark chocolate shavings."
                         />
                    </Grid>
                </Grid>
                <Grid container component="section" >
                    <GatheringSection 
                        ref={placesRef} 
                        name="family" 
                        title="Family Gathering"
                        familyGatheringClickHandler={familyGatheringClickHandler} 
                        specialEventsClickHandler={specialEventsClickHandler}
                        socialEventsClickHandler={socialEventsClickHandler}
                        carossel={carossel}
                        description="We love catering for entire families. So please bring everyone along 
                        for a special meal with your loved ones. We’ll provide a memorable 
                        experience for all."
                    />
                    <GatheringSection 
                        ref={placesRef} 
                        name="special" 
                        title="Special Events"
                        familyGatheringClickHandler={familyGatheringClickHandler} 
                        specialEventsClickHandler={specialEventsClickHandler}
                        socialEventsClickHandler={socialEventsClickHandler}
                        carossel={carossel}
                        description="Whether it’s a romantic dinner or special date you’re celebrating with 
                        others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
                    />
                    <GatheringSection 
                        ref={placesRef} 
                        name="social" 
                        title="Social Events"
                        familyGatheringClickHandler={familyGatheringClickHandler} 
                        specialEventsClickHandler={specialEventsClickHandler}
                        socialEventsClickHandler={socialEventsClickHandler}
                        carossel={carossel}
                        description="Are you looking to have a larger social event? No problem! We’re more 
                        than happy to cater for big parties. We’ll work with you to make your event a hit with everyone."
                    />
                </Grid>
                <Container maxWidth={false} className={classNames(classes.reservationSection, bg.noRepeat, bg.cover, display.flex,
                    display.flexColumn, display.justifyCenter, display.alignCenter, responsive.flexMDRow, 
                    responsive.justifyMDBetween, text.center, responsive.px)} component="section">
                    <Typography component="h2" variant="h5" className={classNames(classes.reservationSectionTitle)}>
                        Ready to make a reservation?
                    </Typography>
                    <Link href="/" onClick={preventDefault}  className={classNames(classes.heroLink, classes.reservationSectionLink)}>
                        Link
                    </Link>
                </Container>
            </Container>
            <Footer />
        </>
    )
};

export default Home;