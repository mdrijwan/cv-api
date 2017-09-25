'use strict';

var resume = require('../../cv')
module.exports = function(app: any) {
  var cv = require('../controllers/cvController');

  app.get('/', (req: any, res: any) =>{
    res.json(resume)
  })

  app.route('/cv')
    .get(cv.list_all_cvs)
    .post(cv.create_a_cv)

  app.route('/cv/:cvId')
    .get(cv.read_a_cv)
    .put(cv.update_a_cv)
    .delete(cv.delete_a_cv)
};
