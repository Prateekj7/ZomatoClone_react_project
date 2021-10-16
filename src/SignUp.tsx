import { TextField, Typography } from "@material-ui/core";
import firebase from "firebase";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import Footer from "./Footer";
import { useFormStyles } from "./FormUI";
import LoadingSpinner from "./LoadingSpinner";

interface ISignUp{
    firstName: string,
    lastName: string,
    emailAddress: string;
    password: string;
}


export default function SignUp(){
    const [isLoading, setLoading] = useState(false);
    const history = useHistory();
    const props = {
        height: 500,
    };
    const classes = useFormStyles(props);
    const {register, reset, handleSubmit, formState: {errors}} = useForm<ISignUp>();

    const [errorMessage, setErrorMessage] = useState<string>("")

    const renderButtons =() =>{
        return(
            <Footer 
                primary={{
                    text: "Sign Up",
                    onClick: () => console.log("Sign up is invoked")
                }}
                secondary={{
                    text: "Login",
                    onClick: () => history.push("/Login")
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
        <>
            <div className={classes.textFieldContainer}>
                <TextField 
                    {...register("firstName",{
                        required: true,
                        minLength: {value:4, message:"First name should be greater than 4"},
                        maxLength: {value:8, message:"First name should be less than 8"}
                    })}
                    type="firstName"
                    placeholder="FirstName"
                    id = "firstName"
                    label = "FirstName"
                    variant = "outlined"
                    error = {errors.firstName?.message !== undefined}
                    helperText = {errors.firstName?.message}
                    className={classes.textField}
                />
            </div>
            <div className={classes.textFieldContainer}>
                <TextField 
                    {...register("lastName",{
                        required: true,
                        minLength: {value:4, message:"lastName should be greater than 4"},
                        maxLength: {value:8, message:"lastName should be less than 8"}
                    })}
                    type="lastName"
                    placeholder="LastName"
                    id = "lastName"
                    label = "LastName"
                    variant = "outlined"
                    error = {errors.lastName?.message !== undefined}
                    helperText = {errors.lastName?.message}
                    className={classes.textField}
                />
            </div>
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
                />
            </div>
        
        </>
        );
        }

    const onFormSubmit = async (signUp: ISignUp) => {
        try{
            setLoading(true);
            const credentials = await firebase.auth().createUserWithEmailAndPassword(signUp.emailAddress, signUp.password);
            await credentials.user?.updateProfile({displayName: `${signUp.firstName} + ${signUp.lastName}`})
            reset();
            history.push("/");
        }
        catch (error: any){
            setLoading(false);
            return setErrorMessage(error.message);
        }
    }

    return (
        <div className={classes.root}>
            <form className={classes.container} onSubmit={handleSubmit(onFormSubmit)}>
                <Typography variant="h5">
                    Welcome to the SignUp Page
                </Typography>
                {renderForm()}
                {renderButtons()}
                {errorMessage && <ErrorMessage message={errorMessage}/>}
            </form>
            {isLoading && <LoadingSpinner />}
        
        </div>
    );
}

