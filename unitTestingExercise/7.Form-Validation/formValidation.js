function validate() {
    let userName = document.getElementById('username');
    let emailAddress = document.getElementById('email');
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('confirm-password');
    let submitBtn = document.getElementById('submit');
    let isChecked = document.getElementById('company');


    let userNameRegex = /^[a-z0-9]{3,20}$/;
    let passwordRegex = /^\w{5,15}$/;
    let emailRegex = /^[^@.]+@[^@]+\.[^@]+$/;


    isChecked.addEventListener('change', () => {
        let companyInfoField = document.getElementById('companyInfo')
        if (isChecked.checked) {
            companyInfoField.style.display = 'block';
        } else {
            companyInfoField.style.display = 'none';
        }
    })

    submitBtn.addEventListener('click', submitForm);


    function submitForm(event) {
        event.preventDefault();
        let fieldsPassFailed = [];

        if (!userNameRegex.test(userName.value)) {
            fieldsPassFailed.push(userName);
        }

        if (!emailRegex.test(emailAddress.value)) {
            fieldsPassFailed.push(emailAddress);
        }

        if (!(passwordRegex.test(password.value) || password.value === passwordConfirm.value)) {
            fieldsPassFailed.push(password);
            fieldsPassFailed.push(passwordConfirm);
        }

        if (isChecked.checked) {
            let numberField = document.getElementById('companyNumber');
            if (!(numberField.value >= 1000 && numberField.value <= 9999)) {
                fieldsPassFailed.push(numberField);
            }
        }


        fieldsPassFailed.forEach(element => element.style.borderColor = 'red');
        !fieldsPassFailed.length ? document.querySelector('#valid').style.display = 'block' :
            document.querySelector('#valid').style.display = 'none';


    }
}
