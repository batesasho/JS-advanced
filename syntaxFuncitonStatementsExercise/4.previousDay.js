function solve (year, month, day){
    let dateObj = Date(year, month, day)
    dateObj.setDate(dateObj.getDate() - 1);
   
    console.log(`${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()}`);
}


solve(2016, 10, 1)