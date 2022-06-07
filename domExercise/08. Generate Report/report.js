function generateReport() {
    let getTextArea = document.getElementById("output");
    getTextArea.textContent = "";
    const headerNames = ['Employee', 'Department', 'Status', 'Date Hired', 'Benefits', 'Compensation', 'Rating'];
    let getCheckedBoxesTableFields = Array.from(document.querySelectorAll("thead tr th")).filter(element => element.firstElementChild.checked === true).map(element => element.textContent.trim());
    let getEmployeeInformation = Array.from(document.querySelectorAll("tbody tr"));
    let indexHeader = [];
    let result = [];
    getCheckedBoxesTableFields.forEach(headerNameChecked => indexHeader.push(headerNames.indexOf(headerNameChecked)));
    getEmployeeInformation.forEach(trEmployeeObject => {
        let objectResult = {};
        let trEmployeeObjectArray = [];
        indexHeader.forEach( (element, index) => {
            let employeeInfoName = headerNames[element];
            trEmployeeObjectArray.push(Array.from(trEmployeeObject.children)[element]);
            objectResult[employeeInfoName] = trEmployeeObjectArray[index].textContent;
        })
        result.push(objectResult)

    })
    result = JSON.stringify(result)

    getTextArea.textContent = result;
}

// function generateReport() {
//     const checks = [...document.querySelectorAll('thead tr th input')];
//     const result = [...document.querySelectorAll('table tbody tr')].map((tr) =>
//         Array.from(tr.children).reduce(
//             (a, td, i) => Object.assign(a, checks[i].checked ? { [checks[i].name]: td.textContent } : {}),
//             {}
//         )
//     );
//     document.querySelector('#output').value = JSON.stringify(result, null, 2);
// }