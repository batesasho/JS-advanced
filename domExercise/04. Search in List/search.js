function search() {

    let inputText = document.getElementById("searchText").value;
    let listWithTowns = Array.from(document.getElementsByTagName("li")).map(element => element.textContent);
    let foundTowns = [];


    for (let i = 0; i < listWithTowns.length; i++) {
        document.getElementsByTagName("li")[i].style.fontWeight = "";
        document.getElementsByTagName("li")[i].style.textDecorationLine = "";
    }


    listWithTowns.forEach(town => {
        if (town.includes(inputText)) {
            foundTowns.push(town);
        }
    })

    for (let foundTown of foundTowns) {
        let indexTown = listWithTowns.indexOf(foundTown);
        document.getElementsByTagName("li")[indexTown].style.fontWeight = "bold";
        document.getElementsByTagName("li")[indexTown].style.textDecorationLine = "underline";
    }

    let matches= foundTowns.length;
    document.getElementById("result").textContent =  `${matches} matches found`;

    document.getElementById("searchText").value = "";

}
