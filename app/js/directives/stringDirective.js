angular.module('directiveApp')
.directive('stringDirective', [function(){
  return {
    scope: {
      someText: '@',
    },
    templateUrl: './templates/stringTemplate.html'
  }

}]);
