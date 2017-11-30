const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + "/build/"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT, () => console.log(`Server Running On Port *${PORT}`))
