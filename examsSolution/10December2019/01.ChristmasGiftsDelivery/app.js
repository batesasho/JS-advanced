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

        let arrayForSorting = document.querySelectorAll('div.container section.card ul li.gift');
        arrayForSorting.sort((a, b) => a.innerText.split(' ')[0].localeCompare(b.innerText.split(' ')[0]));

        ulListOfGifts.innerHTML = '';
        ulListOfGifts.appendChild(arrayForSorting)


        document.querySelector('div.container section.card div input').value = '';

    }


}