    $(document).ready(function() {
            nbBtnPosition();
        })
        $(window).resize(function() {
            nbBtnPosition();
        })

        function nbBtnPosition() {
            var nbTop = $(".slider-container").height() / 2 - $(".nb-btn").height() / 2;
            $(".nb-btn").css("top", nbTop + "px");
        }
