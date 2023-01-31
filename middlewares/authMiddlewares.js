const getUserMiddleware = (req, res, next) => {
    //validate request data here

    next();
};

const loginMiddleware = (req, res, next) => {
    if (!req.body.email) {
        return res.send({ status: 422, message: 'Email is required' })
    } else {
        next();
    }
}

module.exports = {
    getUserMiddleware,
    loginMiddleware
};