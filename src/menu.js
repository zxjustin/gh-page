import odinImage from "./restaurant.jpg"
export default function loadMenu(){
    const content = document.getElementById("content");
    content.innerHTML = "";

    const menuDesc = document.createElement("div");
    menuDesc.innerHTML = `
    <h1>Menu</h1>
    <p>testing 123</p>
    `;

    content.appendChild(menuDesc);
}