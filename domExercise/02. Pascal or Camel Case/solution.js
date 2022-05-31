function solve() {
    let inputText = document.getElementById("text").value.toLowerCase().split(" ");
    let inputAction = document.getElementById("naming-convention").value.split(' ')[0];
    let modifiedText = "";
    if (inputAction === "Camel") {
        for (let index = 1; index < inputText.length; index++) {
            let firstLetterToCapital = inputText[index].charAt(0).toUpperCase();
            inputText[index] = firstLetterToCapital + inputText[index].slice(1,);
        }
        modifiedText = inputText.join("");
    } else if (inputAction === "Pascal") {
        for (let index = 0; index < inputText.length; index++) {
            let firstLetterToCapital = inputText[index].charAt(0).toUpperCase();
            inputText[index] = firstLetterToCapital + inputText[index].slice(1,);
        }
        modifiedText = inputText.join("");
    } else{
        modifiedText = "Error!";
    }
    document.getElementById("result").textContent = modifiedText;
}