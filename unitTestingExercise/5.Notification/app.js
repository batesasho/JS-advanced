function notify(message) {
    let getNotificationArea = document.getElementById('notification');
    getNotificationArea.textContent = message;
    getNotificationArea.style.display = 'block';
    getNotificationArea.addEventListener('click', hideDiv);

    function hideDiv() {
        getNotificationArea.style.display = 'none';
    }

}