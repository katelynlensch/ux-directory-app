'use strict';

angular.module('uxDirectory.directory', ['ngRoute', 'uxDirectory.directory_retriever'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/directory', {
    templateUrl: 'directory/ux_directory.html',
    controller: 'uxDirectoryCtl'
  });
}])

.controller('uxDirectoryCtl', UXDirectoryCtl);