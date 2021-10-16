export interface IFileHotel{
    restaurant: IHotel;
}
export interface IHotel {
    name:string;
    featured_image:string;
    cuisines:string;
    url:string;
}

export interface IStatusizedHotel{
    loading: string;
    hotels: IHotel[];
}

export interface IHotelAction{
    type:string;
    payload: IHotel[];
}

export const HotelReducers = (state: IStatusizedHotel, action: IHotelAction): IStatusizedHotel => {
    switch(action.type){
        case "not started": return {...state, loading:"not started"};
        case "loadingHotel": return {...state, loading:"loading"};
        case "failedHotel": return {...state, hotels: action.payload, loading:"failed"};
        case "completedHotel": return {...state, hotels: action.payload, loading:"completed"};
    }
    return {loading:"not started", hotels: []};
} 