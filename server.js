var express = require('express');
var usergrid = require('usergrid');
// Set up Express environment and enable it to read and write //JavaScript
var app = express();


// Initialize Usergrid

var client = new usergrid.init({
	'orgId' : 'parameswari',
	'appId' : 'entertainment',
	'clientId' : 'b3U6bpLKGmYcEear1slQk1ceZA'
,
	'clientSecret' : 'b3U6QDkH1m1IsZSM7p0LXOmbaEKdTQk',
	'authType' : usergrid.AUTH_CLIENT_ID,
	logging : true,
URI : 'http://api.usergrid.com'
});

var rootTemplate = {
	'movies' : {
		'href' : './movies'
	}
};
app.get('/', function(req, resp) {
	resp.jsonp(rootTemplate);
});


app.get('/movies', function(req, res) {	
		getMovies(req, res);
       // console.log("reaching...");
});

var entity = {
    name: 'Freedom',
    Actor: 'Jack',
    Director: 'King'
}
   var querystring = require('querystring');
    var target_url = "https://api.usergrid.com/parameswari/entertainemnt/movies"
var request = require('request');
app.get('/AddMovie',function(req,res)
{
     

    client.POST('movies',target_url, entity,function(error, usergridResponse) {
         res.jsonp(200, {
				'success' : "called"
			}); 
      
});


});

function getMovies(req, res) {
	client.GET('movies', function(error, usergridResponse, movies) {
    // entities is an array of UsergridEntity objects
    
    if (error) {
			res.jsonp(500, {
				'error' : JSON.stringify(error)
			});
			return;
		}
            console.log(usergridResponse);
            var movArray=[];    
            for(x in usergridResponse.entities)
              {
                 movArray.push(usergridResponse.entities[x]);
              }
                   
		res.jsonp(movArray);
})
}



function addMovie(req,res)
{
   // res.jsonp(200, {
				//'success' : "called"
	//		});
    client.POST('movies', function(error, usergridResponse, entity) {
         res.jsonp(200, {
				'success' : "called"
			}); 
})
}




//var query = new Query('movies').eq('name', 'Friends')
                             
 /*                            

// this will build out the following query:
// select * where weight > 2.4 and color contains 'bl*' and //not color = 'blue' or color = 'orange'

client.GET(query, function(error, usergridResponse) {
    console.log(usergridResponse);
})
*/


app.listen(3000);
console.log('The server is running!');