class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;

    }


    addGoal(peak, altitude) {
        let getPeaksGoals = Object.keys(this.goals);

        if (getPeaksGoals.includes(peak)) {
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;

    }

    hike(peak, time, difficultyLevel) {

        let listPeaksGoals = Object.keys(this.goals);

        if (!listPeaksGoals.includes(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        } else {
            if (this.resources === 0) {
                throw new Error("You don't have enough resources to start the hike");
            }
        }
        let getCurrentDifference = (this.resources - time * 10);
        if (getCurrentDifference < 0) {
            return "You don't have enough resources to complete the hike";
        }
        this.resources -= time * 10;
        this.listOfHikes.push({peak, time, difficultyLevel});

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`


    }

    rest(time) {

        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${time * 10}% resources`;

    }

    showRecord(criteria) {

        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }
        if (criteria === 'hard' || criteria === 'easy') {
            let filteredListHike = this.listOfHikes.filter(hike => hike.difficultyLevel === criteria);
            if (filteredListHike.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            filteredListHike.sort((a, b) => a.time - b.time);
            return `${this.username}'s best ${criteria} hike is ${filteredListHike[0].peak} peak, for ${filteredListHike[0].time} hours`
        } else {
            let result = "All hiking records:\n";
            this.listOfHikes.forEach(hike => {
                result += `${this.username} hiked ${hike.peak} for ${hike.time} hours\n`
            })
            return result.trim();
        }


    }


}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
