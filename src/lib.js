'use strict';

const restify = require('restify');

let app = restify.createServer();
app.listen(process.env.PORT);
app.use(restify.acceptParser(app.acceptable));
app.use(restify.bodyParser({ mapParams: false }));
app.use(restify.CORS());
app.use(restify.gzipResponse());
app.use(restify.queryParser({ mapParams: false }));
module.exports = app;
