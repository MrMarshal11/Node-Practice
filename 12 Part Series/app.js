import express from "express";

import indexRouter from "./routes/indexRouter.js";
import aboutRouter from "./routes/aboutRouter.js";
import contactRouter from "./routes/contactRouter.js";

const PORT = 3000;
const app = express();

app.listen(PORT, () => console.log(`operational under http://localhost:${PORT}`));

// Index routes
app.use('/', indexRouter);

// About routes
app.use('/about', aboutRouter);

// Contact-us routes
app.use('/contact-us', contactRouter);

// If all other routes fail, then signal 404
app.use((req, res) => {
    res.status(404).sendFile('/404.html', {root:'htmls'});
});