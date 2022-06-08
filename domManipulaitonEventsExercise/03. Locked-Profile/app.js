function lockedProfile() {

    let getShowMoreBtn = [...document.getElementsByTagName('button')];
    getShowMoreBtn.forEach(
        btnElement => {
            btnElement.addEventListener('click', showInfo);
        }
    );

    function showInfo(event) {
        let currentUserInformation = event.target;
        let radioBtnStatus = [...currentUserInformation.parentElement.querySelectorAll('input[type = radio]')][0];
        if (!radioBtnStatus.checked) {
            let getHiddenInfo = [...currentUserInformation.parentElement.getElementsByTagName('div')][0];
            if (currentUserInformation.textContent === 'Show more') {
                getHiddenInfo.style.display = 'inline-block';
                currentUserInformation.textContent = "Hide it";
            } else {
                getHiddenInfo.style.display = 'none';
                currentUserInformation.textContent = "Show more";
            }
        }
    }
}