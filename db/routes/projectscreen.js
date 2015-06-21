/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    ProjectScreenModel = mongoose.model('projectscreens');

/**
 * Get ProjectScreen list
 */
exports.getProjectScreens = function(req,res){
    ProjectScreenModel.find( function(err, projectScreens) {
        if( !err ) {
            return res.send( projectScreens );
        } else {
            return console.log( err );
        }
    });
};
