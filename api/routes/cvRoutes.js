'use strict';
var resume = require('../../cv');
module.exports = function (CvApp) {
    var cv = require('../controllers/cvController');
    CvApp.get('/', (req, res) => {
        res.json(resume);
    });
    CvApp.route('/cv')
        .get(cv.list_all_cvs)
        .post(cv.create_a_cv)
        .delete(cv.delete_all_cv);
    CvApp.route('/cv/:cvId')
        .get(cv.read_a_cv)
        .put(cv.update_a_cv)
        .delete(cv.delete_a_cv);
};
