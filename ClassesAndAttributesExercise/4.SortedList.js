class List {
    constructor() {
        this.arrayElements = [];
        this.size = 0;
    }

    add(element) {
        this.arrayElements.push(element);
        this.arrayElements.sort((a, b) => a - b);
        this.size = this.arrayElements.length;
    }

    remove(index) {
        if (index < this.arrayElements.length && index >= 0) {
            this.arrayElements.splice(index, 1);
            this.size = this.arrayElements.length;
        }
    }

    get(index) {
        if (index < this.arrayElements.length && index >= 0){
            return this.arrayElements[index]
        }

    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list)
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.hasOwnProperty('size'));
console.log(list)

