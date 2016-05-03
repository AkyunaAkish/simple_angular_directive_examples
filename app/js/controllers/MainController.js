angular.module('directiveApp')
.controller('MainController', ['$scope', function($scope){

  $scope.vm = {};
  
  $scope.vm.myList = {
    hello: 'hi',
    test: ''
  }

  $scope.message = 'Yo Dawggg';

}]);
