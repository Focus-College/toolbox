export function applyVotingRules( candidate:string, over18:boolean, vote:( candidate:string ) => void, deny:() => void ){

    if( over18 ){
        
        vote( candidate );

    } else {

        deny();

    }

}