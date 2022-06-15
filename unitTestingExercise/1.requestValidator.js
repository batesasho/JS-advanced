function solve(inputObject) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let messageReg = /^[^<>\\&'"]+$/;
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriReg = /^[\w.]+$/;

    if (!(validMethods.includes(inputObject.method) && inputObject.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!(validVersion.includes(inputObject.version) && inputObject.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!(inputObject.uri && (inputObject.uri === '*' || uriReg.test(inputObject.uri)))) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!(inputObject.hasOwnProperty('message') && (inputObject.message === '' || messageReg.test(inputObject.message)))) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return inputObject

}

console.log(solve({

    method: 'GET',

    uri: 'svn.public.catalog',

    version: 'HTTP/1.1',

    message: ''

}))

console.log(solve({

    method: 'OPTIONS',

    uri: 'git.master',

    version: 'HTTP/1.1',

    message: '-recursive'

}))