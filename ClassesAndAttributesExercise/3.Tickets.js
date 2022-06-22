function solve(inputArray, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;


        }
    }

    let sortedArrayObjects = [];
    inputArray.forEach(element => {
        let dest = element.split("|")[0];
        let price = Number(element.split("|")[1]);
        let stat = element.split("|")[2];
        sortedArrayObjects.push(new Ticket(dest, price, stat));
        sortedArrayObjects.sort((a, b) => {
            if (sortCriteria === 'destination') {
                return a.destination.localeCompare(b.destination);
            } else if (sortCriteria === 'price') {
                return a-b;
            } else {
                return a.status.localeCompare(b.status);
            }
        })


    })
    return sortedArrayObjects
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'));







