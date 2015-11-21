var User            = require('../models/userModel'),
    encrypt         = require('../utils/encryption'); 

module.exports.addUser = function(req,res){
    var requestData            = req.body;
    requestData.salt           = encrypt.createSalt();
    requestData.hashPassword   = encrypt.hashPwd(requestData.salt,requestData.password);
    var user                   = new User(requestData);
    user.save(function(err,result){
        if (err){
            if(err.code === 11000){
                res.json({success:false,message:'A User with that username already exists'});
            }
            res.json({success:false,message:'Exception while creating user'});
        }
        res.json({success:true,message:'User Created Succesfully!'});
    });
}

module.exports.getUsers = function(req,res){
    User.find({}, function(err,results){
        if (err) return handleError(err);
        res.json(results);
    });
}

module.exports.getUser = function(req, res){
    var loggedUser = req.body;
    User.findOne({ 'userName':  loggedUser.userName,'password':loggedUser.password}, function (err, person) {
        if (err) {
            console.log(err);
            res.json({message:'User Not Found'});   
        }
        res.json(person);
    });
}