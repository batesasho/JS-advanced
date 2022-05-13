function solve(dayOfWeek){
    daysOfWeekArray = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday','Saturday','Sunday']

    if (daysOfWeekArray.includes(dayOfWeek)){
        console.log(daysOfWeekArray.indexOf(dayOfWeek)+1)
}else{
    console.log('error')
}

   
}

solve("Invalid")