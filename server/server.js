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
        pageTitle: "Welcome. Know more about me!",
        contents: "Note: This site is currently in progress. I am conveting the old site (which uses static html/css/js) to use the Node.js/Express framework."
    });
});

app.get('/resume', (req, res)=>{
    res.render('resume.hbs', {
        pageTitle: "Resume"
    });
});
app.get('/coop', (req, res)=>{
    res.render('coop.hbs', {
        pageTitle: "Work Experiences"
    });
});
app.get('/clubs', (req, res)=>{
    res.render('clubs.hbs', {
        pageTitle: "Clubs and Activities"
    });
});
app.get('/contacts', (req, res)=>{
    res.render('contacts.hbs', {
        pageTitle: "Contact Me"
    });
});

app.get('/breaker', (req, res)=>{
    res.render('processing.hbs', {
        pageTitle: "Brick Breaker",
        github: "github.com/steven-steven/Breaker_Game_Processing",
        processingPdeFile: "processing_files/breaker/breaker.pde"
    });
});
app.get('/tictactoe', (req, res)=>{
    res.render('processing.hbs', {
        pageTitle: "Tic Tac Toe",
        github: "github.com/steven-steven/TicTacToe",
        processingPdeFile: "processing_files/tictactoe/tictactoe.pde"
    });
});
app.get('/insertionSort', (req, res)=>{
    res.render('processing_sort.hbs', {
        pageTitle: "Insertion Sort",
        github: "github.com/steven-steven/Sorting_Sketch",
        processingPdeFile: "processing_files/sorting/sorting.pde"
    });
});

