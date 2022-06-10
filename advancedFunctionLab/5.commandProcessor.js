function solution() {
    let stringInput = '';
    return {
        append(string) {
            stringInput += string;
        },
        removeStart(n) {
            stringInput = stringInput.slice(n);
        },
        removeEnd(n) {
            stringInput = stringInput.slice(0, -n);
        },
        print() {
            console.log(stringInput);
        }
    }
}


let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();