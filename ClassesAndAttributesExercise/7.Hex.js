class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        let result = "Ox" + `${this.value.toString(16).toUpperCase()}`;
        return result;
    }

    plus(HexObj) {
        let result = new Hex(this.value + Number(HexObj.valueOf()));
        return result;

    }

    minus(HexObj) {
        return new Hex(this.value - Number(HexObj.valueOf()))
    }

    parse(string) {
        return parseInt(string, 16);
    }

}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 === 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
