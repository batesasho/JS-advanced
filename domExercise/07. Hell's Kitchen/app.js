function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    let inputAreaArray = JSON.parse(document.querySelector("textarea").value);

    let restaurantArray = [];

    for (let rest of inputAreaArray) {

        let nameRest = rest.split(' - ')[0];
        let employeeArray = rest.split(' - ')[1].split(", ");
        let restObject = {};
        restObject[rest] = [];
        let employees = [];
        employeeArray.forEach(el => {


            let [employeeName, employeeSalary] = el.split(" ");
            restObject[rest].push(employeeName)

        })
        console.log(restObject)
    }


    function onClick() {
        let averageSalaryArray = [];
        restaurantArray.forEach(restaurantObject => {
            for (let rest of restaurantObject) {

            }
        })

    }
}