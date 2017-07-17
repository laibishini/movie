




















'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
    'ngRoute',

    'moviecat.movie_detail',
    'moviecat.in_theaters',
    'moviecat.directive.auto_focus'




])
    .constant('AppConfig',{

        countsize:10,
        apimovie:'https://api.douban.com/v2/movie/',
        apiAddress:'http://api.douban.com/v2/movie/subject/'


    })
    .config(['$routeProvider', function($routeProvider) {
    /*����ʲô��û��ƥ���ϵĻ�Ӧ����ת�������ַ������*/

    $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])
    .controller('searchController',['$scope','$route','AppConfig',function($scope,$route){

        $scope.input = '';

        $scope.search = function(){

            $route.updateParams({q:$scope.input,category:'search'})

        }







    }])

