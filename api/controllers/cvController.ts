'use strict';


var mongoose = require('mongoose'),
  cv = mongoose.model('cvs');

exports.list_all_cvs = (req: any, res: any)=>{
  cv.find({}, function(err:any, cvs:any) {
    if (err)
      res.send(err);
    res.json(cvs);
  });
};

exports.create_a_cv = function(req:any, res:any) {
  var new_cv = new cv(req.body);
  new_cv.save(function(err:any, cvs:any) {
    if (err)
      res.send(err);
    res.json(cvs);
  });
};

exports.read_a_cv = function(req:any, res:any) {
  cv.findById(req.params.cvId, function(err:any, cvs:any) {
    if (err)
      res.send(err);
    res.json(cvs);
  });
};

exports.update_a_cv = function(req:any, res:any) {
  cv.findOneAndUpdate({_id: req.params.cvId}, req.body, {new: true}, function(err:any, cvs:any) {
    if (err)
      res.send(err);
    res.json(cvs);
  });
};

exports.delete_a_cv = function(req:any, res:any) {
  cv.remove({
    _id: req.params.cvId
  }, function(err:any, cvs:any) {
    if (err)
      res.send(err);
    res.json({ message: 'CV successfully deleted' });
  });
};

exports.delete_all_cv = function(req:any, res:any) {
  cv.remove(function(err:any, cvs:any) {
    if (err)
      res.send(err);
    res.json({ message: 'All CVs are successfully deleted' });
  });
};