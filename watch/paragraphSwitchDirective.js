angular.module("app").directive("paragraphSwitchDirective", function() {
    return {
        restrict: "EA",
        link: function(scope, element, attribute) {
            $(window).bind("scroll", function() {
                var $sec2 = 492;
                var $sec3 = 1402;
                var $sec4 = 2191;
                var $sec5 = 2794;

                // if ($(this).scrollTop() < 10) {
                //     $(".main-paragraph-section-one").fadeOut();
                // }
                if ($(this).scrollTop() > 10 & $(this).scrollTop() < 492) {
                    $(".main-paragraph-section-one").fadeIn();
                    // $(".main-paragraph-section-two").hide();
                    // $(".main-paragraph-section-three").hide();
                    // $(".main-paragraph-section-four").hide();
                }
                if ($(this).scrollTop() > $sec2) {
                    $(".main-paragraph-section-one").fadeOut();
                    $(".main-paragraph-section-two").fadeIn();
                    // $(".main-paragraph-section-three").hide();
                    // $(".main-paragraph-section-four").hide();
                }
                if ($(this).scrollTop() > $sec2 & $(this).scrollTop() < $sec3) {
                    $(".main-paragraph-section-one").hide();
                    $(".main-paragraph-section-two").fadeOut();
                    $(".main-paragraph-section-three").fadeIn();
                    $(".main-paragraph-section-four").hide();
                }

                if ($(this).scrollTop() > $sec3 & $(this).scrollTop() < $sec4) {
                    $(".main-paragraph-section-one").hide();
                    $(".main-paragraph-section-two").hide();
                    $(".main-paragraph-section-three").fadeOut();
                    $(".main-paragraph-section-four").fadeIn();
                }
            });
        }
    };
});
