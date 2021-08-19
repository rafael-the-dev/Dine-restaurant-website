import { makeStyles } from "@material-ui/core";
import { ebonyClay, beaver, white } from "./colors";

const useServices = makeStyles(theme => ({
    container: {
        paddingBottom: '4rem',
        [theme.breakpoints.up('sm')]: {
            paddingBottom: '2rem',
            '&:nth-child(odd)': {
                flexDirection: 'row-reverse'
            }
        }
    },
    imageContainer: {
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        height: 350,
        transform: 'translateY(-60px)',
        zIndex: 10,
        [theme.breakpoints.up('sm')]: {
            height: 300,
            transform: 'translateY(0)'
        },
        [theme.breakpoints.up('md')]: {
            height: 350
        },
        [theme.breakpoints.up('lg')]: {
            height: 430
        }
    },
    image: {
        display: 'block',
        height: '100%',
        width: '100%'
    },
    content: {
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left'
        }
    },
    subTitle: {
        color: ebonyClay,
        fontWeight: 700,
        '&::before': {
            backgroundColor: beaver,
            content: '""',
            display: 'block',
            height: 2,
            margin: '0 auto 2.3rem auto',
            width: '20%',
            [theme.breakpoints.up('md')]: {
                marginLeft: 0,
                marginRight: 0,
                width: 77
            }
        }
    },
    description: {
        fontSize: '.95rem',
        lineHeight: '1.6rem',
        margin: '1.3rem auto 0 auto',
        width: '94%',
        [theme.breakpoints.up('sm')]: {
            marginTop: '1rem',
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            margin: '1.3rem 0 0 0'
        },
        [theme.breakpoints.up('lg')]: {
            width: '80%'
        }
    },
    link: {
        border: `1px solid ${white}`,
        borderRadius: 3,
        color: white,
        display: 'block',
        fontSize: '.95rem',
        fontWeight: 'bold',
        margin: '1.5rem auto 0 auto',
        padding: '.7rem 0',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'all 400ms ease-in',
        width: '60%',
        '&:hover': {
            backgroundColor: white,
            color: '#000',
            textDecoration: 'none'
        },
        [theme.breakpoints.up('sm')]: {
            width: '45%'
        },
        [theme.breakpoints.up('md')]: {
            margin: '1.5rem 0 0 0',
            width: '30%'
        }
    }
}));

export {
    useServices
}