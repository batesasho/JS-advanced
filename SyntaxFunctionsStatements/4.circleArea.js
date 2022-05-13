function solve(input){

    if (typeof(input) !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
        
    }else{

    let radius = input*input*Math.PI
    console.log(radius.toFixed(2))
    }
}

solve(5)