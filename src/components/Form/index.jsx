import Mailcheck from "../../assets/js/mailcheck";
import { TextField, MenuItem, Button, Paper  } from '@material-ui/core';
import { useState } from 'react';
import { useForm, Controller  } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import {  useDisplay, useTypography, useServices } from '../../styles';
import { useStyles } from './styles.js';
import classNames from 'classnames';

const Form = () => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();
    const services = useServices();

    const options = [{ value: 'AM', label: 'AM'}, { value: 'PM', label: 'PM'}];
    const [ guests, setGuests ] = useState(1); 
    const [ dayTime, setDayTime ] = useState('AM');
    const [ emailSuggestions, setEmailSuggestions ] = useState('');

    const requiredMessage = 'This field is required';
    const { register, handleSubmit, formState: { errors }, reset, setError, control, setValue, clearErrors } = useForm({  mode: 'onBlur', 
        reValidateMode: 'onBlur', shouldUnregister: false });

    const history = useHistory();

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

    const handler = func => func();

    const onSubmit = event => {
        event.preventDefault();
        if(!emailSuggestions) {
            handler(handleSubmit(data => {
                data = { ...data, guests: guests};
                reset();
                history.push('/');
            }));
        }
    };

    const domains = ['gmail.com', 'aol.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com', 'msn.com'];
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

    const labelClickHandler = async() => {
        setValue('email', emailSuggestions);
        clearErrors('email');
        setEmailSuggestions(e => '');
    };

    const selectChangeHandler = event => setDayTime(event.target.value);

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
        <Paper 
            component="form" autoComplete="off" 
            className={classNames(classes.bookingForm)} 
            onSubmit={onSubmit}>
            <TextField 
                label="Name" 
                fullWidth
                margin="normal"
                error={errors.name?.type === 'required'}
                helperText={errors.name?.type === 'required' ? requiredMessage : ''}
                { ...register('name', { required: requiredMessage})}
            />
            <Controller
                control={control} 
                name="email"
                defaultValue=""
                rules={{ required: true, pattern: /[a-zA-z0-9]{2,30}@[a-zA-z]{3,15}\.com?(\.[a-z]{2})?/ }}
                render={({ field }) => ( //{ ... register('email', { required: true }) }
                    <TextField 
                        type="email"
                        label="Email"
                        fullWidth
                        margin="normal"
                        error={getEmailHelperText(errors.email?.type) ? true : false}
                        helperText={getEmailHelperText(errors.email?.type)}
                        { ...field }
                        onBlur={checkEmail}
                    />
                )}
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
    );
};

export default Form;