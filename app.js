const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'templates');

app.use(express.static('public'));

app.use((req, res, next) => {
  const agent = req.header('User-Agent');
  req.mySpecialThing = 'blabla'
  console.log('USER-AGENT:', agent);
  if(agent === 'Me') {
    res.send('Use a browser!');
  } else {
    next();
  }
});
app.use((req, res, next) => {
  const ip = req.ip
  console.log('IP:', ip);
  next();
});

app.get('/', (req, res) => {
  const localVariables = {
    currentDate: new Date()
  };
  res.render('potato', localVariables);
});

app.post('/', (req, res) => {
  res.send('You sent me something');
});

app.listen(9000);
