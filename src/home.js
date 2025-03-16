export default function loadHome(){
    const content = document.getElementById("content");
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to the restaurant!";

    const description = document.createElement("p");
    description.textContent = "Very cool very good";

    content.appendChild(heading);
    content.appendChild(description);
}