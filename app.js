angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
.state('home', {
    url:"/",
    templateUrl: "home/home.html"
})
.state('Mac', {
  url:"/Mac",
  templateUrl: "Mac/mac.html",
  controller: "macCtrl"
})
.state('iPad', {
  url:'/iPad',
  templateUrl: 'iPad/iPad.html',
  controller: "iPadCtrl"
})
.state('iPhone', {
  url:'/iPhone',
  templateUrl: 'iPhone/iPhone.html',
  controller: "iPhoneCtrl"
})
.state('watch', {
  url:'/watch',
  templateUrl: 'watch/watch.html',
  controller: "watchCtrl"
})
.state('TV', {
  url:'/TV',
  templateUrl: 'tv/tv.html',
  controller: "tvCtrl"
})
.state('music', {
  url:'/music',
  templateUrl: 'music/music.html',
  controller: "musicCtrl"
})
.state('support', {
  url:'/support',
  templateUrl: 'support/support.html',
  controller: "supportCtrl"
});
$urlRouterProvider
        .otherwise('/');

});//end of config
