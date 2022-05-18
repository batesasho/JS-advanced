function solve(inputArray){
    let evenArrayElements = []
    for (let i = 0; i < inputArray.length;i++ ){
        if (i %2 === 0){
            evenArrayElements.push(inputArray[i]);
        }

    
}
console.log(evenArrayElements.join(' '));
}

solve(['20', '30', '40','50', '60'])