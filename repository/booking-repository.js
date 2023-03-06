const { Booking } = require('../models');
const { StatusCodes } = require('http-status-code');
const { ValidationError, AppError } = require('../utlis');

class BookingRepository {
    async craete(data) {
        try {
            const booking = await Booking.craete(data);
            return booking;
        } catch (error) {
            if (error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            throw new AppError('RepositoryError', 'Cannot create Booking', 'There was some error while booking, please try again later', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = BookingRepository;