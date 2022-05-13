function solve (n, m){
    num1 = Number(n)
    num2 = Number(m)
    let sumValue = 0
    for ( let i = num1; i <= num2; i++){
        sumValue += i;
    }
    return sumValue;
}

console.log(solve(-8,20))