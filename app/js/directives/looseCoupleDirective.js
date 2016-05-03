angular.module('directiveApp')
.directive('looseCoupleDirective', [function(){

  // This directive uses an isolated scope that accepts an attribute named list
  return {
    scope: {
      list: '=',
    },
    templateUrl: './views/directive_templates/looseCoupleTemplate.html'
  }

}]);
