W3D1: Web servers 101
=====================

HTTP Review
-----------

- HTTP runs on top of TCP
- HTTPS is conceptually the same, except that the content is encrypted by TLS
  - It's transparent at the HTTP level
- Anatomy of an HTTP Request:
```
GET /maps HTTP/1.1
User-Agent: Chrome 67
Cookie: abcde

```
- Anatomy of an HTTP Response:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 14
Date: Mon, 20 Jan 2020 17:07:16 GMT
Connection: keep-alive

<html><body><!-- Some HTML content... --></body></html>
```

Intro to Web Servers (Express-less demo)
----------------------------------------
- One callback function handles everything
- Rarely used in practice
- See basic.js

Intro to Express
----------------
Example route:
```
app.get('/hello', (req, res) => {
  res.send('Hello world!');
});
```

What is "middleware?"
---------------------
It's similar to a route, but it _can_ choose to not answer the request and just continue to the next matching route or middleware in the list.

Example:
```
app.use((req, res, next) => {
  if(req.header('user-agent') === 'Me') {
    res.send('Please use a browser');
  } else {
    next();
  }
});
```

Intro to Server-side view templates with EJS
--------------------------------------------

Templates are used to avoid stringing a bunch of HTML strings together when sending a response. Call `res.render(template, variables)` to use a template. `variables` in this case would be an object containing all the variables you want to access in your template code.

