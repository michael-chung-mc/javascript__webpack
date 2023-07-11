import {load as loadHome} from './modules/pageLoadHome.js'
import {load as loadMenu} from './modules/pageLoadMenu.js'
import {load as loadContact} from './modules/pageLoadContact.js'

let options = {1 : "home",2 : "menu",3 : "contact" };

let display = function (option) {
    return () => {
        console.log(option);
        let content = document.getElementById("content");
        while (content.firstChild)
        {
            content.removeChild(content.firstChild);
        }
        if (option == options[1]) loadHome();
        else if (option == options[2]) loadContact();
        else if (option == options[3]) loadMenu();
    }
};

(function ()
{
    let tabs = document.createElement("div")
    tabs.className = "tab"
    let homeTab = document.createElement("button")
    homeTab.className = "tab"
    homeTab.id = "homeTab"
    homeTab.addEventListener("click", display(options[1]));
    homeTab.innerHTML = "HOME"
    let menuTab = document.createElement("button")
    menuTab.className = "tab"
    menuTab.id = "menuTab"
    menuTab.addEventListener("click", display(options[2]));
    menuTab.innerHTML = "MENU"
    let contactTab = document.createElement("button")
    contactTab.className = "tab"
    contactTab.id = "contactTab"
    contactTab.addEventListener("click", display(options[3]));
    contactTab.innerHTML = "CONTACT"
    tabs.append(homeTab);
    tabs.append(menuTab);
    tabs.append(contactTab);
    let content = document.getElementById("content");
    document.body.insertBefore(tabs, content);
    display(options[1])();
})();

//console.log("hello world");