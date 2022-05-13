function solve(number1,number2,operand){
  

    if (operand === "+"){
        console.log(number1+number2);

    }else if (operand === "-"){
        console.log(number1-number2);
    }else if (operand === "/"){
        if (number2 !== 0){
        console.log(number1/number2);
        }else{
            console.log(`Can not delete by 0`)
        }
    }else if (operand === '*'){
        console.log(number1*number2)
    }else if (operand === '%'){
        console.log(number1%number2)
    }else if(operand === "**"){
        console.log(number1**number2)
    }

}

solve(3, 5.5, '*')