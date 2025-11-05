const myImg = document.querySelector("img");

myImg.addEventListener("click", () => {
    const mySrc = myImg.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImg.setAttribute("src", "images/odin-lined.png")
    } else {
        myImg.setAttribute("src", "images/firefox-icon.png") 
    }
});

const buttonChangeUser = document.querySelector("button");
const header = document.querySelector("h1");

function setUserName() {
    const newName = prompt("What is the new username?");
    if (!newName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", newName);
        header.textContent = `Mozilla is cool, ${newName}`; 
    }
    
}

if (!localStorage.getItem("name")){
    setUserName();
} else {
    const name = localStorage.getItem("name");
    header.textContent = `Mozilla is cool, ${name}`; 
}

buttonChangeUser.addEventListener("click", setUserName);