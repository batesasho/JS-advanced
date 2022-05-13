function solve(number=5){
    let starsArray='';
    for (let i = 0; i<number; i++){
            
        for (let j = 0;j<number;j++){
            starsArray += "* ";
            
        }
        starsArray.trim();
        starsArray += '\n';
        
        
    }
    console.log(starsArray);
    }
    


solve()