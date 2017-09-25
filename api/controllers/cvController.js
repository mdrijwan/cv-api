'use strict';


var mongoose = require('mongoose'),
  cv = mongoose.model('cvs');

exports.list_all_cvs = function(req, res) {
  cv.find({}, function(err, cvs) {
    if (err)
      res.send(err);
    res.json(cvs);
  });
};

exports.create_a_cv = function(req, res) {
  var new_cv = new cv(req.body);
  new_cv.save(function(err, cvs) {
    if (err)
      res.send(err);
    res.json(cvs);
  });
};

exports.read_a_cv = function(req, res) {
  cv.findById(req.params.cvId, function(err, cvs) {
    if (err)
      res.send(err);
    res.json(cvs);
  });
};

exports.update_a_cv = function(req, res) {
  cv.findOneAndUpdate({_id: req.params.cvId}, req.body, {new: true}, function(err, cvs) {
    if (err)
      res.send(err);
    res.json(cvs);
  });
};

exports.delete_a_cv = function(req, res) {


  cv.remove({
    _id: req.params.cvId
  }, function(err, cvs) {
    if (err)
      res.send(err);
    res.json({ message: 'CV successfully deleted' });
  });
};
