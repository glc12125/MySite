/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSecionItems = new Schema({
	dateRange: String,
	title: String,
	comment: String,
	detail: String
});


var ProjectScreenSchema  = new Schema(
    {
		projectSectionName: String,
		sectionItems: [ProjectSecionItems]
	}
);

mongoose.model('projectscreens', ProjectScreenSchema);