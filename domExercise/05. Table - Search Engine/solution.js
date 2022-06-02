function solve() {

    document.querySelector('#searchBtn').addEventListener('click', onClick);

    let rows = document.querySelectorAll("tbody tr");
    let input = document.getElementById("searchField");

    function onClick() {

        for (let row of rows) {
            console.log(row.textContent)
            console.log(row.innerText)
            console.log(row.innerHTML)

            row.classList.remove("select");
            if (row.textContent.includes(input.value)) {
                row.className = 'select';
            }

        }

        input.value = '';

    }

}