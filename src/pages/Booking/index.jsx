import { Container, Typography, Grid, Paper, Link, TextField, MenuItem, Button  } from '@material-ui/core';
import Footer from '../../components/Footer';
import { useBackground, useDisplay, useResponsive, useTypography, useServices } from '../../styles';
import Mailcheck from "../../assets/js/mailcheck";
import { useStyles } from './styles.js';
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";

const Booking = () => {
    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();
    const bg = useBackground();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();
    const services = useServices();

    const options = [{ value: 'AM', label: 'AM'}, { value: 'PM', label: 'PM'}];
    const [ guests, setGuests ] = useState(1); 
    const [ dayTime, setDayTime ] = useState('AM');

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
    };

    useEffect(() => {
        window.scrollBy({ 
            top: 0, // could be negative value
            left: 0, 
            behavior: 'smooth' 
          });
    }, [ ]);

    const selectChangeHandler = event => setDayTime(event.target.value);

    const requiredMessage = 'This field is required';
    const { register, handleSubmit, formState: { errors }, reset, setError, setValue, clearErrors } = useForm({  mode: 'onBlur', 
        reValidateMode: 'onBlur', shouldUnregister: false });
    const onSubmit = data => {
        console.log(data);
        reset();
    };

    const [ emailSuggestions, setEmailSuggestions ] = useState('');

    const domains = ['gmail.com', 'aol.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com', 'msn.com'];
    //const secondLevelDomains = ['hotmail']
    const topLevelDomains = ["com", "net", "org"];
    const emailPattern = new RegExp('[a-zA-z0-9]{2,30}@[a-zA-z]{3,15}.com?(.[a-z]{2})?', 'i') ;
    const checkEmail = event => {
        const value = event.target.value;
        if(value) {
            clearErrors('email');
            let emailSuggestion = '';
            Mailcheck.run({
                email: value,
                domains: domains,                       // optional
                topLevelDomains: topLevelDomains,       // optional
                //secondLevelDomains: secondLevelDomains, // optional
                suggested: function(suggestion) {
                    emailSuggestion = suggestion.full;
                }
            });
            console.log(emailSuggestion)
            if((!emailSuggestion) && (emailPattern.test(value))) {
                clearErrors('email');
                setEmailSuggestions(e => '');
            } else {
                setError('email', { type: 'pattern', message: 'Invalid email address'});
                setEmailSuggestions(e => emailSuggestion);
            }
        } else {
            setError('email', { type: 'required', message: requiredMessage })
        }
    };

    const emailRef = useRef(null);
    const labelClickHandler = () => {
        console.log(emailRef.current)
        if(emailRef.current) {
            emailRef.current.value = emailSuggestions
            clearErrors('email');
            //setValue('email', emailSuggestions);
            setEmailSuggestions(e => '');
        } 
    };

    const getEmailHelperText = type => {
        let helperText = '';

        if(type === 'required') {
            helperText = requiredMessage;
        } else if(type === 'pattern') {
            helperText = 'Invalid email address';
        }

        return helperText;
    };

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
                    <Paper 
                        component="form" autoComplete="off" 
                        className={classNames(classes.bookingForm)} 
                        onSubmit={handleSubmit(onSubmit)}>
                        <TextField 
                            label="Name" 
                            fullWidth
                            margin="normal"
                            error={errors.name?.type === 'required'}
                            helperText={errors.name?.type === 'required' ? requiredMessage : ''}
                            { ...register('name', { required: requiredMessage})}
                        />
                        <TextField 
                            type="email"
                            label="Email" 
                            fullWidth
                            margin="normal"
                            error={getEmailHelperText(errors.email?.type) ? true : false}
                            helperText={getEmailHelperText(errors.email?.type)}
                            { ...register('email', { required: true }) }
                            onBlur={checkEmail}
                            ref={emailRef}
                        />
                        { emailSuggestions ? (
                            <label 
                                className={classNames(display.block, classes.emailSuggestion)}  onClick={labelClickHandler}>
                                Do you mean <em className={classNames(classes.emailSuggestionHighlight)}>{emailSuggestions}</em>
                            </label>) : '' 
                        }
                        <Paper elevation={0} className={classNames(classes.paper)}>
                            <label className={classNames(classes.bookingLabel)}>Pick a day</label>
                            <Paper elevation={0} className={classNames(display.flex, display.justifyBetween, classes.bookingFormPaper)}>
                                <TextField 
                                    label="DD" 
                                    type="number"
                                    className={classNames(classes.bookingInput)}
                                    error={ errors.day?.type === 'required'  }
                                    { ...register('day', { required: true }) }
                                />
                                <TextField 
                                    label="MM" 
                                    type="number"
                                    className={classNames(classes.bookingInput)}
                                    { ...register('month', { required: true }) }
                                    error={ errors.month?.type === 'required' }
                                />
                                <TextField 
                                    label="YYYY" 
                                    type="number"
                                    className={classNames(classes.bookingInput)}
                                    { ...register('year', { required: true }) }
                                    error={ errors.year?.type === 'required' }
                                />
                            </Paper>
                        </Paper>
                        <Paper elevation={0} className={classNames(classes.paper)}>
                            <label className={classNames(classes.bookingLabel)}>Pick a time</label>
                            <Paper elevation={0} className={classNames(display.flex, display.justifyBetween, classes.bookingFormPaper)}>
                                <TextField 
                                    label="MM" 
                                    type="number"
                                    className={classNames(classes.bookingInput)}
                                    { ...register('hours', { required: true }) }
                                    error={ errors.hours?.type === 'required' }
                                />
                                <TextField 
                                    label="DD" 
                                    type="number"
                                    className={classNames(classes.bookingInput)}
                                    { ...register('minutes', { required: true }) }
                                    error={ errors.minutes?.type === 'required' }
                                />
                                <TextField 
                                    select
                                    label="select" 
                                    className={classNames(classes.bookingInput)}
                                    value={dayTime}
                                    onChange={selectChangeHandler}
                                    { ...register('dayTime', { required: true})}
                                    error={ errors.dayTime?.type === 'required' }
                                >
                                    {options.map(option => (
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
                        <Button 
                            type="submit" 
                            className={classNames(services.link, text.uppercase, classes.bookingSumbit)}>
                            Make reservation
                        </Button>
                    </Paper>
                </Container>
            </Container>
            <Footer />
        </>
    );
};

export default Booking;