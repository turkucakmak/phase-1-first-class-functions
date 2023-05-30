function receivesAFunction(callback){
return callback();
}

function callback(){
    console.log("Hello world!");
}

function returnsANamedFunction(){
    return function named(){
        return History;
    }
}

function returnsAnAnonymousFunction(){
    return function (){
       return blurry;
    }
}