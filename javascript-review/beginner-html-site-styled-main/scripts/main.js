const myImg = document.querySelector("img");

myImg.addEventListener("click", () => {
    const mySrc = myImg.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImg.setAttribute("src", "images/odin-lined.png")
    } else {
        myImg.setAttribute("src", "images/firefox-icon.png") 
    }
});