function addItem() {
    let getUserInput = document.getElementById("newItemText").value;
    let createLiElement = document.createElement("li");
    createLiElement.textContent = getUserInput

    document.getElementById("items").appendChild(createLiElement)
    document.getElementById(("newItemText")).value = '';
}