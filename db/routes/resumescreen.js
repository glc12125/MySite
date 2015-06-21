/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    ResumeScreenModel = mongoose.model('resumescreens');

/**
 * Get ResumeScreen list
 */
exports.getResumeScreens = function(req,res){
    ResumeScreenModel.find( function(err, resumeScreens) {
        if( !err ) {
            return res.send( resumeScreens );
        } else {
            return console.log( err );
        }
    });
};
