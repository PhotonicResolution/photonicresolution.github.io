function $(id){return document.getElementById(id)}

var menuButton = $("menu");
var menuImg = menuButton.getElementsByTagName("img")[0];
var headerOffset = $("topnav").offsetHeight;

//I did this when I had no idea u could just use an a href to the object instead... Oh well, I guess it helps with the moving navbar at least
function navbarTarget(target){
    var targetOffset = $(target).offsetTop;

    window.scrollTo({
        top: targetOffset-headerOffset,
        behavior:"smooth"
    });
}

let root = document.documentElement;

window.addEventListener('resize', e => {
    root.style.setProperty('--window_height', window.innerHeight + 'px')
});