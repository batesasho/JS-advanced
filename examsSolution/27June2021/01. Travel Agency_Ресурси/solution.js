window.addEventListener('load', solution);

function solution() {
    document.querySelector('#submitBTN').addEventListener('click', submitBtn);


    function submitBtn(event) {
        event.preventDefault();
        let input = {
            fullName: document.querySelector('#fname').value,
            email: document.querySelector('#email').value,
            phone: document.querySelector('#phone').value,
            address: document.querySelector('#address').value,
            code: document.querySelector('#code').value
        }

        if (input.email === "" || input.fullName === '') {
            return
        }

        let ulElement = document.querySelector('#infoPreview');
        ulElement.innerHTML = `
   <li>Full name: ${input.fullName}</li>
   <li>Email: ${input.email}</li>
   <li>Phone Number: ${input.phone}</li>
   <li>Address: ${input.address}</li>
   <li>Postal Code: ${input.code}</li>`


        document.querySelector('#fname').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#address').value = '';
        document.querySelector('#code').value = '';
        document.querySelector('#submitBTN').disabled = true;
        document.querySelector('#editBTN').disabled = false;
        document.querySelector('#continueBTN').disabled = false;

        document.querySelector('#editBTN').addEventListener('click', editBtn);
        document.querySelector('#continueBTN').addEventListener('click', continueBtn);


        function editBtn() {
            document.querySelector('#fname').value = input.fullName;
            document.querySelector('#email').value = input.email;
            document.querySelector('#phone').value = input.phone;
            document.querySelector('#address').value = input.address;
            document.querySelector('#code').value = input.code;
            document.querySelector('#submitBTN').disabled = false;
            document.querySelector('#editBTN').disabled = true;
            document.querySelector('#continueBTN').disabled = true;


            Array.from(document.querySelectorAll('#infoPreview li')).forEach(el => el.remove());

            // ulElement.innerHTML = ``
        }


        function continueBtn() {
            let divBlock = document.querySelector('#block');
            divBlock.innerHTML = ``;
            let h3Tag = document.createElement('h3')
            h3Tag.textContent = `Thank you for your reservation!`;
            divBlock.appendChild(h3Tag);


        }


    }


}
