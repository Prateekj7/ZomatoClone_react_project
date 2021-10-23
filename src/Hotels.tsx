import { Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import ErrorMessage from "./ErrorMessage";
import Hotel from "./Hotel";
import { IFileHotel, IHotel, IStatusizedHotel } from "./HotelReducer";
import LoadingSpinner from "./LoadingSpinner";

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
            const response = await fetch("http://secure-shore-39416.herokuapp.com/graphql", {
                body: '{"query":"{hotels{  id, name, cuisines, featured_image  }}"}',
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Dnt: "1"
                },
              });
        
            if(response.ok){
                const json = await response.json();
                const hotels: IHotel[] = json.data.hotels.map((x:IFileHotel) => x);
                dispatch({ type: "completedHotel", payload: hotels });
            }
            else {
                dispatch({type: "failedHotel", payload: [] });
            }
        }
        dispatch({type: "loadingHotel", payload: []});
        api();
    }, [dispatch]);
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