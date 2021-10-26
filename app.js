//index.js
const httpProxy = require('express-http-proxy');
const express = require('express');
const app = express();
var logger = require('morgan');
 
app.use(logger('dev'));
 
function selectProxyHost(req) {
    if (req.path.startsWith('/api'))
        return 'https://cognitabrasil117289.rm.cloudtotvs.com.br:8051/';
    else if (req.path.startsWith('/RMSRestDataServer'))
        return 'https://cognitabrasil117289.rm.cloudtotvs.com.br:8051/';
}
 
app.use((req, res, next) => {
    httpProxy(selectProxyHost(req))(req, res, next);
});
 
app.listen(3000, () => {
    console.log('API Gateway running!');
});