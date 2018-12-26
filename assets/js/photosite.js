// //Vanilla JS

// //grab the buttons and store them as variables
// var h1 = document.getElementById("h1");

// var homeBtn = document.getElementById("homeBtn");
// var urbanBtn = document.getElementById("urban-photography");
// var portraitsBtn = document.getElementById("portraits");
// var eventsBtn = document.getElementById("event-photography");
// var weddingBtn = document.getElementById("wedding-photography");

// //store each div that displays corresponding photos to a variable
// var homeDiv = document.querySelector(".home");
// var urbanDiv = document.querySelector(".urban");
// var portraitsDiv = document.querySelector(".portraits");
// var weddingDiv = document.querySelector(".wedding");
// var eventDiv = document.querySelector(".event");

// //run the homePage function so that is is on homepage when the page loads.
// homePage();


// //set the nav bar buttons to display the div that has the corresponding content.
// homeBtn.addEventListener("click", function(){
// 	homePage();
// });
// urbanBtn.addEventListener("click", function(){
// 	urban();
// });
// portraitsBtn.addEventListener("click", function(){
// 	portraits();
// });
// weddingBtn.addEventListener("click", function(){
// 	wedding();
// });
// eventsBtn.addEventListener("click", function(){
// 	events();
// });


// //functions that will set the correct div to display when button is clicked on navbar
// //h1 will show the button as its text
// function homePage(){
// 	h1.textContent = "Welcome to my Portfolio";
// 	homeDiv.style.display = "block";
// 	urbanDiv.style.display = "none";
// 	portraitsDiv.style.display = "none";
// 	weddingDiv.style.display = "none";
// 	eventDiv.style.display = "none";
// 	homeDiv.classList.add("body-fade");

// }
// function portraits(){
// 	h1.textContent = "Portraits";
// 	homeDiv.style.display = "none";
// 	urbanDiv.style.display = "none";
// 	portraitsDiv.style.display = "block";
// 	weddingDiv.style.display = "none";
// 	eventDiv.style.display = "none";
// 	homeDiv.classList.add("body-fade");
// }
// function events(){
// 	h1.textContent = "Event Photography";
// 	homeDiv.style.display = "none";
// 	urbanDiv.style.display = "none";
// 	portraitsDiv.style.display = "none";
// 	weddingDiv.style.display = "none";
// 	eventDiv.style.display = "block";
// }
// function wedding(){
// 	h1.textContent = "Wedding Photography";
// 	homeDiv.style.display = "none";
// 	urbanDiv.style.display = "none";
// 	portraitsDiv.style.display = "none";
// 	weddingDiv.style.display = "block";
// 	eventDiv.style.display = "none";
// }
// function urban(){
// 	h1.textContent = "Urban Photography";
// 	homeDiv.style.display = "none";
// 	urbanDiv.style.display = "block";
// 	portraitsDiv.style.display = "none";
// 	weddingDiv.style.display = "none";
// 	eventDiv.style.display = "none";
// }







//Jquery
homePage();
$("#homeBtn").on("click", function(){
	homePage();
});

$("#urban-photography").on("click", function(){
	urban();
});
$("#portraits").on("click", function(){
	portraits();
});
$("#event-photography").on("click", function(){
	event();
});
$("#wedding-photography").on("click", function(){
	wedding();
});



function homePage(){
	$("#h1").text("Welcome")
	$(".home").show();
	$(".urban").hide();
	$(".portraits").hide();
	$(".wedding").hide();
	$(".event").hide();


};
function urban(){
	$("#h1").text("Urban Photography");
	$(".home").hide();
	$(".urban").show();
	$(".portraits").hide();
	$(".wedding").hide();
	$(".event").hide();

}

function portraits(){
	$("#h1").text("Portraits");
	$(".home").hide();
	$(".urban").hide();
	$(".portraits").show();
	$(".wedding").hide();
	$(".event").hide();


}

function wedding(){
	$("#h1").text("Wedding Photgraphy");
	$(".home").hide();
	$(".urban").hide();
	$(".portraits").hide();
	$(".wedding").show(1000);
	$(".event").hide();


}

function event(){
	$("#h1").text("Event Photgraphy");
	$(".home").hide();
	$(".urban").hide();
	$(".portraits").hide();
	$(".wedding").hide();
	$(".event").show(1000);

}
