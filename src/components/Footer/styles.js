import { makeStyles } from "@material-ui/core";
import { codGrey, white } from "../../styles/colors.js";


const useStyles = makeStyles(theme => 
    ({
        footer: {
            backgroundColor: codGrey,
            paddingBottom: '3rem',
            paddingTop: '3rem'
        },
        footerLogoContainer: {
            height: 37,
            margin: '0 auto 2rem auto',
            width: 90,
            [theme.breakpoints.up('sm')]: {
                margin: 0,
            },
        },
        footerLogo: {
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
            fontSize: '.8rem',
            lineHeight: '1.7rem',
            opacity: .8
        },
        footerAddress: {
            fontStyle: 'normal'
        }
    })
);

export {
    useStyles
};