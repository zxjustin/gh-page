// index.js
import "./styles/styles.css";
import { greeting } from "./greeting.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
console.log(greeting);
console.log("Webpack working");

//Run home page by default
document.addEventListener("DOMContentLoaded", () => {
    loadHome();
})

//button event listener
document.getElementById("home-btn").addEventListener("click" , loadHome);
document.getElementById("menu-btn").addEventListener("click" , loadMenu);
document.getElementById("about-btn").addEventListener("click" , loadAbout);