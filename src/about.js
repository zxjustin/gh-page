export default function loadAbout() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const menuDesc = document.createElement("div");
    menuDesc.innerHTML = `
    <h1>about</h1>
    <p>testing 123</p
    `;

    content.appendChild(menuDesc);
}
