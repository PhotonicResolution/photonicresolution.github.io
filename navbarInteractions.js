var menuImg = $('menu').getElementsByTagName("img")[0];
var showing = false;

menuImg.addEventListener("animationiteration", function(){
    menuImg.classList.remove("animationDisplay");
    menuImg.classList.remove("animationOccult")
});

let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0;
let touchendY = 0;

const slider = $('occult_menu');

function handleGesture() {
    var Ymovement = Math.abs(touchendY-touchstartY);
    if (touchendX < touchstartX + 60 && Ymovement < 60 && showing === true) menu_hide();
    if (touchendX > touchstartX + 60 && Ymovement < 60 && showing === false) menu_show();
}

slider.addEventListener('touchstart', e => {
touchstartX = e.changedTouches[0].screenX;
touchstartY = e.changedTouches[0].screenY;
});

slider.addEventListener('touchend', e => {
touchendX = e.changedTouches[0].screenX;
touchendY = e.changedTouches[0].screenY;
handleGesture();
});

function menu_show(){
    showing = true;
    menuImg.classList.add("animationDisplay");
    $("navbar").classList.remove("occult");
    $("navbar").classList.add("display");
}

function menu_hide(){
    showing = false;
    menuImg.classList.add("animationOccult");
    $("navbar").classList.remove("display");
    $("navbar").classList.add("occult");
}

function menu_click(){
    switch (showing){
        case false:
            menu_show();
            break;
        case true:
            menu_hide();
            break;
    }
}