var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

var names = ["Jesse"];
var comments = ["My first comment"];

//main page of the website
app.get("/", function(req, res){
	res.render("home", {names :names});

})

//Posting comments to the website
app.post("/addcomment", function(req, res){
	var newName = req.body.person;
	var newComment = req.body.comment;

	names.push(newName);
	comments.push(newComment);

	console.log(newName);
	console.log(newComment);
	res.redirect("/");
	// console.log(req.body);
	// res.send("you have reached the post Page!");

})




app.listen(3000, () => console.log("Server is running"))