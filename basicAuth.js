function authUser(req, res, next) {
    if(req.user == null) {
        res.status(403);
        return res.send('User not found, you need to sign in.');
    }

    next();
}

module.exports = {
    authUser
}