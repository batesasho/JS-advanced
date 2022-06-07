function validate() {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
    let reg = RegExp(pattern,'g')
    let getUserEmailAddress = document.getElementById('email')

    getUserEmailAddress.addEventListener('change', emailValidator);


    function emailValidator(ev) {

        let inputEmailRegex = reg.exec(getUserEmailAddress.value);

        if (inputEmailRegex == null) {
            ev.target.className = 'error';

        } else{
            ev.target.className = '';
        }
    }


}

