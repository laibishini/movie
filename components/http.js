/**
 * Created by Jne on 2017/7/3.
 */
'use strict';

(function(angular) {
    // ����Ĭ��angular�ṩ���첽�������֧���Զ���ص�������
    // angular�������Ļص��������Ʋ�������֧��
    var http = angular.module('moviecat.services.http', []);
    http.service('HttpService', ['$window', '$document', function($window, $document) {
        // url : http://api.douban.com/vsdfsdf -> <script> -> html�Ϳ��Զ�ִ��

        this.a = 5
        this.jsonp = function(url, data, callback) {
            var fnSuffix = Math.random().toString().replace('.', '');
            var cbFuncName = 'my_json_cb_' + fnSuffix;
            // ���Ƽ� /*window['dd] = function(){console.log(1)} �൱������Ȼ�󷵻ص��Ǹ������������ֵĲ��������������Ĳ��� myjsocdd55255(objcet)*/

            var querystring = url.indexOf('?') == -1 ? '?' : '&';
            for (var key in data) {
                querystring += key + '=' + data[key] + '&';
            }
            /*�����Զ��庯�����־ͷ��ؼ��Ͼͷ���callback=��������Զ������� ��api ����Ҫ�е��±�Ĺؼ���*/
            querystring += 'callback=' + cbFuncName;
            var scriptElement = $document[0].createElement('script');
            scriptElement.src = url + querystring;
            /*�����ĺ���������jsonp1203({"result":[{"topicId":106,"score":96.17849171})*/
            $window[cbFuncName] = function(data){

                /*����������Ĳ���*/
                callback(data);
                /*�������Լ��ɵ�*/
                $document[0].body.removeChild(scriptElement);
            };


            $document[0].body.appendChild(scriptElement);
        };
    }]);
})(angular);
