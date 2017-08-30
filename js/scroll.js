$(document).ready(function () {
    $(".go-up-btn").on("click", goUp);
})

$(document).scroll(function () {
    var Top = scrollY;
    var Height = $(document).height() / 4;
    if (Top >= Height) {
        $(".go-up-btn").show();
    } else {
        $(".go-up-btn").hide();
    }

});

function goUp() {
    $("html,body").animate({
        scrollTop: 0
    }, 500);
}
