import { makeStyles, Typography } from "@material-ui/core";
import firebase from "firebase";
import "firebase/auth";
import { useContext } from "react";
import { useHistory } from "react-router";
import Footer from "./Footer";
import { UserContext } from "./UserProvider";

// export const useUser = () => {
//     return({
//         displayName: useContext
//     })
// }


const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        flexDirection: "column"
    }
});


export default function Profile(){
    const history = useHistory();
    const userContext = useContext(UserContext);
    const signOut = async () =>{
        await firebase.auth().signOut();
        history.push("/")
    }
    const styles = useStyles();
    return (
        <div className={styles.container}>
            <Typography variant="h3">Welcome to your Profile!!!</Typography>
            <Typography variant="h5">{userContext?.displayName}</Typography>
            <Typography variant="h5">{userContext?.email}</Typography>
            <Typography variant="h5">{userContext?.uid}</Typography>
            <Footer 
                primary={{
                    text: "Sign out",
                    onClick: signOut
                }}
                secondary={{
                    text: "Home",
                    onClick: () => history.push("/")
                }}
                tertiary={{
                    text: "Back",
                    onClick: () => history.goBack()
                }}
            />
        </div>
        );
}