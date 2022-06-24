function solution() {
    document.querySelector('div.container section.card div button').addEventListener('click', addBtn);

    function addBtn(event) {
        event.preventDefault();

        let inputFieldValue = document.querySelector('html body div.container section.card div input').value;

        let ulListOfGifts = document.querySelector('html body div.container section.card ul')

        let liElement = document.createElement('li')
        liElement.classList.add('gift');
        liElement.innerHTML = `
        ${inputFieldValue}
        <button id="sendButton">Send</button>
        <button id="discardButton">Discard</button>`
        ulListOfGifts.appendChild(liElement);


        document.querySelector('div.container section.card div input').value = '';

    }


}