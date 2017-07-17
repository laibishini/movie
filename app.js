




















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
    /*当你什么都没有匹配上的话应该跳转到这个地址上来。*/

    $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])
    .controller('searchController',['$scope','$route','AppConfig',function($scope,$route){

        $scope.input = '';

        $scope.search = function(){

            $route.updateParams({q:$scope.input,category:'search'})

        }







    }])

