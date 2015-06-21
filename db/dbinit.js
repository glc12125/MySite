/**
 * Created by Liangchuan Gu
 * Date: 05/08/15
 * Time: 18:43 PM
 */
var mongoose = require('mongoose'),
    async = require('async'), // async lib
    UserInfoModel = mongoose.model('userinfos'),
    HomeScreenModel = mongoose.model('homescreens'),
    NavigationItemModel = mongoose.model('navigationitems'),
    SocialScreenModel = mongoose.model('socialscreens'),
    ProjectScreenModel = mongoose.model('projectscreens'),
    TimeLineScreenModel = mongoose.model('timelinescreens'),
    ResumeScreenModel = mongoose.model('resumescreens');

//Connect to database
//mongoose.connect( 'mongodb://localhost/mysite_database' );
mongoose.connect('mongodb://glc12125:glc19890701@ds061711.mongolab.com:61711/heroku_app35805516');

// clean before initialization
var cleanCalls = [];
var collections = [UserInfoModel, NavigationItemModel, SocialScreenModel, TimeLineScreenModel, ResumeScreenModel, ProjectScreenModel, HomeScreenModel];

collections.forEach( 
    function(name){
    cleanCalls.push(
        function(callback) {
            name.remove( {}, 
                function(err) {
                    if (err)
                        return callback(err);
                    console.log('removed');
                    callback(null, name);
                }
            );
        }
    );
});

// Initialize my data
var initializeCalls = [];
var myInfo = new UserInfoModel({
    profileImage: 'profile.jpg',
    firstName: 'Liangchuan',
    surName: 'Gu',
    email: 'glc12125@gmail.com',
    mobile: '07444961863'
});

var homeNavigationItems = new NavigationItemModel({
    navigationItemName: "Home"
});

var socialNavigationItems = new NavigationItemModel({
    navigationItemName: "Social"
});

var timelineNavigationItems = new NavigationItemModel({
    navigationItemName: "Timeline"
});

var resumeNavigationItems = new NavigationItemModel({
    navigationItemName: "Resume"
});

var projectsNavigationItems = new NavigationItemModel({
    navigationItemName: "Projects"
});

var facebookInstance = new SocialScreenModel({
    socialName: "FaceBook",
    socialIcon: "../assets/facebook.png",
    socialLink: "https://www.facebook.com/liangchuan.gu"
});

var twitterInstance = new SocialScreenModel({
    socialName: "Twitter",
    socialIcon: "../assets/twitter.png",
    socialLink: "https://twitter.com/IricGu"
});

var githubInstance = new SocialScreenModel({
    socialName: "Github",
    socialIcon: "../assets/github.png",
    socialLink: "https://github.com/glc12125"
});

var linkedinInstance = new SocialScreenModel({
    socialName: "LinkedIn",
    socialIcon: "../assets/linkedin.png",
    socialLink: "https://www.linkedin.com/profile/view?id=90748674"
});

var timelineScreenInstance = new TimeLineScreenModel({
    timeLineTitle: 'Easter',
    timeLineCategory: 'mood',
    timeLineContent: 'Went to Turkey with Leta, Turkey is a nice country!Went to Turkey with Leta, Turkey is a nice country!Went to Turkey with Leta, Turkey is a nice country!Went to Turkey with Leta, Turkey is a nice country!Went to Turkey with Leta, Turkey is a nice country!',
    timeLineDate: '2015/04/02',
    timeLineImages: [
        {url:"turkey1.jpg"}
    ]
});

var resumeEducationItems = new ResumeScreenModel({
    resumeSectionName: "Education",
    sectionItems: [ 
            {   
                dateRange: '2012/10/01 - 2013/06/31',
                title: 'Cambridge',
                comment: '',
                detail:"MPhil in Advanced Computer Science, June 2013. Graduate Coursework: Programming for Mobiles, Innovative User Interface Design, Image processing, Social Network Study, Flows in Network"
            }, 
            {   
                dateRange: '2010/09/16 - 2012/07/12',
                title: 'Dublin Institute of Technology',
                comment: 'First Honor',
                detail: "BSc (Hons) Computer Science, Jun 2012. Undergraduate Coursework: Artificial Intelligence, Business System Intelligence, Games Logic & Design, Computer Systems’ Architecture & Administration, Distributed System."
            },
            {   
                dateRange: '2008/09/01 - 2012/07/15',
                title: 'Harbin Institute of Technology',
                comment: 'First Honor',
                detail: "BSc (Hons) Computer Science, Jun 2012. Undergraduate Coursework: Operating Systems, Objective Oriented Programming (C++), Algorithm analysis and design, Database, Data Communication, Math, Business, Software Engineer."
            }
        ]
});

var resumeWorkItems = new ResumeScreenModel({
    resumeSectionName: "Employment",
    sectionItems: [ 
            {   
                dateRange: '2014/09/15 - Present',
                title: 'Bloomberg LP',
                comment: 'Financial Software Developer',
                detail:"System transaction department. Design and implement enterprise system connectivity integration applications. Deal with concurrency, process monitoring, job scheduling, realtime notification, and gateway transformation problems for client facing system. Use C++, Javascript, Oracle database, Python, shell languages. Work as a full stack engineer."
            }, 
            {   
                dateRange: '2013/07/01 - 2014/07/01',
                title: 'Susquehanna International group',
                comment: 'Software Engineer',
                detail: "Designed Twitter scraper for traders, which increased scapring speed by AVG 12.3 seconds per tweet using Twitter streaming API. Designed a WPF UI plug-in for company internal information platform, which receives thousands of Rendezvous messages and filters tweets according to user’s individual settings. Maintained game theoretical model for electronically high-frequency trading."
            },
            {   
                dateRange: '2011/01 - 2011/08',
                title: 'Curam software (IBM)',
                comment: 'Software Engineer, Intern',
                detail: "Worked on United States social welfare products using Hibernate; tested using Junit. Designed and created entity relationships in RSA; used AJAX for front and Java for back end."
            }
        ]
});

var resumeAwardsItems = new ResumeScreenModel({
    resumeSectionName: "Achievements & Interests",
    sectionItems: [ 
            {   
                dateRange: '2010',
                title: 'CCNA (640-802)',
                comment: 'Network Engineer',
                detail:"Passed CCNA (640-802). General network engineer certificate."
            }, 
            {   
                dateRange: '2008 - 2010',
                title: 'Scholarship & Awards',
                comment: '',
                detail: "Won the first prizes of scholarship for strong academic skills. Won the “Best Student” prize at HIT in 2010. Rewarded by Astronautics School for the development of a professor-postgraduate mutual election system using JSP, Ajax, and MySQL."
            },
            {   
                dateRange: '2008 - 2009',
                title: 'Teamwork & Competition',
                comment: '',
                detail: "Joined various technical competitions as a team and participated in several public break dance shows."
            }
        ]
});

var projectMobileItems = new ProjectScreenModel({
    projectSectionName: "Mobile Development",
    sectionItems: [
            {   
                dateRange: '2015/02 - Present',
                title: 'Our Bills',
                comment: 'IOS application',
                detail: "Reveal once online..."
            },
            {   
                dateRange: '2014/12 - Present',
                title: 'Sensory Media',
                comment: 'Smart Led',
                detail: "Co-founder of Sensory Media(<a href='http://www.sensorymedia.co/' target=_blank>More details</a>). Design and implement mobile application for music playing and LED controlling according to live music play."
            },
            {   
                dateRange: '2015/04 - 2015/05',
                title: 'Bloomberg trading strategy on Google Glass',
                comment: 'Google Glass, Bloomberg Open API',
                detail: "Use Google Glass and Bloomberg open API to a simple buy & sell strategy for stock exchange."
            },
            {   
                dateRange: '2011/10/01 - 2012/06/01',
                title: 'Augmented Reality',
                comment: 'Android app',
                detail: "Location based coupon collection app: Designed an Android application using AR, motion sensor, and GPS functions to collect coupons as the final year project. Implemented markless AR that presents a realistic feeling of 3D models. Used motion sensor to capture user gestures to mimic the 'catch' motion."
            },
            {   
                dateRange: '2012/01 - 2012/04',
                title: 'Best Windows Phone App',
                comment: 'Windows phone app',
                detail: "Designed multi-layer application using Windows Phone Toolkit, ASP.NET, Ajax, SQL Server to enhance the educational experience in a team of four members. Implemented location-based mobile client for students to accomplish tasks created by teachers. Won the best mobile app price in the Irish final."
            },
        ]
});

var projectMPhilItems = new ProjectScreenModel({
    projectSectionName: "MPhil Thesis",
    sectionItems: [ 
            {   
                dateRange: '2012/09 - 2013/06',
                title: 'Structure and prior beliefs in decision making',
                comment: 'Game Theory',
                detail: "Designed a Shapley-value based game theoretical model to find the correlation between network structure and personal preferences in decision-making procedure in social networks. Created an experimental platform for social network study, which caters for personality and different network structure. Used Hibernate, AJAX to design a generic experimental framework."
            }
        ]
});

var projectGameDevItems = new ProjectScreenModel({
    projectSectionName: "Game Development",
    sectionItems: [ 
            {   
                dateRange: '2010/12 - 2011/03',
                title: 'First Price in XNA Game Design',
                comment: 'Game Fleadh 2011',
                detail: "Won the XNA Game Studio Ireland Challenge Colleges Cup using C# and Microsoft Kinect. Implemented the concurrent music analysis and generated enemies accordingly. Set up the game logic with teamates, implemented game level mechanism and game loop that performs all the updating and animation."
            }
        ]
});

var homeScreenInstance = new HomeScreenModel({
    homeInterests: ["Mobile development", "System Design", "Game development", "Web development"],
    currentReadings: ["Way of the Turtle"],
    projectNumber: 3,
    currentEmployer: "R&D department, Bloomberg LP, London",
    myContact: "glc12125@gmail.com"
});

var initializeItems = [myInfo, 
    homeNavigationItems, socialNavigationItems, timelineNavigationItems, resumeNavigationItems, projectsNavigationItems, 
    facebookInstance, twitterInstance, githubInstance, linkedinInstance,
    timelineScreenInstance, 
    resumeEducationItems, resumeWorkItems, resumeAwardsItems, 
    projectMobileItems, projectMPhilItems, projectGameDevItems, 
    homeScreenInstance
];


initializeItems.forEach( 
    function(data){
    initializeCalls.push(
        function(callback) {
            data.save(
                function(err) {
                    if (err)
                        return callback(err);
                    console.log('inserted');
                    callback(null, data);
                }
            );
        }
    );
});

exports.initDB = function() {
    async.parallel(cleanCalls, function(err, result) {
        /* this code will run after all calls finished the job or
           when any of the calls passes an error */
        if (err)
            return console.log(err);
        console.log('all dropped');
        async.parallel(initializeCalls, function(err, result) {
            /* this code will run after all calls finished the job or
               when any of the calls passes an error */
            if (err)
                return console.log(err);
            console.log('all inserted');
        });
    });
};

