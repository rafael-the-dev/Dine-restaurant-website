import { makeStyles } from "@material-ui/core";
import bgPattern from '../../assets/images/patterns/pattern-lines.svg'
import { codGrey } from '../../styles/colors.js';

const useStyles = makeStyles(theme => ({
    bookingForm: {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        margin: '0 auto',
        padding: '1rem 5% 2rem 5%',
        transform: 'translateY(-94px)',
        width: '90%',
        [theme.breakpoints.up(490)]: {
            width: '80%'
        },
        [theme.breakpoints.up('sm')]: {
            width: 340
        },
        [theme.breakpoints.up('lg')]: {
            position: 'absolute',
            right: '7%',
            top: 0,
            transform: 'translate(0%, -50%)',
            width: 350,
            transformStyle: 'preserve-3d',
            '&::after': {
                backgroundImage: `url(${bgPattern})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 170,
                bottom: '-11%',
                content: '""',
                height: 100,
                left: '-14%',
                position: 'absolute',
                width: 180,
                transform: 'translateZ(-1px)'
            }
        },
        [theme.breakpoints.up(1500)]: {
            right: '15%'
        }
    },
    paper: {
        marginTop: '1.3rem'
    },
    bookingLabel: {
        fontSize: '.95rem',
        fontWeight: 700
    },
    bookingFormPaper: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    bookingInput: {
        width: '31%'
    }, 
    bookingActionsContainer: {
        borderBottom: `1px solid ${codGrey}`
    },
    bookingActionButton: {
        fontSize: '1.2rem'
    },
    bookingGuestsLabel: {
        color: codGrey,
        fontSize: '.95rem'
    },
    bookingSumbit: {
        backgroundColor: codGrey,
        fontSize: '.9rem',
        width: '100%',
        '&:hover': {
            border: `1px solid ${codGrey}`
        },
        [theme.breakpoints.up(490)]: {
            width: '80%'
        },
        [theme.breakpoints.up('sm')]: {
            width: '70%'
        },
        [theme.breakpoints.up('md')]: {
            margin: '1.5rem auto 0 auto !important',
            width: '70% !important'
        }
    },
    emailSuggestion: {
        color: 'red',
        marginLeft: 3
    },
    emailSuggestionHighlight: {
        color: '#000',
        textDecoration: 'underline'
    }
}));

export {
    useStyles
}