let x = document.getElementById("drop-down");
let htmlDivElement = document.getElementById("div");
let bodyContainer = document.getElementById("body-container");
let xButton = document.createElement("i");
let htmlAnchorElement = document.getElementById("a");
xButton.classList.add("fa-solid", "fa-xmark");
htmlAnchorElement.classList.add("x-mark");
htmlAnchorElement.append(xButton);


function menuShow(event) {
    event.stopPropagation();
    htmlDivElement.style.display = "block";
    htmlDivElement.style.animation = "show 1s";
    bodyContainer.style.opacity = "0.6";
    htmlDivElement.append(htmlAnchorElement);
    htmlDivElement.append(x);
    document.body.append(htmlDivElement);
}

function menuClose() {
    if (htmlDivElement.classList.contains("hamburger")) {
        htmlDivElement.style.animation = "hide 1s";
        bodyContainer.style.opacity = "1";
        setTimeout(() => {
            htmlAnchorElement.remove();
            htmlDivElement.remove();
        }, 1000);
    }

}

document.querySelector(".icon").addEventListener("click", menuShow);
document.querySelector("#body-container").addEventListener("click", menuClose);
document.querySelector(".x-mark").addEventListener("click", menuClose);

