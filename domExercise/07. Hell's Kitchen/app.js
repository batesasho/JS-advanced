function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    let inputAreaArray = JSON.parse(document.querySelector("textarea").value);
    let restaurantObject = {};

    inputAreaArray.forEach(arrayRow => {
            let restaurantName = arrayRow.split(" - ")[0];
            let restaurantEmployee = arrayRow.split(" - ")[1].split(' ');
            restaurantObject[restaurantName] = restaurantEmployee
        }
    )

    for (let object in restaurantObject) {
        restaurantObject[object].map((element, index) => {
                if (index % 2 !== 0) {
                    restaurantObject[object][index] = parseInt(element, 10);
                }
            }
        )
    }

    let maxAverageSalary = 0;
    let maxSalaryRestaurantName = '';
    let maxEmployeeSalary = 0;

    for (let objectKey in restaurantObject) {
        let sumSalary = 0;
        for (let i = 0; i < restaurantObject[objectKey].length; i++) {
            if (i % 2 !== 0) {
                sumSalary += Number(restaurantObject[objectKey][i]);
                if (restaurantObject[objectKey][i] > maxEmployeeSalary) {
                    maxEmployeeSalary = restaurantObject[objectKey][i];
                }
            }
        }
        if (maxAverageSalary < sumSalary / (restaurantObject[objectKey].length / 2)) {
            maxAverageSalary = (sumSalary / (restaurantObject[objectKey].length / 2)).toFixed(2);
            maxSalaryRestaurantName = objectKey;
        }
    }


    function onClick() {

        let getParagraphRestaurant = document.querySelector('#outputs #bestRestaurant p');
        getParagraphRestaurant.textContent = `Name: ${maxSalaryRestaurantName} Average Salary: ${maxAverageSalary} Best Salary: ${maxEmployeeSalary.toFixed(2)}`;

        let getParagraphREmployee = document.querySelector('#outputs #workers p');
        let result = ''
        for (let i = 0; i < restaurantObject[maxSalaryRestaurantName].length; i += 2) {
            result += `Name: ${restaurantObject[maxSalaryRestaurantName][i]} 
            With Salary: ${Number(restaurantObject[maxSalaryRestaurantName][i + 1]).toFixed(2)} `;
        }
        getParagraphREmployee.textContent = result.trim();

    }
}