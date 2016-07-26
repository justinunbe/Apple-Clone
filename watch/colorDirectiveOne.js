angular.module("app").directive("colorDirective", function() {
    return {
        restrict: "EA",
        link: function(scope, element, attribute) {
            var elemSelector = '.watch-main-section',
                tStart = 0; // Start transition this many pixels from the top

                tEnd = 5000; // End transition

                cStart = [0, 255, 255, 0.3]; // Start color

                cEnd =  [249, 250, 162, 0.7];// End color

                cDiff = [
                    cEnd[0] - cStart[0],
                    cEnd[1] - cStart[1],
                    cEnd[2] - cStart[2],
                    cEnd[3] - cStart[3]
                ];

            $(document).ready(function() {
                scrollColor();

                function scrollColor() {
                    var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
                    p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
                    var cBg = [
                        Math.round(cStart[0] + cDiff[0] * p),
                        Math.round(cStart[1] + cDiff[1] * p),
                        Math.round(cStart[2] + cDiff[2] * p),
                        Math.round((cStart[3] + cDiff[3] * p) * 100) / 100
                    ];
                    $(elemSelector).css('background-color', 'rgba(' + cBg.join(',') + ')');
                }
                $(document).scroll(function() {
                    scrollColor();
                });
            });


        }
    };
});
