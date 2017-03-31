angular.module("app").directive("homeDirective", function(){
return {
  restrict: "EA",
  templateUrl: "home/slickTemplate.html",
  link: function(scope, element, attribute){
    $(document).ready(function(){
      $('.slick-slider').slick({
      dots: false,
      autoplay: true,
      pauseOnFocus: false,
      pauseOnHover: false
    });
      });
  }
};




});
