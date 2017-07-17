/**
 * Created by Jne on 2017/7/3.
 */
/*手写跨域的组件*/
(function(window,document,undefined){

 'use strict';

        /*定义jsonp变量 */
    var jsonp = function(url,data,callback){

        var fnSuffix =Math.random().toString().replace('.','');
        /*第一步挂载回调函数*/
        var cbFuncName ='my_json_cb_'+ fnSuffix;
        /*随机数 等于函数*/
        /*不推荐这么用*/
        window[cbFuncName] = callback




        /*1第一步把data传过来的数据转换成url字符串的形式*//*{id:1,name:'zhangsan'} = id = 1&name = zhangsan*/
        /*为什么要等于问号因为一开始就等于问号查询字符串*/
        var querystring = url.indexOf('?') == -1? '?':'&';
        for(var key in data){
            querystring+= key +'='+data[key]+'&';
        }

       /* querystring = ?id id = 1&name = zhangsan&*/

        /*第二步处理url中的回调参数*//*url+= callback = ddsdlfsd*/

            /*callback这名字可以随便写但是要根据跨域的要求名字来一般是这个*/
        querystring += 'callback='+cbFuncName  /*callback=my_json_cb_?id id = 1&name = zhangsan&*/

        /*第三步创建一个script的 标签*/
        var scriptElement = document.createElement('script');
        scriptElement.src = url + querystring
        /*此时还不能放到html append*/



        /*第五步然后将script标签放到页面中*/
        document.body.appendChild(scriptElement);






    }

    window.$jsonp = jsonp;









})(window,document)