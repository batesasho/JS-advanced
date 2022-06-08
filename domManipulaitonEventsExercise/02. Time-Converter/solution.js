function attachEventsListeners() {

    // let getDayInput = document.getElementById('days');
    // let getHourInput = document.getElementById('hours');
    // let getMinuteInput = document.getElementById('minutes');
    // let getSecondInput = document.getElementById('seconds');

    let getAllButtonsArray = document.querySelectorAll('input[type = "button"]');
    getAllButtonsArray.forEach(buttonElement =>
        buttonElement.addEventListener('click', getConvertedValue));
    let timeInSecondsObject = {
        get days() {return this.seconds * 86400},
        get hours() {return this.seconds * 3600},
        get minutes() {return this.seconds * 60},
        get seconds() {return 1}
    }


    function getConvertedValue(ev) {
        let currentField = ev.target
        for (let timeField in timeInSecondsObject) {
            if (timeField !== currentField.previousElementSibling.id) {
                console.log(timeField)
                // console.log(timeInSecondsObject[timeField.previousElementSibling.id] , Number(currentField.previousElementSibling.value));

            }

        }
    }


}