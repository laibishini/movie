(function(angular){

  'use strict';
/*top��ӳ��ģ��*/
  var module = angular.module('moviecat.top250', ['ngRoute'])

      /*����ģ���·��*/
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