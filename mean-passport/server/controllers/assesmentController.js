var Assesment = require('../models/assesmentModel');

module.exports.addNewAssesment = function (req, res) {
    var assesment = new Assesment(req.body);
    assesment.save(function (err, result) {
        if (err) {
            res.json({message:'Exception while creating Assesment'});
        }
        res.json({message:'Assesment Created Succesfully'});
    });
}

module.exports.getAssesment = function (req, res) {
    var assesmentNeed = req.body;
    Assesment.findOne({
            'assesmentId': assesmentNeed.assesmentId,
            'assesmentName': assesmentNeed.assesmentName
        },
        function (err, assesment) {
            if (err) {
                res.json({message:'Assesment Not Found'})
            }
            res.json(assesment);
        })
}