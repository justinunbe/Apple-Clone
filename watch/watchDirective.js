angular.module("app").directive("watchDirective", function() {
            return {
                restrict: "EA",
                link: function(scope, element, attribute) {
                    $(window).scroll(function() {
                        var winscroll = $(this).scrollTop();
                        var theta = $(this).scrollTop()/ 10 % Math.PI;
                        $('.orange-leather-watch-pic').css({
                          'transform': 'translate(0px, -' + winscroll / 15 + '%) rotate(' + $(this).scrollTop()/ 5500 % Math.PI + 'rad)'
                      });
                        $('.white-sport-watch-pic').css({
                          'transform': 'translate(0px, -' + winscroll / 12 + '%) rotate(' + $(this).scrollTop()/ 4000 % Math.PI + 'rad)'
                      });
                        $('.orange-fabric-watch-pic').css({
                            'transform': 'translate(0px, -' + winscroll / 11.9 + '%) rotate(' + $(this).scrollTop()/ 5500 % Math.PI + 'rad)'
                        });
                        $('.blue-leather-watch-pic').css({
                            'transform': 'translate(0px, -' + winscroll / 7 + '%)'
                        });
                        $('.black-link-watch-pic').css({
                            'transform': 'translate(0px, -' + winscroll / 9.4 + '%)'
                        });
                        $('.purple-fabric-watch-pic').css({
                          'transform': 'translate(0px, -' + winscroll / 11.9 + '%) rotateY(' + $(this).scrollTop()/ 10 % Math.PI + 'rad)'
                      });
                        $('.white-bronze-sport-watch-pic').css({
                            'transform': 'translate(0px, -' + winscroll / 5 + '%)'
                        });
                        $('.orange-sport-watch-pic').css({
                            'transform': 'translate(0px, -' + winscroll / 6.5 + '%)'
                        });
                        $('.yellow-sport-watch-pic').css({
                            'transform': 'translate(0px, -' + winscroll / 7.5 + '%)'
                        });
                        $('.brown-leather-watch-pic').css({
                            'transform': 'translate(0px, -' + winscroll / 6 + '%)'
                        });
                        $('.blue-sport-watch-pic').css({
                            'transform': 'translate(0px, -' + winscroll / 4.7 + '%)'
                        });
                        $('.black-chain-snap-watch-pic').css({
                            'transform': 'translate(0px, -' + winscroll / 10 + '%)'
                        });
                    });
                    // $(window).scroll(function() {
                    //         var theta = $(this).scrollTop() % Math.PI;
                    //         $('.orange-fabric-watch-pic').css({
                    //           "transform":  "rotate(" + "20rad)"
                    //         });
                    //     });
                    }
            };
          });
