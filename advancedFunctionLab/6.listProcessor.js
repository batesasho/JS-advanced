function solve(inputArray) {
    let modifiedText = [];
    let index = 0;
    while (index < inputArray.length) {
        let command = '';
        let text = '';

        if (inputArray[index] === 'print') {
            innerProcessing().print(text);
            index++;
            continue;
        }

        command = inputArray[index].split(' ')[0];
        text = inputArray[index].split(' ')[1];

        if (command === 'add') {
            innerProcessing().add(text);
        } else {
            innerProcessing().remove(text);
        }
        index++;
    }

    function innerProcessing() {
        return {
            add(string) {
                return modifiedText.push(string);
            },
            remove(string) {
                return modifiedText = modifiedText.filter(el => el !== string);
            },
            print() {
                return console.log(modifiedText.join(','));
            }
        }
    }
}


solve(
    ['add pesho', 'add george', 'add peter', 'remove peter', 'print']
)