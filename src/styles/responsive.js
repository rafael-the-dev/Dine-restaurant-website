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
            [theme.breakpoints.up('sm')]: {
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
        flexSMRow: {
            [theme.breakpoints.up('sm')]: {
                flexDirection: 'row !important'
            }
        },
        justifySMStart: {
            [theme.breakpoints.up('sm')]: {
                justifyContent: 'flex-start !important'
            }
        },
        flexMDRow: {
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row !important'
            }
        },
        flexMDColumn: {
            [theme.breakpoints.up('md')]: {
                flexDirection: 'column !important'
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
        alignMDStart: {
            [theme.breakpoints.up('md')]: {
                alignItems: 'flex-start !important'
            }
        },
        AlignMDCenter: {
            [theme.breakpoints.up('md')]: {
                alignItems: 'center'
            }
        }, 
        alignLGEnd: { 
            [theme.breakpoints.up('lg')]: { //
                alignItems: 'flex-end !important'
            }
        },
        alignLGStart: { 
            [theme.breakpoints.up('lg')]: {
                alignItems: 'flex-start !important'
            }
        },
        AlignLGCenter: { 
            [theme.breakpoints.up('lg')]: {
                alignItems: 'center !important'
            }
        },
        flexLGColumn: { 
            [theme.breakpoints.up('lg')]: {
                flexDirection: 'column !important'
            }
        }
    }
));

export {
    useResponsive
}