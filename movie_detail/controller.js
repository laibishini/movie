
(function(angular){



    'use strict';

    var module = angular.module(
        'moviecat.detail', [
        'ngRoute'
        ,'moviecat.services.http'
    ])


    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:detail/:id', {
            templateUrl: 'movie_detail/view.html',
            controller: 'datailController'
        });
    }]);
    /*注入依赖的服务httpservice*/  /*$route是获取url 地址更改参数服务没有这个服务没法获取更新的参数*/
    module.controller('datailController', [
        '$scope',
        '$route',
        '$routeParams',
        'HttpService',
        'AppConfig',
        function($scope,$route,$routeParams,HttpService,AppConfig) {
            console.log(AppConfig)

        $scope.moive = {}

        var id = $routeParams.id;


        var apiAddress = 'http://api.douban.com/v2/movie/subject/'+id

        HttpService.jsonp(apiAddress,{},function(data){

            $scope.moive = data;
            $scope.$apply();

        })











    }

    ]);
























})(angular);




















//module.controller('InTheatersController', ['$scope','httpservice',function($scope,httpservice) {
//    $scope.subjects = []
//    $scope.message = ''
//
//    $http.get('/app/bower.json').then(function(objct){
//        if(objct.status == 200){
//            $scope.subjects = objct.data.subjects
//        }else{
//            $scope.message = '没有找到数据,错误消息'+ objct.statusText
//        }
//
//    }, function(err){
//        console.log(err)
//        $scope.message = '没有找到数据,错误请求'+err.statusText
//
//    });
//
//}]);


