function solve() {
    document.querySelector('button').addEventListener('click', addArticle);
    document.querySelector('button:last-child').addEventListener('click', buyArticle);
    let getGenerateTextArea = document.querySelector('textarea');
    let getBuyTextArea = document.querySelectorAll('textarea')[1];


    function addArticle(event) {
        let getInputObject = JSON.parse(getGenerateTextArea.value);
        let getFirstTableRow = document.querySelector('tbody tr:first-child');
        let newTableRow = getFirstTableRow.cloneNode(true);
        newTableRow.querySelector('img').src = getInputObject[0]['img'];
        newTableRow.querySelector('p').textContent = getInputObject[0]['name'];
        newTableRow.querySelectorAll('p')[2].textContent = getInputObject[0]['price'];
        newTableRow.querySelectorAll('p:last-child').textContent = getInputObject[0]['decFactor'];
        document.querySelector('tbody').appendChild(newTableRow);
        Array.from(document.querySelectorAll('input[type = checkbox]')).forEach(el => el.disabled = false);
    }

    function buyArticle(event) {
        let getTableRows = Array.from(document.querySelectorAll('input[type = checkbox]'));
        let getTableRowsChecked = getTableRows.filter(el => el.checked)
        let namesArray = [];
        let totalPrice = 0;
        let averagePrice = 0;
        let decFactor = 0;

        getTableRowsChecked = getTableRowsChecked.map(el => el.parentElement.parentElement)
        for (let tableRow of getTableRowsChecked) {
            namesArray.push(tableRow.querySelector('p').textContent);
            totalPrice += Number(tableRow.querySelectorAll('p')[1].textContent);
            decFactor += Number(tableRow.querySelectorAll('p')[2].textContent);

        }
        averagePrice = decFactor / getTableRowsChecked.length
        let result = `Bought furniture: ${namesArray.join(', ')}\r\n`;
        result += `Total price: ${totalPrice.toFixed(2)}\r\n`;
        result += `Average decoration factor: ${averagePrice}`;

        getBuyTextArea.value = result;
        }
}