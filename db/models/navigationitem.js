/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NavigationItemSchema  = new Schema(
    {
    	navigationItemName: String
    }
);

mongoose.model('navigationitems', NavigationItemSchema);