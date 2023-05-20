const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/weatherforecastfunction",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7276',
        secure: false
    });

    app.use(appProxy);
};
