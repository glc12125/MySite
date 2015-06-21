/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    TimeLineScreenModel = mongoose.model('timelinescreens');

/**
 * Get TimeLineScreen list
 */
exports.getTimeLineScreens = function(req,res){
    TimeLineScreenModel.find( function(err, timelineScreens) {
        if( !err ) {
            return res.send( timelineScreens );
        } else {
            return console.log( err );
        }
    });
};
