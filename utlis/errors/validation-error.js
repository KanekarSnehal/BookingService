const { StatusCodes } = require('http-status-code');

class ValidationError extends Error {
    constructor(error) {
        super();
        let explanation = [];
        error.errors.forEach((err) => explanation.push(err.message));
        this.message = 'Not able to validate the data sent in the request';
        this.explanation = explanation;
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = ValidationError;