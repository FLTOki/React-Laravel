import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CssBaseline, makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { Link as Scroll } from "react-scroll";
import Navbar from "./navigation/Navbar";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    },

    appbar: {
        background: "none",
        fontFamily: "NunitoSans"
    },

    appbarTitle: {
        flexGrow: "1"
    },

    appbarWrapper: {
        width: "80%",
        margin: "0 auto"
    },

    colorText: {
        color: "#102A43"
    },

    icon: {
        color: "#fff",
        fontSize: "2rem"
    },

    container: {
        textAlign: "center"
    },

    title: {
        color: "#fff",
        fontFamily: "NunitoSans",
        fontSize: "4rem"
    },

    goDown: {
        color: "#102A43",
        fontSize: "4rem"
    }
}));

function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h2 className={classes.appbarTitle}>
                        Store<span className={classes.colorText}>Away</span>.
                    </h2>

                    <IconButton>
                        <SortIcon className={classes.icon}>
                            <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
                                @if (Route::has('login'))
                                <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                                    @auth
                                    <a
                                        href="{{ url('/home') }}"
                                        class="text-sm text-gray-700 underline"
                                    >
                                        Home
                                    </a>
                                    @else
                                    <a
                                        href="{{ route('login') }}"
                                        class="text-sm text-gray-700 underline"
                                    >
                                        Log in
                                    </a>
                                    @if (Route::has('register'))
                                    <a
                                        href="{{ route('register') }}"
                                        class="ml-4 text-sm text-gray-700 underline"
                                    >
                                        Register
                                    </a>
                                    @endif @endauth
                                </div>
                                @endif
                            </div>
                            <Navbar/>
                        </SortIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br /> Store
                        <span className={classes.colorText}>Away</span>.
                    </h1>
                    <Scroll to="properties" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon
                                className={classes.goDown}
                            ></ExpandMoreIcon>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}

export default Header;

if (document.getElementById("header")) {
    ReactDOM.render(<Header />, document.getElementById("header"));
}
