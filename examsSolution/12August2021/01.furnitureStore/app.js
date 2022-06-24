window.addEventListener('load', solve);

function solve() {
    document.querySelector("div.store form button#add").addEventListener('click', addBtn)
    let accumulatedPrice = 0;

    function addBtn(event) {
        event.preventDefault();
        const input = {
            model: document.getElementById('model').value,
            year: Number(document.getElementById('year').value),
            description: document.getElementById('description').value,
            price: Number(document.getElementById('price').value)
        }


        if (input.model === '' || input.number === '' || input.description === '' || input.price === '') {
            return;
        }

        let trTable = document.createElement('tr');
        trTable.classList.add('info');
        trTable.innerHTML = `
        <td>${input.model}</td>
        <td>${Number(input.price).toFixed(2)}</td>
            <td><button class = "moreBtn">More Info</button><button class = "buyBtn">Buy it</button></td>`
        document.getElementById('furniture-list').appendChild(trTable);

        let trHideTable = document.createElement('tr');
        trHideTable.classList.add('hide');
        trHideTable.style.display = 'none';
        trHideTable.innerHTML = `
        <td>Year: ${input.year}</td>
        <td colspan="3">Description: Comfortable for you and your pet!</td>`
        document.getElementById('furniture-list').appendChild(trHideTable);

        trTable.querySelector('.moreBtn').addEventListener('click', moreBtn);
        trTable.querySelector('.buyBtn').addEventListener('click', buyBtn);


        document.getElementById('model').value = '';
        document.getElementById('year').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';

        function moreBtn(event) {

            let currentBtnText = event.target.parentElement.parentElement.querySelector('.moreBtn');
            let currentEvent = event.target.parentElement.parentElement.nextElementSibling;
            if (currentBtnText.textContent === "More Info") {
                currentBtnText.textContent = "Less Info";
                currentEvent.style.display = 'contents';

            } else {
                currentBtnText.textContent = "More Info";
                currentEvent.style.display = 'none';
            }

        }


        function buyBtn(event) {
            let currentFurniture = event.target.parentElement.parentElement;

            let currentFurniturePrice = Number(currentFurniture.querySelector('html body main div.store table#information tbody#furniture-list tr.info td:nth-child(2)').textContent);
            let totalPrice = document.querySelector('html body main div.store table#information tfoot tr .total-price');
            accumulatedPrice += Number(currentFurniturePrice);
            totalPrice.textContent = accumulatedPrice.toFixed(2);
            currentFurniture.remove();

        }


    }

}
