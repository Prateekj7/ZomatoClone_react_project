import * as React from 'react';
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        position: "fixed",
        left: "0px",
        top: "0px",
        width: "100%",
        ZIndexProperty : "9999"
    }
});

export default function LoadingSpinner(){
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CircularProgress />
        </div>
      );
}