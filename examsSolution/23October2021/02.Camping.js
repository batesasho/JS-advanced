class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
        this.participantConditions = ["child", "student", "collegian"];
        this.participantNames = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.participantConditions.includes(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (this.participantNames.includes(name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({name, condition, power: 100, wins: 0});
        this.participantNames.push(name);
        return `The ${name} was successfully registered.`;


    }

    unregisterParticipant(name) {

        if (!this.participantNames.includes(name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.participantNames.filter(pplName => pplName !== name);
        this.listOfParticipants.filter(ppl => ppl.name !== name);
        return `The ${name} removed successfully.`;

    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let participants = [];

        (typeOfGame === 'WaterBalloonFights') ? participants.push(participant1, participant2) : participants.push(participant1);

        participants.forEach(pplName => {
            if (!this.participantNames.includes(pplName)) {
                throw new Error(`Invalid entered name/s.`)
            }
        })

        if (participants.length === 2) {
            if (this.getParticipantObjectByName(participants[0]).condition !== this.getParticipantObjectByName(participants[1]).condition) {
                throw new Error(`Choose players with equal condition.`);
            }
        }

        if (typeOfGame === 'Battleship') {
            this.getParticipantObjectByName(participants[0]).power += 20;
            return `The ${this.getParticipantObjectByName(participants[0]).name} successfully completed the game ${typeOfGame}.`
        } else {
            if (this.getParticipantObjectByName(participants[0]).power > this.getParticipantObjectByName(participants[1]).power) {
                this.getParticipantObjectByName(participants[0]).wins += 1;
                return `The ${this.getParticipantObjectByName(participants[0]).name} is winner in the game ${typeOfGame}.`
            } else if (this.getParticipantObjectByName(participants[0]).power < this.getParticipantObjectByName(participants[1]).power) {
                this.getParticipantObjectByName(participants[1]).wins += 1;
                return `The ${this.getParticipantObjectByName(participants[1]).name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            }
        }

    }

    toString() {
        this.listOfParticipants.sort((a, b) => b.power - a.power)
        let result = '';
        result += `${this.organizer} will take ${this.participantNames.length} participants on camping to ${this.location}\n`;
        this.listOfParticipants.forEach(ppl => {
            result += `${ppl.name} - ${ppl.condition} - ${ppl.power} - ${ppl.wins}\n`
        })
        return result.trim();
    }

    getParticipantObjectByName(name) {
        return this.listOfParticipants.filter(ppl => ppl.name === name)[0];
    }


}
