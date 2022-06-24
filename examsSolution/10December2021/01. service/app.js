window.addEventListener('load', solve);

function solve() {

    document.querySelector('form button').addEventListener('click', formBtn);
    document.querySelector('.clear-btn').addEventListener('click', clearBtn)

    function formBtn(event) {
        event.preventDefault();

        let input = {
            description: document.getElementById('description').value,
            clientName: document.getElementById('client-name').value,
            clientPhone: document.getElementById('client-phone').value,
            productType: event.target.parentElement.querySelector('#type-product').value
        }
        if (input.description === '' || input.clientName === '' || input.clientPhone === '') {
            return;
        }


        let divElement = document.createElement('div');
        divElement.classList.add('container');
        divElement.innerHTML = `
                        <h2>Product type for repair: ${input.productType}</h2>
                    <h3>Client information: ${input.clientName}, ${input.clientPhone}</h3>
                    <h4>Description of the problem: ${input.description}</h4>
                    <button class="start-btn">Start repair</button>
                    <button class="finish-btn" disabled>Finish repair</button>`


        document.getElementById('received-orders').appendChild(divElement);


        document.getElementById('description').value = '';
        document.getElementById('client-name').value = '';
        document.getElementById('client-phone').value = '';

        divElement.querySelector('.start-btn').addEventListener('click', startRepair);
        divElement.querySelector('.finish-btn').addEventListener('click', finishRepair);

        function startRepair(event) {
            let currentProduct = event.target.parentElement
            currentProduct.querySelector('.start-btn').disabled = true;
            currentProduct.querySelector('.finish-btn').disabled = false;

        }


        function finishRepair(event) {
            let productInfo = {
                productType: event.target.parentElement.querySelector('.container h2').textContent.split(': ')[1],
                clientNamePhone: event.target.parentElement.querySelector('.container h3').textContent,
                productProblem: event.target.parentElement.querySelector('.container h4').textContent
            }
            let divEl = document.createElement('div');
            divEl.classList.add('container');
            divEl.innerHTML = `<h2>Product type for repair: ${productInfo.productType}</h2>
            <h3>Client information: ${productInfo.clientNamePhone}</h3>
            <h4>Description of the problem: ${productInfo.productProblem}</h4>`
            document.querySelector('#completed-orders').appendChild(divEl);
            event.target.parentElement.remove()


        }
    }

    function clearBtn(event) {
        [...event.target.parentElement.querySelectorAll('#completed-orders .container')].forEach(element => element.remove())

    }
}

