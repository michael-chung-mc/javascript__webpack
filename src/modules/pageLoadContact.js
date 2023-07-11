export function load () {
    let content = document.getElementById("content");
    //header
    const contactInfo = document.createElement("div");
    contactInfo.innerHTML = "Contact-Info";
    content.append(contactInfo);
}