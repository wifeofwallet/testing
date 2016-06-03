var data = require('./data.js');
var request = require('request');

// var word = 'pe';
// var pattern = new RegExp('\\b'+word+'\\b','gi');

//   console.log(pattern);
  
//   console.log('-----------------------------------------------------------');

// for(var i=0; i<data.length; i++){
  
//   console.log(data[i]);
  
//   var str = pattern.exec(data[i]);
  
//   console.log(str);
// }

var comparingCurrencies = 'inr';
request('http://apilayer.net/api/historical'+
    '?access_key=901840a052ed1dd436a317b3741e2104'+
    '&date=2015-08-16'+
    '&currencies='+comparingCurrencies+
    '&source=USD'+
    '&format=1', function (error, response, body) {
      console.log(response.statusCode);
      console.log(body.quotes);
      console.log(body);
    });
