import { makeStyles } from '@material-ui/core/styles';
import { white, codGrey } from '../../styles/colors.js';

const activeAndHover = {
    backgroundColor: 'transparent !important',
    color: codGrey,
    fontSize: '.85rem',
    fontWeight: 700
};

const useStyles = makeStyles(theme => ({ 
    displaySection: {
        display: 'flex !important'
    },
    gatheringSection: {
        display: 'none',
        paddingBottom: '2rem',
        paddingTop: '2rem',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '4rem',
            paddingTop: '5rem'
        }
    },
    gatheringSectionImageContainer: {
        [theme.breakpoints.up('md')]: {
            height: 450
        }
    },
    gatheringSectionContentContainer: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '3rem'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '10%',
            flexDirection: 'column-reverse'
        }
    },
    gatheringSectionButtonGroup: {
    },
    gatheringSectionButton: {
        border: 'none !important',
        fontSize: '.8rem',
        opacity: .8,
        transition: '400ms all ease',
        '&:not(.active):hover': {
            ...activeAndHover
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0
        }
    },
    active: {
        ...activeAndHover
    },
    gatheringSectionContent: {
        marginTop: '2rem',
        [theme.breakpoints.up('md')]: {
            marginBottom: '2rem',
            marginTop: 0
        }
    },
    gatheringSectionLink: {
        backgroundColor: codGrey,
        border: `none`,
        color: white,
        '&:hover': {
            backgroundColor: 'transparent',
            border: `1px solid ${codGrey}`,
            color: codGrey,
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: '3rem'
        }
    }
}));


export {
    useStyles
}