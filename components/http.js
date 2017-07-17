/**
 * Created by Jne on 2017/7/3.
 */
'use strict';

(function(angular) {
    // 由于默认angular提供的异步请求对象不支持自定义回调函数名
    // angular随机分配的回调函数名称不被豆瓣支持
    var http = angular.module('moviecat.services.http', []);
    http.service('HttpService', ['$window', '$document', function($window, $document) {
        // url : http://api.douban.com/vsdfsdf -> <script> -> html就可自动执行

        this.a = 5
        this.jsonp = function(url, data, callback) {
            var fnSuffix = Math.random().toString().replace('.', '');
            var cbFuncName = 'my_json_cb_' + fnSuffix;
            // 不推荐 /*window['dd] = function(){console.log(1)} 相当于这样然后返回的是个包含函数名字的参数就是请求对象的参数 myjsocdd55255(objcet)*/

            var querystring = url.indexOf('?') == -1 ? '?' : '&';
            for (var key in data) {
                querystring += key + '=' + data[key] + '&';
            }
            /*加上自定义函数名字就返回加上就返回callback=后面加上自定义名字 看api 的需要有的事别的关键字*/
            querystring += 'callback=' + cbFuncName;
            var scriptElement = $document[0].createElement('script');
            scriptElement.src = url + querystring;
            /*回来的函数是这样jsonp1203({"result":[{"topicId":106,"score":96.17849171})*/
            $window[cbFuncName] = function(data){

                /*调用完里面的参数*/
                callback(data);
                /*立即把自己干掉*/
                $document[0].body.removeChild(scriptElement);
            };


            $document[0].body.appendChild(scriptElement);
        };
    }]);
})(angular);
