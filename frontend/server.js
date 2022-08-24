const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'jakistoken'
  });
});

app.listen(8080, () => console.log('http://localhost:8080/login'));