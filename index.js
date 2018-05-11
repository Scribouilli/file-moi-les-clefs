const http = require('http')
const server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end(`<!doctype html>
  <html lang=en>
      <head>
          <meta charset=utf-8>
          <meta name="referrer" content="same-origin">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          
          <title> </title>
          
          <meta name="description" content=" ">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          
          <link rel="stylesheet" href="https://rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap-reboot.css">
          
          <script crossorigin="anonymous" src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
      </head>
      <body>
        <a href=https://github.com/login/oauth/authorize?client_id=2b4ed9ba835b05f83e2d>Login with Github</button>
      </body>
  </html>
  `)
})

server.listen(process.env.PORT || 5000)
console.log("Server is listening")