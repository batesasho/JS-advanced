function solve() {
    document.getElementById('add-worker').addEventListener('click', addWorkerBtn);
    let salaryBudget = 0;

    function addWorkerBtn(event) {
        event.preventDefault();


        let input = {
            firstName: document.getElementById('fname').value,
            lastName: document.getElementById('lname').value,
            email: document.getElementById('email').value,
            dateBirth: document.getElementById('birth').value,
            position: document.getElementById('position').value,
            salary: document.getElementById('salary').value,
        }

        if ((input.firstName === '' || input.lastName === '' || input.email === '' || input.dateBirth === '' || input.dateBirth === '' || input.position === '')) {
            return;
        }

        let trTable = document.createElement('tr');
        trTable.innerHTML = `
        <td>${input.firstName}</td>
        <td>${input.lastName}</td>
        <td>${input.email}</td>
        <td>${input.dateBirth}</td>
        <td>${input.position}</td>
        <td>${input.salary}</td>
        <td><button class = 'fired'>Fired</button> <button class = 'edit'>Edit</button></td>`
        document.getElementById('tbody').appendChild(trTable);
        salaryBudget += Number(input.salary)
        document.getElementById('sum').textContent = salaryBudget.toFixed(2);


        trTable.querySelector('.fired').addEventListener('click', firedBtn)
        trTable.querySelector('.edit').addEventListener('click', editBtn)
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('birth').value = '';
        document.getElementById('position').value = '';
        document.getElementById('salary').value = '';


        function editBtn(event) {
            document.getElementById('fname').value = input.firstName;
            document.getElementById('lname').value = input.lastName;
            document.getElementById('email').value = input.email;
            document.getElementById('birth').value = input.dateBirth;
            document.getElementById('position').value = input.position;
            document.getElementById('salary').value = input.salary;
            salaryBudget -= input.salary;
            document.getElementById('sum').textContent = salaryBudget.toFixed(2);

            event.target.parentElement.parentElement.remove();


        }

        function firedBtn(event) {
            let currentBtn = event.target;
            let salaryDeduction = currentBtn.parentElement.parentElement.querySelectorAll('td')[5].textContent;
            salaryBudget -= salaryDeduction;
            document.getElementById('sum').textContent = salaryBudget.toFixed(2);

            currentBtn.parentElement.parentElement.remove();


        }


    }
}

solve()