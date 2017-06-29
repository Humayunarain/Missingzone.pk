(function() {
  'use strict';


  angular
    .module('myapp', ['ui.router', 'ui.bootstrap'])
    .config(config);

  function config ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/")

    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "src/component/home.html"
      })
      .state('route1', {
        url: "/route1",
        templateUrl: "src/component/route1.html"
      })
      .state('find', {
        url: "/find",
        templateUrl: "src/component/find.html",
        controller: "findCtrl"
      })
      .state('register', {
        url: "/register",
        templateUrl: "src/component/register.html",
        controller: "RegisterCtrl"
      })
      .state('route1.list', {
        url: "/list",
        templateUrl: "src/component/route1.list.html",
        controller: "route1ctrl"
      })
      .state('route2', {
        url: "/route2",
        templateUrl: "src/component/route2.html"
      })
      .state('route2.list', {
        url: "/list",
        templateUrl: "src/component/route2.list.html",
        controller: "route2ctrl"
      })
  }

})();

