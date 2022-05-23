function solve(inputArray, number){
    let filteredArray  = []
    inputArray.forEach((element,index) => {
        if (index % number === 0){
            filteredArray.push(element)
        }
    })
    return (filteredArray)
}


solve(['5','20','31','4','20'],2 )
solve(['dsa', 'asd', 'test', 'tset'], 2 )
solve(['1', '2', '3', '4', '5'], 6)