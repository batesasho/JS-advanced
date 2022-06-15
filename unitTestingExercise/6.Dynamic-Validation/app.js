function validate() {
    let getInputEmail = document.getElementById('email');
    let mailValidationRegex = new RegExp('^[a-z]+@[a-z]+\\.[a-z]+');
    getInputEmail.addEventListener('change', () => {
        if (!mailValidationRegex.test(getInputEmail.value)) {
            getInputEmail.className = "error";



        } else {
            getInputEmail.className = '';


        }

    })
}