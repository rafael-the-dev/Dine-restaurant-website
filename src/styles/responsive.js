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
        px: {
            paddingLeft: '5%',
            paddingRight: '5%',
            [theme.breakpoints.up('md')]: {
                paddingLeft: '10%',
                paddingRight: '10%'
            },
            [theme.breakpoints.up(1400)]: {
                paddingLeft: '15%',
                paddingRight: '15%'
            }
        },
        alignSMCenter: {
            alignItems: 'center'
        },
        smFlex: {
            [theme.breakpoints.up('sm')]: {
                display: 'flex'
            }
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
        },
        AlignMDCenter: {
            [theme.breakpoints.up('md')]: {
                alignItems: 'center'
            }
        }
    }
));

export {
    useResponsive
}