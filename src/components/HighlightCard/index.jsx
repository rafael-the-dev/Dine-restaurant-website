import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles.js';
import { useTypography, useBackground, useResponsive } from '../../styles';
import image from '../../assets/images/homepage/salmon-mobile.jpg';

const HighlightCard = React.forwardRef(({ title, description}, ref) => {
    const classes  = useStyles();
    const text = useTypography();
    const bg = useBackground();
    const responsive = useResponsive();

    return (
        <Card  component="article" className={`${bg.transparent} ${classes.highlightCard} ${responsive.smFlex} ${responsive.alignSMCenter}`}>
            <CardMedia
                ref={ref}
                className={`${classes.highlightCardImage}`}
                image={image}
                title="Contemplative Reptile"
                />
            <CardContent className={`${text.center} ${bg.highlightCardContent} ${text.smStart} ${classes.highlightCardContent}`}>
                <Typography gutterBottom variant="h6" component="h3" className={`${text.light} ${text.weight7}
                    ${classes.highlightCardTitle}`}>
                    { title }
                </Typography>
                <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    component="p"  
                    className={`${text.light} ${classes.highlightCardDescription}`}>
                    { description }
                </Typography>
            </CardContent>
        </Card>
    );
});

export default HighlightCard;