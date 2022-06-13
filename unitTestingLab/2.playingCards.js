function card(face, suit) {
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


console.log(card('A', 'S').toString())
console.log(card('10', 'H').toString())
console.log(card('1', 'C').toString())
