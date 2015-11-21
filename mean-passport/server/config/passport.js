var passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('../models/userModel');

module.exports = function () {
    passport.use(new LocalStrategy({
        // By default, local strategy uses username and password, we will override with email
        usernameField : 'userName',
        passwordField : 'password',
        
    },
        function (username, password, done) {
            User.findOne({
                userName: username
            }).exec(function (err, user) {
                if (user && user.authenticate(password)) {
                    //Need to add a method to validate password in user schema
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            })
        }
    ));

    passport.serializeUser(function (user, done) {
        if (user) {
            done(null, user._id);
        }
    });

    passport.deserializeUser(function (id, done) {
        User.findOne({
            _id: id
        }).exec(function (err, user) {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    })

}