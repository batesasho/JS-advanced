function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let outputResult = "<tr>";
        for (let rowName in arr[0]) {
            outputResult += "<th>"
            outputResult += rowName;
            outputResult += "</th>"
        }
        outputResult += "</tr>";

        return outputResult;
    }


    function makeValueRow(obj) {
        let outputResult = "<tr>";
        for (let keyName in obj) {
            outputResult += "<td>";
            outputResult += obj[keyName];
            outputResult += "</td>";

        }
        outputResult += "</tr>";

        return outputResult;
    }
    function escapeHTML(str){
        return new Option(str).innerHTML;
    }

    console.log(outputArr.join('\n'));
}

JsonToHtmlTable(`[{"Name":"Pesho",

"Score":4,

" Grade":8},

{"Name":"Gosho",

"Score":5,

" Grade":8},

{"Name":"Angel",

"Score":5.50,

" Grade":10}]`)


