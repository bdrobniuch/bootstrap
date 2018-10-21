$(document).ready(function () {
    changeNavbarColor();
});

$(window).scroll(function () {
    changeNavbarColor();
});


function changeNavbarColor() {
    var navH = $("#main-nav").outerHeight()
    var scroll = $(window).scrollTop();
    if (scroll >= navH) {
        $("#main-nav").addClass("bg-primary");
    } else {
        $("#main-nav").removeClass("bg-primary");
    }

    console.log(scroll, navH);
}
