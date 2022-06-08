function encodeAndDecodeMessages() {
    let getEncodeBtn = document.querySelector('button');
    let getDecodeBtn = document.querySelectorAll('button')[1];
    let textAreaEncode = document.querySelector('textarea');
    let textAreaDecode = document.querySelectorAll('textarea')[1];


    getEncodeBtn.addEventListener('click', encodeMessage);
    getDecodeBtn.addEventListener('click', decodeMessage);


    function encodeMessage(event) {
        let encodeMessage = '';
        for (let i = 0; i < textAreaEncode.value.length; i++) {
            encodeMessage += String.fromCharCode(textAreaEncode.value[i].charCodeAt(0) + 1);
        }
        textAreaDecode.value = encodeMessage;
        textAreaEncode.value = '';
    }

    function decodeMessage(event) {
        let decodedMessage = '';


        for (let i = 0; i < textAreaDecode.value.length; i++) {
            decodedMessage += String.fromCharCode(textAreaDecode.value[i].charCodeAt(0) - 1);
        }
        textAreaDecode.value = decodedMessage;
    }

}