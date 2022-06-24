class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {"picture": 200, "photo": 50, "item": 250};
        this.listOfArticles = [];
        this.namesOfArticles = new Set();
        this.guests = [];
        this.guestsNameArray = [];

    }

    addArticle(articleModel, articleName, quantity) {
        if (!Object.keys(this.possibleArticles).includes(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!")
        }

        let checkArticleNameAndModelExist = [...this.namesOfArticles].includes(articleName) && this.getArticleModelByName(articleName).articleModel === articleModel.toLowerCase();
        if (checkArticleNameAndModelExist) {
            this.getArticleModelByName(articleName).quantity += quantity;

        }

        if (!checkArticleNameAndModelExist) {
            this.listOfArticles.push({articleModel: articleModel.toLowerCase(), articleName, quantity});
            this.namesOfArticles.add(articleName);
        }


        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }

    inviteGuest(guestName, personality) {
        if (this.guestsNameArray.includes(guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points = 50;
        if (personality === "Vip") {
            points = 500;
        } else if (personality === 'Middle') {
            points = 250;
        }
        this.guestsNameArray.push(guestName);
        this.guests.push({guestName, points, purchaseArticle: 0});

        return `You have successfully invited ${guestName}!`;

    }

    buyArticle(articleModel, articleName, guestName) {

        let currentArticle = this.getArticleModelByName(articleName);
        let currentGuest = this.getGuestByName(guestName);

        let checkArticleNameAndModelExist = (![...this.namesOfArticles].includes(articleName)) || (this.getArticleModelByName(articleName).articleModel !== articleModel.toLowerCase());
        if (checkArticleNameAndModelExist) {
            throw new Error("This article is not found.");
        }
        if (currentArticle.quantity === 0) {
            throw new Error(`The ${articleName} is not available.`);
        }
        if (!this.guestsNameArray.includes(guestName)) {
            throw new Error("This guest is not invited.");
        }

        if (!(currentGuest.points >= this.possibleArticles[currentArticle.articleModel])) {
            return `You need to more points to purchase the article.`;
        }

        currentGuest.points -= this.possibleArticles[currentArticle.articleModel];
        currentGuest.purchaseArticle += 1;
        currentArticle.quantity -= 1;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[currentArticle.articleModel]} points.`

    }

    showGalleryInfo(criteria) {
        let result = '';
        if (criteria === 'article') {
            result += "Articles information:\n"
            this.listOfArticles.forEach(article => {
                result += `${article.articleModel} - ${article.articleName} - ${article.quantity}\n`;
            })
        } else {
            result += "Guests information:\n";
            this.guests.forEach(guest => {
                result += `${guest.guestName} - ${guest.purchaseArticle}\n`;
            })
        }

        return result.trim();

    }

    getArticleModelByName(name) {
        return this.listOfArticles.filter(article => article.articleName === name)[0];
    }

    getGuestByName(name) {
        return this.guests.filter(element => element.guestName === name)[0];
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
