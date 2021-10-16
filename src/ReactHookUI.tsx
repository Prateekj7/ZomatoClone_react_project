import { Button, TextField, Fab } from "@material-ui/core";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";


interface IState{
    name: string;
    password: string;
    email: string;
}

export default function ReactHookUI(){
    const {register, reset, handleSubmit, formState: {errors}} = useForm<IState>();
    const backendInvoke = (data: IState) => {
        alert(data.name+data.password+data.email);
    }

    return(
        <form onSubmit={handleSubmit(backendInvoke)}>
            <TextField 
                type="text"
                placeholder="user name"
                id = "name"
                label = "User Name"
                variant = "outlined"
                error = {errors.name?.message !== undefined}
                helperText = {errors.name?.message}
                {...register("password",{
                    required: true,
                    minLength: {value:4, message:"password should be greater than 4"},
                    maxLength: {value:8, message:"password should be less than 8"}
                })}
            />

            <input type="password" placeholder="user password"  />
            {renderErrorMessage(errors.password?.message)}
            <input type="email" placeholder="user email" {...register("email", {
                required: true,
                pattern: {value: /\w@\w\.\w/, message: "email is wrong"}
            })}/>
            {renderErrorMessage(errors.email?.message)}
            <Button type="submit" variant="contained" color="primary">Submit Data</Button>
            <Fab onClick={()=> reset()} variant="extended" size="small" color="primary" aria-label="add">
                reset data
            </Fab>
        </form>
    );
}

function renderErrorMessage(message?: string | undefined) {
    if(message){
        return <ErrorMessage message={message} />
    }
    return;
}