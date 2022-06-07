function focused() {

    Array.from(document.querySelectorAll('input')).forEach(inputDiv => {
        inputDiv.addEventListener('focus', onFocus);
        inputDiv.addEventListener('blur', onBlur);
    })


    function onFocus(ev) {
        let currentFieldSelected = ev.target;
        currentFieldSelected.parentElement.className = 'focused';
    }

    function onBlur(ev) {
        let currentFieldSelected = ev.target;
        currentFieldSelected.parentElement.className = '';
    }


}