function solve(inputArray){
    let modifiedText = [];
    let index = 0;
    while (index < inputArray.length) {

        let [command,object,key,value] = inputArray[index].split(' ')


        if (command=== 'print') {
            innerProcessing().print(object);
            index++;
            continue;
        }




        index++;
    }

    function innerProcessing(){
        return {
            print(objectFromArray) {
                let result = '';
                for (let [key, value] of objectFromArray) {
                    result += `${key}:${value},`;
                }
                return console.log(result);
            },



        }


    }

}


solve([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
])