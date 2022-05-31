function colorize() {
    const tableRows = Array.from(document.querySelectorAll("tr"));

    tableRows.forEach((element, index) => {
        if (index % 2 !== 0) {
            element.style.backgroundColor = 'teal';
        }
    })
}