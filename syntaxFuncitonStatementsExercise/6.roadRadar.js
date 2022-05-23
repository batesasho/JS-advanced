function solve(speedKm, area){
let motorWayLimit = 130;
let interStateLimit = 90;
let cityLimit = 50;
let residentialLimit = 20;
let status = ''
let speedLimitZone = 0
if (area === "motorway") {
    speedLimitZone = 130;
}else if (area === "interstate"){
    speedLimitZone = 90;
}else if (area === "city"){
    speedLimitZone = 50;
}else if (area === "residential"){
    speedLimitZone = 20;
}

if ((area === "motorway" && speedKm <= motorWayLimit) || (area === "interstate" && speedKm <= interStateLimit) || (area === "city" && speedKm <= cityLimit) || (area === "residential" && speedKm <= residentialLimit) ){
    console.log(`Driving ${speedKm} km/h in a ${speedLimitZone} zone`);
}    else {

if (area === "motorway"){
    let motorWayOverLimit = Math.abs(speedKm - 130);
    if (motorWayLimit >0 && motorWayLimit <=20){
        status = "speeding";
    } else if (motorWayLimit >20 && motorWayLimit <=40){
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }
    console.log(`The speed is ${motorWayOverLimit} km/h faster than the allowed speed of ${motorWayLimit} - ${status}` )

} else if (area === 'interstate'){
    let interstateOverLimit = Math.abs(speedKm - 90);
    if (interstateOverLimit >0 && interstateOverLimit <=20){
        status = "speeding";
    } else if (interstateOverLimit >20 && interstateOverLimit <=40){
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }
    console.log(`The speed is ${interstateOverLimit} km/h faster than the allowed speed of ${interStateLimit} - ${status}` )
} else if (area === 'city'){
    let cityOverLimit = Math.abs(speedKm - 50);
    if (cityOverLimit >0 && cityOverLimit <=20){
        status = "speeding";
    } else if (cityOverLimit >20 && cityOverLimit <=40){
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }
    console.log(`The speed is ${cityOverLimit} km/h faster than the allowed speed of ${cityLimit} - ${status}` )

} else if (area === 'residential'){
    let residentialOverLimit = Math.abs(speedKm - 20);
    if (residentialOverLimit <=20){
        status = "speeding";
    } else if (residentialOverLimit >20 && residentialOverLimit <=40){
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }
    console.log(`The speed is ${residentialOverLimit} km/h faster than the allowed speed of ${residentialLimit} - ${status}` )

}
}}


solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')