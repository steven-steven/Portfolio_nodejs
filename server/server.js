const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,'../public');

//setup express
var app = express();
app.use( express.static( publicPath ) );
//setup heroku
const port = process.env.PORT || 3000;

app.listen( port, ()=>{console.log(`Server up on port ${port}`)});

