import Hotel from "./Hotel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import ErrorMessage from "./ErrorMessage";
import { IFileHotel, IHotel, IStatusizedHotel } from "./HotelReducer";
import LoadingSpinner from "./LoadingSpinner";
import { AppBar, Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        padding: "20px"
    }
});



export default function Hotels(){
    const dispatch = useDispatch();
    const classes = useStyles();
    const hotelReducer: IStatusizedHotel = useSelector((state: AppState) => state?.hotelReducer);
    useEffect( () => {
        async function api(){
            const response = await fetch("/hotel.json");
            if(response.ok){
                const json = await response.json();
                const hotels: IHotel[] = json.map((x:IFileHotel) => x.restaurant);
                dispatch({ type: "completedHotel", payload: hotels });
            }
            else {
                dispatch({type: "failedHotel", payload: [] });
            }
        }
        dispatch({type: "loadingHotel", payload: []});
        api();
    }, []);
    switch (hotelReducer.loading){
        case "completed":
            return renderGrid(hotelReducer.hotels, classes.container);
        case "failed":
            return <ErrorMessage message=" failed to load hotel data"/>
        default:
            return <LoadingSpinner />
    }
    
}

function renderGrid(hotels:IHotel[], className: string){
    return(
        <Grid container spacing={3} justifyContent="center" alignItems="stretch" className={className}>
            {hotels.map(renderHotel)}
        </Grid>
    );
}

function renderHotel(hotel:IHotel, index:number){
    return(
        <Grid item key={index} xs={3}>
            <Hotel {...hotel} />
        </Grid>
    );
}