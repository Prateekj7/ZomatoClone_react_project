import { TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import { useFormStyles } from "./FormUI";
import firebase from "firebase";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";




interface ILoginProps{
    emailAddress: string;
    password: string;
}



export default function Login(){
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();
    const props = {
        height: 300,
    };
    const classes = useFormStyles(props);
    const {register, reset, handleSubmit, formState: {errors}} = useForm<ILoginProps>();

    const [errorMessage, setErrorMessage] = useState<string>("")

    const renderButtons = () => {
    return(
        <Footer 
            primary={{
                text: "Login",
                onClick: () => console.log("Login button is invoked")
            }}
            secondary={{
                text: "Sign Up",
                onClick: () => history.push("/SignUp")
            }}
            tertiary={{
                text: "Home",
                onClick: () => history.push("/Home")
            }}
        />
    ); 
    } 

    const renderForm = () =>{
        return(
        // <div   className={classes.container}>
        <>
            <div className={classes.textFieldContainer}>
            
                <TextField 
                    {...register("emailAddress",{
                        required: true,
                        pattern: {value: /\w+@\w+\.\w+/, message: "email is wrong"}
                    })}
                    type="email"
                    placeholder="Email Address"
                    id = "emailAddress"
                    label = "Email Address"
                    variant = "outlined"
                    error = {errors.emailAddress?.message !== undefined}
                    helperText = {errors.emailAddress?.message}
                    className={classes.textField}
                    data-testid= "emailAddress"
                />
            </div>
            <div className={classes.textFieldContainer}>
                <TextField 
                    {...register("password",{
                        required: true,
                        minLength: {value:4, message:"password should be greater than 4"},
                        maxLength: {value:8, message:"password should be less than 8"}
                    })}
                    type="password"
                    placeholder="Password"
                    id = "password"
                    label = "Password"
                    variant = "outlined"
                    error = {errors.password?.message !== undefined}
                    helperText = {errors.password?.message}
                    className={classes.textField}
                    data-testid= "password"
                />
            </div>
        
        </>
        );
        }
    
        const onFormSubmit = async (signUp: ILoginProps) => {
            try{
                setLoading(true);
                await firebase.auth().signInWithEmailAndPassword(signUp.emailAddress, signUp.password);
                reset();
                history.push("/");
            }
            catch (error: any){
                setLoading(false);
                return setErrorMessage(error.message);
            }
        }

return(
    <div className={classes.root}>

        <form className={classes.container} onSubmit={handleSubmit(onFormSubmit)}>
            <Typography variant="h5">
                Welcome to the Login Page
            </Typography>
            {renderForm()}
            {renderButtons()}
            {errorMessage && <ErrorMessage message={errorMessage}/>}
        </form>
        {isLoading && <LoadingSpinner />}
        
    </div>
    );
}

