$(document).ready(function () {
    $(".fa-bars").click(function (e) {
        e.preventDefault();
        $(".mobileMenu").toggle();
        $(this).toggleClass("fa-times");
    });

    $(".mobileMenu").click(function (e) {
        e.preventDefault();
        $(".mobileMenu").hide();
        $(".fa-bars").removeClass("fa-times");
    });

    AOS.init();
});

