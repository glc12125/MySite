/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    SocialScreenModel = mongoose.model('socialscreens');

/**
 * Get SocialScreen list
 */
exports.getSocialScreens = function(req,res){
    SocialScreenModel.find( function(err, socialScreens) {
        if( !err ) {
            return res.send( socialScreens );
        } else {
            return console.log( err );
        }
    });
};
