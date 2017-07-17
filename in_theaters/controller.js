
(function(angular){



    'use strict';

    var module = angular.module('moviecat.in_theaters', ['ngRoute','moviecat.services.http'])


    module.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:category/:page', {
            templateUrl: 'in_theaters/view.html',
            controller: 'InTheatersController'
        });
    }]);
                                                        /*注入依赖的服务httpservice*/  /*$route是获取url 地址更改参数服务没有这个服务没法获取更新的参数*/
    module.controller('InTheatersController',
        [
            '$scope',
            'HttpService',
            '$routeParams',
            '$route',
            'AppConfig',
            function($scope,HttpService,$routeParams,$route,AppConfig) {
        var page = parseInt($routeParams.page);
        var count = AppConfig.countsize;
        var start = parseInt((page - 1) * count);
        console.log('列表路由')


        $scope.subjects = []
        $scope.pagetotal = 0;
        $scope.title = 'loading....'
        $scope.totalCount = 0;
        $scope.lodind = true;
        $scope.message = ''
        $scope.currentpage = page
            HttpService.jsonp(
                AppConfig.apimovie+$routeParams.category,
            {
                count:count,start:start,q:$routeParams.q
                /*q是？号后面的参数是没有的在实际URL里面是有的，他区别于when /class?这个是可有可无的意思这里的问号是#/search/10?q=%E6%9F%AF%E5%8D%97*/
            },
            /*最终执行的函数回调*/
            function(data){
                $scope.subjects = data.subjects;
                $scope.title = data.title
                /*自己写jsonp 必须写这句话让angular重新监视*/
                $scope.totalCount = data.total;
                /*计算一共几页总条数除以十每页的就是总总页数然后向下取整*/
                /*总页数*/
                $scope.pagetotal = Math.ceil($scope.totalCount / count);
                $scope.lodind = false;
                $scope.$apply()


            }

        )

        $scope.go = function(page){
            /*当页数大于等于一并且页数小于总页数的时候可以上一页下一页*/
            if(page>=1&&page <= $scope.pagetotal)
            /*$route有一个方法更新参数传入的事对象你要跟新的参数和更新后的参数*/
            /*这个是更改ulr地址里的字符串可以是变量可以是字符串都可以*/
            $route.updateParams({page:page})



        }






    }]);
























})(angular)




















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


