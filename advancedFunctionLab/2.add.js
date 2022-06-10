function solution(num) {
    let number1 = num;

    function sum(number2) {
        return number1 + number2
    }

    return sum;
}


let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));