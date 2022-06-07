function addItem() {
    let getItemInput = document.getElementById('newItemText');
    let createLiItem = document.createElement('li');
    createLiItem.textContent = getItemInput.value;

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = "#";

    createLiItem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", onDelete);
    document.getElementById('items').appendChild(createLiItem);

    getItemInput.value = '';

    function onDelete(ev) {
        ev.target.parentElement.remove();
    }
}


