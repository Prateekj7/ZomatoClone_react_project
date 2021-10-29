import { alpha, AppBar, Box, Button, InputBase, makeStyles, Theme, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "./UserProvider";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
    searchContainer: {
      display: "flex",
      backgroundColor:  alpha(theme.palette.common.white, 0.15),
      width: "100%",
    },
    searchIcon: {
      padding: "0 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    searchBox: {
      color: "white",
      width: "100%",
    },
  }));

export default function TopBar(){
    const classes = useStyles();
    const history = useHistory();
    const userContext = useContext(UserContext);
    const isUserExist = userContext && userContext.uid;
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.searchContainer}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search..." className={classes.searchBox} />
                    </div>
                    {!isUserExist && <Button color="inherit" onClick={() => history.push("/Login")} id="Login">Login</Button>}
                    {!isUserExist && <Button color="inherit" onClick={() => history.push("/SignUp")} id="SignUp">SignUp</Button>}
                    {isUserExist && <Button color="inherit" onClick={() => history.push("/Profile")} id="Profile">Profile</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}