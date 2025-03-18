import "../styles/home.css";
export default () =>{
    let page = document.createElement("div");
    page.id = "home-content";

    let blurDiv = document.createElement("div");
    blurDiv.id = "blur";
    page.appendChild(blurDiv);

    let messageContainer = document.createElement("div");
    messageContainer.id = "message-container";

    let message = document.createElement("div");
    message.id = "message"
    message.textContent = "Hello welcome";
    messageContainer.appendChild(message);

    let restaurantName = document.createElement("div");
    restaurantName.id = "restaurant-name";
    restaurantName.textContent = "my establishment";
    messageContainer.appendChild(restaurantName);

    page.appendChild(messageContainer);

    //background image
    let background = document.createElement("div");
    background.classList.add("image");
    let link = document.createElement("a");
    link.href = "https://www.pexels.com/photo/cozy-fukuoka-street-scene-at-night-31109871/"
    link.text = "Photo by Taegun Park from pexels.com";
    background.appendChild(link);

    page.appendChild(background);

    document.body.className = '';
    document.body.classList.add("body-home");
    return page;
}