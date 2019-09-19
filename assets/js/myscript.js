// Main Javascript
$(document).ready(function () {
    $("#nav-button").click(function () {
        $("#mobile-nav").fadeToggle(200);
    });
    $(".link-wrapper").click(function () {
        $("#mobile-nav").fadeToggle(200);
    });

    // Navbar style
    window.onscroll = () => {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            $("#navigation-bar").toggleClass("dark-background", true);
        } else {
            $("#navigation-bar").toggleClass("dark-background", false);
        }
    }
});