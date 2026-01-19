import "./styles.css";
import ravenImage from "./img/raven.jpg";
import { greeting } from "./greeting.js";

console.log(greeting);

const image = document.createElement("img");
image.src = ravenImage;

document.body.appendChild(image);