import { Grid, Paper, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles.js';
import logo from '../../assets/icons/logo.svg';
import { useDisplay, useTypography, useResponsive } from '../../styles';
import classNames from 'classnames';

const Footer = () => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();
    const responsive = useResponsive();

    return (
        <Grid container component="footer" className={classNames(classes.footer, responsive.px)}>
            <Grid item component={Paper} xs={12} sm={4} md={3} className={classes.footerPaper}>
                <Link to="/" className={classNames(classes.footerLogoContainer, display.block)}>
                    <img src={logo} alt="Logo" className={classNames(classes.footerLogo, display.block)} />
                </Link>
            </Grid>
            <Grid item container xs={12} sm={8} md={9}>
                <Grid item component={Paper} xs={12} md={6} xxl={5} elevation={0} className={classNames(classes.footerPaper)}>
                    <Typography 
                        component="address" 
                        variant="body2" 
                        className={classNames(classes.footerAddress, classes.footerText, text.center, text.uppercase, text.smStart)}>
                        Marthwaite, Sedbergh<br/>Cumbria<br/>+00 44 123 4567
                    </Typography>
                </Grid>
                <Grid item component={Paper} xs={12} md={6} xxl={7} elevation={0} 
                    className={classNames(classes.footerTextPaper, classes.footerPaper)}>
                    <Typography 
                        component="p" 
                        variant="body2" 
                        className={classNames(classes.footerTime, classes.footerText, text.center, text.uppercase, text.smStart)}>
                       Open times<br/>
                       <time>Mon - Fri: 09:00 am - 10:00 pm</time><br/>
                       <time>Sat - Sun: 09:00 am - 11:30 pm</time>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;