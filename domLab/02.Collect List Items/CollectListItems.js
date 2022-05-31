function extractText() {
    const itemsLi = Array.from(
        document.getElementsByTagName("li")
        );
    const textArea = document.querySelector('#result');
    for (let item of itemsLi){
        textArea.value += item.textContent + '\n';
    }


}