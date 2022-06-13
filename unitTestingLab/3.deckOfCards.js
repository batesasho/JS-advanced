function printDeckOfCards(cardsArrayInput) {
    let result = [];
    for (let cardString of cardsArrayInput) {
        let face = cardString.slice(0, -1);
        let suit = cardString.slice(-1);

        try {
            let card= solve(face, suit);
            result.push(card)
        } catch (er) {
            result = ['Invalid card: ' + cardString]
        }
    }
    console.log(result.join(' '));


    function solve(face, suit) {
        let validFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", 'J', 'Q', "K", "A"];
        let cardObject = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        if (!(validFace.includes(face) && Object.keys(cardObject).includes(suit))) {
            throw new Error('Invalid face:');
        }


        return {
            face,
            suit: cardObject[suit],
            toString() {
                return this.face + this.suit

            }
        };
    }


}

// printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'] )