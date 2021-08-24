import React from 'react';
import { Typography, Grid, Paper, ButtonGroup, Button } from '@material-ui/core';
import { useDisplay, useResponsive, useTypography, useServices } from '../../styles';
import classNames from 'classnames';
import { useStyles } from './styles.js';
import { Link } from 'react-router-dom';

const GatheringSection = React.forwardRef(({familyGatheringClickHandler, specialEventsClickHandler, 
    socialEventsClickHandler, name, carossel, title, description }, ref) => { 
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();
    const services = useServices();

    return (
        <Grid container item xs={12} className={classNames({[classes.displaySection]: name === carossel}, 
            classes.gatheringSection, responsive.px, responsive.AlignLGCenter)} component="section">
            <Grid item xs={12} md={12} lg={5} xl={4} component="figure" 
                className={classNames(classes.gatheringSectionImageContainer, services.imageContainer)}>
                <img ref={ref}  alt={ title } className={services.image} />
            </Grid>
            <Grid container item direction="column" xs={12} md={12} lg={7} xl={8} className={`${classes.gatheringSectionContentContainer}`}>
                <ButtonGroup 
                    disableElevation 
                    variant="text" 
                    aria-label="small outlined button group"
                    className={classNames(classes.gatheringSectionButtonGrOUP, display.flex, display.flexColumn,
                    display.alignCenter, text.uppercase, responsive.flexSMRow, responsive.alignSMCenter,
                    display.justifyCenter, responsive.flexLGColumn, responsive.alignLGStart)}>
                    <Button className={classNames(classes.gatheringSectionButton, {[classes.active]: 'family' === carossel})} onClick={familyGatheringClickHandler}>Family gathering</Button>
                    <Button className={classNames(classes.gatheringSectionButton, {[classes.active]: 'special' === carossel})} onClick={specialEventsClickHandler}>Special Events</Button>
                    <Button className={classNames(classes.gatheringSectionButton, {[classes.active]: 'social' === carossel})} onClick={socialEventsClickHandler}>Social Events</Button>
                </ButtonGroup>
                <Paper elevation={0} className={classNames(services.content, classes.gatheringSectionContent)}>
                    <Typography component="h2" variant="h5" gutterBottom className={classNames(services.subTitle, classes.gatheringSectionTitle)} >
                        { title }
                    </Typography>
                    <Typography component="p" variant="body2" className={classNames(services.description, classes.gatheringSectionDescription)}>
                        { description }
                    </Typography>
                    <Link to="/booking" className={classNames(text.uppercase, services.link, classes.gatheringSectionLink)}>
                        Book a table
                    </Link>
                </Paper>
            </Grid>
        </Grid>
    );
});

export default GatheringSection;