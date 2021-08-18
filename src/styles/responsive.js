import { makeStyles } from "@material-ui/core";

const useResponsive = makeStyles(theme => (
    {
        alignMDCenter: {
            [theme.breakpoints.up('md')]: {
                alignItems: 'center'
            }
        },
        block: {
            display: 'block'
        },
        flex: {
            display: 'flex'
        },
        flexColumn: {
            flexDirection: 'column'
        },
        alignSMCenter: {
            alignItems: 'center'
        },
        smFlex: {
            display: 'flex'
        },
        flexMDRow: {
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row !important'
            }
        },
        justifyMDBetween: {
            [theme.breakpoints.up('md')]: {
                justifyContent: 'space-between !important'
            }
        },
        justifyCenter: {
            justifyContent: 'center'
        }
    }
));

export {
    useResponsive
}