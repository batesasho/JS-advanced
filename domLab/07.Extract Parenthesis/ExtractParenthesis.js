function extract(content) {
    let getString = document.getElementById(content).textContent;
    let pattern = /\((.+?)\)/g;
    let result = "";
    let extraction = pattern.exec(getString);
    while (extraction !== null) {
        result += extraction[1] + ';';
        extraction = pattern.exec(getString);
    }

    return result
}