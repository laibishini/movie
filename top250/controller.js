(function(angular){

  'use strict';
/*top热映的模块*/
  var module = angular.module('moviecat.top250', ['ngRoute'])

      /*配置模块的路由*/
      module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250', {
          templateUrl: 'top250/view.html',
          controller: 'top250Controller'
        });
      }]);

      module.controller('top250Controller', ['$scope',function($scope) {
          console.log($scope)
      }]);

























})(angular)