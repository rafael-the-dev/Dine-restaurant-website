import Home from '../Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
    typography: {
        fontFamily: "Spartan, Roboto, sans-serif"
    }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
        </ThemeProvider>
    );
};

export default App;