// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ); //MongoDB integration
    async = require('async'); // async lib

//Connect to database
//mongoose.connect( 'mongodb://localhost/mysite_database' );
mongoose.connect('mongodb://glc12125:glc19890701@ds061711.mongolab.com:61711/heroku_app35805516');

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


// clean before initialization
var cleanCalls = [];
var collections = [UserInfoModel, NavigationItemModel, SocialScreenModel, TimeLineScreenModel, ResumeScreenModel, ProjectScreenModel];

collections.forEach( 
	function(name){
	cleanCalls.push(
		function(callback) {
			name.remove( {}, 
				function(err) {
		            if (err)
		                return callback(err);
		            console.log(name || ' removed');
		            callback(null, name, "remove");
		        }
			);
		}
	);
});

// Initialize my data

var myInfo = new UserInfoModel({
	profileImage: 'profile.jpg',
	firstName: 'Liangchuan',
	surName: 'Gu',
	email: 'glc12125@gmail.com',
	mobile: '07444961863'
});

var socialNavigationItems = new NavigationItemModel({
	navigationItemName: "social",
	navigationSubItems: [ {subItem: 'Facebook'}, {subItem: 'Twitter'} ]
});

var timelineNavigationItems = new NavigationItemModel({
	navigationItemName: "timeline",
	navigationSubItems: []
});

var resumeNavigationItems = new NavigationItemModel({
	navigationItemName: "resume",
	navigationSubItems: []
});

var projectsNavigationItems = new NavigationItemModel({
	navigationItemName: "projects",
	navigationSubItems: []
});

var facebookInstance = new SocialScreenModel({
	socialName: "FaceBook",
	socialIcon: "../assets/facebook.png",
	socialLink: "https://www.facebook.com/liangchuan.gu&output=embed"
});

var twitterInstance = new SocialScreenModel({
	socialName: "Twitter",
	socialIcon: "../assets/twitter.png",
	socialLink: "https://twitter.com/IricGu&output=embed"
});

var githubInstance = new SocialScreenModel({
	socialName: "Github",
	socialIcon: "../assets/github.png",
	socialLink: "https://github.com/glc12125&output=embed"
});

var linkedinInstance = new SocialScreenModel({
	socialName: "LinkedIn",
	socialIcon: "../assets/linkedin.png",
	socialLink: "https://www.linkedin.com/profile/view?id=90748674&output=embed"
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

var initializeItems = [myInfo, socialNavigationItems, timelineNavigationItems, facebookInstance, twitterInstance, githubInstance, linkedinInstance, resumeNavigationItems,
	projectsNavigationItems, timelineScreenInstance, resumeEducationItems, projectARItems
];


initializeItems.forEach( 
	function(data){
	cleanCalls.push(
		function(callback) {
			data.save(
				function(err) {
		            if (err)
		                return callback(err);
		            callback(null, data, "save");
		        }
			);
		}
	);
});

async.parallel(cleanCalls, function(err, result, type) {
    /* this code will run after all calls finished the job or
       when any of the calls passes an error */
    console.log("callback invoked, type: " || type);
    if (err)
        return console.log(err);
    console.log(type || result);
});


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

var port = process.env.PORT || 8989;
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



