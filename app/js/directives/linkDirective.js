angular.module('directiveApp')
.directive('linkDirective', ['$log', function($log){
  return {
    scope: {},
    templateUrl: './templates/linkTemplate.html',
    link: function(scope,element,attrs){
      scope.items = [];
      
      element.addClass('MyClass');

      scope.addItem = function(){
        scope.items.push(scope.newItem);
        scope.newItem = null;
      }

    }
  }

}]);
