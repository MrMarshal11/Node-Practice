import express from "express";

const app = express();

app.listen(3000, () => console.log(`operational under http://localhost:3000`));

app.get('/', (req, res) => {
    res.sendFile('/index.html', {root:'htmls'});
});

app.get('/about', (req, res) => {
    res.sendFile('/about.html', {root:'htmls'});
});

app.get('/contact-us', (req, res) => {
    res.sendFile('/contact-us.html', {root:'htmls'});
});

// If all other roots fail, then signal 404
app.use((req, res) => {
    res.status(404).sendFile('/404.html', {root:'htmls'});
});