function termsandconditions_overlay() {
    var el = document.getElementsByClassName("termsandconditions-modal");
    var i;
    for (i = 0; i < el.length; i++) {
        el[i].style.visibility = (el[i].style.visibility == "visible") ? "hidden" : "visible";
    };
     $("body").toggleClass("dialogIsOpen");
     window.onkeyup = function(e) {
       var key = e.keyCode ? e.keyCode : e.which;

       if (key == 38) {
           playerSpriteX += 10;
       }else if (key == 40) {
           playerSpriteX -= 10;
       }
    }
};
