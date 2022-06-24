const {companyAdministration} = require('./companyAdministration');
const {assert, expect} = require('chai');

describe('companyAdministration unitTest evaluation', function () {
    describe('hiringEmployee unitTesting', function () {
        it('should check whether it is a function type', function () {
            assert.equal(typeof companyAdministration.hiringEmployee, 'function')
        });
        it('should validate when position is not Programmer , result throw an Error', function () {
            assert.throw(() => companyAdministration.hiringEmployee('name', 'engineer', 5), `We are not looking for workers for this position.`);
        });
        it('should validate when years of experience are greater or equal to 3, result expected message OK', function () {
            assert.equal(companyAdministration.hiringEmployee('Gosho', 'Programmer', 4), "Gosho was successfully hired for the position Programmer.");
            assert.equal(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3), "Pesho was successfully hired for the position Programmer.");
        });
        it('should validate when years of experience are less than 3, result expected message notOK', function () {
            assert.equal(companyAdministration.hiringEmployee('Gosho', 'Programmer', 2), 'Gosho is not approved for this position.');
        });
    });


    describe('calculateSalary unitTesting', function () {
        it('should check whether it is a function type', function () {
            assert.equal(typeof companyAdministration.calculateSalary, 'function')
        });
        it('should validate when input is invalid , result throw an Error', function () {
            assert.throw(() => companyAdministration.calculateSalary('4'), "Invalid hours");
            assert.throw(() => companyAdministration.calculateSalary(-1), "Invalid hours");
            assert.throw(() => companyAdministration.calculateSalary([]), "Invalid hours");
        });
        it('should validate worker salary , result expected message OK', function () {
            assert.equal(companyAdministration.calculateSalary(10), 150);
            assert.equal(companyAdministration.calculateSalary(1), 15);
            assert.equal(companyAdministration.calculateSalary(160), 2400);
            assert.equal(companyAdministration.calculateSalary(200), 4000);
        });
    });

    describe('firedEmployee unitTesting', function () {
        it('should check whether it is a function type', function () {
            assert.equal(typeof companyAdministration.firedEmployee, 'function')
        });

        it('should validate when input is incorrect, result throw an Error notOK', function () {
            assert.throw(() => companyAdministration.firedEmployee("", 3), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee({}, 3), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee(['pesho'], '3'), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee([], -1), "Invalid input");
            assert.throw(() => companyAdministration.firedEmployee([1,2], 3), "Invalid input");
        });

        it('should validate when input is correct, expected specified index to be deleted from the input Array and returned the string message', function () {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],2),"Petar, Ivan");
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],1),"Petar, George");
        });

    });
});