function solve() {
    let alLButtons = document.getElementsByTagName('button');

    let getCheckOutBtn = Array.from(document.getElementsByClassName('checkout'))[0];
    let totalSpending = 0;
    let uniqueListProducts = new Set();
    let getTextArea = [...document.getElementsByTagName('textarea')][0];
    let resultOutput = '';

    Array.from(document.getElementsByClassName('add-product'))
        .forEach(addBtn => addBtn.addEventListener('click', addProduct));

    getCheckOutBtn.addEventListener('click', checkout);


    function addProduct(ev) {
        let getCurrentProductObject = ev.target.parentNode.parentNode;
        let name = getCurrentProductObject.querySelector('.product-title').textContent;
        let money = Number(getCurrentProductObject.querySelector('.product-line-price').textContent);
        totalSpending += money;
        uniqueListProducts.add(name);
        resultOutput += `Added ${name} for ${money.toFixed(2)} to the cart.` + '\n';

        getTextArea.textContent = resultOutput;
    }

    function checkout(ev) {
        let listProducts = [...uniqueListProducts].join(', ');
        let totalPrice = totalSpending.toFixed(2);
        [...alLButtons].forEach(elementBtn => elementBtn.disabled = true);

        resultOutput += `You bought ${listProducts} for ${totalPrice}.`;
        getTextArea.textContent = resultOutput;


    }
}