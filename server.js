const express = require('express');
const app = express();
const port = 5000;
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => 
{
  res.send('Hello World!')
});


app.get('/get', (req, res) => 
{
  res.send('GET from /get');
});

app.post('/post', (req, res) => 
{
    const input = req.body.text;

    res.send('You entered: ' + input);
});



app.listen(port, () => 
{
  console.log(`Example app listening at http://localhost:${port}`)
})