// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    mongoose = require( 'mongoose' ), //MongoDB integration
    // models
    userInfoModel = require('./db/models/userinfo'),
    navigationItemModel = require('./db/models/navigationitem'),
    socialScreenModel = require('./db/models/socialscreen'),
    timelineScreenModel = require('./db/models/timelinescreen'),
    resumeScreenModel = require('./db/models/resumescreen'),
    projectScreenModel = require('./db/models/projectscreen'),
    homeScreenModel = require('./db/models/homescreen'),
    // controllers
    userInfoRoute = require('./db/routes/userinfo'),
    navigationItemRoute = require('./db/routes/navigationitem'),
    socialScreenRoute = require('./db/routes/socialscreen'),
    timelineScreenRoute = require('./db/routes/timelinescreen'),
    resumeScreenRoute = require('./db/routes/resumescreen'),
    projectScreenRoute = require('./db/routes/projectscreen'),
    homeScreenRoute = require('./db/routes/homescreen'),
    // db initialization
    db = require('./db/dbinit');

// clean the current db and insert all data
db.initDB();

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

// register RESTFUL apis
app.get('/api/userinfo', userInfoRoute.getUserInfo);
app.get( '/api/navigationitems', navigationItemRoute.getNavigationItems);
app.get('/api/socialitems', socialScreenRoute.getSocialScreens);
app.get('/api/timelineitems', timelineScreenRoute.getTimeLineScreens);
app.get('/api/resumeitems', resumeScreenRoute.getResumeScreens);
app.get('/api/projectitems', projectScreenRoute.getProjectScreens);
app.get('/api/home', homeScreenRoute.getHomeScreen);



