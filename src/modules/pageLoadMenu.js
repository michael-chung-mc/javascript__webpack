export function load () {
    let content = document.getElementById("content");
    //header
    const menuInfo = document.createElement("div");
    menuInfo.innerHTML = "Menu-Info";
    content.append(menuInfo);
}