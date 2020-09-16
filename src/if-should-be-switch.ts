const studentGrade = 90;

if( studentGrade >= 90 ){
    console.log("A");
}

else if ( studentGrade >= 80 ){
    console.log("B")
}

else if ( studentGrade >= 70 ){
    console.log("C");
}

else if ( studentGrade >= 60 ){
    console.log("D")
}

else {
    console.log("F");
}

const DEFAULT_TEMP = 12;

function isHotWaterOn(){
    return false;
}

function checkWaterTemperature(){

    if( !isHotWaterOn()){
        return DEFAULT_TEMP;
    }

    // 100 lines of code

}