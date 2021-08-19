import React from 'react';
import { Typography, Grid, Paper, Link, ButtonGroup, Button } from '@material-ui/core';
import { useDisplay, useResponsive, useTypography, useServices } from '../../styles';
import classNames from 'classnames';
import { useStyles } from './styles.js';

const GatheringSection = React.forwardRef(({familyGatheringClickHandler, specialEventsClickHandler, 
    socialEventsClickHandler, name, carossel, title, description }, ref) => { 
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();
    const services = useServices();

   // console.log(classNames({[classes.active]: name === carossel}))

    const preventDefault = (event) => event.preventDefault();

    return (
        <Grid container item xs={12} className={classNames({[classes.displaySection]: name === carossel}, 
            classes.gatheringSection, responsive.px, responsive.AlignMDCenter)} component="section">
            <Grid item xs={12} md={6} lg={5} xl={4} component="figure" className={services.imageContainer}>
                <img ref={ref}  alt="Enjoyable places for the all family" className={services.image} />
            </Grid>
            <Grid container item direction="column" xs={12} md={6} lg={7} xl={8} className={`${classes.gatheringSectionContentContainer}`}>
                <ButtonGroup 
                    disableElevation 
                    variant="text" 
                    aria-label="small outlined button group"
                    className={classNames(classes.gatheringSectionButtonGrOUP, display.flex, display.flexColumn,
                    display.alignCenter, text.uppercase, responsive.flexSMRow, responsive.alignSMCenter,
                    display.justifyCenter, responsive.flexMDColumn, responsive.alignMDStart)}>
                    <Button className={classNames(classes.gatheringSectionButton, {[classes.active]: 'family' === carossel})} onClick={familyGatheringClickHandler}>Family gathering</Button>
                    <Button className={classNames(classes.gatheringSectionButton, {[classes.active]: 'special' === carossel})} onClick={specialEventsClickHandler}>Special Events</Button>
                    <Button className={classNames(classes.gatheringSectionButton, {[classes.active]: 'social' === carossel})} onClick={socialEventsClickHandler}>Social Events</Button>
                </ButtonGroup>
                <Paper elevation={0} className={classNames(services.content, classes.gatheringSectionContent)}>
                    <Typography component="h2" variant="h5" gutterBottom className={services.subTitle} >
                        { title }
                    </Typography>
                    <Typography component="p" variant="body2" className={services.description}>
                        { description }
                    </Typography>
                    <Link href="/" onClick={preventDefault}  className={classNames(services.link, classes.gatheringSectionLink)}>
                        Link
                    </Link>
                </Paper>
            </Grid>
        </Grid>
    );
});

export default GatheringSection;