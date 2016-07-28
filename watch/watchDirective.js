angular.module("app").directive("watchDirective", function() {
    return {
        restrict: "EA",
        link: function(scope, element, attribute) {
            $(window).scroll(function() {
                var winscroll = $(this).scrollTop();
                // console.log(winscroll);
                var theta = $(this).scrollTop() / 10 % Math.PI;
                $('.orange-leather-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 15 + '%) rotate(' + $(this).scrollTop() / 4000 % Math.PI + 'rad)'
                });
                $('.white-sport-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 12 + '%) rotate(' + $(this).scrollTop() / 2500 % Math.PI + 'rad)'
                });
                $('.orange-fabric-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 11.9 + '%) rotate(' + $(this).scrollTop() / 4000 % Math.PI + 'rad)'
                });
                $('.blue-leather-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 7.4 + '%) rotate(' + $(this).scrollTop() / 2500 % Math.PI + 'rad)'
                });
                $('.black-link-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 9.4 + '%) rotate(-' + $(this).scrollTop() / 2000 % Math.PI + 'rad)'
                });
                $('.purple-fabric-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 12.9 + '%) rotate(-' + $(this).scrollTop() / 3500 % Math.PI + 'rad)'
                });
                $('.white-bronze-sport-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 5 + '%) rotate(' + $(this).scrollTop() / 2000 % Math.PI + 'rad)'
                });
                $('.orange-sport-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 6.5 + '%) rotate(-' + $(this).scrollTop() / 3500 % Math.PI + 'rad)'
                });
                $('.yellow-sport-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 7.5 + '%) rotate(-' + $(this).scrollTop() / 1500 % Math.PI + 'rad)'
                });
                $('.brown-leather-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 5 + '%) rotate(' + $(this).scrollTop() / 3500 % Math.PI + 'rad)'
                });
                $('.blue-sport-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 3.85 + '%) rotate(-' + $(this).scrollTop() / 3000 % Math.PI + 'rad)'
                });
                $('.black-chain-snap-watch-pic').css({
                    'transform': 'translate(0px, -' + winscroll / 8 + '%) rotate(' + $(this).scrollTop() / 1000 % Math.PI + 'rad)'
                });
                $('#watch-main-description-paragraph-one').css({
                    'transform': 'translate(0px,' + winscroll / 40 + '%)'
                });
                $('#watch-main-description-paragraph-two').css({
                    'transform': 'translate(0px,' + winscroll / 20 + '%)'
                });
                $('#watch-main-description-paragraph-three').css({
                    'transform': 'translate(0px,' + winscroll / 20 + '%)'
                });
                $('#watch-main-description-paragraph-four').css({
                    'transform': 'translate(0px,' + winscroll / 20 + '%)'
                });
            });
        }
    };
});
