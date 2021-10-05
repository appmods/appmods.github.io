window.onload = function(){
    loadApps()
}

let appname = document.querySelectorAll(".name");
let appicon = document.querySelectorAll(".app img");
let applink = document.querySelectorAll(".app a");

function loadApps(){
    for(let n = 0;n < apps.length;n++){
        appname[n].innerHTML = apps[n].name;
        appicon[n].src = "icon/" + apps[n].icon;
        applink[n].href = apps[n].link;
        applink[n].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 15 4 L 15 20.5625 L 9.71875 15.28125 L 8.28125 16.71875 L 15.28125 23.71875 L 16 24.40625 L 16.71875 23.71875 L 23.71875 16.71875 L 22.28125 15.28125 L 17 20.5625 L 17 4 Z M 7 26 L 7 28 L 25 28 L 25 26 Z"/></svg>';
    }
}