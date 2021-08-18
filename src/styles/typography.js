import { makeStyles } from "@material-ui/core";

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
    }
})));

export {
    useTypography
}