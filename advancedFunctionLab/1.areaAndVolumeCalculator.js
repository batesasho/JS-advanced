function solve(area, vol, input) {

    let inputObject = JSON.parse(input);

    function calcArea(obj) {

            return {
                area: area.call(obj),
                volume: vol.call(obj)
            }
        }
    return inputObject.map(calcArea)
    }





console.log(solve(area, vol, `[

{"x":"1","y":"2","z":"10"},

{"x":"7","y":"7","z":"10"},

{"x":"5","y":"2","z":"10"}

]`))


function area() {

    return Math.abs(this.x * this.y);

}

function vol() {

    return Math.abs(this.x * this.y * this.z);

}