function attachGradientEvents() {
    let getResultField = document.getElementById('result');

    const mouseMove = document.getElementById('gradient');
    mouseMove.addEventListener('mousemove', onMouseOver);

    function onMouseOver(ev) {
        const elementWidth = ev.target.clientWidth;
        getResultField.textContent = String(Math.floor(ev.offsetX * 100 / elementWidth)+'%');

    }
}