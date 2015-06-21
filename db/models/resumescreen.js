/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResumeSecionItems = new mongoose.Schema({
	dateRange: String,
	title: String,
	comment: String,
	detail: String
});

var ResumeScreenSchema = new mongoose.Schema({
	resumeSectionName: String,
	sectionItems: [ResumeSecionItems]
});

mongoose.model('resumescreens', ResumeScreenSchema);