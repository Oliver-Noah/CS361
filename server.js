var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')
var fs = require('fs')

var data = require('./projectData.json');
const e = require('express');

var port = process.env.PORT || 3001;
var app = express();

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.json())

app.use(express.static('public'));

app.listen(port, function (req, res, next) {
    console.log("== Server is listening on port", port);
});

app.get('/', function (req, res, next) {
    if(data) {
        res.status(200).render('homePage', data)
    }
    else {
        next()
    }
});

app.get('/homePage', function (req, res, next) {
    if(data) {
        res.status(200).render('homePage', data)
    }
    else {
        next()
    }
});

app.get('', function (req, res, next) {
    if(data) {
        res.status(200).render('homePage', data)
    }
    else {
        next()
    }
});

app.get('/:project', function (req, res, next) {
    var projectIndex = -1
    var project = req.params.project.toLowerCase();
    for(let i = 0; i < data.projects.length; i++) {
        let temp = Object.assign({}, data.projects[i]);
        let temp2 = temp.name.replace(/([^a-z0-9]+)/gi, '');
        let temp3 = temp2.toLowerCase();
        if(project === temp3) {
            projectIndex = i;
        }
    }
    if(projectIndex > -1) {
        res.status(200).render('projectPage', data.projects[projectIndex])
    }
    else {
        next()
    }
});

app.get('/checklist', function (req, res, next) {
    res.status(200).render('checklist')
})

app.get('/help', function (req, res, next) {
    res.status(200).render('help')
})

app.get('*', function (req, res) {
    res.status(200).render('404')
})