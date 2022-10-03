var engInput = document.getElementById("in");
var morseOutput = document.getElementById("out");
var english;
var morse;


document.getElementById("translate").addEventListener("click", function(){
	english = engInput.value;
	morseOutput.value = "";
	morse = "";
	for(var i = 0; i < english.length; i++){
		switch(english[i]) {
			case "a":
			morse += ".- ";
			break;
			case "b":
			morse += "-... ";
			break;
			case "c":
			morse += ".-.- ";
			break;
			case "d":
			morse += "-.. ";
			break;
			case "e":
			morse += ". ";
			break;
			case "f":
			morse += "..-. ";
			break;
			case "g":
			morse += "--. ";
			break;
			case "h":
			morse += ".... ";
			break;
			case "i":
			morse += ".. ";
			break;
			case "j":
			morse += ".--- ";
			break;
			case "k":
			morse += "-.- ";
			break;
			case "l":
			morse += ".-.. ";
			break;
			case "m":
			morse += "-- ";
			break;
			case "n":
			morse += "-. ";
			break;
			case "o":
			morse += "--- ";
			break;
			case "p":
			morse += ".--. ";
			break;
			case "q":
			morse += "--.- ";
			break;
			case "r":
			morse += ".-. ";
			break;
			case "s":
			morse += "... ";
			break;
			case "t":
			morse += "- ";
			break;
			case "u":
			morse += "..- ";
			break;
			case "v":
			morse += "...- ";
			break;
			case "w":
			morse += ".-- ";
			break;
			case "x":
			morse += "-..- ";
			break;
			case "y":
			morse += "-.-- ";
			break;
			case "z":
			morse += "--.. ";
			break;
			case "0":
			morse += "----- ";
			break;
			case "1":
			morse += ".---- ";
			break;
			case "2":
			morse += "..--- ";
			break;
			case "3":
			morse += "...-- ";
			break;
			case "4":
			morse += "....- ";
			break;
			case "5":
			morse += "..... ";
			break;
			case "6":
			morse += "-.... ";
			break;
			case "7":
			morse += "--... ";
			break;
			case "8":
			morse += "---.. ";
			break;
			case "9":
			morse += "----. ";
			break;
			case ",":
			morse += "--..-- ";
			break;
			case ".":
			morse += ".-.-.- ";
			break;
			case "?":
			morse += "..--.. ";
			break;
			
		}
		morseOutput.value=morse;
	}
});


var button = document.getElementById('info'); 

button.onclick = function() {
    var div = document.getElementById('codechart');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

    var reset = document.getElementById("clear");
    reset.addEventListener("click", function() {
        document.getElementById("in").value = "";
        document.getElementById("out").value = "";
    })
    