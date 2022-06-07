function deleteByEmail() {
    let getEnteredEmail = document.getElementsByName('email')[0];
    let getTableInfo = [...document.querySelectorAll('tbody tr td:nth-child(2)')];
    let getResultField = document.getElementById('result');

    for (let row of getTableInfo) {

        if (row.textContent === getEnteredEmail.value) {
            row.parentElement.remove();
            getResultField.textContent = "Deleted.";

        } else {
            getResultField.textContent = "Not found.";
        }


    }
}