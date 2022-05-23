function solve (inputNum){
    let inputString = String(inputNum)
    let inputArrayNumbers = inputString.split('')
    inputArrayNumbers = inputArrayNumbers.map((i) => Number(i))
    let sumArrayElements=0;
    inputArrayNumbers.forEach(num => {
        sumArrayElements += num
    }
    )
    isSameNumbers = true
    for (let i = 1; i < inputArrayNumbers.length ; i ++ ){
        if (inputArrayNumbers[i] != inputArrayNumbers[i-1]) {
            
            isSameNumbers = false
        } 
        
        }
        console.log(isSameNumbers);
        console.log(sumArrayElements);
    }
    


solve(22222222223)