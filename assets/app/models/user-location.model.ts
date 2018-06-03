export class UserLocation
{
    constructor(
        public lat: number = 0,
        public lng: number = 0,
        public userId: any = null,
        public userName = "")
        {}
}

export class UserLocationView extends UserLocation{
    displayName: string;
    constructor(userLocation: UserLocation){
        super(userLocation.lat, userLocation.lng, userLocation.userId, userLocation.userName)
        //get user data from server
    }
    

}