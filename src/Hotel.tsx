import { IHotel } from "./HotelReducer";
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        height: "300px"
    }
});


export default function Hotel(props: IHotel){
    const classes = useStyles();
    return(
        
        <Card className={classes.container}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={props.featured_image}
                            alt="person"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.name}
                            </Typography>
                            <Typography variant="body2">
                                {props.cuisines}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
    );
}