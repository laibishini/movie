/**
 * Created by Jne on 2017/7/3.
 */
/*��д��������*/
(function(window,document,undefined){

 'use strict';

        /*����jsonp���� */
    var jsonp = function(url,data,callback){

        var fnSuffix =Math.random().toString().replace('.','');
        /*��һ�����ػص�����*/
        var cbFuncName ='my_json_cb_'+ fnSuffix;
        /*����� ���ں���*/
        /*���Ƽ���ô��*/
        window[cbFuncName] = callback




        /*1��һ����data������������ת����url�ַ�������ʽ*//*{id:1,name:'zhangsan'} = id = 1&name = zhangsan*/
        /*ΪʲôҪ�����ʺ���Ϊһ��ʼ�͵����ʺŲ�ѯ�ַ���*/
        var querystring = url.indexOf('?') == -1? '?':'&';
        for(var key in data){
            querystring+= key +'='+data[key]+'&';
        }

       /* querystring = ?id id = 1&name = zhangsan&*/

        /*�ڶ�������url�еĻص�����*//*url+= callback = ddsdlfsd*/

            /*callback�����ֿ������д����Ҫ���ݿ����Ҫ��������һ�������*/
        querystring += 'callback='+cbFuncName  /*callback=my_json_cb_?id id = 1&name = zhangsan&*/

        /*����������һ��script�� ��ǩ*/
        var scriptElement = document.createElement('script');
        scriptElement.src = url + querystring
        /*��ʱ�����ܷŵ�html append*/



        /*���岽Ȼ��script��ǩ�ŵ�ҳ����*/
        document.body.appendChild(scriptElement);






    }

    window.$jsonp = jsonp;









})(window,document)