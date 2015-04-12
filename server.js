// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ); //MongoDB integration

//Connect to database
mongoose.connect( 'mongodb://localhost/mysite_database' );

//Schemas

var UserInfo = new mongoose.Schema({
	profileImage: String,
	firstName: String,
	surName: String,
	email: String,
	mobile: String
});

var SubItems = new mongoose.Schema({
    subItem: String
});

var NavigationItem = new mongoose.Schema({
    navigationItemName: String,
    navigationSubItems: [SubItems]
});

var SocialScreen = new mongoose.Schema({
	socialName: String,
	socialIcon: String,
	socialLink: String
});


var TimeLineScreen = new mongoose.Schema({
	timeLineTitle: String,
	timeLineCategory: String,
	timeLineContent: String,
	timeLineDate: String
});

var ResumeSecionItems = new mongoose.Schema({
	dateRange: String,
	title: String,
	comment: String
});

var ResumeScreen = new mongoose.Schema({
	resumeSectionName: String,
	sectionItems: [ResumeSecionItems]
});

var ProjectSecionItems = new mongoose.Schema({
	dateRange: String,
	title: String,
	comment: String
});

var ProjectScreen = new mongoose.Schema({
	projectSectionName: String,
	sectionItems: [ProjectSecionItems]
});


//DB Models
var UserInfoModel = mongoose.model( 'UserInfo', UserInfo );
var NavigationItemModel = mongoose.model( 'NavigationItem', NavigationItem );
var SocialScreenModel = mongoose.model( 'SocialScreen', SocialScreen );
var TimeLineScreenModel = mongoose.model( 'TimeLineScreen', TimeLineScreen );
var ResumeScreenModel = mongoose.model( 'ResumeScreen', ResumeScreen);
var ProjectScreenModel = mongoose.model( 'ProjectScreen', ProjectScreen);

// Initialize my data

var myInfo = new UserInfoModel({
	profileImage: 'profile.jpg',
	firstName: 'Liangchuan',
	surName: 'Gu',
	email: 'glc12125@gmail.com',
	mobile: '07444961863'
});

var socialNavigationItems = new NavigationItemModel({
	navigationItemName: "Social",
	navigationSubItems: [ {subItem: 'Facebook'}, {subItem: 'Twitter'} ]
});

var blogNavigationItems = new NavigationItemModel({
	navigationItemName: "Blog",
	navigationSubItems: []
});

var resumeNavigationItems = new NavigationItemModel({
	navigationItemName: "Resume",
	navigationSubItems: []
});

var projectsNavigationItems = new NavigationItemModel({
	navigationItemName: "Projects",
	navigationSubItems: []
});

var socialScreenInstance = new SocialScreenModel({
	socialName: "FaceBook",
	socialIcon: "../assets/placeholder.png",
	socialLink: "http://www.facebook.com"
});

var timelineScreenInstance = new TimeLineScreenModel({
    timeLineTitle: 'Easter',
    timeLineCategory: 'mood',
    timeLineContent: 'Easter Holiday',
    timeLineDate: '2015/04/02'
});

var resumeEducationItems = new ResumeScreenModel({
	resumeSectionName: "Education",
	sectionItems: [ 
			{	
				dateRange: '2012/10/01 - 2013/06/31',
				title: 'Cambridge',
				comment: ''
			}, 
			{	
				dateRange: '2010/09/16 - 2012/07/12',
				title: 'Dublin Institute of Technology',
				comment: 'First Honor'
			},
			{	
				dateRange: '2008/09/01 - 2012/07/15',
				title: 'Harbin Institute of Technology',
				comment: 'First Honor'
			}
		]
});

var projectARItems = new ProjectScreenModel({
	projectSectionName: "Augmented Reality",
	sectionItems: [ 
			{	
				dateRange: '2011/10/01 - 2012/06/01',
				title: 'CBalloon',
				comment: 'Android app'
			}
		]
});


projectARItems.save(function (err) {
	if (err) return handleError(err);
	ProjectScreenModel.findById(projectARItems, function (err, doc) {
	if (err) return handleError(err);
		console.log(doc); 
	})
});


/*
resumeEducationItems.save(function (err) {
	if (err) return handleError(err);
	ResumeScreenModel.findById(resumeEducationItems, function (err, doc) {
	if (err) return handleError(err);
		console.log(doc); 
	})
});


timelineScreenInstance.save(function (err) {
	if (err) return handleError(err);
	TimeLineScreenModel.findById(timelineScreenInstance, function (err, doc) {
	if (err) return handleError(err);
		console.log(doc); 
	})
});

socialScreenInstance.save(function (err) {
	if (err) return handleError(err);
	SocialScreenModel.findById(socialScreenInstance, function (err, doc) {
	if (err) return handleError(err);
		console.log(doc); 
	})
});

blogNavigationItems.save(function (err) {
	if (err) return handleError(err);
	NavigationItemModel.findById(blogNavigationItems, function (err, doc) {
	if (err) return handleError(err);
		console.log(doc); 
	})
});

resumeNavigationItems.save(function (err) {
	if (err) return handleError(err);
	NavigationItemModel.findById(resumeNavigationItems, function (err, doc) {
	if (err) return handleError(err);
		console.log(doc); 
	})
});

projectsNavigationItems.save(function (err) {
	if (err) return handleError(err);
	NavigationItemModel.findById(projectsNavigationItems, function (err, doc) {
	if (err) return handleError(err);
		console.log(doc); 
	})
});


myNavigationItems.save(function (err) {
	if (err) return handleError(err);
	NavigationItemModel.findById(myNavigationItems, function (err, doc) {
	if (err) return handleError(err);
		console.log(doc); 
	})
});

myInfo.save(function (err) {
	if (err) return handleError(err);
	UserInfoModel.findById(myInfo, function (err, doc) {
	if (err) return handleError(err);
		console.log(doc); // { name: 'mongodb.org', _id: '50341373e894ad16347efe12' }
	})
});*/

//Create server
var app = express();

//Configure server
app.configure( function () {
	//parses request body and populates request.body
    app.use( express.bodyParser() );

    //checks request.body for HTTP method overrides
    app.use( express.methodOverride() );

    //perform route lookup based on URL and HTTP method
    app.use( app.router );

    //Where to serve static content
    app.use( express.static( application_root )  );

    //Show all errors in development
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var port = 8890;
app.listen(port, function() {
	console.log( 'Express server listening on port %d in %s mode', 
    port, app.settings.env );
});

app.get( '/api', function( request, response ) {
    response.send( 'Library API is running' );
});

app.get( '/api/userinfo', function( request, response ) {
    return UserInfoModel.find( function( err, userInfo ) {
        if( !err ) {
            return response.send( userInfo[0] );
        } else {
            return console.log( err );
        }
    });
});

app.get( '/api/navigationitems', function( request, response ){
    return NavigationItemModel.find( function( err, items ) {
        if( !err ) {
            return response.send( items );
        } else {
            return console.log( err );
        }
    });
});

app.get( '/api/socialitems', function( request, response ){
    return SocialScreenModel.find( function( err, items ) {
        if( !err ) {
            return response.send( items );
        } else {
            return console.log( err );
        }
    });
});

app.get( '/api/timelineitems', function( request, response ){
    return TimeLineScreenModel.find( function( err, items ) {
        if( !err ) {
            return response.send( items );
        } else {
            return console.log( err );
        }
    });
});

app.get( '/api/resumeitems', function( request, response ){
    return ResumeScreenModel.find( function( err, items ) {
        if( !err ) {
            return response.send( items );
        } else {
            return console.log( err );
        }
    });
});

app.get( '/api/projectitems', function( request, response ){
    return ProjectScreenModel.find( function( err, items ) {
        if( !err ) {
            return response.send( items );
        } else {
            return console.log( err );
        }
    });
});



