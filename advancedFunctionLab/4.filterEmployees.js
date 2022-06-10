function solve(data, criteria) {
    let dataInput = JSON.parse(data);

    let value = (criteria !== 'all') ? criteria.split('-')[1] : 'all';

    function filterObj() {
        let result = '';
        let filteredObj;
        if (value !== 'all') {
            filteredObj = dataInput.filter(obj => Object.values(obj).some(val => val.includes(value)));
        } else {
            filteredObj = dataInput;
        }

        filteredObj.forEach((employee, index) => {
            result += `${index}. ${employee['first_name'] + ' ' + employee['last_name']} - ${employee.email}\n`
        })
        return result.trim();
    }

    return filterObj()
}


console.log(solve(`[{

"id": "1",

"first_name": "Ardine",

"last_name": "Bassam",

"email": "abassam0@cnn.com",

"gender": "Female"

}, {

"id": "2",

"first_name": "Kizzee",

"last_name": "Jost",

"email": "kjost1@forbes.com",

"gender": "Female"

},

{

"id": "3",

"first_name": "Evanne",

"last_name": "Maldin",

"email": "emaldin2@hostgator.com",

"gender": "Male"

}]`, 'all'));