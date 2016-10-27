var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//Create link to other pages in the views directory.
app.get('/', function(request, response) 
	{response.render('index');});
app.get('/hostlist', function(request, response) 
	{response.render('hostlist');});
app.get('/profilepage', function(request, response) 
	{response.render('profilepage');});
app.get('/profilepage-notification', function(request, response) 
	{response.render('profilepage-notification');});
app.get('/filterpage', function(request, response) 
	{response.render('filterpage');});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});