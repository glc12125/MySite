/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    UserInfoModel = mongoose.model('userinfos');

/**
 * Get Userinfo content
 */
exports.getUserInfo = function(req,res){
    UserInfoModel.find( function(err, userInfos) {
        if( !err ) {
            return res.send( userInfos[0] );
        } else {
            return console.log( err );
        }
    });
};
