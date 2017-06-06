

var bandName = 

	[
	["A", "C", "D", "C"],									//AC/DC
	["L","E","D","Z","E","P","P","E","L","I","N"],			//Led Zeppelin
	["P","I","N","K","F","L","O","Y","D"],					//Pink Floyd
	["R","O","L","L","I","N","G","S","T","O","N","E","S"], 	//Rolling Stones
	["T","H","E","W","H","O"],								//The Who
	["E","A","G","L","E","S"],								//Eagles
	["A","E","R","O","S","M","I","T","H"]					//Aerosmith
				]



var random = Math.floor((Math.random()*(bandName.length-1))); 

var miscBandName = bandName[random]; 						// random band name from above array
var bandNameLength = new Array(miscBandName.length);   		// creating the length of each band name for counting purposes
var guessLeft = 6;										// total number of guesses before the user does not win

														

for (var i = 0; i < bandNameLength.length; i++){		//for loop counting each character of the band name and creating a _ for each char
	bandNameLength[i] = "_ ";
}

function numberDisplay(guessesLeft){						// function that displays guesses left and writes to screen

		var outputGuessNumber = document.getElementById("outputGuessNumber");

		outputGuessNumber.innerHTML = guessesLeft;

	}


function printbandNameLength(){
	for (var i = 0; i < bandNameLength.length; i++){		// function that prints the guesses and uses a loop to continue for band name length
	var id = document.getElementById("id");
	var letter = document.createTextNode(bandNameLength[i]);
	id.appendChild(letter);
	}
}


var checkWord = function(){
	var a = document.formInfo; 							// a variable that uses a function
	var b = a.elements["inputBoxChar"]; 				// gets element a, puts into an element and renames to var b
	var userInput = b.value; 	
														// one character input by user
	userInput = userInput.toUpperCase();				// changes any character to uppercase

		if (userInput=='A' || userInput=='B' || userInput=='C' || userInput=='D' || userInput=='E' || userInput=='F' ||
			userInput=='G' || userInput=='H' || userInput=='I' || userInput=='J' || userInput=='K' || userInput=='L' ||
			userInput=='M' || userInput=='N' || userInput=='O' || userInput=='P' || userInput=='Q' || userInput=='R' ||
			userInput=='S' || userInput=='T' || userInput=='U' || userInput=='V' || userInput=='W' || userInput=='X' ||
			userInput=='Y' || userInput=='Z'){
			
		
		for (var i = 0; i < miscBandName.length; i++){			// using an if else loop to make sure the user is putting in a character
			if(miscBandName[i] === userInput){
			bandNameLength[i] = userInput + " ";
			var valueTwo = true;
			}
				b.value = ""; }									// clears space for new character
		}  
		else { alert("Please Select A Character");}
	
	
	
	var id = document.getElementById("id");				// makes room for new entry, one character
	id.innerHTML=""; 
	printbandNameLength();

	
	
	
	if(!valueTwo){
		var generateLetter = document.getElementById("generateLetter");  	// adds incorrect letters to the wrong list and counts number
		
		var letter = document.createTextNode(" " + userInput);				// of tries up by one
		
		generateLetter.appendChild(letter); 
		guessLeft--;

		numberDisplay(guessLeft)
	}
	
	
	var valueThree = true;													// checks if all letters have been found
	for (var i = 0; i < bandNameLength.length; i++){
		if(bandNameLength[i] === "_ "){
			valueThree = false;
		}
	}

	if(valueThree) {
		alert(location.href='https://www.youtube.com/watch?v=5s7_WbiR79E');
	}
	if(valueThree){														// if all letters have been found and guess is less than six, you win
		alert("You Won!");
	}
	
	
	if(guessLeft === 0){											// once you guess wrong 6 times, the game is over
		alert("Game Over - You Lost");
		guessLeft = 6;
	}
}

	//var videos = document.getElementsByClassName("youtube"); 

	//for (var j=0; j<videos.length; j++) {
  
  	//var youtube = videos[j];
  
  	// Based on the YouTube ID, we can easily find the thumbnail image
 	// var img = document.createElement("img");
  	//img.setAttribute("src", "http://i.ytimg.com/vi/" 
    //                      + youtube.id + "/hqdefault.jpg");
  	//img.setAttribute("class", "thumb");
  

  	// Overlay the Play icon to make it look like a video player
  	//var circle = document.createElement("div");
  	//circle.setAttribute("class","circle");  
  
  	//youtube.appendChild(img);
  	//youtube.appendChild(circle);
  
  	// Attach an onclick event to the YouTube Thumbnail
  	//youtube.onclick = function() {

    // Create an iFrame with autoplay set to true
    //var iframe = document.createElement("iframe");
    //iframe.setAttribute("src",
     ///     "https://www.youtube.com/embed/" + this.id 
      //  + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1"); 
    
    // The height and width of the iFrame should be the same as parent
   // iframe.style.width  = this.style.width;
    //iframe.style.height = this.style.height;
       
    // Replace the YouTube thumbnail with YouTube HTML5 Player
   // this.parentNode.replaceChild(iframe, this);

  //}; 
//}

//&lt;/script>
//&nbsp;

function init(){
	printbandNameLength();
	numberDisplay(guessLeft);
}

window.onload = init;
