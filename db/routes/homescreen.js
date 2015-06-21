/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    HomeScreenModel = mongoose.model('homescreens');

/**
 * Get HomeScreen content
 */
exports.getHomeScreen = function(req,res){
    HomeScreenModel.find( function(err, homeScreens) {
        if( !err ) {
            return res.send( homeScreens[0] );
        } else {
            return console.log( err );
        }
    });
};
