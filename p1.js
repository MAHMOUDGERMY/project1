
window.onscroll = function(){myfunc()};

var header = document.getElementById("head");

function myfunc(){
    if(window.pageYOffset >70){
        header.classList.add("sticy");
    }
    else if (window.pageYOffset <30){
        header.classList.remove("sticy");
    }
}

