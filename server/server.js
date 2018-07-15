const path = require('path');
const express = require('express');
const hbs = require('hbs')  //templating engine handlebar

const publicPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../views');

//setup express
var app = express();
//setup static directory
app.use( express.static( publicPath ) );

//setup Handlebar: view template engine and partials
app.set( 'view engine', 'hbs');
hbs.registerPartials( viewsPath + '/partials' )

//setup heroku
const port = process.env.PORT || 3000;

app.listen( port, ()=>{console.log(`Server up on port ${port}`)});

//handle page requests
app.get('/', (req, res)=>{
    res.render('index.hbs', {
        pageTitle: "About Page",
        contents: "Navigate through my sketch projects"
    });
});

app.get('/breaker', (req, res)=>{
    res.render('processing.hbs', {
        pageTitle: "Brick Breaker",
        processingPdeFile: "processing_files/breaker/breaker.pde"
    });
});
app.get('/tictactoe', (req, res)=>{
    res.render('processing.hbs', {
        pageTitle: "Tic Tac Toe",
        processingPdeFile: "processing_files/tictactoe/tictactoe.pde"
    });
});
app.get('/insertionSort', (req, res)=>{
    res.render('processing_sort.hbs', {
        pageTitle: "Insertion Sort",
        processingPdeFile: "processing_files/sorting/sorting.pde"
    });
});

