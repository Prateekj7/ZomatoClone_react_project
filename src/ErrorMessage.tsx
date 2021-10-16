import * as React from 'react';
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        color: "red",
    }
});

interface IProps{
    message: string;
}

export default function ErrorMessage(props: IProps){
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h5" className={classes.container}>
                {props.message}
            </Typography>
        </div>
      );
}