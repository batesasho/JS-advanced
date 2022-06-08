function addItem() {
    const getSelectTag = document.getElementById('menu');

    let getItemText = document.querySelector('#newItemText');
    let getItemValue = document.querySelector('#newItemValue');
    const newOptionTag = document.createElement('option');
    newOptionTag.textContent = getItemText.value;
    newOptionTag.value = getItemValue.value;
    getSelectTag.appendChild(newOptionTag);
    getItemText.value = '';
    getItemValue.value = '';

}