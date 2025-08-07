const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";

container.appendChild(redText);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I’m a blue h3!";
blueH3.style.color = "blue";

container.appendChild(blueH3);

const smallDiv = document.createElement("div");
smallDiv.style.backgroundColor = "pink";
smallDiv.style.border = "1px solid black";

const h1InDiv = document.createElement("h1");
h1InDiv.textContent = "I’m in a div";

const pInDiv = document.createElement("p");
pInDiv.textContent = "ME TOO!";

smallDiv.appendChild(h1InDiv);
smallDiv.appendChild(pInDiv);
container.appendChild(smallDiv);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

if (0){
    const btn = document.querySelector("#btn");

    btn.addEventListener("click", () => {
        alert("Hello World");
    });

    btn.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        e.target.style.background = "cyan";
    });
}

if (1){
    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll("button");

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener("click", () => {
            alert(button.id);
        });
    });
}

