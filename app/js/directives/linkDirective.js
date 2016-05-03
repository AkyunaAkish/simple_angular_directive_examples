angular.module('directiveApp')
.directive('linkDirective', ['$log','itemService', function($log,itemService){
  return {
    scope: {},
    templateUrl: './views/directive_templates/linkTemplate.html',
    link: function(scope,element,attrs){

      scope.vm = {};
      scope.vm.items = itemService.getItems();

      // You have direct access to the element within your directives
      element.addClass('MyClass');

      scope.vm.addItem = function(){
        itemService.addItem(scope.vm.newItem);
        scope.vm.newItem = null;
      }

    }
  }

}]);
