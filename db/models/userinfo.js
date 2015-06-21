/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserInfoSchema  = new Schema(
    {
        profileImage: String,
        firstName: String,
        surName: String,
        email: String,
        mobile: String
    }
);

mongoose.model('userinfos', UserInfoSchema);