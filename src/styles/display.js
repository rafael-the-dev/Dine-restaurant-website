import { makeStyles } from "@material-ui/core";

const useDisplay = makeStyles(theme => (
    {
        alignCenter: {
            alignItems: 'center'
        },
        alignStart: {
            alignItems: 'flex-start'
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
        justifyBetween: {
            justifyContent: 'space-between'
        },
        justifyCenter: {
            justifyContent: 'center'
        }
    }
));

export {
    useDisplay
}