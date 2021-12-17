const winston = require("winston");
const { ElasticsearchTransport } = require('winston-elasticsearch');

const esTransportOpts = {
    level: 'info',
    clientOpts: { node: "http://localhost:9200" }
};
const esTransport = new ElasticsearchTransport(esTransportOpts);

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'mongodb-demo-app' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        esTransport
    ]
})

module.exports = logger;
