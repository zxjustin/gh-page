// index.js
import "./styles/global.css"
import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadAbout from "./pages/about.js";

let contentDiv = document.querySelector("#content");

let homeNav = document.querySelector("#home-btn");
let menuNav = document.querySelector("#menu-btn");
let aboutNav = document.querySelector("#about-btn");

homeNav.addEventListener("click", () => {
    contentDiv.textContent = '';
    contentDiv.appendChild(loadHome());
});

menuNav.addEventListener("click", () => {
    contentDiv.textContent = '';
    contentDiv.appendChild(loadMenu());
});

aboutNav.addEventListener("click", () => {
    contentDiv.textContent = '';
    contentDiv.appendChild(loadAbout());
});

contentDiv.appendChild(loadHome());