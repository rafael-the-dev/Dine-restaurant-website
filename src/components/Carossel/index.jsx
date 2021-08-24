import React, { useState } from 'react';
import GatheringSection from '../../components/GatheringSection';
import { Grid } from '@material-ui/core';

const Carossel = () => {
    const [ carossel, setCarossel ] = useState('family');

    const familyImageRef = React.createRef();
    const socialImageRef = React.createRef();
    const eventsImageRef = React.createRef();

    const familyGatheringClickHandler = () => setCarossel(c => 'family');
    const specialEventsClickHandler = () => setCarossel(c => 'special');
    const socialEventsClickHandler = () => setCarossel(c => 'social');

    return (
        <Grid container component="section" >
            <GatheringSection 
                ref={familyImageRef} 
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
                ref={socialImageRef} 
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
                ref={eventsImageRef} 
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
    );
};

export default Carossel;