/**
 * Created by Jne on 2017/7/4.
 */

(function(angular){


angular.module('moviecat.directive.auto_focus',[])
    /*�շ������������ڶ���ָ���ʱ�����ô�д���м� ����ʹ�õ�ʱ��һ��Ҫ�����л���*/
    .directive('autoFocus',['$location',function($location){
        //var path =$location.path();


        return{
            restrict: 'A',
            link:function($scope,iElm,iAttrs,controller){
                /*��ȡliԪ�ص����Բ������Ƚ�һ��*/
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