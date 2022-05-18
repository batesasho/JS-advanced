function solve(stepsNumberToUniversity, footPrintMeters, studentSpeed){
    distancetStepsInM = stepsNumberToUniversity * footPrintMeters 
    timeForRest = Math.floor( stepsNumberToUniversity * footPrintMeters / 500)
    totalTimeNeeded = (distancetStepsInM / studentSpeed)*60 + timeForRest
    hours = Math.floor(totalTimeNeeded / 3600);
    totalTimeNeeded %= 3600;
    minutes = Math.floor(totalTimeNeeded / 60);
    seconds = totalTimeNeeded % 60;
    console.log(`${hours.toFixed(2)}:${minutes.toFixed(2)}:${seconds.toFixed(2)}`)
}


solve(4000, 0.60, 5)