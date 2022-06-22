class Company {
    constructor() {

        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }


        let employee = {name, salary, position};

        if (Object.keys(this.departments).includes(department)) {
            this.departments[department].push(employee);
        } else {
            this.departments[department] = [employee];
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let departmentAverageSalary = [];
        let bestDepartment = "";
        let averageSalary = 0;
        let result = "";


        for (let department in this.departments) {
            departmentAverageSalary.push(department);
            let salary = 0;
            this.departments[department].forEach(element => {
                salary += element.salary
            })
            departmentAverageSalary.push(Math.floor(salary / this.departments[department].length));

        }

        departmentAverageSalary.forEach((salary, index) => {
            if (index % 2 !== 0) {
                if (averageSalary < salary) {
                    averageSalary = salary;
                    bestDepartment = departmentAverageSalary[index - 1];
                }
            }
        })

        this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        result += `Best Department is: ${bestDepartment}\n`;
        result += `Average salary: ${averageSalary.toFixed(2)}\n`;

        this.departments[bestDepartment].forEach(element => {
            result += `${element.name} ${element.salary} ${element.position}\n`;
        })


        return result.trim();
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment())
// console.log(c.departments);
