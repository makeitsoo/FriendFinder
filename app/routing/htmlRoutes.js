
// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 


var path = require("path");

///////////////////////////////////////
// Routing
//////////////////////////////////////

module.exports = function(app) {
	// route for survey 
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	// route for home 
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	// if route doesnt match then default to home
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};

