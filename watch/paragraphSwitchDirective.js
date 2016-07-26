angular.module("app").directive("paragraphSwitchDirective", function() {
    return {
        restrict: "EA",
        link: function(scope, element, attribute) {
            $(window).bind("scroll", function() {
                var $sec2 = 492;
                var $sec3 = 1402;
                var $sec4 = 2191;
                var $sec5 = 2794;

                if ($(this).scrollTop() < 30) {
                    $("#watch-main-description-paragraph-one").fadeOut();
                }
                if ($(this).scrollTop() > 30 & $(this).scrollTop() < 492) {
                    $("#watch-main-description-paragraph-one").fadeIn();
                    $("#watch-main-description-paragraph-two").hide();
                    $("#watch-main-description-paragraph-three").hide();
                    $("#watch-main-description-paragraph-four").hide();
                }
                if ($(this).scrollTop() > $sec2) {
                    $("#watch-main-description-paragraph-one").fadeOut();
                    $("#watch-main-description-paragraph-two").fadeIn();
                    $("#watch-main-description-paragraph-three").hide();
                    $("#watch-main-description-paragraph-four").hide();
                }
                if ($(this).scrollTop() > $sec2 & $(this).scrollTop() < $sec3) {
                    $("#watch-main-description-paragraph-one").hide();
                    $("#watch-main-description-paragraph-two").fadeOut();
                    $("#watch-main-description-paragraph-three").fadeIn();
                    $("#watch-main-description-paragraph-four").hide();
                }

                if ($(this).scrollTop() > $sec3 & $(this).scrollTop() < $sec4) {
                    $("#watch-main-description-paragraph-one").hide();
                    $("#watch-main-description-paragraph-two").hide();
                    $("#watch-main-description-paragraph-three").fadeOut();
                    $("#watch-main-description-paragraph-four").fadeIn();
                }
            });
        }
    };
});
