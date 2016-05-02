angular.module('directiveApp')
.directive('looseCoupleDirective', [function(){

  return {
    scope: {
      list: '=',
    },
    templateUrl: './templates/looseCoupleTemplate.html'
  }

}]);
