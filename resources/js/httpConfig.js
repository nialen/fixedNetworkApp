define(function () {
    var httpConfig = {
    	'siteUrl': '/rading-web',
        'requestHeader': {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        isMock: false, // 启用MOCK数据
        isProdEnvironment: true // true: 开发环境, false: 生产环境
    };
    return httpConfig;
});
