/**
 * Created by Jne on 2017/7/4.
 */

(function(angular){


angular.module('moviecat.directive.auto_focus',[])
    /*驼峰命名法我们在定义指令的时候是用大写的中间 真正使用的时候一定要换上中划线*/
    .directive('autoFocus',['$location',function($location){
        //var path =$location.path();


        return{
            restrict: 'A',
            link:function($scope,iElm,iAttrs,controller){
                /*获取li元素的属性参数来比较一下*/
                $scope.$location = $location;

                $scope.$watch('$location.path()', function (now,old) {


                    var aLink = iElm.children().attr('href');


                    var type = aLink.replace(/#(\/.+?)\/\d+/, '$1');


                    if(now.startsWith(type)){
                        iElm.parent().children().removeClass('active')
                        iElm.addClass('active');
                    }
                })


              //
              //  var aLink = iElm.children().attr('href');
              //
              //  var type = aLink.replace(/#(\.+?)\/\d+/,'$1');
              //  if(path.startsWith(type)){
              //
              //    iElm.addClass('active');
              //}

                //iElm.on('click',function(){
                //    iElm.parent().children().removeClass('active')
                //    iElm.addClass('active');
                //
                //
                //
                //})

            }

        }

    }])






















})(angular)