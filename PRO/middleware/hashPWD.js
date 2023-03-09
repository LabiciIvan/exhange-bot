const express = require('express');
const bcrypt = require('bcrypt');


/**
 * Middleware function that hash the password 
 * sent in the request body using bcrypt 5.1.0 library
 */
async function hashPWD(req, res, next) {
    bcrypt.hash(req.body.pwd, 10)
    .then(hash => {
        req.body.pwd = hash;
        next();
    })
    .catch(err => {
        throw err;
    })
}

module.exports = hashPWD;