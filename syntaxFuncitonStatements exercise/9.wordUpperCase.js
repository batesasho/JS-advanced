function solve(inputString){
    let re = /(\w+)/g;
    let myRegexArray = inputString.match(re);
    let myArrayUpperCase = myRegexArray.map(element => element.toUpperCase());
    console.log(myArrayUpperCase.join(', '));
}

solve('Hi, how are you?')