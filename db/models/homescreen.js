/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HomeScreenSchema  = new Schema(
    {
		homeInterests: [String],
	    currentReadings: [String],
	    projectNumber: Number,
	    currentEmployer: String,
	    myContact: String
	}
);

mongoose.model('homescreens', HomeScreenSchema);