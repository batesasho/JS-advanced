function solve(month, year){
    month = Number(month)
    year = Number(year)
    return new Date(year, month, 0).getDate();
}

console.log(solve(2, 2021));