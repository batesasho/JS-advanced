window.addEventListener("load", solve);

function solve() {
    document.querySelector('#publish').addEventListener('click', publishBtn);


    let totalProfit = document.querySelector('#profit');
    let currentProfit = 0;

    function publishBtn(event) {
        event.preventDefault();
        let input = {
            make: document.querySelector('#make').value,
            model: document.querySelector('#model').value,
            year: document.querySelector('#year').value,
            fuel: document.querySelector('#fuel').value,
            originalCost: document.querySelector('#original-cost').value,
            sellingPrice: document.querySelector('#selling-price').value,
        }


        if (input.make === "" || input.model === "" || input.year === "" || input.fuel === "" || input.originalCost === "" || input.sellingPrice === "" || Number(input.originalCost) > Number(input.sellingPrice)) {
            return;
        }

        let tblBody = document.querySelector('#table-body');
        let trTable = document.createElement('tr');
        trTable.classList.add('row');
        trTable.innerHTML = `
        <td>${input.make}</td>
        <td>${input.model}</td>
        <td>${input.year}</td>
        <td>${input.fuel}</td>
        <td>${input.originalCost}</td>
        <td>${input.sellingPrice}</td>
        <td><button class="action-btn edit">Edit</button> </td>
        <td><button class="action-btn sell">Sell</button> </td>`

        tblBody.appendChild(trTable);


        document.querySelector('#make').value = '';
        document.querySelector('#model').value = '';
        document.querySelector('#year').value = '';
        document.querySelector('#fuel').value = '';
        document.querySelector('#original-cost').value = '';
        document.querySelector('#selling-price').value = '';

        trTable.querySelector('.edit').addEventListener('click', editBtn);
        trTable.querySelector('.sell').addEventListener('click', sellBtn);


        function editBtn(event) {
            let currentCar = event.target.parentElement.parentElement
            document.querySelector('#make').value = currentCar.children[0].textContent;
            document.querySelector('#model').value = currentCar.children[1].textContent;
            document.querySelector('#year').value = currentCar.children[2].textContent;
            document.querySelector('#fuel').value = currentCar.children[3].textContent;
            document.querySelector('#original-cost').value = currentCar.children[4].textContent;
            document.querySelector('#selling-price').value = currentCar.children[5].textContent;
            currentCar.remove();

        }

        function sellBtn(event) {

            let currentCar = event.target.parentElement.parentElement;


            let getCarList = document.querySelector('#cars-list');
            let createLiElement = document.createElement('li');
            createLiElement.classList.add('each-list');
            let carProfit = Math.abs(currentCar.children[5].textContent - currentCar.children[4].textContent)
            createLiElement.innerHTML = `
            <span>${currentCar.children[0].textContent} ${currentCar.children[1].textContent}</span>
            <span>${currentCar.children[2].textContent}</span>
            <span>${carProfit}</span>       
            `
            currentProfit += carProfit;
            totalProfit.textContent = currentProfit.toFixed(2);
            getCarList.appendChild(createLiElement);
            currentCar.remove();


        }


    }


}
