function toggle() {
    let moreInformation = document.getElementById("extra");
    let buttonText = document.getElementsByTagName("span")[0].textContent;

    if (moreInformation.style.display === "none") {
        moreInformation.style.display = "block"
        document.getElementsByTagName("span")[0].textContent = "Less";
    } else {
        moreInformation.style.display = "none";
        document.getElementsByTagName("span")[0].textContent = "More";
    }
}

