export default () =>{
    let page = document.createElement("div");
    page.id = "about";

    let message = document.createElement("div");
    message.id = "message"
    message.textContent = "Hello about page";
    page.appendChild(message);


    return page;
}
