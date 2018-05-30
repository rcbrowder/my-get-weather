// Input
var getWeatherButton = document.getElementById('getWeatherButton');
var zip = document.getElementById('zip');

// Error
var error = document.getElementById("error");
var errorMessage = document.getElementById('errorMessage');

// Output
var output = document.getElementById('output');
var city = document.getElementById('city');
var temp = document.getElementById('temp');
var cond = document.getElementById('cond');
var imag = document.getElementById('imag');

// API stuff
var apiRequest;
var appId = "7dc8be0140f5ffb29046006b555a09c8";


// Wait for data to load before executing any javascript
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		weatherButton.onclick = getWeather;
	}
};


// Function to get info from api
function getWeather() {

	// Insert user data and appId into URL
	var url = "http://api.openweathermap.org/data/2.5/weather?zip=<zipCode>&us&appid=<appId>";
	url = url.replace("<zipCode>", zipInput.value);
	url = url.replace("<appId>", appId);

	// Code that fetches data from the API URL and stores it in results.
	apiRequest = new XMLHttpRequest();
	apiRequest.onload = catchResponse;
	apiRequest.onerror = httpRequestOnError;
	apiRequest.open('get', url, true);
	apiRequest.send();
}

// Function to display error message
function httpRequestOnError() {
    output.style.display = 'none';
    errorMessage.innerHTML = 'tHeRe WaS a PrObLeM ReAcHiNg ThE sErVeR. tRy AgAiN lAtEr.';
    error.style.display = 'block';
}

// Function to disply data if getWeather is successful
function catchResponse() {
    if (apiRequest.statusText == 'OK') {
        
    }
}
