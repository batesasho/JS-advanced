class Restaurant {
    constructor(budgetMoney) {

        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];

    }




    loadProducts(productsArray) {

        let result = '';
        productsArray.forEach(product => {
            let [productName, productQuantity, productPrice] = product.split(' ');
            if (this.budgetMoney >= productPrice) {
                this.stockProducts[productName] = productQuantity;
                this.budgetMoney -= productPrice;
                result += `Successfully loaded ${productQuantity} ${productName}\n`;


            } else {
                result += `There was not enough money to load ${productQuantity} ${productName}\n`
            }
            if (Object.keys(this.stockProducts).includes(productName)) {
                this.stockProducts[productName] += productQuantity;
            }

            this.history.push({productName, productQuantity, productPrice})
        })

        return result.trim();
    }

    addToMenu(meal, products, price) {
        if (!Object.keys(this.menu).includes(meal)) {
            this.menu[meal] = {productsList: products, productPrice: price};
            let numberOfMeals = Object.keys(this.menu);
            if (numberOfMeals.length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${numberOfMeals.length} meals in the menu, other ideas?`
            }

        }
        return `The ${meal} is already in the our menu, try something different.`
    }

    showTheMenu() {
        let result = '';
        let numberOfMeals = Object.keys(this.menu);
        if (numberOfMeals.length === 0) {
            return "Our menu is not ready yet, please come later..."
        }
        for (let meal in this.menu) {
            result += `${meal} - $ ${this.menu[meal].productPrice}\n`
        }

        return result.trim()


    }

    makeTheOrder(meal) {
        let mealsNameInMenu = Object.keys(this.menu);
        if (!mealsNameInMenu.includes(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }


        let mealProductArray = this.menu[meal].productsList;
        mealProductArray.forEach(product => {
            let [name, quantity] = product.split(' ');
            if (!this.stockProducts[name] >= quantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }

        })

        mealProductArray.forEach(product => {
            let [name, quantity] = product.split(' ');
            this.stockProducts[name] -= quantity;
        })

        this.budgetMoney += this.menu[meal].productPrice;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].productPrice}.`


    }


}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
