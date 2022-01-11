export const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);

    next(error);
}

// Todo: this should display all info in developement mode, and basic info
//  in production
export const errorHandler = (error, _req, res, _next) => {
    // If status code is 200, and we are here than an error has occured
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode);

    res.json({
        status: statusCode,
        message: error.message,
        error: error
    });
}

