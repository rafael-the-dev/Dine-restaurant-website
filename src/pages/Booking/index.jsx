import { Container, Typography, Grid, Paper, Link, TextField, MenuItem, Button } from '@material-ui/core';
import Footer from '../../components/Footer';
import { useBackground, useDisplay, useResponsive, useTypography, useServices } from '../../styles';
import { useStyles } from './styles.js';
import classNames from 'classnames';
import { useState } from 'react';

const Booking = () => {
    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();
    const bg = useBackground();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();
    const services = useServices();

    const options = [{ value: 'am', label: 'AM'}, { value: 'pm', label: 'PM'}];
    const [ guests, setGuests ] = useState(1); 
    const decresaeGuestsNumber = () => {
        let number = guests  - 1;
        if(number === 0) {
            number = 1;
        }
        setGuests(g => number);
    };

    const incresaeGuestsNumber = () => {
        let number = guests  + 1;

        if(number === 8) {
            number = 7;
        }
        setGuests(g => number);
    }

    return (
        <>
            <Container component="main" maxWidth={false} disableGutters className={classes.homeMain}>
                <Grid container alignItems="flex-end" component="section" 
                    className={classNames(classes.bookingHero, bg.noRepeat, bg.cover, 
                    display.flex, display.alignStart, responsive.alignMDCenter, responsive.px)}>
                    <Grid item xs={12} md={7} component={Paper} elevation={0} 
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
                <Container maxWidth={false}  className={classNames(classes.px, )}>
                    <Paper component="form" autoComplete="off" className={classNames(classes.bookingForm)}>
                        <TextField 
                            id="standard-basic" 
                            label="Name" 
                            fullWidth
                            margin="normal"
                        />
                        <TextField 
                            id="standard-basic2" 
                            label="Email" 
                            fullWidth
                            margin="normal"
                        />
                        <Paper elevation={0} className={classNames(classes.paper)}>
                            <labeL className={classNames(classes.bookingLabel)}>Pick a day</labeL>
                            <Paper elevation={0} className={classNames(display.flex, display.justifyBetween, classes.bookingFormPaper)}>
                                <TextField 
                                    id="standard-basic" 
                                    label="MM" 
                                    className={classNames(classes.bookingInput)}
                                />
                                <TextField 
                                    id="standard-basic" 
                                    label="DD" 
                                    className={classNames(classes.bookingInput)}
                                />
                                <TextField 
                                    id="standard-basic" 
                                    label="YYYY" 
                                    className={classNames(classes.bookingInput)}
                                />
                            </Paper>
                        </Paper>
                        <Paper elevation={0} className={classNames(classes.paper)}>
                            <labeL className={classNames(classes.bookingLabel)}>Pick a time</labeL>
                            <Paper elevation={0} className={classNames(display.flex, display.justifyBetween, classes.bookingFormPaper)}>
                                <TextField 
                                    id="standard-basic" 
                                    label="MM" 
                                    className={classNames(classes.bookingInput)}
                                />
                                <TextField 
                                    id="standard-basic" 
                                    label="DD" 
                                    className={classNames(classes.bookingInput)}
                                />
                                <TextField 
                                    id="standard-basic" 
                                    select
                                    label=" " 
                                    value="AM"
                                    className={classNames(classes.bookingInput)}
                                >
                                    {options.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Paper>
                        </Paper>
                        <Paper elevation={0} 
                            className={classNames(display.flex, display.justifyBetween, display.alignCenter, classes.paper, 
                            classes.bookingActionsContainer)}>
                            <Button className={classNames(classes.bookingActionButton)} onClick={decresaeGuestsNumber}>-</Button>
                            <label 
                                className={classNames(text.weight7, classes.bookingGuestsLabel)}>
                                    {guests} {guests === 1 ? 'person' : 'people'}
                                </label>
                            <Button className={classNames(classes.bookingActionButton)} onClick={incresaeGuestsNumber}>+</Button>
                        </Paper>
                        <Button className={classNames(services.link, text.uppercase, classes.bookingSumbit)}>Make reservation</Button>
                    </Paper>
                </Container>
            </Container>
            <Footer />
        </>
    );
};

export default Booking;