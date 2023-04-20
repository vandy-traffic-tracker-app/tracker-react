const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'vandy-tracker-api-dev2.us-east-2.elasticbeanstalk.com',
            changeOrigin: true,
        })
    );
};