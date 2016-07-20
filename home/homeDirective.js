angular.module("app").directive("homeDirective", function(){
return {
  restrict: "EA",
  templateUrl: "home/slickTemplate.html",
  link: function(scope, element, attribute){
    $(document).ready(function(){
      $('.single-item').slick({
      dots: true,
      // autoplay: true,
      adaptiveHeight: true
    });
      });
  }
};




});
