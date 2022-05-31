function sumTable() {
    let tableArray = Array.from(document.getElementsByTagName('td'));
    let totalSum = 0;
    for (let i = 1; i < tableArray.length - 1; i += 2) {
        totalSum += Number(tableArray[i].textContent)

    }
    document.getElementById("sum").textContent = totalSum;
}