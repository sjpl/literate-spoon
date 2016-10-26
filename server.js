var express = require('express')
var app = express();

//set the port of our application 
//proces.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

//set the view engine to ejs
app.set('view engine', 'ejs');

//make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

//set the home page route
app.get('/', function(req, res){
   //ejs render automatically looks in the views folder
   res.render('index');
});

app.get('/addeventpage', function(req, res){
	//ejs render automatically looks in the views folder
	res.render(addeventpage);
});

app.get('/eventpage', function(req, res){
	//ejs render automatically looks in the views folder
	res.render(eventpage);
});

app.get('/hostpage', function(req, res){
	//ejs render automatically looks in the views folder
	res.render(hostpage);
});

app.get('/reportpage', function(req, res){
	//ejs render automatically looks in the views folder
	res.render(reportpage);
});

app.get('/settingspage', function(req, res){
	//ejs render automatically looks in the views folder
	res.render(settingspage);
});

app.listen(port, function(){
   console.log('Our app is running on http://localhost:' + port);
});