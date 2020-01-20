let http = require('http');

// define app constants
const PORT = 9000;

// create a server with a responder function
let server = http.createServer(function respondToRequests(request, response){
  console.log(request.method);
  if(request.url === '/potato') {
    response.end('You asked for a potato');
  } else {
    // respond to all requests in this function
    response.end('Hello from the other siiiiiiide!');
  }
});

// start the server
server.listen(PORT, function onServerStart(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
