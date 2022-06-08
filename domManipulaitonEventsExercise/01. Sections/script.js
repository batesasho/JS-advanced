function create(words) {
    let inputArray = words;
    let getDivContent = document.getElementById('content');
    for (let word of inputArray) {
        let createParagraph = document.createElement('p');
        let createDiv = document.createElement('div');
        createParagraph.textContent = word;
        createParagraph.style.display = "none";
        createDiv.appendChild(createParagraph);
        getDivContent.appendChild(createDiv);
        getDivContent.addEventListener('click', showParagraph);

    }


    function showParagraph(ev) {

        ev.target.children[0].style.display = 'inline';
    }


}