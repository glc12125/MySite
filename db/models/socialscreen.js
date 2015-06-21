/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SocialScreenSchema  = new Schema(
    {
		socialName: String,
		socialIcon: String,
		socialLink: String
    }
);

mongoose.model('socialscreens', SocialScreenSchema);