/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    NavigationItemModel = mongoose.model('navigationitems');

/**
 * Get NavigationItem list
 */
exports.getNavigationItems = function(req,res){
    NavigationItemModel.find( function(err, naviItems) {
        if( !err ) {
            return res.send( naviItems );
        } else {
            return console.log( err );
        }
    });
};
