angular.module("app").directive("watchDirective", function() {
    return {
        restrict: "EA",
        link: function(scope, element, attribute) {
          $(document).ready(function() {
              paragraphSwitch();
              function paragraphSwitch(){
                if(.scrollTop()=800){
                  
                }
              }
          });

        }
    };
});
