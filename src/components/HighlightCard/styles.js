import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => 
    ({
        highlightCard: {
            marginBottom: '2rem'
        },
        highlightCardImage: {
            height: 240,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                height: 110,
                width: '45%'
            },
            [theme.breakpoints.up(1400)]: {
                width: '20%'
            }
        },
        highlightCardContent: {
            marginTop: '.7rem',
            [theme.breakpoints.up('sm')]: {
                margin: '0 0 0 8%',
            }
        },
        highlightCardTitle: {
            [theme.breakpoints.up('sm')]: {
                fontSize: '1.03rem'
            }
        },
        highlightCardDescription: {
            fontSize: '.85rem',
            lineHeight: '1.6rem',
            margin: '0 auto',
            width: '94%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: 0,
                marginRight: 0
            }
        }
    })
);

export {
    useStyles
};