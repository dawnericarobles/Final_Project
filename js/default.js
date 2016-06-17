
$(document).ready(function() {
  $("liToggle").click(function(){
      $("hdrNav").toggleClass("slide");
  });

  	var tmpVideolists = [];
  	tmpVideolists.push("Bulldogs vs Plastic Bag");
  	tmpVideolists.push("Chowchow learning how to swim");
  	tmpVideolists.push("When bae's trying to argue");
  	tmpVideolists.push("Husky fighting a balloon");
  	tmpVideolists.push("I won't let you get drunk!");
  	tmpVideolists.push("Bob Marley the Pug");
  	tmpVideolists.push("F-r-i-e-n-d-s");
  	tmpVideolists.push("Pug Panda Panda ");

  	for (var i = 0; i < tmpVideolists.length; i++) {
		var tempVid = tmpVideolists[i];
		$('#ddVideos').append($("<option></option>").attr("value",i+1).text(tempVid));
	}


	var dogBreeds = ["Alaskan Malamute", "Siberian Husky", "Samoyed", "Shiba Inu", "Pitbull", "Bulldog"];
	dogBreeds.push("Saint Bernard", "Chow-chow", "Golden Retriever", "Finnish Spitz", "German Shepherd");
	dogBreeds.push("Pug", "Pomeranian", "Corgi", "Shih Tzu", "White Terrier");

	for (var i = 0; i < dogBreeds.length; i++) {
		var tempBreed = dogBreeds[i];
		$('#dog-type').append($("<option></option>").attr("value",i+1).text(tempBreed));
	}

	
	$("#ddVideos").change(displayVideo);
	$("#dog-type").change(displayInfo);


//	event.preventDefault();

	function displayVideo() {
		var video = $("#ddVideos").val(); //get the selected val on change

		if (video != "0") {
			$("#vid1").attr("class","imgDisplay");
		}


		if (video == "1") {  //change it appropriate iframe src
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fawvvhouse%2Fvideos%2F516961521840889%2F&show_text=0&width=400");
		} 
		else if (video == "2") {  
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FAwwstation%2Fvideos%2F1761859490699692%2F&show_text=0&width=400");
		} 
		else if (video == "3") {  
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fawvvhouse%2Fvideos%2F514980292039012%2F&show_text=0&width=560");
		} 
		else if (video == "4") { 
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fawsmanimals%2Fvideos%2F705110626295493%2F&show_text=0&width=400");
		} 
		else if (video == "5") {  
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fboompanotdotcom%2Fvideos%2Fvb.710790405624453%2F712519555451538%2F%3Ftype%3D3&show_text=0&width=400");
		} 
		else if (video == "6") {  
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fitsdougthepug%2Fvideos%2F1048382168579942%2F&show_text=0&width=400");
		} 
		else if (video == "7") {  
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fitsdougthepug%2Fvideos%2F947413032010190%2F&show_text=0&width=400");
		} 
		else if (video == "8") { 
			$("#vid1").attr("src","https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fitsdougthepug%2Fvideos%2F1085139598237532%2F&show_text=0&width=400");
		} 
		else {
			$("#vid1").attr("src","");
			$("#vid1").attr("class","imgHidden");
		}

		event.preventDefault();
	}


	function displayInfo() {
		var breed = $("#dog-type").val(); //get the selected val on change
		var tempBreed = "../Final_Project/images/breeds2/puppy";
		tempBreed = tempBreed + breed + ".jpg";

		if (breed != "0") {
			$("#imgDog").attr("src", tempBreed);
		}

		console.log(tempBreed);
		event.preventDefault();
	}


});


