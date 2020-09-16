let var1 = 1;

const func = function( var1:number ): void {
    console.log( var1 );
}

const objectLiteral = {
    
    var1: 1,

    func: function( var1:number ){

    }

}

if( var1 === objectLiteral.var1 ){
    console.log("The Same!");
}

var1 = 2;
objectLiteral.var1 = 2;

func( var1 );
objectLiteral.func( var1 );

// objectLiteral.var2 <-- won't work!