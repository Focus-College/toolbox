export const mufasa = {

    name: "Mufasa",

    victorySpeech: function(){

        console.log("Hakuna Matatta");

    }

}

export const simba = {

    name: "Simba",

    victorySpeech: function(){
        console.log("rawr! (but little)");
    }

}

export const scar = {

    name: "Scar",

    victorySpeech: function(){

        console.log("BE PREPARED!");

    }

}

export const findCandidateAndMakeSpeech = function( winnerName:string ){

    const candidates = [
        mufasa,
        simba,
        scar
    ];

    return candidates.find(( element:any ) => {
        
        const doesElementNameMatchWinnerName = (element.name === winnerName);
        
        console.log( element, winnerName, doesElementNameMatchWinnerName );
        return doesElementNameMatchWinnerName;

    });

}

// function find( callback:( element:any, index?:number, array?:any[] ) => { 
//     name: string, 
//     victorySpeech:() => void 
// }){

//     // for every element in array,
//         if( callback() ){
//             return element;
//         }

// }