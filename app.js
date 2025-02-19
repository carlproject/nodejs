const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
