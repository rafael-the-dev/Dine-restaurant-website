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
        paddingBottom: '4rem',
        paddingTop: '4rem',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '4rem',
            paddingTop: '5rem'
        }
    },
    gatheringSectionImageContainer: {
        marginBottom: '3rem',
        transform: 'translateY(0) !important',
        [theme.breakpoints.up('sm')]: {
            marginBottom: '1rem'
        },
        [theme.breakpoints.up('lg')]: {
            height: 450,
            marginBottom: 0
        }
    },
    gatheringSectionContentContainer: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '3rem'
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: '0 !important',
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
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 0
        }
    },
    active: {
        ...activeAndHover
    },
    gatheringSectionContent: {
        marginTop: '2rem',
        [theme.breakpoints.up('md')]: {
            textAlign: 'center !important'
        },
        [theme.breakpoints.up('lg')]: {
            marginBottom: '2rem',
            marginTop: 0,
            textAlign: 'left !important'
        }
    },
    gatheringSectionTitle: {
        '&::before': {
            [theme.breakpoints.up('md')]: {
                margin: '0 auto 2.3rem auto !important'
            },
            [theme.breakpoints.up('lg')]: {
                margin: '0 0 2.3rem 0 !important'
            }
        }
    },
    gatheringSectionDescription: {
        [theme.breakpoints.up('md')]: {
            margin: '1.3rem auto 0 auto !important'
        },
        [theme.breakpoints.up('lg')]: {
            margin: '1.3rem 0 0 0 !important'
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
        [theme.breakpoints.up('md')]: {
            margin: '1.5rem auto 0 auto !important'
        },
        [theme.breakpoints.up('lg')]: {
            margin: '1rem 0 0 0 !important',
            width: '50% !important'
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '1.5rem !important',
            width: '35% !important'
        }
    }
}));


export {
    useStyles
}