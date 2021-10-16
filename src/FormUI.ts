import { makeStyles, Theme } from "@material-ui/core";


interface IStyleProps{
    height: number;
}

export const useFormStyles = makeStyles<Theme, IStyleProps>((_theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: "40px"
    },
    container: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        height: "400px"
    },

    textFieldContainer: {
        display: "flex",
        justifyContent: "center",
        width: "100%"
    },

    textField: {
        width: "100%"
    }
}));