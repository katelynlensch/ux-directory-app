'use strict';

// Declare app level module which depends on views, and components
angular.module('uxDirectory', [
  'ngRoute',
  'uxDirectory.directory'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/directory'});
}]);
