/**
 * Created with IntelliJ IDEA.
 * User: nanwei
 * Date: 14-1-8
 * Time: 上午10:59
 * seajs 的配置文件
 */
seajs.config({
    base: "/static/sea-modules",
    alias: {
        "$": "jquery/1.9.1/jquery.min.js",
        "_" : "underscore/1.6.0/underscore-min.js"
    },

    //更新时间戳
    'map': [
        [ /^(.*\.(?:css|js))(.*)$/i, '$1?20110801' ]
    ],
    // 变量配置
    vars: {
        'locale': 'zh-cn'
    },
    // 文件编码
    charset: 'utf-8'
});

//暴露全局jquery 可能会引起堵塞 推荐放入底部
seajs.use('$',function($){
    window.$ = $;
});