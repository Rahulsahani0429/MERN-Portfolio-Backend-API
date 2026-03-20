export const errorHandler = (err, req, res, next) => {
    console.error("Express Error Handler Caught:", err);
    
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: "Server error",
        errorDetails: process.env.NODE_ENV === 'production' ? err.message : err.stack,
    });
};
