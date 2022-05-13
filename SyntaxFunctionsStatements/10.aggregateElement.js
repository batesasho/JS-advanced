function solve(arrayInput){
   let sumArrayElements = 0;
   arrayInput.forEach(element => {
        sumArrayElements += element; 
    });

    let sumIntervalsArrayElements = 0;
    arrayInput.forEach(el => {
        sumIntervalsArrayElements += 1/el
    })

  
    let concatArrayElements = arrayInput.join('')
    
    console.log(sumArrayElements)
    console.log(sumIntervalsArrayElements)
    console.log(concatArrayElements)

}


solve([2, 4, 8, 16])