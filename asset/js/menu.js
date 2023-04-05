let menuIsOpen = false 
let menuIsOpen = false 

function openMenu() {
    let menu = document.getElementById('menu')
    if(!menuIsOpen) {
       menu.style.display = "block"
       menuIsOpen = true;
    } else {
        menu.style.display = "none";
        menuIsOpen = false;
    }
}