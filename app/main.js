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
