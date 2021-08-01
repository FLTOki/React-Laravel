import React from "react";
import ReactDOM from "react-dom";
import backgroundImage from "/img/pexels-oliver-sjöström-931018.jpg";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./Header";
import Properties from "./Properties";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        backgroundImage:`url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));

function App() {
    const classes = useStyles();

    return <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Properties />
    </div>;
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
