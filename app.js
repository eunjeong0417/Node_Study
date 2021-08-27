const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs')


app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<h1>express</h1>')
    // res.sendFile('./views/index.html', {root:__dirname});
    const blogs = [
        { title: "eggs1", snippet: "hello" },
        { title: "eggs2", snippet: "hello" },
        { title: "eggs3", snippet: "hello"},
    ]
    res.render('index', {title:'Home', blogs});
})

//Routing
app.get('/about', (req, res) => {
    // res.send('<h1>about page</h1>')
    // res.sendFile('./views/about.html', {root:__dirname});
    res.render('about', {title:'About'})
})

// //redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

app.get('/blogs/create', (req, res) => {
    res.render('create', {title:'create'})
})


//404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', {root:__dirname})
    res.render('404', {title:'404'})
})

