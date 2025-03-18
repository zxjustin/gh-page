export default () =>{
    let page = document.createElement("div");
    page.id = "menu";

    let message = document.createElement("div");
    message.id = "message"
    message.textContent = "Hello menu page";
    page.appendChild(message);

    return page;
}