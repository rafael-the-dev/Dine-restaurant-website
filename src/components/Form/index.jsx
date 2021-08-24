import Mailcheck from "../../assets/js/mailcheck";
import { TextField, MenuItem, Button, Paper  } from '@material-ui/core';
import { useState } from 'react';
import { useForm, Controller  } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import {  useDisplay, useTypography, useServices } from '../../styles';
import { useStyles } from './styles.js';
import classNames from 'classnames';
import { useMemo, useCallback } from 'react';

const Form = () => {
    const classes = useStyles();
    const display = useDisplay();
    const text = useTypography();
    const services = useServices();

    const options = useMemo(() => [{ value: 'AM', label: 'AM'}, { value: 'PM', label: 'PM'}], [ ]);
    const [ guests, setGuests ] = useState(1); 
    const [ dayTime, setDayTime ] = useState('AM');
    const [ emailSuggestions, setEmailSuggestions ] = useState('');

    const requiredMessage = 'This field is required';
    const { register, handleSubmit, formState: { errors }, reset, setError, control, setValue, clearErrors } = useForm({  mode: 'onBlur', 
        reValidateMode: 'onBlur', shouldUnregister: false });

    const history = useHistory();

    const decresaeGuestsNumber = useCallback(() => {
        setGuests(oldNumber => {
            let number = oldNumber  - 1;

            if(number === 0) {
                number = 1;
            }
            return number;
        });
    }, [  ]);

    const incresaeGuestsNumber = useCallback(() => {
        setGuests(oldNumber => {
            let number = oldNumber  + 1;

            if(number === 8) {
                number = 7;
            }
            return number;
        });
    }, [  ]);

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

    const checkEmail = useCallback(event => {
        const value = event.target.value;
        if(value) {
            clearErrors('email');
            let emailSuggestion = '';
            const domains = ['gmail.com', 'aol.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com', 'msn.com'];
            const topLevelDomains = ["com", "net", "org"];
            const emailPattern = new RegExp('[a-zA-z0-9]{2,30}@[a-zA-z]{3,15}.com?(.[a-z]{2})?', 'i') ;
            
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
    }, [  setError, clearErrors,  ]);

    const labelClickHandler = useCallback(async() => {
        setValue('email', emailSuggestions);
        clearErrors('email');
        setEmailSuggestions(e => '');
    }, [ setValue, clearErrors, setEmailSuggestions, emailSuggestions ]);

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

    const nameFieldMemo = useMemo(() => (
        <TextField 
            label="Name" 
            fullWidth
            margin="normal"
            error={errors.name?.type === 'required'}
            helperText={errors.name?.type === 'required' ? requiredMessage : ''}
            { ...register('name', { required: requiredMessage})}
        />
    ), [  register, errors.name ]);

    const emailFieldMemo = useMemo(() => (
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
    ), [ errors.email, checkEmail, control ]);

    const dayFieldMemo = useMemo(() => (
        <TextField 
            label="DD" 
            type="number"
            className={classNames(classes.bookingInput)}
            error={ errors.day?.type === 'required'  }
            { ...register('day', { required: true }) }
        />
    ), [ errors.day, register, classes ]);

    const monthFieldMemo = useMemo(() => (
        <TextField 
            label="MM" 
            type="number"
            className={classNames(classes.bookingInput)}
            { ...register('month', { required: true }) }
            error={ errors.month?.type === 'required' }
        />
    ), [ register, errors.month, classes ]);

    const yearFieldMemo = useMemo(() => (
        <TextField 
            label="YYYY" 
            type="number"
            className={classNames(classes.bookingInput)}
            { ...register('year', { required: true }) }
            error={ errors.year?.type === 'required' }
        />
    ), [ register, errors.year, classes ]);

    const hoursFieldMemo = useMemo(() => (
        <TextField 
            label="MM" 
            type="number"
            className={classNames(classes.bookingInput)}
            { ...register('hours', { required: true }) }
            error={ errors.hours?.type === 'required' }
        />
    ), [ classes, register, errors.hours ]);

    const minuteFieldMemo = useMemo(() => (
        <TextField 
            label="DD" 
            type="number"
            className={classNames(classes.bookingInput)}
            { ...register('minutes', { required: true }) }
            error={ errors.minutes?.type === 'required' }
        />
    ), [ classes, register, errors.minutes ]);

    const selectFieldMemo = useMemo(() => (
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
    ), [ register, classes, errors.dayTime, options, dayTime ]);

    const suggestionLabelMemo = useMemo(() => (
        <label 
            className={classNames(display.block, classes.emailSuggestion)}  onClick={labelClickHandler}>
            Do you mean <em className={classNames(classes.emailSuggestionHighlight)}>{emailSuggestions}</em>
        </label>
    ), [ display, classes, emailSuggestions, labelClickHandler]);

    const guestsLabelMemo = useMemo(() => (
        <label 
            className={classNames(text.weight7, classes.bookingGuestsLabel)}>
            {guests} {guests === 1 ? 'person' : 'people'}
        </label>
    ), [ classes, text, guests ]);

    const decreaseButtonMemo = useMemo(() => (
        <Button className={classNames(classes.bookingActionButton)} onClick={decresaeGuestsNumber}>-</Button>
    ), [ classes, decresaeGuestsNumber ]);

    const increaseButtonMemo = useMemo(() => (
        <Button className={classNames(classes.bookingActionButton)} onClick={incresaeGuestsNumber}>+</Button>
    ), [ classes, incresaeGuestsNumber]);

    const submitMemo = useMemo(() => (
        <Button 
            type="submit" 
            className={classNames(services.link, text.uppercase, classes.bookingSumbit)}>
            Make reservation
        </Button>
    ), [ services, text, classes ]);

    return (
        <Paper 
            component="form" autoComplete="off" 
            className={classNames(classes.bookingForm)} 
            onSubmit={onSubmit}>
            { nameFieldMemo }
            { emailFieldMemo }
            { emailSuggestions ? suggestionLabelMemo : '' }
            <Paper elevation={0} className={classNames(classes.paper)}>
                <label className={classNames(classes.bookingLabel)}>Pick a day</label>
                <Paper elevation={0} className={classNames(display.flex, display.justifyBetween, classes.bookingFormPaper)}>
                    { dayFieldMemo}
                    { monthFieldMemo }
                    { yearFieldMemo }
                </Paper>
            </Paper>
            <Paper elevation={0} className={classNames(classes.paper)}>
                <label className={classNames(classes.bookingLabel)}>Pick a time</label>
                <Paper elevation={0} className={classNames(display.flex, display.justifyBetween, classes.bookingFormPaper)}>
                    { hoursFieldMemo }
                    { minuteFieldMemo }
                    { selectFieldMemo }
                </Paper>
            </Paper>
            <Paper elevation={0} 
                className={classNames(display.flex, display.justifyBetween, display.alignCenter, classes.paper, 
                classes.bookingActionsContainer)}>
                { decreaseButtonMemo }
                { guestsLabelMemo}
                { increaseButtonMemo }
            </Paper>
            { submitMemo }
        </Paper>
    );
};

export default Form;