function solve() {
    let inputText = document.getElementById('input');
    let inputTextSplit = inputText.value.split('.');
    inputTextSplit = (inputTextSplit.map(element => element.trim())).filter(el => el.length > 0);

    let getOutputArea = document.getElementById('output');
    for (let i = 0; i < inputTextSplit.length; i++) {
        if (i % 3 !== 0) {
            getOutputArea.lastElementChild.textContent += inputTextSplit[i] + '.';
        } else {
            let newPara = document.createElement("p");
            let newNode = document.createTextNode(inputTextSplit[i] + '.');
            newPara.appendChild(newNode);
            getOutputArea.appendChild(newPara);

        }
    }


}


