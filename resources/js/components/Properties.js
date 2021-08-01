import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, makeStyles } from "@material-ui/core";
import ImageCard from "./ImageCard";
import places from "../../../public/static/places";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles(theme => ({
   root: {
       minHeight: '100vh',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
   },
}));

function Properties() {
    const classes = useStyles();
    const checked = useWindowPosition('header');

    return (
        <div className={classes.root} id="properties">

            <ImageCard place={places[0]} checked={checked} />
            <ImageCard place={places[1]} checked={checked} />
        
        </div>
    )
}

export default Properties;

if (document.getElementById("properties")) {
    ReactDOM.render(<Properties />, document.getElementById("properties"));
}
