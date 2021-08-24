import { makeStyles } from "@material-ui/core";
import { white } from "./colors";

const useTypography = makeStyles((theme => ({
    start: {
        textAlign: 'left'
    },
    center: {
        textAlign: 'center'
    },
    end: {
        textAlign: 'right'
    },
    weight7: {
        fontWeight: 700
    },
    light: {
        color: white
    },
    uppercase: {
        textTransform: 'uppercase'
    },
    smStart: {
        [theme.breakpoints.up('sm')]: {
            textAlign: 'left'
        }
    },
    mdStart: {
        [theme.breakpoints.up('md')]: {
            textAlign: 'left'
        }
    },
    lgStart: {
        [theme.breakpoints.up('lg')]: {
            textAlign: 'left !important'
        }
    }
})));

export {
    useTypography
}