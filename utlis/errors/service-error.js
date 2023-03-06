const { StatusCodes } = require('http-status-code');

class ServiceError extends Error {
    constructor(message = 'Something went wrong', explanation = 'Service layer error', statusCode = StatusCodes.INTERNAL_SERVER_ERROR) {
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
}

module.exports = ServiceError;