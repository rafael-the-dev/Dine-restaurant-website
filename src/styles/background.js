import { makeStyles } from "@material-ui/core";

const useBackground = makeStyles(theme => ({
    center: {
        backgroundPosition: 'center'
    },
    noRepeat: {
        backgroundRepeat: 'no-repeat'
    },
    cover: {
        backgroundSize: 'cover'
    },
    transparent: {
        backgroundColor: 'transparent'
    }
}));

export {
    useBackground
};