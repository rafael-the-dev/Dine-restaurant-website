import Home from '../Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Booking from '../Booking';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400
        },
    },
    typography: {
        fontFamily: "Spartan, Roboto, sans-serif"
    }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <Route exact path="/booking" component={Booking} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
        </ThemeProvider>
    );
};

export default App;