function createSortedList() {

    let sortedListObject = {};
    sortedListObject = {
        arrayList: [],
        add(number) {
            this.arrayList.sort((a, b) => a - b).push(number);
        },
        remove(index) {
            if (index < this.arrayList.length && index >= 0) {
                this.arrayList.sort((a, b) => a - b).splice(index, 1);
            }
        },
        get(index) {
            if (index < this.arrayList.length && index >= 0) {
                this.arrayList.sort((a, b) => a - b);
                return this.arrayList[index];
            }
        },
        get size() {
            return this.arrayList.length
        }

    }
    return sortedListObject;
}


let list = createSortedList();
list.add(3);
list.add(2);
list.add(1);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);