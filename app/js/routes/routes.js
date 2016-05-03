angular.module('directiveApp')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('initial', {
    url: "/",
    templateUrl: "views/route_partials/main_partial.html",
    controller: "MainController"
  })

}]);
