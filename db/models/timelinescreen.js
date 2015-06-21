/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Images = new Schema(
	{
		url: String
	}
);

var TimeLineScreenSchema  = new Schema(
    {
		timeLineTitle: String,
		timeLineCategory: String,
		timeLineContent: String,
		timeLineDate: String,
		timeLineImages: [Images]
    }
);

mongoose.model('timelinescreens', TimeLineScreenSchema);