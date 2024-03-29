import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ImageCard1 from "/img/pexels-asad-photo-maldives-2549017.jpg";
import ImageCard2 from "/img/pexels-flo-dahm-1139040.jpg";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        color: "#fff",
        margin: "20px"
    },

    media: {
        height: 400
    },

    content: {
        backgroundColor: "#102A43",
    },

    title: {
        fontFamily: "Nunito",
        fontSize: "2rem",
        fontWeight: "bold"
    },

    desc: {
        fontFamily: "Nunito",
        fontSize: "1rem",
        color: "#fff"
    }
});

export default function ImageCard({ place, checked }) {
    const classes = useStyles();

    return (
        <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}
        >
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={place.imageUrl}
                    title="Contemplative Reptile"
                />

                <CardContent className={classes.content}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.title}
                    >
                        {place.title}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.desc}
                    >
                        {place.desc}
                    </Typography>
                </CardContent>
            </Card>
        </Collapse>
    );
}
