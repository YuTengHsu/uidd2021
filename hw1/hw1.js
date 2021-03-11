$(document).ready(function () {
    $(".more").click(function () {
        $("html, body").animate({ scrollTop: $(".background2").offset().top }, 1000);
    });
});

$(document).ready(function () {
    $(".btn3").click(function () {
        $("html, body").animate({ scrollTop: $("body").offset().top }, 1000, function () {
            $(".btn2").transition('pulse', 500);
        });
    });
});