
var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req, res, next){
	console.log("/" + req.method);
	next();
});

router.get("/", function(req, res){
	res.sendFile(path + "homepage.html");
});

router.get("/eventpage", function(req,res){
	res.sendFile(path + "eventpage.html");
});

router.get("/hostpage", function(req, res){
	res.sendFile(path + "hostpage.html");
});

router.get("/profilepage", function(req, res){
	res.sendFile(path + "profilepage.html");
});

router.get("/addeventpage", function(req, res){
	res.sendFile(path + "addeventpage.html");
});

router.get("/reportpage", function(req, res){
	res.sendFile(path + "reportpage.html");
}); 

app.use("/", router);

app.use("*", function(req, res){
	res.sendFile(path + "404.html");
});

app.listen(3000, function(){
	console.log("Live at Port 3000");	
});
