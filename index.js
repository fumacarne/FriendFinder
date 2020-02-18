const express = require('express');
const morgan = require('morgan');
const path = require('path');




const PORT = 8081;
var app = express();
require("./routes/html/index.js")(app);
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(require('./routes'));


app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on ${process.env.PORT || PORT}`);
  });
  
