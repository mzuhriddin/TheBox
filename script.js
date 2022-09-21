let x = document.getElementById("drop-down");
let htmlDivElement = document.createElement("div");
let bodyContainer = document.getElementById("body-container");

function menuShow(event) {
    event.stopPropagation();
    htmlDivElement.classList.add("hamburger");
    htmlDivElement.style.visibility = "visible";
    htmlDivElement.style.animation = "show 1s";
    bodyContainer.style.opacity = "0.6";
    htmlDivElement.append(x);
    document.body.append(htmlDivElement);
}

function menuClose() {
    if (htmlDivElement.classList.contains("hamburger")) {
        htmlDivElement.style.animation = "hide 1s";
        bodyContainer.style.opacity = "1";
        setTimeout(() => {
            htmlDivElement.classList.remove("hamburger");
        }, 1000);
    }

}

document.querySelector(".icon").addEventListener("click", menuShow);
document.querySelector("#body-container").addEventListener("click", menuClose)
