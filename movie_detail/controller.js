
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
    /*ע�������ķ���httpservice*/  /*$route�ǻ�ȡurl ��ַ���Ĳ�������û���������û����ȡ���µĲ���*/
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
//            $scope.message = 'û���ҵ�����,������Ϣ'+ objct.statusText
//        }
//
//    }, function(err){
//        console.log(err)
//        $scope.message = 'û���ҵ�����,��������'+err.statusText
//
//    });
//
//}]);


