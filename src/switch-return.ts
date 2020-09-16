
function getTruckName( carBrand:string ): string {

    switch( carBrand ){

        case "Ford":
            return "F-150";
    
        case "Dodge":
            return "Ram 1500";
    
        case "Chevy":
            return "Silverado 1500";

        case "International":
        case "Nissan":
        case "Kia":
            return "No trucks worth buying";
    
        default: {
            console.log("Probably in the garage.");
            break;
        }

    }
    
}