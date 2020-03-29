var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Mumbai,uk&appid=a1a4a122f20801a22c8b06f1e5d87f27unit=matric';

var server = http.createServer(function(request,response){
// all logic go here
var request = response('request');
request(url,function(err,res,body){
    var data =JSON.parse(body);
    response.write("<html><body><div id='container'>");
    response.write("<h1>" + 'City Name  - : ' + data.main['name'] + '<br>'+"</h1>");
    response.write("<h2>" + 'Temperture  - : ' + data.main['temp'] + '<br>'+"</h2>");
    response.write("<h2>"+'SunSet Time  - :' + new date(data.sys['sunset']+1000) +"</h2>");
    response.write("<div> </body></html>");

response.end();

});

}).listen(8081);
