
enum Makes {
    FORD = "Ford",
    CHEVY = "Chevrolet",
    DODGE = "Fiat",
    FIAT = "Fiat"
}

function getTruckModel( carBrand:Makes ): string {

    switch( carBrand ){

        case Makes.FORD:
            return "F-150";
    
        case Makes.DODGE:
            return "Ram 1500";
    
        case Makes.CHEVY:
            return "Silverado 1500";
    
        default: {
            console.log("Probably in the garage.");
            break;
        }

    }

}