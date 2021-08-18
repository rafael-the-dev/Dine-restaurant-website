import { makeStyles } from "@material-ui/core";
import { codGrey, white } from "../../assets/js/colors";


const useStyles = makeStyles(theme => 
    ({
        footer: {
            backgroundColor: codGrey,
            textAlign: 'center',
            padding: '3rem 10%',
            [theme.breakpoints.up('sm')]: {
                textAlign: 'left'
            }
        },
        footerLogoContainer: {
            display: 'block',
            height: 37,
            margin: '0 auto 2rem auto',
            width: 90,
            [theme.breakpoints.up('sm')]: {
                margin: 0,
            },
        },
        footerLogo: {
            display: 'block',
            height: '100%',
            width: '100%'
        },
        footerPaper: {
            backgroundColor: 'transparent'
        },
        footerTextPaper: {
            marginTop: '1.5rem',
            [theme.breakpoints.up('md')]: {
                marginTop: 0
            }
        },
        footerText: {
            color: white,
            lineHeight: '1.7rem',
            opacity: .8,
            textTransform: 'uppercase',
            [theme.breakpoints.up('sm')]: {
                textAlign: 'left'
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '.8rem'
            }
        },
        footerAddress: {
            fontStyle: 'normal'
        }
    })
);

export {
    useStyles
};