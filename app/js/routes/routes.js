angular.module('directiveApp')
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('initial', {
    url: "/",
    templateUrl: "views/route_partials/main_partial.html",
    controller: "MainController"
  })

});
