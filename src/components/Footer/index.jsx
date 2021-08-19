import { Grid, Paper, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles.js';
import logo from '../../assets/icons/logo.svg';
import { useDisplay, useTypography, useResponsive } from '../../styles'

const Footer = () => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();
    const responsive = useResponsive();

    return (
        <Grid container component="footer" className={`${classes.footer} ${responsive.px}`}>
            <Grid item component={Paper} xs={12} sm={4} md={3} className={classes.footerPaper}>
                <Link to="/" className={`${classes.footerLogoContainer} ${display.block}`}>
                    <img src={logo} alt="Logo" className={`${classes.footerLogo} ${display.block}`} />
                </Link>
            </Grid>
            <Grid item container xs={12} sm={8} md={9}>
                <Grid item component={Paper} xs={12} md={6} xxl={5} elevation={0} className={`${classes.footerPaper}`}>
                    <Typography 
                        component="address" 
                        variant="body2" 
                        className={`${classes.footerAddress} ${classes.footerText} ${text.center} ${text.uppercase} ${text.smStart}`}>
                        Marthwaite, Sedbergh<br/>Cumbria<br/>+00 44 123 4567
                    </Typography>
                </Grid>
                <Grid item component={Paper} xs={12} md={6} xxl={7} elevation={0} className={`${classes.footerTextPaper} ${classes.footerPaper}`}>
                    <Typography 
                        component="p" 
                        variant="body2" 
                        className={`${classes.footerTime} ${classes.footerText} ${text.center} ${text.uppercase} ${text.smStart}`}>
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