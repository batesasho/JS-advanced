class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this.typeOfAvailableProducts = [];


    }

    loadingVegetables(vegetables) {
        let newAddedVegetableTypes = new Set();
        vegetables.forEach(product => {
            let [type, quantity, price] = product.split(' ');
            [quantity, price] = [Number(quantity), Number(price)];
            if (!this.typeOfAvailableProducts.includes(type)) {
                this.availableProducts.push({type, quantity, price});
                this.typeOfAvailableProducts.push(type);
            } else {
                let currentProductObject = this.getProductByType(type);
                currentProductObject.quantity += quantity;
                (currentProductObject.price < price) ? currentProductObject.price = price
                    : currentProductObject.price;
            }
            newAddedVegetableTypes.add(type);
        })
        return `Successfully added ${[...newAddedVegetableTypes].join(', ')}`
    }


    buyingVegetables(selectedProducts) {

        let totalPricePurchases = 0.00;
        selectedProducts.forEach(product => {
            let [productType, productQuantity] = product.split(' ');
            productQuantity = Number(productQuantity);
            if (!this.typeOfAvailableProducts.includes(productType)) {
                throw new Error(`${productType} is not available in the store, your current bill is $${totalPricePurchases.toFixed(2)}.`)
            }
            let currentProduct = this.getProductByType(productType);
            if (productQuantity > currentProduct.quantity) {
                throw new Error(`The quantity ${productQuantity} for the vegetable ${productType} is not available in the store, your current bill is $${totalPricePurchases.toFixed(2)}.`);
            }
            currentProduct.quantity -= productQuantity;
            totalPricePurchases += productQuantity * currentProduct.price;
        })

        return `Great choice! You must pay the following amount $${totalPricePurchases.toFixed(2)}.`
    }


    rottingVegetable(type, quantity) {
        if (!this.typeOfAvailableProducts.includes(type)) {
            throw new Error(`${type} is not available in the store.`)
        }
        let currentProductObject = this.getProductByType(type);
        if (quantity > currentProductObject.quantity) {
            currentProductObject.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
        currentProductObject.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`
    }

    revision() {
        let result = '';
        result += `Available vegetables:\n`;
        this.availableProducts.sort((a, b) => a.price - b.price).forEach(product => {
            result += `${product.type}-${product.quantity}-$${product.price}\n`
        })
        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return result;


    }

    getProductByType(type) {
        return this.availableProducts.filter(product => product.type === type)[0];
    }


}