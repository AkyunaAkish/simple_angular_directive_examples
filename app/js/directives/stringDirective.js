angular.module('directiveApp')
.directive('stringDirective', [function(){
  return {
    scope: {
      someText: '@',
    },
    templateUrl: './views/directive_templates/stringTemplate.html'
  }

}]);
