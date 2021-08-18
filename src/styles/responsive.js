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
        flexMDRow: {
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row'
            }
        },
        justifyMDBetween: {
            [theme.breakpoints.up('md')]: {
                justifyContent: 'space-between'
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