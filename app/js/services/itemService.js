angular.module('directiveApp')
.service('itemService', ['$log','$localStorage', function($log,$localStorage){

  if (!$localStorage.items) {
    $localStorage.items = [];
  }

  var items = $localStorage.items;

  this.getItems = function() {
    return items;
  };

  this.addItem = function(itemObj) {
    items.push(itemObj);
  };

}]);
